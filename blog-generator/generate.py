#!/usr/bin/env python3
"""
Markdown to HTML Blog Generator
Converts Markdown files into a beautiful static blog with navigation.
"""

import os
import re
import json
import shutil
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

# Try to import markdown library, fall back to basic conversion
try:
    import markdown
    from markdown.extensions import fenced_code, tables, toc
    MARKDOWN_AVAILABLE = True
except ImportError:
    MARKDOWN_AVAILABLE = False
    print("Warning: markdown library not installed. Using basic conversion.")
    print("Install with: pip install markdown")


class BlogGenerator:
    def __init__(self, base_dir: str = "."):
        self.base_dir = Path(base_dir).resolve()
        self.posts_dir = self.base_dir / "posts"
        self.templates_dir = self.base_dir / "templates"
        self.output_dir = self.base_dir / "output"
        self.assets_dir = self.base_dir / "assets"
        
        self.posts: List[Dict] = []
        self.categories: set = set()
        
        # Ensure directories exist
        self.posts_dir.mkdir(exist_ok=True)
        self.output_dir.mkdir(exist_ok=True)
        
    def parse_frontmatter(self, content: str) -> Tuple[Dict, str]:
        """Parse YAML frontmatter from markdown content."""
        pattern = r'^---\s*\n(.*?)\n---\s*\n'
        match = re.match(pattern, content, re.DOTALL)
        
        metadata = {}
        body = content
        
        if match:
            frontmatter = match.group(1)
            body = content[match.end():]
            
            # Parse simple key: value pairs
            for line in frontmatter.split('\n'):
                if ':' in line:
                    key, value = line.split(':', 1)
                    key = key.strip()
                    value = value.strip().strip('"\'')
                    
                    # Handle arrays (tags, categories)
                    if value.startswith('[') and value.endswith(']'):
                        value = [v.strip().strip('"\'') for v in value[1:-1].split(',')]
                    
                    metadata[key] = value
        
        return metadata, body
    
    def markdown_to_html(self, content: str) -> str:
        """Convert Markdown to HTML."""
        if MARKDOWN_AVAILABLE:
            md = markdown.Markdown(extensions=[
                'fenced_code',
                'tables',
                'toc',
                'nl2br'
            ])
            return md.convert(content)
        else:
            # Basic markdown conversion
            return self._basic_markdown_to_html(content)
    
    def _basic_markdown_to_html(self, content: str) -> str:
        """Basic markdown to HTML conversion without external library."""
        html = content
        
        # Code blocks
        html = re.sub(
            r'```(\w+)?\n(.*?)```',
            lambda m: f'<pre><code class="language-{m.group(1) or "text"}">{m.group(2)}</code></pre>',
            html,
            flags=re.DOTALL
        )
        
        # Headers
        html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
        html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
        html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
        
        # Bold and Italic
        html = re.sub(r'\*\*\*(.+?)\*\*\*', r'<strong><em>\1</em></strong>', html)
        html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
        html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
        html = re.sub(r'___(.+?)___', r'<strong><em>\1</em></strong>', html)
        html = re.sub(r'__(.+?)__', r'<strong>\1</strong>', html)
        html = re.sub(r'_(.+?)_', r'<em>\1</em>', html)
        
        # Links
        html = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<a href="\2">\1</a>', html)
        
        # Images
        html = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', r'<img src="\2" alt="\1">', html)
        
        # Blockquotes
        html = re.sub(r'^> (.+)$', r'<blockquote>\1</blockquote>', html, flags=re.MULTILINE)
        
        # Unordered lists
        def process_ul(match):
            items = match.group(0)
            items = re.sub(r'^- (.+)$', r'<li>\1</li>', items, flags=re.MULTILINE)
            return f'<ul>{items}</ul>'
        html = re.sub(r'((?:^- .+\n?)+)', process_ul, html, flags=re.MULTILINE)
        
        # Ordered lists
        def process_ol(match):
            items = match.group(0)
            items = re.sub(r'^\d+\. (.+)$', r'<li>\1</li>', items, flags=re.MULTILINE)
            return f'<ol>{items}</ol>'
        html = re.sub(r'((?:^\d+\. .+\n?)+)', process_ol, html, flags=re.MULTILINE)
        
        # Inline code
        html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)
        
        # Horizontal rule
        html = re.sub(r'^---$', r'<hr>', html, flags=re.MULTILINE)
        
        # Paragraphs
        paragraphs = html.split('\n\n')
        new_paragraphs = []
        for p in paragraphs:
            p = p.strip()
            if p and not p.startswith('<'):
                p = f'<p>{p}</p>'
            new_paragraphs.append(p)
        html = '\n'.join(new_paragraphs)
        
        return html
    
    def load_posts(self) -> None:
        """Load all markdown posts from the posts directory."""
        print("Loading posts...")
        
        md_files = list(self.posts_dir.glob("*.md"))
        
        for md_file in md_files:
            content = md_file.read_text(encoding='utf-8')
            metadata, body = self.parse_frontmatter(content)
            
            # Set defaults
            post = {
                'filename': md_file.stem,
                'title': metadata.get('title', md_file.stem.replace('-', ' ').title()),
                'date': metadata.get('date', datetime.now().strftime('%Y-%m-%d')),
                'category': metadata.get('category', 'Uncategorized'),
                'tags': metadata.get('tags', []),
                'excerpt': metadata.get('excerpt', body[:200].replace('#', '').strip() + '...'),
                'author': metadata.get('author', 'Anonymous'),
                'content': body,
                'html_content': self.markdown_to_html(body)
            }
            
            # Ensure tags is a list
            if isinstance(post['tags'], str):
                post['tags'] = [t.strip() for t in post['tags'].split(',')]
            
            self.posts.append(post)
            self.categories.add(post['category'])
        
        # Sort posts by date (newest first)
        self.posts.sort(key=lambda x: x['date'], reverse=True)
        print(f"Loaded {len(self.posts)} posts")
    
    def get_post_index(self, filename: str) -> int:
        """Get the index of a post by filename."""
        for i, post in enumerate(self.posts):
            if post['filename'] == filename:
                return i
        return -1
    
    def get_adjacent_posts(self, filename: str) -> Tuple[Optional[Dict], Optional[Dict]]:
        """Get previous and next posts for navigation."""
        idx = self.get_post_index(filename)
        if idx == -1:
            return None, None
        
        prev_post = self.posts[idx + 1] if idx < len(self.posts) - 1 else None
        next_post = self.posts[idx - 1] if idx > 0 else None
        
        return prev_post, next_post
    
    def generate_html_head(self, title: str, is_post: bool = False) -> str:
        """Generate HTML head section."""
        base_path = '.' if is_post else '.'
        return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="{base_path}/assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
