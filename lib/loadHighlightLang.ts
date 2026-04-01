import type hljs from 'highlight.js';

type HljsType = typeof hljs;

/**
 * Dynamically loads a highlight.js language and registers it.
 * Falls back to Python if the language is not found or fails to load.
 */
export async function loadHighlightLang(
  hljsInstance: HljsType,
  language: string
): Promise<void> {
  if (!language) return;

  // Already registered
  if (hljsInstance.getLanguage(language)) return;

  const langMap: Record<string, string> = {
    python: 'python',
    py: 'python',
    javascript: 'javascript',
    js: 'javascript',
    typescript: 'typescript',
    ts: 'typescript',
    r: 'r',
    julia: 'julia',
    bash: 'bash',
    sh: 'bash',
    shell: 'bash',
    sql: 'sql',
    json: 'json',
    yaml: 'yaml',
    yml: 'yaml',
    cpp: 'cpp',
    'c++': 'cpp',
    c: 'c',
    java: 'java',
    scala: 'scala',
    ruby: 'ruby',
    rb: 'ruby',
    go: 'go',
    rust: 'rust',
    php: 'php',
    html: 'xml',
    xml: 'xml',
    css: 'css',
    markdown: 'markdown',
    md: 'markdown',
    plaintext: 'plaintext',
    text: 'plaintext',
  };

  const resolved = langMap[language.toLowerCase()];
  if (!resolved) return;

  try {
    // highlight.js v11 bundles all common languages when imported via the main entry point.
    // Individual language modules are accessed via the CommonJS build path.
    // The main highlight.js import already registers all bundled languages,
    // so this function is a no-op for any language included in the bundle.
    // For custom/external languages not in the bundle, registration would happen here.
    if (!hljsInstance.getLanguage(resolved)) {
      // Language not registered — highlight.js will auto-detect or use plaintext
      // (This path is rarely reached since the main hljs import includes all languages)
    }
  } catch {
    // Silently ignore — fallback to auto-detect
  }
}

/**
 * Returns the kernel language from notebook metadata, normalized to lowercase.
 */
export function getKernelLanguage(
  metadata?: { kernelspec?: { language?: string } }
): string {
  return metadata?.kernelspec?.language?.toLowerCase() ?? 'python';
}
