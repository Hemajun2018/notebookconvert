# notebookconvert.com — 产品需求文档（PRD）
**版本：** v1.6（关键词优化版）
**日期：** 2026-03-27
**状态：** 可交付开发

---

## 一、产品定位

### 1.1 一句话定义
> 把 Jupyter Notebook 变成可分享文档的最快路径。

### 1.2 核心场景
数据科学家完成分析后，需要将 `.ipynb` 文件导出为 PDF 或 HTML，分享给不懂 Python 的同事、老板或教授——但本地配置 LaTeX + nbconvert 麻烦、经常报错，他们需要一个"上传即转"的在线方案。

### 1.3 目标用户
- 数据科学家 / 数据分析师：分享分析结果给非技术团队
- 学生 / 研究人员：提交作业、论文附件
- 开发者：快速导出 notebook 文档存档

### 1.4 商业模式
| 阶段 | 变现方式 | 目标 |
|------|---------|------|
| MVP（0~3个月） | Google AdSense | 跑通出海第一美金，验证 SEO 闭环 |
| 第二阶段（3~6个月） | 付费订阅 | 验证付费意愿后上线高级功能 |

**付费功能候选（根据用户调查结果决定优先级）：**
- 去除品牌水印
- 高质量 PDF（服务端渲染，自定义样式、分页优化）
- 批量转换
- AI 自动生成 Notebook 摘要报告（Executive Summary）

> **AdSense 申请说明：**
> 上线即包含 8+ 个内容页面（首页 + 3 个落地页 + 3 篇 Blog + 隐私页），基本满足 AdSense 审核门槛。若首次被拒，两周后重新申请即可，不阻塞任何开发工作。

---

## 二、MVP 范围（一次性上线，目标 7 天）

### 2.1 上线清单

**全部页面（9 个内容页）：**
- 首页 `/` — 主打 `ipynb to pdf`（核心 SEO 页）
- `/jupyter-to-pdf` — 主打 `jupyter notebook to pdf`
- `/ipynb-to-html` — 主打 `ipynb to html`
- `/ipynb-to-python` — 主打 `ipynb to py`
- `/ipynb-to-pdf` — 301 重定向到首页
- Blog 系统 + 3 篇 SEO 文章（AI 辅助撰写，人工审核）
- 隐私政策页 `/privacy`

**SEO / 运营基建：**
- sitemap.xml / robots.txt / Canonical / Open Graph / Schema.org（WebApplication + FAQPage）
- Google Search Console 提交
- Google Analytics 4 接入
- Google AdSense 申请
- 付费意愿调查（页面底部嵌入问卷）

**明确不做：**
- ❌ 用户注册/登录
- ❌ 转换历史记录
- ❌ 付费订阅系统
- ❌ 批量转换
- ❌ AI 摘要功能
- ❌ 多语言

### 2.2 后续迭代（第2~3个月）
- 工具矩阵扩展（参考 runcell 策略，添加开发者工具词覆盖）
- 付费功能上线（根据调查结果决定）

---

## 三、SEO 策略

### 3.1 关键词矩阵（按意图分层）

**工具意图词 → 对应落地页**

| 关键词 | 全球搜索量 | KD | CPC | 对应页面 |
|--------|-----------|-----|-----|---------|
| ipynb to pdf | 37,000 | 19 | $5.53 | **/ （首页）** |
| ipynb to pdf converter | 880 | 19 | $5.87 | / （首页） |
| convert ipynb to pdf | 1,000 | 19 | $3.14 | / （首页） |
| .ipynb to pdf | 1,000 | 18 | $0 | / （首页） |
| jupyter notebook to pdf | 720 | 24 | $5.62 | /jupyter-to-pdf |
| jupyter to pdf | 480 | 23 | $5.62 | /jupyter-to-pdf |
| ipynb to html | 720 | 15 | $5.77 | /ipynb-to-html |
| convert ipynb to html | 390 | 15 | $5.00 | /ipynb-to-html |
| ipynb to html converter | 110 | 18 | $5.62 | /ipynb-to-html |
| ipynb to py | 390 | 18 | $3.36 | /ipynb-to-python |
| convert ipynb to python | 140 | 20 | $4.17 | /ipynb-to-python |

**问题意图词 → 对应 FAQ + Blog 文章**

| 关键词 | 搜索量 | KD | 用途 |
|--------|-------|----|------|
| how to convert ipynb to pdf | 140 | 10 | FAQ + Blog #3 |
| how to save ipynb as pdf | 70 | 17 | FAQ |
| how to export ipynb to pdf | 20 | — | FAQ |
| how to convert ipynb to pdf in vscode | 20 | — | FAQ |
| can i convert ipynb to pdf | 30 | — | FAQ |
| jupyter notebook to pdf without latex | 待查 | 低 | Blog #1 |
| nbconvert pdf failed / not working | 待查 | 低 | Blog #2 |

