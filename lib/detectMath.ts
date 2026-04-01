export function detectMath(text: string): boolean {
  return /\$[\s\S]+?\$|\$\$[\s\S]+?\$\$|\\begin\{/.test(text);
}
