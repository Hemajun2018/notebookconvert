# NotebookConvert

> Free online tool to convert Jupyter Notebook (`.ipynb`) files to **HTML**, **Markdown**, **PDF**, and **Python** scripts — right in your browser.

🌐 **Live site:** [notebookconvert.com](https://notebookconvert.com)

## Features

- 📄 **Multiple output formats** — HTML, Markdown, PDF, Python (`.py`)
- 🔒 **Privacy-first** — files are processed in your browser, nothing is uploaded to a server
- ⚡ **Fast & free** — no signup, no limits, no ads in the converter
- 🎨 **Syntax highlighting** — code cells render with highlight.js
- 📦 **Preserves outputs** — keeps cell outputs, images, and formatting
- 📱 **Works on any device** — responsive UI built with Tailwind

## How to use

1. Open [notebookconvert.com](https://notebookconvert.com)
2. Drop your `.ipynb` file onto the upload area
3. Pick your target format (HTML / Markdown / PDF / Python)
4. Download the converted file

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18 + TypeScript
- Tailwind CSS
- `marked` for Markdown rendering
- `highlight.js` for code syntax highlighting
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
git clone https://github.com/Hemajun2018/notebookconvert.git
cd notebookconvert
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## License

MIT