### 3.2 URL 结构与关键词分配

每个页面对准一个有搜索量的核心词，不浪费任何一个页面在品牌词上：

```
notebookconvert.com/                          # 主打 ipynb to pdf（37K 搜索量）
notebookconvert.com/ipynb-to-html             # 主打 ipynb to html（720）
notebookconvert.com/ipynb-to-python           # 主打 ipynb to py（390）
notebookconvert.com/jupyter-to-pdf            # 主打 jupyter notebook to pdf（720）
notebookconvert.com/blog/                     # 博客列表（内链枢纽）
notebookconvert.com/blog/jupyter-to-pdf-without-latex
notebookconvert.com/blog/nbconvert-pdf-failed
notebookconvert.com/blog/how-to-export-jupyter-to-pdf
notebookconvert.com/privacy                   # 隐私政策
```

> **关键词分配原则：**
> - 首页吃最大词 `ipynb to pdf`（37K），H1、Title、Description 全部围绕这个词。
> - `/ipynb-to-pdf` 路径不再单独存在，避免与首页自我竞争。若用户直接访问 `/ipynb-to-pdf`，做 301 重定向到首页。
> - 新增 `/jupyter-to-pdf` 页面，承接 `jupyter notebook to pdf` / `jupyter to pdf` 这组变体词（合计 1200 搜索量），与首页的 `ipynb to pdf` 不冲突——搜这两组词的用户意图相同但用词不同，Google 会区分。
> - 每个页面只优化一组核心词，不贪多。

### 3.3 Blog 文章（3篇，Day 6 完成）

**文章 #1（最高优先级）**
- URL：`/blog/jupyter-to-pdf-without-latex`
- 标题：`How to Convert Jupyter Notebook to PDF Without LaTeX`
- 目标词：`jupyter notebook to pdf without latex`
- 结构：为什么 LaTeX 方法麻烦 → 3种无LaTeX替代方案 → 本站工具（嵌入组件）→ FAQ
- 字数：1200~1500字

**文章 #2**
- URL：`/blog/nbconvert-pdf-failed`
- 标题：`nbconvert PDF Export Failed? Here's What to Do`
- 目标词：`nbconvert pdf failed`、`nbconvert to pdf not working`
- 结构：常见报错原因逐一解析 → 解决方案 → 推荐在线工具兜底
- 字数：1000~1200字

**文章 #3**
- URL：`/blog/how-to-export-jupyter-to-pdf`
- 标题：`Jupyter Notebook to PDF: 4 Methods Compared`
- 目标词：`how to export jupyter notebook to pdf`
- 结构：在线工具 vs nbconvert vs JupyterLab vs VS Code 对比表格 + 场景推荐
- 字数：1500字

### 3.4 信任信号（必须在首页和落地页明确展示）

路线A（纯前端）的隐私优势是真实的差异化卖点，必须突出：
- ✅ 文件转换完全在浏览器本地完成
- ✅ 文件不会上传到任何服务器
- ✅ 关闭标签页后数据自动清除
- ✅ 不收集任何文件内容
- ✅ 不用于 AI 训练

---

## 四、功能需求

### 4.1 核心转换功能

**F1 - 文件上传**
- 支持拖拽上传 `.ipynb` 文件
- 支持点击选择文件
- 文件大小限制：10MB
- 格式校验：仅接受 `.ipynb`，否则显示友好错误提示
- 文件读取后在本地解析，不发送至服务器

**F2 - 输出格式（MVP）**
- PDF（P0，核心）
- HTML（P1，与 PDF 同期上线，技术成本极低）

**F3 - 转换处理（纯前端）**

PDF 转换流程：
```
1. FileReader API 读取 .ipynb 文件（JSON 格式）
2. 解析所有 cells（code / markdown / raw）
3. 用 marked.js 渲染 Markdown，highlight.js 渲染代码高亮
4. 处理所有 output 类型的图片和富文本（详见 F5-b）
5. 检测是否包含数学公式，按需加载 MathJax 渲染（详见 F5-c）
6. 注入打印优化 CSS（print media query）
7. 调用 window.print() → 用户选择 Save as PDF
```

HTML 转换流程：
```
1~5 同上
6. 生成完整 HTML 字符串（内联所有 CSS + 图片）
7. Blob API 触发浏览器下载
```

状态流转：`Idle → Parsing → Rendering → Ready`（无网络请求，极速）

**F4 - 文件下载**
- PDF：触发浏览器打印对话框 + 清晰的步骤引导（含 GIF 动图演示）
- HTML：Blob URL 直接下载
- 文件名：原文件名 + 新扩展名（`analysis.ipynb` → `analysis.pdf`）

**F5 - 转换质量要求**

