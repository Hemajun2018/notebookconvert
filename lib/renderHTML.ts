import { marked } from 'marked';
import hljs from 'highlight.js';
import type { Cell, Output, Notebook } from './parseNotebook';
import { getSource } from './parseNotebook';
import { detectMath } from './detectMath';
import { getKernelLanguage } from './loadHighlightLang';

// Strip ANSI escape codes from strings
function stripAnsi(str: string): string {
  // eslint-disable-next-line no-control-regex
  return str.replace(/\x1B\[[0-9;]*[mGKHF]/g, '');
}

// Escape HTML special characters
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Get string value from data field (may be array or string)
function getMimeData(value: string | string[]): string {
  return Array.isArray(value) ? value.join('') : value;
}

// Render a single output block
function renderOutput(output: Output): string {
  switch (output.output_type) {
    case 'display_data':
    case 'execute_result': {
      const data = output.data ?? {};

      // MIME priority: text/html > image/svg+xml > image/png > image/jpeg > text/plain
      if (data['text/html']) {
        const html = getMimeData(data['text/html']);
        return `<div class="notebook-output">${html}</div>`;
      }

      if (data['image/svg+xml']) {
        const svg = getMimeData(data['image/svg+xml']);
        return `<div class="notebook-output">${svg}</div>`;
      }

      if (data['image/png']) {
        const b64 = getMimeData(data['image/png']).trim();
        return `<div class="notebook-output"><img src="data:image/png;base64,${b64}" alt="output" style="max-width:100%;height:auto;" /></div>`;
      }

      if (data['image/jpeg']) {
        const b64 = getMimeData(data['image/jpeg']).trim();
        return `<div class="notebook-output"><img src="data:image/jpeg;base64,${b64}" alt="output" style="max-width:100%;height:auto;" /></div>`;
      }

      if (data['text/plain']) {
        const text = getMimeData(data['text/plain']);
        return `<div class="notebook-output"><pre class="notebook-stream">${escapeHtml(text)}</pre></div>`;
      }

      return '';
    }

    case 'stream': {
      const text = output.text ? getMimeData(output.text) : '';
      const isStderr = output.name === 'stderr';
      const cls = isStderr ? 'notebook-stream notebook-stderr' : 'notebook-stream';
      return `<div class="notebook-output"><pre class="${cls}">${escapeHtml(text)}</pre></div>`;
    }

    case 'error': {
      const traceback = output.traceback ?? [];
      const cleaned = traceback.map(line => stripAnsi(line)).join('\n');
      return `<div class="notebook-output"><pre class="notebook-error">${escapeHtml(cleaned)}</pre></div>`;
    }

    default:
      return '';
  }
}

// Render a code cell
function renderCodeCell(source: string, language: string, index: number): string {
  let highlighted: string;
  try {
    if (hljs.getLanguage(language)) {
      highlighted = hljs.highlight(source, { language }).value;
    } else {
      highlighted = hljs.highlightAuto(source).value;
    }
  } catch {
    highlighted = escapeHtml(source);
  }

  return `
<div class="notebook-cell notebook-code-cell" style="margin-bottom:1.5rem;">
  <div style="display:flex;align-items:flex-start;gap:0.5rem;">
    <span style="color:#6b7280;font-size:0.75rem;font-family:monospace;padding-top:1rem;min-width:2.5rem;text-align:right;user-select:none;">In [${index}]:</span>
    <pre style="flex:1;margin:0;"><code class="hljs language-${language}" style="border-radius:6px;padding:1rem;display:block;overflow-x:auto;background:#f6f8fa;font-size:0.875rem;">${highlighted}</code></pre>
  </div>
</div>`;
}

// Render a markdown cell (synchronous using marked.parse with sync option)
function renderMarkdownCell(source: string): string {
  // Configure marked for safe rendering
  const renderer = new marked.Renderer();

  // Use synchronous parse
  const html = marked.parse(source, { renderer, async: false }) as string;
  return `<div class="notebook-cell notebook-markdown-cell" style="margin-bottom:1.5rem;padding:0 0.5rem;">${html}</div>`;
}

export interface RenderOptions {
  title?: string;
  includeStyles?: boolean;
}

/**
 * Renders a full Jupyter notebook to a standalone HTML string.
 */
export function renderNotebookToHTML(notebook: Notebook, options: RenderOptions = {}): string {
  const { title = 'Notebook', includeStyles = true } = options;
  const language = getKernelLanguage(notebook.metadata);

  // Ensure hljs has common languages registered
  // highlight.js core bundle includes most languages when imported directly
  let codeIndex = 1;

  const cellsHtml = notebook.cells
    .map(cell => {
      const source = getSource(cell.source);

      if (!source.trim() && (!cell.outputs || cell.outputs.length === 0)) {
        return '';
      }

      if (cell.cell_type === 'code') {
        const cellHtml = renderCodeCell(source, language, codeIndex);
        codeIndex++;

        const outputsHtml = (cell.outputs ?? [])
          .map(o => renderOutput(o))
          .join('\n');

        const outputsWrapper =
          outputsHtml
            ? `<div style="display:flex;align-items:flex-start;gap:0.5rem;margin-top:0.25rem;">
                <span style="color:#6b7280;font-size:0.75rem;font-family:monospace;padding-top:0.5rem;min-width:2.5rem;text-align:right;user-select:none;">Out:</span>
                <div style="flex:1;">${outputsHtml}</div>
              </div>`
            : '';

        return cellHtml + outputsWrapper;
      }

      if (cell.cell_type === 'markdown') {
        return renderMarkdownCell(source);
      }

      if (cell.cell_type === 'raw') {
        return `<div class="notebook-cell notebook-raw-cell" style="margin-bottom:1.5rem;"><pre style="background:#fafafa;border:1px solid #eee;padding:1rem;font-size:0.875rem;overflow-x:auto;">${escapeHtml(source)}</pre></div>`;
      }

      return '';
    })
    .join('\n');

  // Check for math content
  const hasMath = notebook.cells.some(cell => {
    const src = getSource(cell.source);
    return detectMath(src);
  });

  const mathScript = hasMath
    ? `<script>
        window.MathJax = {
          tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] },
          svg: { fontCache: 'global' }
        };
      </script>
      <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>`
    : '';

  const styles = includeStyles
    ? `<style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1a202c;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1rem;
          background: #fff;
        }
        .notebook-markdown-cell h1 { font-size: 2rem; font-weight: 700; margin: 1.5rem 0 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
        .notebook-markdown-cell h2 { font-size: 1.5rem; font-weight: 600; margin: 1.25rem 0 0.75rem; }
        .notebook-markdown-cell h3 { font-size: 1.25rem; font-weight: 600; margin: 1rem 0 0.5rem; }
        .notebook-markdown-cell p { margin: 0.75rem 0; }
        .notebook-markdown-cell ul, .notebook-markdown-cell ol { padding-left: 1.5rem; margin: 0.75rem 0; }
        .notebook-markdown-cell li { margin: 0.25rem 0; }
        .notebook-markdown-cell code { background: #f1f5f9; padding: 0.125rem 0.375rem; border-radius: 3px; font-size: 0.875em; font-family: 'SFMono-Regular', Consolas, monospace; }
        .notebook-markdown-cell pre { background: #f6f8fa; border: 1px solid #e2e8f0; border-radius: 6px; padding: 1rem; overflow-x: auto; }
        .notebook-markdown-cell pre code { background: none; padding: 0; font-size: 0.875rem; }
        .notebook-markdown-cell blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; color: #6b7280; margin: 1rem 0; }
        .notebook-markdown-cell table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
        .notebook-markdown-cell th, .notebook-markdown-cell td { border: 1px solid #e2e8f0; padding: 0.5rem 0.75rem; text-align: left; }
        .notebook-markdown-cell th { background: #f8fafc; font-weight: 600; }
        .notebook-markdown-cell tr:nth-child(even) { background: #f8fafc; }
        .notebook-markdown-cell a { color: #2563eb; text-decoration: underline; }
        .notebook-markdown-cell img { max-width: 100%; height: auto; border-radius: 4px; }
        .notebook-output { margin: 0.5rem 0; overflow-x: auto; }
        .notebook-output img { max-width: 100%; height: auto; }
        .notebook-output table { border-collapse: collapse; font-size: 0.875rem; }
        .notebook-output th, .notebook-output td { border: 1px solid #e2e8f0; padding: 0.375rem 0.625rem; }
        .notebook-output th { background: #f8fafc; }
        .notebook-error { background: #fff5f5; border-left: 4px solid #fc8181; padding: 0.75rem; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 0.8125rem; white-space: pre-wrap; overflow-x: auto; border-radius: 0 4px 4px 0; color: #c53030; }
        .notebook-stream { background: #f7fafc; border-left: 4px solid #a0aec0; padding: 0.75rem; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 0.8125rem; white-space: pre-wrap; overflow-x: auto; border-radius: 0 4px 4px 0; }
        .notebook-stderr { background: #fffbeb; border-left-color: #f59e0b; }
        @media print {
          body { max-width: 100%; padding: 0; }
          pre { white-space: pre-wrap; word-break: break-all; }
        }
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css" />`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  ${styles}
  ${mathScript}
</head>
<body>
  <div id="notebook">
    ${cellsHtml}
  </div>
</body>
</html>`;
}