'''
    
    def generate_header(self, current_page: str = 'home') -> str:
        """Generate site header."""
        return f'''
<header class="header">
    <div class="container header-content">
        <a href="index.html" class="logo">📚 MyBlog</a>
        <nav class="nav">
            <a href="index.html" {'class="active"' if current_page == 'home' else ''}>Home</a>
            <a href="#posts">Posts</a>
            <a href="#about">About</a>
        </nav>
    </div>
</header>
'''
    
    def generate_footer(self) -> str:
        """Generate site footer."""
        return '''
<footer class="footer">
    <div class="container">
        <p>Built with ❤️ using Markdown to HTML Generator</p>
        <p>&copy; 2024 MyBlog. All rights reserved.</p>
    </div>
</footer>
<script src="./assets/js/main.js"></script>
</body>
</html>
'''
    
    def generate_index_page(self) -> str:
        """Generate the main index page with all posts."""
        print("Generating index page...")
        
        html = self.generate_html_head("My Blog - Home")
        html += '<body>\n'
        html += self.generate_header('home')
        
        # Hero section
        html += '''
<section class="hero">
    <div class="container">
        <h1>Welcome to My Blog</h1>
        <p>Exploring ideas, sharing knowledge, and documenting the journey through code and creativity.</p>
    </div>
</section>
'''
        
        # Search and filter controls
        html += '''
<div class="container">
    <div class="controls">
        <div class="search-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" placeholder="Search posts... (Press / to focus)">
        </div>
        <div class="filter-tags">
            <span class="tag active" data-category="all">All</span>
'''
        
        for category in sorted(self.categories):
            html += f'            <span class="tag" data-category="{category}">{category}</span>\n'
        
        html += '''        </div>
    </div>
    
    <div class="blog-grid" id="posts">