**F5-a：必须支持（达不到不上线）：**
- ✅ 代码单元格语法高亮（highlight.js）
- ✅ Markdown 单元格全格式（标题/列表/表格/代码块/粗体斜体）
- ✅ 图表输出（base64 图片，支持 `image/png` 和 `image/jpeg`）
- ✅ SVG 图表输出（`image/svg+xml`，直接嵌入 `<svg>` 或 `<img>`）
- ✅ DataFrame / HTML 表格输出（`text/html`，直接渲染为 HTML 表格）
- ✅ 文本流输出（`output_type: "stream"`，`<pre>` 包裹）
- ✅ 数学公式（MathJax 按需加载，支持 `$...$` 和 `$$...$$`）
- ✅ 打印分页优化（避免代码块中途截断）

**F5-b：Output 类型完整处理矩阵（开发必读）：**

| output_type | data 字段 | 渲染方式 |
|-------------|-----------|---------|
| `display_data` | `image/png` | `<img src="data:image/png;base64,...">` |
| `display_data` | `image/jpeg` | `<img src="data:image/jpeg;base64,...">` |
| `display_data` | `image/svg+xml` | 直接插入 SVG 字符串，或用 `<img>` + data URI |
| `display_data` | `text/html` | 直接渲染 HTML（pandas DataFrame 的标准输出形式） |
| `display_data` | `text/plain` | `<pre>` 包裹（作为 fallback） |
| `execute_result` | 同上 | 同 `display_data`，处理逻辑一致 |
| `stream` | `text`字段 | `<pre>` 包裹纯文本，区分 stdout/stderr |
| `error` | `traceback` | `<pre class="error">` 包裹，保留 ANSI 颜色或转 HTML |

> **优先级规则：** 当同一个 output 的 `data` 字段包含多种 MIME 类型时，按以下优先级选择渲染：`text/html` > `image/svg+xml` > `image/png` > `image/jpeg` > `text/plain`。这与 Jupyter 原生行为一致。

**F5-c：MathJax 按需加载策略：**
```
解析完所有 cells 后，扫描全文是否包含数学公式标记：
- 检测 $...$ 或 $$...$$ 或 \begin{...} 模式
- 若检测到 → 动态加载 MathJax CDN → 渲染公式
- 若未检测到 → 跳过 MathJax，减少约 1MB 加载量
```

**F5-d：可接受有限支持（上线后迭代）：**
- ⚠️ Plotly 富交互图表（静态截图或忽略）
- ⚠️ 超长 notebook 精细分页
- ⚠️ ANSI 转义码完美渲染（error traceback 中的颜色）

**不保证：**
- ❌ 完全复现 JupyterLab 原始 UI 样式

**F6 - PDF 导出引导**

转换完成后，在下载按钮旁显示步骤提示 + GIF 动图演示：
```
① Click "Save as PDF" button below
② In the print dialog, set Destination to "Save as PDF"
③ Click Save
```

> **移动端注意：** `window.print()` 在 iOS Safari 和部分 Android 浏览器上体验不一致。必须在 Day 6 之前完成以下浏览器实测：Chrome Desktop / Firefox Desktop / Safari Desktop / Chrome Android / Safari iOS。若移动端体验过差，在移动端隐藏 PDF 选项，仅保留 HTML 下载，并显示提示："For PDF export, please use a desktop browser."

---

## 五、技术方案

### 5.1 核心原则
纯前端转换，整个产品只需 Vercel 一个平台，零服务器成本，文件不离开用户浏览器。

> **验证依据：** runcell.dev 采用同样方案，月访问量 154K，证明用户接受度足够。

### 5.2 技术栈

| 层级 | 选型 | 说明 |
|------|------|------|
| 前端框架 | Next.js 14（App Router） | SSG 静态生成，SEO 友好 |
| 部署平台 | Vercel Hobby（免费） | 无需付费 |
| 样式 | Tailwind CSS | 快速开发 |
| Markdown 渲染 | marked.js | 轻量，维护活跃 |
| 代码高亮 | highlight.js（按需加载） | 默认加载 Python/R/SQL/JS/Bash，其他语言动态注册 |
| 数学公式 | MathJax（CDN，按需加载） | 仅在检测到公式时加载 |
| PDF 导出 | 浏览器 window.print() | 无需后端 |
| HTML 下载 | 原生 Blob API | 无需后端 |
| 文件解析 | 原生 FileReader API | .ipynb 本质是 JSON |

**无需后端服务、数据库、文件存储。**

### 5.3 highlight.js 按需加载策略

全量引入 100+ 语言包会使 bundle 超过 1MB，严重影响 Lighthouse 性能分。

```
默认打包语言（覆盖 95% 的 ipynb 场景）：
  python, r, sql, javascript, bash, json, yaml, markdown

动态加载策略：
  1. 解析 notebook 的 metadata.kernelspec.language 字段
  2. 若为已打包语言 → 直接渲染
  3. 若为未打包语言（如 julia, scala, matlab）→ 动态 import 对应语言包
  4. 若语言字段缺失 → 默认按 python 处理（ipynb 最常见场景）
```

