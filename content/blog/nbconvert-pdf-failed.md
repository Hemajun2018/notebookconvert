---
title: "nbconvert PDF Export Failed? Here's What to Do"
date: "2026-02-10"
description: "Common reasons why jupyter nbconvert --to pdf fails and how to fix each one, including LaTeX errors, missing packages, and encoding issues."
---

# nbconvert PDF Export Failed? Here's What to Do

Running `jupyter nbconvert --to pdf my_notebook.ipynb` and getting an error is one of the most frustrating experiences in the Jupyter ecosystem. The error messages are often cryptic, and the fix isn't always obvious. This guide walks through the most common failure modes and how to resolve each one.

## The Most Common Error: LaTeX Not Found

```
nbconvert failed: xelatex not found on PATH, please make sure all requirements are installed
```

**What it means:** nbconvert requires a LaTeX installation to convert notebooks to PDF. It looks for `xelatex` (or sometimes `pdflatex`) on your system PATH.

**Fixes:**

**On macOS:** Install MacTeX (the full distribution, ~4 GB):

```bash
brew install --cask mactex
```

After installation, restart your terminal or run:

```bash
eval "$(/usr/libexec/path_helper)"
```

**On Ubuntu/Debian:**

```bash
sudo apt-get install -y texlive-xetex texlive-fonts-recommended texlive-plain-generic
```

**On Windows:** Download and install MiKTeX from [miktex.org](https://miktex.org). During installation, choose to install missing packages on-the-fly.

**Quick alternative:** Instead of installing LaTeX, use a browser-based converter like [notebookconvert.com](/) which doesn't require LaTeX at all.

## LaTeX Compilation Error: Missing Package

```
! LaTeX Error: File `tcolorbox.sty' not found.
```

**What it means:** LaTeX has been found but a required style package is missing. nbconvert's LaTeX templates use many packages that may not be included in a minimal LaTeX installation.

**Fix on macOS/Linux with TeX Live:**

```bash
sudo tlmgr install tcolorbox
sudo tlmgr install adjustbox
sudo tlmgr install collectbox
sudo tlmgr install ucs
sudo tlmgr install upquote
sudo tlmgr install eurosym
sudo tlmgr install mathpazo
sudo tlmgr install environ
```

Or install all commonly needed packages at once:

```bash
sudo tlmgr install collection-fontsrecommended collection-latexextra collection-mathscience
```

**On Ubuntu/Debian:**

```bash
sudo apt-get install -y texlive-latex-extra texlive-xetex
```

## Unicode/Encoding Error

```
! Package inputenc Error: Unicode character (U+...) not set up for use with LaTeX.
```

**What it means:** Your notebook contains Unicode characters (accented letters, Chinese/Japanese characters, emoji, or special math symbols) that the LaTeX engine can't handle.

**Fixes:**

1. **Switch to XeLaTeX instead of pdfLaTeX.** XeLaTeX has native Unicode support. nbconvert uses XeLaTeX by default in recent versions.

2. **Create a custom nbconvert config:**

```python
# nbconvert_config.py
c.PDFExporter.latex_command = ['xelatex', '{filename}']
```

Run with:

```bash
jupyter nbconvert --to pdf my_notebook.ipynb --config nbconvert_config.py
```

3. **Use the browser-based approach** which has no encoding limitations.

## Timeout Error During Compilation

```
PDF creating failed, captured latex output:
RuntimeError: PDF conversion deadline exceeded
```

**What it means:** The LaTeX compilation took too long. This often happens with notebooks that have many figures or very long outputs.

**Fix:**

Increase the timeout:

```python
# nbconvert_config.py
c.PDFExporter.latex_count = 3
c.PDFExporter.verbose = True
```

Or preprocess the notebook to remove long outputs:

```bash
jupyter nbconvert --to pdf my_notebook.ipynb --ClearOutputPreprocessor.enabled=True
```

Wait — that removes outputs, which is probably not what you want. Instead, identify and truncate the problematic cells manually, then reconvert.

## Image Rendering Issues

**Symptom:** Charts or images appear blank or missing in the PDF.

**Common causes:**

1. **Figures not saved to output.** Make sure your notebook was run (all cells executed) before converting. The outputs must be embedded in the `.ipynb` file.

2. **Vector graphics conflict.** Some SVG images don't render correctly in LaTeX. Try saving figures as PNG:

```python
plt.savefig('figure.png', dpi=150, bbox_inches='tight')
```

3. **Too many figures.** LaTeX has a limit on the number of concurrent floats. Add `\clearpage` commands (or use raw cells) between sections with many figures.

## Notebook-Specific Fixes

### Shrink very wide output

Long print statements or wide DataFrames can cause LaTeX to fail with overflow errors. Truncate them:

```python
import pandas as pd
pd.set_option('display.max_columns', 10)
pd.set_option('display.max_rows', 20)
```

### Disable problematic magic commands

Some magic commands (`%%javascript`, `%%html`) produce output that LaTeX can't handle. Clear those cell outputs before exporting.

### Strip ANSI codes from terminal output

Colored terminal output (from tqdm progress bars, etc.) can break LaTeX compilation. nbconvert should handle this automatically, but if it doesn't, you can clear the outputs for those cells.

## When Nothing Works: The Browser Alternative

If you've tried everything above and nbconvert still fails, the most reliable solution is to bypass LaTeX entirely.

[notebookconvert.com](/) converts your notebook to PDF directly in the browser, with no LaTeX, no command line, and no server. Just upload your `.ipynb` file, click Convert, and choose "Save as PDF" in the print dialog.

The browser-based PDF looks excellent for most use cases: code is syntax-highlighted, charts are embedded, markdown is formatted, and equations are rendered via MathJax. For sharing reports, submitting homework, or archiving analysis results, it works perfectly.

## Summary Table

| Error | Cause | Fix |
|-------|-------|-----|
| `xelatex not found` | LaTeX not installed | Install MacTeX/TeXLive/MiKTeX |
| `.sty not found` | Missing LaTeX package | `tlmgr install <package>` |
| Unicode error | Non-ASCII characters | Use XeLaTeX; or use browser converter |
| Timeout | Notebook too large | Split notebook; or use browser converter |
| Blank images | Cells not run | Run all cells before converting |
| Wide output overflow | Long lines/tables | Truncate output; adjust pandas display options |

The browser-based approach avoids all of these issues entirely. For a one-off conversion, it's often the fastest path to a working PDF.
