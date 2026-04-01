import type { Cell } from './parseNotebook';

export function exportPDF(html: string, filename: string): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Pop-up blocked! Please allow pop-ups for this site to export PDF.');
    return;
  }
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();

  const hasMath = html.includes('MathJax');

  if (hasMath) {
    // Wait for MathJax to finish typesetting before printing
    const checkMathJax = () => {
      const win = printWindow as Window & typeof globalThis & { MathJax?: { typesetPromise?: () => Promise<void> } };
      if (win.MathJax?.typesetPromise) {
        win.MathJax.typesetPromise().then(() => {
          printWindow.print();
        });
      } else {
        // MathJax not ready yet, poll
        setTimeout(checkMathJax, 200);
      }
    };
    // Give the page a moment to start loading MathJax
    setTimeout(checkMathJax, 300);
  } else {
    // No math — just wait for images/highlight.js (~500ms is enough)
    setTimeout(() => printWindow.print(), 500);
  }
}

export function exportHTML(html: string, filename: string): void {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.html') ? filename : `${filename}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportPython(cells: Cell[], filename: string): void {
  const { getSource } = await import('./parseNotebook') as never;
  const lines: string[] = [];

  cells.forEach((cell, i) => {
    if (cell.cell_type === 'code') {
      if (i > 0 && lines.length > 0) lines.push('');
      const src = getSource(cell.source);
      if (src.trim()) {
        lines.push(src);
      }
    } else if (cell.cell_type === 'markdown') {
      const src = getSource(cell.source);
      if (src.trim()) {
        if (lines.length > 0) lines.push('');
        src.split('\n').forEach(line => lines.push(`# ${line}`));
      }
    }
  });

  const content = lines.join('\n');
  const blob = new Blob([content], { type: 'text/x-python;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.py') ? filename : `${filename}.py`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
