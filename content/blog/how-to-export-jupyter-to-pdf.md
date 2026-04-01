---
title: "Jupyter Notebook to PDF: 4 Methods Compared"
date: "2026-03-01"
description: "A comprehensive comparison of 4 methods for exporting Jupyter Notebooks to PDF — nbconvert, browser printing, VS Code, and online tools. Pros, cons, and when to use each."
---

# Jupyter Notebook to PDF: 4 Methods Compared

There are multiple ways to export a Jupyter Notebook to PDF, and each has real tradeoffs. This article compares the four main methods in depth so you can choose the right one for your situation.

## Overview

| Method | LaTeX Required | Installation | Quality | Privacy | Automation |
|--------|---------------|--------------|---------|---------|------------|
| nbconvert (LaTeX) | Yes | Yes | Excellent | Local | Yes |
| nbconvert (WebPDF) | No | Yes (Playwright) | Very Good | Local | Yes |
| Browser Print | No | No | Very Good | 100% Local | No |
| Online converter | No | No | Very Good | Varies | No |

## Method 1: nbconvert with LaTeX (Classic)

This is the official, standard method that ships with Jupyter.

```bash
pip install nbconvert
jupyter nbconvert --to pdf my_notebook.ipynb
```

Under the hood, this converts your notebook to a `.tex` file and then compiles it with `xelatex`. The resulting PDF has excellent typographic quality — proper page layout, fonts, and consistent formatting.

### Installation Requirements

You need:
- Python with `jupyter` and `nbconvert` installed
- A full LaTeX distribution:
  - **macOS:** MacTeX (4 GB download from tug.org/mactex)
  - **Ubuntu/Debian:** `sudo apt-get install texlive-xetex texlive-fonts-recommended texlive-latex-extra`
  - **Windows:** MiKTeX or TeXLive

Total disk space: 2–8 GB depending on the distribution.

### Pros

- Highest typographic quality
- Supports complex math through native LaTeX rendering
- Produces a proper "document" feel with consistent fonts and layout
- Works from the command line — easy to script and automate
- Part of the official Jupyter ecosystem

### Cons

- LaTeX installation is large, complex, and frequently causes errors
- Error messages are cryptic (`! LaTeX Error: File tcolorbox.sty not found`)
- Can fail with Unicode characters, wide tables, or certain output types
- Slow — LaTeX compilation can take 30+ seconds for large notebooks
- Requires a working Python environment

### Best For

- Academic papers and formal reports that need LaTeX-quality typography
- Automated PDF generation in CI/CD pipelines (once LaTeX is set up)
- Notebooks with complex mathematical notation

---

## Method 2: nbconvert with WebPDF (No LaTeX)

Introduced in nbconvert 6.x, the `webpdf` exporter uses a headless Chromium browser instead of LaTeX.

```bash
pip install "nbconvert[webpdf]"
playwright install chromium
jupyter nbconvert --to webpdf my_notebook.ipynb
```

### How It Works

The webpdf exporter:
1. Converts the notebook to HTML (same as `--to html`)
2. Opens the HTML in a headless Chromium browser
3. Uses Chromium's built-in print-to-PDF functionality
4. Returns the resulting PDF

### Installation Requirements

- Python with `nbconvert[webpdf]` extra
- Playwright (Python package)
- Chromium browser (~150 MB download, handled by Playwright automatically)

### Pros

- No LaTeX required
- Better handling of HTML output (DataFrames, plotly charts, rich output)
- Still scriptable from the command line
- Produces results that match what you see in the browser

### Cons

- Still requires Python and a Chromium download
- Marked as experimental in some versions
- Slightly slower than LaTeX for text-heavy notebooks (Chromium startup overhead)
- Less typographic polish than the LaTeX pipeline for pure-text content

### Best For

- Command-line automation without LaTeX
- Notebooks with complex HTML outputs (interactive widgets frozen, Plotly charts)
- Teams that want to avoid LaTeX but still want CLI automation

---

## Method 3: Browser Print (Manual)

The simplest approach that requires no installation at all.

### Option A: Export to HTML, then Print

1. Export to HTML with nbconvert:
   ```bash
   jupyter nbconvert --to html my_notebook.ipynb
   ```
2. Open `my_notebook.html` in Chrome or Firefox
3. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
4. Set destination to "Save as PDF"
5. Click Save

### Option B: Use an online converter