### 5.4 转换架构图

```
用户浏览器
    ↓ 拖拽 / 选择 .ipynb 文件
    ↓ FileReader API 读取为文本
    ↓ JSON.parse() 解析 notebook 结构
    ↓ 兼容性处理：
        - cell.source：Array.isArray(source) ? source.join('') : source
        - 检测 nbformat 版本（≥4 正常处理，<4 显示警告）
    ↓ 遍历 cells：
        - code cell → highlight.js 语法高亮
        - markdown cell → marked.js 渲染
        - output → 按 MIME 优先级处理（详见 F5-b）
          - text/html → 直接渲染（DataFrame 表格等）
          - image/svg+xml → 嵌入 SVG
          - image/png / jpeg → base64 嵌入 <img>
          - stream → <pre> 包裹
          - error → <pre class="error"> 包裹 traceback
    ↓ 检测是否有数学公式 → 有则动态加载 MathJax
    ↓ 拼装完整 HTML 字符串
    ↓ PDF：注入 print CSS → window.print()
    ↓ HTML：Blob URL → <a download> 触发下载
（全程无任何网络请求，MathJax CDN 除外）
```

### 5.5 ipynb source 字段兼容性（开发必读）

nbformat 4 规范中，`cell.source` 可以是以下两种形式：

```javascript
// 形式 A：字符串数组（每行一个元素）— 最常见
"source": ["import pandas as pd\n", "df = pd.read_csv('data.csv')"]

// 形式 B：单个字符串 — 部分工具导出时使用
"source": "import pandas as pd\ndf = pd.read_csv('data.csv')"
```

**解析时必须统一处理：**
```typescript
function getSource(cell: Cell): string {
  return Array.isArray(cell.source) ? cell.source.join('') : cell.source;
}
```

同理，`output.text` 字段也可能是数组或字符串，必须做同样处理。

### 5.6 项目目录结构

```
notebookconvert/
├── app/
│   ├── layout.tsx                        # 全局 layout（Analytics / AdSense）
│   ├── page.tsx                          # 首页（主打 ipynb to pdf）
│   ├── jupyter-to-pdf/
│   │   └── page.tsx                      # jupyter notebook to pdf 落地页
│   ├── ipynb-to-html/
│   │   └── page.tsx                      # HTML 转换落地页
│   ├── ipynb-to-python/
│   │   └── page.tsx                      # Python 提取落地页
│   ├── ipynb-to-pdf/
│   │   └── route.ts                      # 301 重定向到首页 /
│   ├── blog/
│   │   ├── page.tsx                      # 博客列表
│   │   └── [slug]/
│   │       └── page.tsx                  # 文章详情
│   ├── privacy/
│   │   └── page.tsx                      # 隐私政策
│   └── sitemap.ts                        # 自动生成 sitemap
├── components/
│   ├── Converter.tsx                     # 核心转换组件（各页面复用）
│   ├── DropZone.tsx                      # 拖拽上传区
│   ├── FormatSelector.tsx                # 格式选择（PDF / HTML）
│   ├── ConvertButton.tsx                 # 转换按钮
│   ├── PrintGuide.tsx                    # PDF 保存步骤引导（含 GIF 动图）
│   ├── TrustBadges.tsx                   # 隐私信任标识
│   └── FAQSection.tsx                    # FAQ 组件（自动注入 FAQPage Schema）
├── lib/
│   ├── parseNotebook.ts                  # 解析 .ipynb JSON 结构（兼容 source 两种格式）
│   ├── renderHTML.ts                     # 渲染 HTML（marked + highlight + output 矩阵）
│   ├── exportPDF.ts                      # 触发打印 / 下载
│   ├── detectMath.ts                     # 扫描是否包含数学公式，决定是否加载 MathJax
│   └── loadHighlightLang.ts             # highlight.js 语言包动态加载
├── content/
│   └── blog/                             # Markdown 文章源文件
│       ├── jupyter-to-pdf-without-latex.md
│       ├── nbconvert-pdf-failed.md
│       └── how-to-export-jupyter-to-pdf.md
└── public/
    ├── robots.txt
    └── images/
        └── print-guide.gif              # PDF 保存步骤 GIF 动图
```

### 5.7 后期升级路径

若用户反馈 PDF 质量不足，可将服务端转换（Cloudflare Workers + Puppeteer）作为**付费功能**上线，与免费的浏览器方案形成自然分层，无需重构现有代码。

---

## 六、页面内容规范

### 6.1 首页（/）— 核心 SEO 页，主打 `ipynb to pdf`

**页面目标：** 承接 `ipynb to pdf` 系列关键词全部 SEO 流量（37K+ 搜索量），首屏直接展示工具。

