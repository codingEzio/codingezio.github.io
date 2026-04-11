# 📝 Markdown to HTML Blog Generator

A beautiful static blog generator that converts Markdown files into a modern, responsive HTML website with navigation between posts.

## Features

- ✅ **Markdown to HTML** conversion with YAML frontmatter support
- ✅ **Beautiful UI** with dark theme and modern design
- ✅ **Post Navigation** - Previous/Next links between posts
- ✅ **Search & Filter** - Search posts by keyword or filter by category
- ✅ **Responsive Design** - Works on all devices
- ✅ **Interactive Elements**:
  - Scroll progress bar
  - Back to top button
  - Copy code buttons
  - Image lightbox
  - Keyboard navigation (← → for posts, / for search, ESC to clear)

## Project Structure

```
blog-generator/
├── posts/              # Your Markdown blog posts
├── templates/          # HTML templates (optional)
├── assets/
│   ├── css/           # Stylesheets
│   └── js/            # JavaScript
├── output/            # Generated HTML files (created on run)
├── generate.py        # Main generation script
└── README.md          # This file
```

## Quick Start

### 1. Install Dependencies (Optional)

For better Markdown support, install the `markdown` library:

```bash
pip install markdown
```

Without this, the script will use a basic Markdown converter.

### 2. Create Blog Posts

Add Markdown files to the `posts/` directory with YAML frontmatter:

```markdown
---
title: Your Post Title
date: 2024-03-25
category: Category Name
tags: [tag1, tag2, tag3]
author: Your Name
excerpt: A short description of your post
---

# Your Content Here

Write your post content using **Markdown** syntax.
```

### 3. Generate the Blog

```bash
python generate.py
```

### 4. View Your Blog

Open `output/index.html` in your browser, or serve it locally:

```bash
cd output
python -m http.server 8000
# Then visit http://localhost:8000
```

## Markdown Frontmatter

Each post supports these metadata fields:

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | No | Publication date (YYYY-MM-DD) |
| `category` | No | Post category |
| `tags` | No | Array of tags |
| `author` | No | Author name |
| `excerpt` | No | Short description (auto-generated if not provided) |

## Customization

### Styling

Edit `assets/css/style.css` to change colors, fonts, and layout.

Key CSS variables (in `:root`):
```css
--primary-color: #6366f1;    /* Main accent color */
--bg-color: #0f172a;          /* Background */
--text-primary: #f8fafc;      /* Main text */
--text-secondary: #94a3b8;    /* Secondary text */
```

### JavaScript

Edit `assets/js/main.js` to add or modify interactive features.

### Template

Modify the `generate.py` script to change the HTML structure:
- `generate_html_head()` - HTML head section
- `generate_header()` - Site header/navigation
- `generate_footer()` - Site footer
- `generate_index_page()` - Blog listing page
- `generate_post_page()` - Individual post pages

## Keyboard Shortcuts

When viewing the blog:

| Key | Action |
|-----|--------|
| `/` | Focus search box |
| `ESC` | Clear search |
| `←` | Go to previous post |
| `→` | Go to next post |

## Deployment

The `output/` folder contains a fully static website. You can deploy it to:

- **GitHub Pages** - Push the output folder to a `gh-pages` branch
- **Netlify** - Drag and drop the output folder
- **Vercel** - Connect your repository
- **Any static host** - Just upload the files

## License

MIT License - Feel free to use and modify!
