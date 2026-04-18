// 加载作品数据
async function loadWorks() {
    try {
        const response = await fetch('data/works.json');
        const works = await response.json();
        return works;
    } catch (error) {
        console.error('加载作品数据失败:', error);
        return [];
    }
}

// 渲染作品网格
function renderWorks(works, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (works.length === 0) {
        container.innerHTML = '<p style="text-align:center; grid-column:1/-1;">暂无作品</p>';
        return;
    }
    
    container.innerHTML = works.map(work => `
        <div class="gallery-item">
            <img src="${work.image}" alt="${work.title}" loading="lazy">
            <div class="info">
                <div class="title">${work.title}</div>
                <div class="category">${work.category}</div>
            </div>
        </div>
    `).join('');
}

// 精选作品（首页用）
async function renderFeatured() {
    const works = await loadWorks();
    const featured = works.slice(0, 4);
    renderWorks(featured, 'featured-grid');
}

// 全部作品（作品集页用）
let allWorks = [];
async function initPortfolio() {
    allWorks = await loadWorks();
    renderWorks(allWorks, 'portfolio-grid');
    
    // 绑定筛选按钮事件
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮激活状态
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 筛选作品
            const category = btn.dataset.category;
            if (category === 'all') {
                renderWorks(allWorks, 'portfolio-grid');
            } else {
                const filtered = allWorks.filter(work => work.category === category);
                renderWorks(filtered, 'portfolio-grid');
            }
        });
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 首页精选作品
    if (document.getElementById('featured-grid')) {
        renderFeatured();
    }
    
    // 作品集页面
    if (document.getElementById('portfolio-grid')) {
        initPortfolio();
    }
});