**页面区块顺序：**
1. Header：Logo + 导航（Tools ▾ / Blog）
2. Hero：H1 标题（含核心关键词）+ 副标题 + 转换工具组件（首屏可见）
3. Features：3个核心卖点
4. How It Works：3步说明
5. 介绍正文（800~1200字 SEO 内容）
6. 方法对比表格（语义化 `<table>`，利于 Featured Snippet）
7. 信任声明区块
8. FAQ（8个问题，带 FAQPage Schema，全面覆盖问题词）
9. 相关工具链接（内链到 /ipynb-to-html、/ipynb-to-python、/jupyter-to-pdf）
10. Footer

**H1 标题：**
```
Free IPYNB to PDF Converter Online — No LaTeX Required
```

**Hero 文案：**
```
副标题：Convert .ipynb to PDF instantly in your browser. No uploads, no installation.
CTA 按钮：Convert Now — Free
```

**Features：**
```
1. No LaTeX Required
   Works entirely in your browser.
   No nbconvert setup, no terminal, no installation.

2. 100% Private
   Your files never leave your device.
   Nothing is uploaded to any server — ever.

3. Preserves Everything
   Code, outputs, charts, DataFrames, and math formulas
   all rendered exactly as expected.
```

**How It Works：**
```
Step 1：Upload — Drop your .ipynb file or click to select
Step 2：Convert — Choose PDF or HTML, click Convert
Step 3：Download — Save your file instantly
```

**正文结构（H1 下方，工具组件下方）：**
1. 什么是 .ipynb 文件，为什么需要转成 PDF
2. 用本站工具转换的方法（3步，图文说明）
3. 其他方法介绍：nbconvert / JupyterLab / VS Code
4. 方法对比表格：

> **实现要求：** 必须使用语义化 `<table>` + `<thead>` + `<tbody>` 渲染，不要用 CSS Grid/Flexbox 模拟表格。语义化表格更容易被 Google 抓取为 Featured Snippet。

| 方法 | 需要安装 | 转换质量 | 速度 | 隐私 | 难度 |
|------|---------|---------|------|------|------|
| notebookconvert.com | 无 | 良好 | 极快 | 文件不上传 | ⭐ 极简单 |
| nbconvert + LaTeX | 需要 Python + LaTeX | 最高 | 慢 | 本地 | ⭐⭐⭐⭐ 复杂 |
| JupyterLab 内置导出 | 需要 JupyterLab | 较好 | 中 | 本地 | ⭐⭐ 简单 |
| VS Code | 需要插件 | 较好 | 中 | 本地 | ⭐⭐ 简单 |
| Google Colab | 需要账号 | 较好 | 中 | 云端 | ⭐⭐ 简单 |

**首页 FAQ（覆盖所有 ipynb to pdf 问题词）：**
1. How do I convert an ipynb file to PDF?
2. Can I convert Jupyter Notebook to PDF without LaTeX?
3. How do I convert ipynb to PDF online for free?
4. What happens to my files after conversion?
5. My notebook has charts and plots — will they show in the PDF?
6. How do I convert ipynb to PDF in VS Code?
7. How do I convert ipynb to PDF in Jupyter Notebook?
8. Why does nbconvert PDF export fail?

**首页 Meta：**
```
Title: Free IPYNB to PDF Converter Online — No LaTeX, No Upload | notebookconvert.com
Description: Convert Jupyter Notebook (.ipynb) to PDF instantly in your browser.
No LaTeX required. Files never uploaded. Preserves code, outputs & charts. 100% free.
```

**301 重定向：** `/ipynb-to-pdf` → `/`（防止用户直接访问旧路径返回 404）

---

### 6.2 /jupyter-to-pdf 专题页 — 主打 `jupyter notebook to pdf`

**页面目标：** 承接 `jupyter notebook to pdf` / `jupyter to pdf` 变体词（合计 1200 搜索量）。

> **与首页的区分：** 首页优化 `ipynb to pdf`（用户知道文件扩展名，偏技术），本页优化 `jupyter notebook to pdf`（用户用产品名搜索，偏入门）。Google 会将这两组词区分排名。

**H1：** `Convert Jupyter Notebook to PDF Online — Free, No LaTeX`

**页面区块：**
1. H1 + 转换工具组件（首屏，复用 Converter 组件）
2. 介绍正文（600~800字）：什么是 Jupyter Notebook → 为什么要转 PDF → 用本站 3 步搞定
3. 方法对比表格（复用首页表格组件）
4. FAQ（5个问题，围绕 jupyter notebook 相关问题词）
5. 相关工具链接

**FAQ：**
1. How do I convert a Jupyter Notebook to PDF?
2. Can I convert Jupyter Notebook to PDF without installing anything?
3. Does this work with Google Colab notebooks?
4. What's the difference between ipynb and Jupyter Notebook?
5. How do I export a Jupyter Notebook as a PDF in JupyterLab?

