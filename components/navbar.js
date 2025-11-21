class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    background: var(--card-bg);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    padding: 1rem;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                }
                .nav-container {
                    display: flex;
                    gap: 0.5rem;
                    max-width: 1200px;
                    width: 100%;
                }
                .nav-item {
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.375rem;
                    transition: all 0.3s ease;
                    text-align: center;
                    font-weight: 600;
                    color: var(--text);
                    background: transparent;
                    text-decoration: none;
                    display: inline-block;
                }
                .nav-item:hover {
                    background: var(--secondary);
                    color: white;
                }
                .nav-item.active {
                    background: var(--primary);
                    color: white;
                }
                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                    }
                    .nav-item {
                        width: 100%;
                    }
                }
            </style>
            <div class="nav-container">
                <a href="/lab10.html" class="nav-item">Лаборатория 10</a>
                <a href="/lab11-12.html" class="nav-item">Лаборатория 11-12</a>
                <a href="/lab13-14.html" class="nav-item">Лаборатория 13-14</a>
                <a href="/lab17.html" class="nav-item">Лаборатория 17</a>
                <a href="/lab18-19.html" class="nav-item">Лаборатория 18-19</a>
                <a href="/lab20.html" class="nav-item">Лаборатория 20</a>
                <a href="/lab21-22.html" class="nav-item">Лаборатория 21-22</a>
            </div>
        `;

        // Динамически ставим active по текущему URL
        const navItems = this.shadowRoot.querySelectorAll('.nav-item');
        const currentPath = window.location.pathname; // /lab11-12.html

        navItems.forEach(item => {
            if (item.getAttribute('href') === currentPath) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
