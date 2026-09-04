const header = document.getElementById('header');

function onScroll() {
    if (header) {
        header.classList.toggle('visible', window.scrollY > 100);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', onScroll);
onScroll();

/* ============ PORTFOLIO DETAIL VIEW ============ */

const portfolioData = [
    {
        index: 0, title: 'Project One', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['ai', 'vision'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 1, title: 'Project Two', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['react', 'web'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 2, title: 'Project Three', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['ml', 'data'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 3, title: 'Project Four', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['css', 'ui'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 4, title: 'Project Five', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['cv', 'vision'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 5, title: 'Project Six', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['node', 'api'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 6, title: 'Project Seven', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['nlg', 'nlp'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 7, title: 'Project Eight', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['react', 'webgl'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 8, title: 'Project Nine', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['cv', 'depth'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 9, title: 'Project Ten', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['rust', 'wasm'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 10, title: 'Project Eleven', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['rl', 'robotics'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 11, title: 'Project Twelve', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['next', 'ssr'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 12, title: 'Project Thirteen', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['diffusion', 'generative'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 13, title: 'Project Fourteen', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['docker', 'devops'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 14, title: 'Project Fifteen', label: 'Research',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'A research narrative exploring how a concise hypothesis leads to reproducible experiments, careful evaluation, and clear communication of findings.',
        columns: [
            { heading: 'Motivation', text: 'Driven by an open research question about modeling how systems grow and adapt under real-world constraints.' },
            { heading: 'Approach', text: 'Iterative experimentation combining principled baselines with a novel system design validated on public benchmarks.' },
            { heading: 'Findings', text: 'A reproducible result set, open code, and a documented path for the community to build on these contributions.' },
        ],
        tags: ['audio', 'signal'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    },
    {
        index: 15, title: 'Project Sixteen', label: 'Engineering',
        summary: 'A concise two to three line description of the research direction and its contribution.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['typescript', 'perf'], image: 'assets/YOIABN.png', demo: '#', repo: '#'
    }
];

const grid = document.getElementById('portfolio-grid');
const detail = document.getElementById('portfolio-detail');

function renderDetail(entry) {
    detail.innerHTML = `
        <button class="portafolio-back" id="portfolio-back">← Back to Portfolio Overview</button>
        <div class="portafolio-detail-hero">
            <img src="${entry.image}" alt="${entry.title}">
            <span class="portafolio-badge portafolio-detail-badge"><span class="badge-shape"></span></span>
        </div>
        <div class="portafolio-detail-body">
            <span class="portafolio-detail-label">${entry.label}</span>
            <h3 class="portafolio-detail-title">${entry.title}</h3>
            <p class="portafolio-detail-summary">${entry.summary}</p>
            <p class="portafolio-narrative">${entry.narrative}</p>
            <div class="portafolio-columns">
                ${entry.columns.map(c => `
                    <div class="portafolio-column">
                        <h4>${c.heading}</h4>
                        <p>${c.text}</p>
                    </div>
                `).join('')}
            </div>
            <div class="portafolio-tech">
                ${entry.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="portafolio-actions">
                <a class="portafolio-btn portafolio-btn-primary" href="${entry.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a class="portafolio-btn portafolio-btn-secondary" href="${entry.repo}" target="_blank" rel="noopener noreferrer">View Repository</a>
            </div>
        </div>
    `;
    grid.hidden = true;
    detail.hidden = false;

    document.getElementById('portfolio-back').addEventListener('click', () => {
        detail.hidden = true;
        grid.hidden = false;
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (grid && detail) {
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.portafolio-card');
        if (card) {
            const entry = portfolioData[parseInt(card.dataset.index, 10)];
            if (entry) renderDetail(entry);
        }
    });
}