**Meta：**
```
Title: Convert Jupyter Notebook to PDF Online Free — No LaTeX | notebookconvert.com
Description: Convert Jupyter Notebook to PDF instantly in your browser. No LaTeX,
no installation. Preserves code, charts & outputs. 100% free and private.
```

---

### 6.3 /ipynb-to-html 专题页 — 主打 `ipynb to html`

**H1：** `Free IPYNB to HTML Converter Online`

**Meta：**
```
Title: Free IPYNB to HTML Converter — Convert Jupyter Notebook Online | notebookconvert.com
Description: Convert Jupyter Notebook (.ipynb) to HTML instantly in your browser.
Share interactive notebooks as web pages. No installation required. Free online tool.
```

---

### 6.4 /ipynb-to-python 专题页 — 主打 `ipynb to py`

**H1：** `Free IPYNB to Python (.py) Converter Online`

**Meta：**
```
Title: Free IPYNB to Python Converter — Extract .py from Jupyter Notebook | notebookconvert.com
Description: Convert Jupyter Notebook (.ipynb) to Python script (.py) instantly.
Extracts all code cells into a clean .py file. No installation required. Free online tool.
```

---

### 6.5 隐私政策页（/privacy）

必须包含：
- 转换完全在浏览器本地完成，文件不上传到任何服务器
- 不收集、不存储任何文件内容
- 不将任何数据用于 AI 训练
- Google Analytics 仅收集匿名访问统计（页面浏览量、来源等）
- AdSense 可能使用 Cookie 展示广告

---

## 七、UI 设计规范

### 7.1 设计风格
面向开发者，简洁专业，深色主题，参考 Vercel / Linear 工业简约风格。避免花哨动效和过度营销感。

### 7.2 色彩系统
```css
--bg-primary:      #0F172A;   /* 主背景 */
--bg-secondary:    #1E293B;   /* 卡片/组件背景 */
--bg-tertiary:     #0F172A;   /* 输入区背景 */
--accent:          #6366F1;   /* 主强调色（按钮/高亮） */
--accent-hover:    #4F46E5;
--text-primary:    #F8FAFC;
--text-secondary:  #94A3B8;
--border:          #334155;
--success:         #22C55E;
--error:           #EF4444;
--warning:         #F59E0B;
```

### 7.3 转换组件四个状态

```
① Idle
   虚线边框拖拽区（--border 颜色）
   上传图标（居中）
   主文字："Drop your .ipynb file here"
   次要文字："or click to browse"
   格式选择器（PDF / HTML，默认选 PDF）

② Parsing
   进度条动画
   文字："Reading your notebook..."

③ Rendering
   Spinner 动画
   文字："Rendering cells..."
   次要文字："This usually takes less than 3 seconds"

④ Done
   绿色对勾图标
   文件名 + 文件大小
   主按钮：[Save as PDF] 或 [Download HTML]
   步骤提示（PDF 时显示，含 GIF 动图演示）：
     "① Click the button above
      ② In the print dialog, set Destination → Save as PDF
      ③ Click Save"
   [GIF 动图：录制 Chrome 打印对话框选 Save as PDF 的操作过程]
   次要链接：[Convert Another File]
```

> **移动端适配：** 若检测到移动端浏览器，Done 状态隐藏 PDF 选项，仅显示 HTML 下载，并提示 "For best PDF export experience, use a desktop browser."

### 7.4 TrustBadges 组件

在转换组件下方或 Footer 上方显示：
```
🔒 Files never uploaded    ⚡ Instant conversion    🆓 100% Free
```

---

## 八、SEO 技术清单

上线前必须全部完成（缺一不可）：

- [ ] `app/sitemap.ts`：Next.js 自动生成 sitemap，包含所有页面
- [ ] `public/robots.txt`：允许所有爬虫，Disallow: /api/
- [ ] 每个页面独立的 `<title>` 和 `<meta description>`
- [ ] 每个页面设置 Canonical URL
- [ ] Open Graph 标签（og:title / og:description / og:url / og:type）
- [ ] Twitter Card 标签
- [ ] Schema.org `WebApplication` 结构化数据（首页和落地页）
- [ ] Schema.org `FAQPage` 结构化数据（所有含 FAQ 的页面）
- [ ] Google Search Console 提交并验证域名所有权
- [ ] Google Analytics 4 接入（gtag.js）
- [ ] Google AdSense 申请（上线即 8+ 页面，满足审核门槛）
- [ ] Lighthouse Score > 90（性能/SEO/可访问性）
- [ ] HTTPS（Vercel 默认开启）
- [ ] 移动端响应式（Tailwind 断点）
- [ ] 图片 alt 属性（如有图片）
- [ ] 页面 H1 唯一且包含核心关键词
- [ ] 对比表格使用语义化 `<table>` 标签（利于 Featured Snippet）