'''
        
        # Generate post cards
        for post in self.posts:
            tags_html = ''.join([f'<span class="article-tag">{tag}</span>' for tag in post['tags'][:3]])
            
            html += f'''
        <article class="blog-card" data-category="{post['category']}" onclick="window.location.href='posts/{post['filename']}.html'">
            <div class="blog-card-image">📝</div>
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-card-category">{post['category']}</span>
                    <span>{post['date']}</span>
                </div>
                <h3>{post['title']}</h3>
                <p>{post['excerpt']}</p>
            </div>
        </article>
'''
        
        html += '''    </div>
</div>
'''
        
        html += self.generate_footer()
        return html
    
    def generate_post_page(self, post: Dict) -> str:
        """Generate an individual post page."""
        print(f"Generating post: {post['title']}")
        
        prev_post, next_post = self.get_adjacent_posts(post['filename'])
        
        html = self.generate_html_head(f"{post['title']} - My Blog", is_post=True)
        html += '<body>\n'
        html += self.generate_header()
        
        # Article header
        tags_html = ''.join([f'<span class="article-tag">{tag}</span>' for tag in post['tags']])
        
        html += f'''
<article>
    <div class="container">
        <a href="../index.html" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Posts
        </a>
    </div>
    
    <header class="article-header">
        <div class="article-meta">
            <span class="article-category">{post['category']}</span>
            <span>{post['date']}</span>
            <span>By {post['author']}</span>
        </div>
        <h1>{post['title']}</h1>
        <div class="article-tags">
            {tags_html}
        </div>
    </header>
    
    <div class="article-content">
        {post['html_content']}
    </div>
    
    <nav class="post-navigation">
'''
        
        # Previous post link
        if prev_post:
            html += f'''
        <a href="{prev_post['filename']}.html" class="nav-post prev">
            <div class="nav-post-label">← Previous Post</div>
            <div class="nav-post-title">{prev_post['title']}</div>
        </a>
'''
        else:
            html += '<div></div>\n'
        
        # Next post link
        if next_post:
            html += f'''
        <a href="{next_post['filename']}.html" class="nav-post next">
            <div class="nav-post-label">Next Post →</div>
            <div class="nav-post-title">{next_post['title']}</div>
        </a>
'''
        else:
            html += '<div></div>\n'
        
        html += '''    </nav>
</article>
'''
        
        html += self.generate_footer()
        return html
    
    def copy_assets(self) -> None:
        """Copy assets to output directory."""
        print("Copying assets...")
        
        output_assets = self.output_dir / "assets"
        if output_assets.exists():
            shutil.rmtree(output_assets)
        
        if self.assets_dir.exists():
            shutil.copytree(self.assets_dir, output_assets)
    
    def generate(self) -> None:
        """Run the complete generation process."""
        print("=" * 50)
        print("Blog Generator Starting...")
        print("=" * 50)
        
        # Load posts
        self.load_posts()
        
        if not self.posts:
            print("No posts found! Add .md files to the 'posts' directory.")
            return
        
        # Clear output directory
        if self.output_dir.exists():
            shutil.rmtree(self.output_dir)
        self.output_dir.mkdir()
        
        # Create posts subdirectory
        posts_output = self.output_dir / "posts"
        posts_output.mkdir()
        
        # Copy assets
        self.copy_assets()
        
        # Generate index page
        index_html = self.generate_index_page()
        (self.output_dir / "index.html").write_text(index_html, encoding='utf-8')
        
        # Generate individual post pages
        for post in self.posts:
            post_html = self.generate_post_page(post)
            (posts_output / f"{post['filename']}.html").write_text(post_html, encoding='utf-8')
        
        # Generate posts.json for potential API use
        posts_json = [
            {
                'title': p['title'],
                'date': p['date'],
                'category': p['category'],
                'tags': p['tags'],
                'excerpt': p['excerpt'],
                'url': f"posts/{p['filename']}.html"
            }
            for p in self.posts
        ]
        (self.output_dir / "posts.json").write_text(
            json.dumps(posts_json, indent=2), 
            encoding='utf-8'
        )
        
        print("=" * 50)
        print(f"✅ Generated {len(self.posts)} posts successfully!")
        print(f"📁 Output directory: {self.output_dir}")
        print(f"🌐 Open {self.output_dir}/index.html in your browser")
        print("=" * 50)


def main():
    """Main entry point."""
    generator = BlogGenerator()
    generator.generate()


if __name__ == "__main__":
    main()
