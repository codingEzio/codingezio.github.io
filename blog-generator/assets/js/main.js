// ===== Blog Navigation & Interactivity =====

(function() {
    'use strict';

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    `;
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // ===== Search Functionality =====
    const searchInput = document.querySelector('.search-box input');
    const blogCards = document.querySelectorAll('.blog-card');
    const tags = document.querySelectorAll('.tag');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            filterPosts(query, getActiveCategory());
        });
    }

    // ===== Category Filter =====
    if (tags.length > 0) {
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                const isActive = tag.classList.contains('active');
                
                // Reset all tags
                tags.forEach(t => t.classList.remove('active'));
                
                // Toggle active state
                if (!isActive) {
                    tag.classList.add('active');
                }
                
                const category = getActiveCategory();
                const query = searchInput ? searchInput.value.toLowerCase() : '';
                filterPosts(query, category);
            });
        });
    }

    function getActiveCategory() {
        const activeTag = document.querySelector('.tag.active');
        return activeTag ? activeTag.dataset.category : 'all';
    }

    function filterPosts(query, category) {
        let visibleCount = 0;
        
        blogCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const excerpt = card.querySelector('p').textContent.toLowerCase();
            const cardCategory = card.dataset.category;
            
            const matchesQuery = !query || title.includes(query) || excerpt.includes(query);
            const matchesCategory = category === 'all' || cardCategory === category;
            
            if (matchesQuery && matchesCategory) {
                card.style.display = 'block';
                card.style.animation = `fadeIn 0.4s ease-out forwards`;
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results message
        let noResults = document.querySelector('.no-results');
        if (visibleCount === 0) {
            if (!noResults) {
                noResults = document.createElement('div');
                noResults.className = 'no-results';
                noResults.innerHTML = `
                    <h3>No posts found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                `;
                document.querySelector('.blog-grid').after(noResults);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    // ===== Reading Progress Bar =====
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 1000;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== Copy Code Block =====
    document.querySelectorAll('pre').forEach(pre => {
        const button = document.createElement('button');
        button.className = 'copy-code';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
            <span>Copy</span>
        `;
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 6px 12px;
            background: var(--bg-hover);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-secondary);
            font-size: 0.8rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);

        button.addEventListener('click', async () => {
            const code = pre.querySelector('code');
            try {
                await navigator.clipboard.writeText(code.textContent);
                button.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Copied!</span>
                `;
                button.style.color = '#10b981';
                
                setTimeout(() => {
                    button.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                        </svg>
                        <span>Copy</span>
                    `;
                    button.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });

    // ===== Keyboard Navigation =====
    document.addEventListener('keydown', (e) => {
        // ESC to clear search
        if (e.key === 'Escape' && searchInput) {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.blur();
        }

        // / to focus search
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }

        // Arrow keys for post navigation
        const prevLink = document.querySelector('.nav-post.prev');
        const nextLink = document.querySelector('.nav-post.next');
        
        if (e.key === 'ArrowLeft' && prevLink) {
            window.location.href = prevLink.href;
        }
        if (e.key === 'ArrowRight' && nextLink) {
            window.location.href = nextLink.href;
        }
    });

    // ===== Image Lightbox =====
    document.querySelectorAll('.article-content img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                cursor: zoom-out;
                animation: fadeIn 0.3s ease-out;
            `;
            lightbox.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%; border-radius: 8px;">`;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });

    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.blog-card, .article-content > *').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ===== Console Easter Egg =====
    console.log('%c📝 Blog System', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cBuilt with ❤️ using Markdown to HTML converter', 'font-size: 14px; color: #94a3b8;');

})();