**Schema.org WebApplication 示例（落地页）：**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "IPYNB to PDF Converter",
  "url": "https://notebookconvert.com/",
  "description": "Convert Jupyter Notebook files to PDF online. No LaTeX required.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**Schema.org FAQPage 示例（落地页 FAQ）：**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert an ipynb file to PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your .ipynb file to notebookconvert.com, select PDF as the output format, and click Convert. The file is processed entirely in your browser — no upload, no LaTeX installation needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert Jupyter Notebook to PDF without LaTeX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. notebookconvert.com converts notebooks to PDF directly in your browser using HTML rendering. No LaTeX, nbconvert, or any local installation is required."
      }
    }
  ]
}
```

> **实现建议：** 将 FAQ Schema 生成逻辑封装在 `FAQSection.tsx` 组件中，传入问题数组即可自动输出可见 FAQ + `<script type="application/ld+json">` 结构化数据。避免手动维护两份内容。

---

## 九、里程碑计划

### 全量上线（7天）

> **原则：** 有 AI 辅助开发，Blog 就是 Markdown 渲染，三个落地页结构相同只换 meta，没有理由分阶段。一次性把所有页面和内容全部上线，上线即 8+ 页面，SEO 覆盖面和 AdSense 审核同时到位。

| 天数 | 任务 | 完成标志 |
|------|------|---------|
| Day 1 | ✅ 域名注册（已完成）+ Next.js 项目初始化 + Vercel 连接 + 全部路由搭建（含 Blog 动态路由） | `localhost:3000` 所有路由可访问 |
| Day 2 | 核心转换逻辑：parseNotebook（兼容 source 两种格式）+ renderHTML（完整 output 矩阵）+ exportPDF + detectMath | 能转换测试 .ipynb 文件（见验收标准） |
| Day 3 | Converter 组件 UI（四个状态）+ 全局样式 + MathJax 按需加载 + highlight.js 按需加载 | 组件交互完整，性能达标 |
| Day 4 | 首页（主打 ipynb to pdf，含完整 SEO 正文 + 对比表格 + FAQ）+ `/privacy` 页 + FAQPage Schema + WebApplication Schema | 首页视觉、内容、Schema 完整 |
| Day 5 | `/jupyter-to-pdf` + `/ipynb-to-html` + `/ipynb-to-python` 落地页（复用组件，换 meta/H1/FAQ）+ `/ipynb-to-pdf` 301 重定向 + Blog 系统 | 全部页面可访问 |
| Day 6 | 3 篇 Blog 文章（AI 辅助撰写 + 人工审核）+ 付费意愿调查嵌入 + SEO 技术清单全项检查 + **跨浏览器测试** | Lighthouse > 90，5 种浏览器测试通过 |
| Day 7 | Vercel 生产部署 + Search Console 提交 + Analytics 接入 + AdSense 申请 | 网站公开可访问，所有运营基建就位 |

> **Day 2 验收标准：** 测试用的 .ipynb 文件必须包含：Python 代码（带输出）、Markdown（含标题/列表/表格）、matplotlib 图表（base64 PNG）、pandas DataFrame（text/html 输出）、至少一个 stream 输出。转换结果不完整不进入 Day 3。

### 后续迭代（第2~3个月）

| 指标 | 目标 |
|------|------|
| Google 收录页面 | ≥ 9 |
| 月自然搜索流量 | ≥ 500 |
| `ipynb to pdf` 排名 | 进入前 20 |
| AdSense 月收益 | > $1（跑通出海第一美金） |
| 付费意愿调查回收 | ≥ 10 份 |
| 付费功能优先级确定 | 根据调查结果决定 |
| 工具矩阵扩展 | 参考 runcell 策略，添加开发者工具词覆盖 |

---

## 十、技术选型决策记录

| 问题 | 决策 | 理由 |
|------|------|------|
| PDF 方案 | 浏览器 window.print() | 零服务器成本；runcell 验证可行；移动端降级为仅 HTML |
| 后端服务 | 无（纯前端） | Vercel 包大小限制无法跑 Chromium |
| 部署平台 | Vercel Hobby（免费） | 足够支撑早期流量 |
| Markdown 渲染 | marked.js | 轻量（~50KB），维护活跃 |
| 代码高亮 | highlight.js（按需加载） | 默认打包 8 种常见语言，其他动态加载，控制 bundle 体积 |
| 数学公式 | MathJax（CDN，按需加载） | 仅含公式时加载，减少约 1MB 不必要开销 |
| HTML 下载 | Blob API | 原生支持，无需第三方库 |
| FAQ Schema | FAQPage 结构化数据 | 问题词排名提升 + 搜索结果富摘要展示 |
| 对比表格 | 语义化 `<table>` | Featured Snippet 抓取友好 |

---

## 十一、给开发者的补充说明

### ipynb 文件结构参考
```json
{
  "nbformat": 4,
  "metadata": {
    "kernelspec": {
      "language": "python",
      "display_name": "Python 3"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "source": ["# Hello World\n", "This is a notebook."]
    },
    {
      "cell_type": "code",
      "source": ["import pandas as pd\n", "df = pd.read_csv('data.csv')\n", "df.head()"],
      "outputs": [
        {
          "output_type": "execute_result",
          "data": {
            "text/html": "<table><thead><tr><th>col1</th><th>col2</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr></tbody></table>",
            "text/plain": "   col1  col2\n0     1     2"
          }
        }
      ]
    },
    {
      "cell_type": "code",
      "source": "import matplotlib.pyplot as plt\nplt.plot([1,2,3])\nplt.show()",
      "outputs": [
        {
          "output_type": "display_data",
          "data": {
            "image/png": "base64encodedstring...",
            "text/plain": "<Figure size 640x480 with 1 Axes>"
          }
        }
      ]
    }
  ]
}
```

> **注意：** 上面第二个 code cell 的 `source` 是字符串（非数组），这是合法的 nbformat 4 格式。解析器必须兼容两种形式。

### 关键解析逻辑

**source 字段统一处理：**
```typescript
const source = Array.isArray(cell.source) ? cell.source.join('') : cell.source;
```

**cell 类型处理：**
- `cell_type === "markdown"` → 用 marked.js 渲染
- `cell_type === "code"` → source 用 highlight.js 渲染；outputs 按 MIME 优先级遍历处理
- `cell_type === "raw"` → `<pre>` 包裹原始文本

**output 类型处理（按 MIME 优先级）：**
- `display_data` / `execute_result` 的 `data` 字段可能包含多种 MIME 类型
- 优先级：`text/html` > `image/svg+xml` > `image/png` > `image/jpeg` > `text/plain`
- `text/html` → 直接渲染（pandas DataFrame 输出的标准形式）
- `image/svg+xml` → 拼接字符串数组后直接插入或转 data URI
- `image/png` → `<img src="data:image/png;base64,...">`
- `stream` → `<pre>` 标签包裹文本输出
- `error` → `<pre class="error">` 包裹 traceback 文本

> **output.text 和 output.data 中的值也可能是字符串数组，必须用 join('') 处理。**

### PDF 打印 CSS 关键规则
```css
@media print {
  body { font-size: 11pt; }
  pre, code { page-break-inside: avoid; }
  img { max-width: 100%; page-break-inside: avoid; }
  h1, h2, h3 { page-break-after: avoid; }
  .cell { page-break-inside: avoid; margin-bottom: 1em; }
  .no-print { display: none; }  /* 隐藏导航栏/按钮等非内容元素 */
}
```

---

## 十二、v1.3 → v1.6 变更记录

| 变更项 | 说明 |
|--------|------|
| **首页 SEO 策略重构** | 首页不再主打品牌词，直接主打 `ipynb to pdf`（37K 搜索量），H1/Title/Description 全部围绕核心词 |
| **取消 /ipynb-to-pdf 页面** | 原独立落地页内容合并至首页，`/ipynb-to-pdf` 做 301 重定向，避免自我竞争 |
| **新增 /jupyter-to-pdf 页面** | 承接 `jupyter notebook to pdf` / `jupyter to pdf` 变体词（合计 1200 搜索量） |
| **关键词分配原则** | 每个页面对准一个有搜索量的核心词，不浪费任何页面在品牌词上 |
| **里程碑合并** | 原三阶段合并为 7 天全量上线，Blog + 全部落地页 + 文章一次性交付 |
| F5-b Output 矩阵 | 新增完整的 output 类型处理表，覆盖 text/html（DataFrame）、image/svg+xml、error traceback |
| F5-c MathJax 按需加载 | 新增公式检测逻辑，无公式时跳过 MathJax 加载（减少 ~1MB） |
| highlight.js 按需加载 | 默认仅打包 8 种语言，其他动态加载，控制 bundle 体积 |
| source 字段兼容性 | 新增 Array/String 两种格式的处理说明和代码示例 |
| MIME 优先级规则 | 新增 output 多 MIME 类型时的选择优先级 |
| FAQPage Schema | 新增 FAQ 结构化数据要求和示例，封装进 FAQSection 组件 |
| 语义化表格 | 要求对比表格使用 `<table>` 标签，利于 Featured Snippet |
| PDF 导出 GIF 引导 | 新增 GIF 动图演示要求 |
| 移动端降级策略 | 新增移动端隐藏 PDF 选项、仅保留 HTML 的降级方案 |
| 跨浏览器测试 | Day 6 新增 5 种浏览器测试要求 |
| Day 2 验收标准 | 强化测试文件要求，必须包含 DataFrame + 图表 + stream 输出 |
| AdSense 申请节奏 | 上线即 9 个内容页，首次申请通过概率提升 |

---

*文档版本 v1.6，可直接交付 Codex / Claude Code 开发。*
*域名：notebookconvert.com（已注册，有效期至 2029-03-27）*