Tools like [notebookconvert.com](/) do the HTML rendering step for you in the browser — just upload your `.ipynb` file directly.

### How It Works (for online tools)

A client-side JavaScript converter:
1. Reads the `.ipynb` JSON file
2. Parses cells (code, markdown, raw)
3. Renders code cells with highlight.js
4. Renders markdown with marked.js
5. Renders equations with MathJax (if detected)
6. Embeds all images as base64 data URIs
7. Opens a print dialog
8. You save as PDF using the browser's PDF print driver

### Pros

- Zero installation
- Works on any device with a modern browser (including Chromebooks, tablets)
- 100% private — files never leave your computer (for client-side tools)
- Fast — no compilation step
- Handles Unicode, emojis, and any text content
- Works even if your Python environment is broken

### Cons

- Cannot be scripted or automated
- Print dialog is a manual step
- Less typographic control than native LaTeX (fonts, exact page layout)
- PDF quality depends on the browser's print engine

### Browser-Specific Tips

**Chrome/Edge:**
- Enable "Background graphics" in "More settings" to keep syntax highlighting colors
- Set margins to "Minimum" for a cleaner layout

**Firefox:**
- Under "More Options", check "Print Background Colors and Images"
- Firefox's PDF output is slightly different in page sizing

**Safari:**
- Use File → Export as PDF rather than the print dialog for better results

### Best For

- One-off conversions with no setup
- Users who don't have Python installed
- Sharing with colleagues quickly
- Notebooks with rich HTML outputs

---

## Method 4: VS Code Export

If you use VS Code with the Jupyter extension (ms-toolsai.jupyter), you can export to PDF directly from the editor.

1. Open your `.ipynb` file in VS Code
2. Click the `...` (More Actions) button in the notebook toolbar
3. Select **Export** → **PDF**

VS Code uses a headless browser internally (similar to Method 2).

### Pros

- Integrated into your editor workflow
- No terminal needed
- No separate LaTeX installation

### Cons

- Requires VS Code with the Jupyter extension
- Less configurable than the CLI approaches
- Quality is similar to the browser-print approach

### Best For

- VS Code users who want a quick export without switching to the terminal

---

## Which Method Should You Use?

### For a quick one-off export

Use [notebookconvert.com](/) or the browser print method. Zero setup, works anywhere, and the quality is excellent for most use cases.

### For automated pipelines (CI/CD)

Use `nbconvert --to webpdf` if you want to avoid LaTeX, or `nbconvert --to pdf` if you need LaTeX-quality output and are willing to set up a LaTeX installation in your CI environment.

Example GitHub Actions step for webpdf:

```yaml
- name: Install nbconvert with webpdf
  run: pip install "nbconvert[webpdf]" && playwright install chromium

- name: Convert notebook to PDF
  run: jupyter nbconvert --to webpdf report.ipynb
```

### For academic submissions with strict formatting requirements

Use the LaTeX method (`nbconvert --to pdf`). It produces the most professionally typeset output and is the most widely accepted in academic contexts.

### For sharing reports with non-technical stakeholders

Both the HTML and PDF browser-based approaches work well. HTML is often better for interactive content; PDF is better for printing or archiving.

---

## Quality Comparison

The quality difference between methods is subtle for most notebooks. Here's what to expect:

**Code formatting:** All four methods produce syntax-highlighted code. The LaTeX method uses the `listings` or `minted` package; the browser methods use highlight.js. The visual result is similar.

**Math equations:** LaTeX native rendering is slightly higher quality than MathJax. For most equations, the difference is not visible. For complex multi-line equations, LaTeX handles alignment better.

**Charts and figures:** Browser methods embed PNG/SVG as-is, so the quality is exactly what you see in the notebook. LaTeX converts everything to a format it can embed, which may rasterize SVGs.

**Text layout:** LaTeX's typographic algorithm (hyphenation, line breaking, kerning) is superior for long paragraphs of text. Browser PDF printing is excellent for code-heavy notebooks.

## Conclusion

There is no single "best" method — it depends on your workflow. For most data scientists who need to share a notebook quickly, the browser-based approach (online tool or browser print) is the fastest path. For teams with serious automation needs or academic formatting requirements, the LaTeX or webpdf pipelines are worth the setup investment.

The good news is that with modern browsers and tools like [notebookconvert.com](/), you don't need to fight with LaTeX for the common case.
