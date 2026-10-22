(function () {
    const pages = [
        {name: '流列表', href: 'index.html', match: ['', 'index.html']},
        {name: '添加', href: 'add.html', match: ['add.html']},
        {name: '配置', href: 'config.html', match: ['config.html']},
        {name: '日志', href: 'log.html', match: ['log.html']},
        {name: '网络', href: 'net.html', match: ['net.html']},
    ];

    const current = location.pathname.split('/').pop() || 'index.html';

    const links = pages.map(page => {
        const active = page.match.includes(current) ? ' class="active"' : '';
        return `<a href="${page.href}"${active}>${page.name}</a>`;
    }).join('');

    const header = `
        <header class="site-header">
            <div class="site-header-inner">
                <a class="brand" href="index.html" aria-label="go2rtc 首页">
                    <span class="brand-mark">g2</span>
                    <span>go2rtc</span>
                </a>
                <nav class="nav-links" aria-label="主导航">${links}</nav>
                <span class="nav-status"><span class="status-dot online"></span>本地服务</span>
            </div>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', header);

    let toastStack;

    window.toast = function (message, type) {
        if (!toastStack) {
            toastStack = document.createElement('div');
            toastStack.className = 'toast-stack';
            document.body.appendChild(toastStack);
        }

        const item = document.createElement('div');
        item.className = 'toast' + (type ? ' ' + type : '');
        item.textContent = message;
        toastStack.appendChild(item);

        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(6px)';
            item.style.transition = 'opacity .18s ease, transform .18s ease';
            setTimeout(() => item.remove(), 200);
        }, 3200);
    };
})();
