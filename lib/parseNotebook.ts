export interface Cell {
  cell_type: 'code' | 'markdown' | 'raw';
  source: string | string[];
  outputs?: Output[];
  metadata?: Record<string, unknown>;
}

export interface Output {
  output_type: 'display_data' | 'execute_result' | 'stream' | 'error';
  data?: Record<string, string | string[]>;
  text?: string | string[];
  traceback?: string[];
  name?: string; // 'stdout' | 'stderr'
}

export interface Notebook {
  nbformat: number;
  cells: Cell[];
  metadata?: {
    kernelspec?: { language?: string };
  };
}

export function getSource(sourceField: string | string[]): string {
  return Array.isArray(sourceField) ? sourceField.join('') : sourceField;
}

export function parseNotebook(json: string): Notebook {
  const nb = JSON.parse(json) as Notebook;
  if (nb.nbformat < 4) {
    throw new Error(
      `nbformat ${nb.nbformat} is not supported. Please re-save your notebook in nbformat 4.`
    );
  }
  return nb;
}
