/* ============ SMOOTH SCROLL + ACTIVE NAV LINK ============ */

const navLinks = document.querySelectorAll('.header-navegacion-link');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function highlightActiveNav() {
    const sections = ['home', 'about', 'quality', 'skills', 'portfolio', 'contact'];
    const scrollPos = window.scrollY;
    let current = sections[0];

    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 120 <= scrollPos) {
            current = id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', highlightActiveNav);
highlightActiveNav();

/* ============ HOME TYPING EFFECT ============ */

const typedLine = document.getElementById('typed-line');

if (typedLine) {
    const fullText = "Hello I'm";
    let i = 0;

    function typeStep() {
        typedLine.textContent = fullText.slice(0, i);
        if (i < fullText.length) {
            i++;
            setTimeout(typeStep, 120);
        }
    }
    typeStep();
}

/* ============ PORTFOLIO ============ */

const portfolioData = [
    {
        index: 0, title: 'Axol', label: 'Research',
        summary: 'An interactive learning reflection environment where hand gestures and sensors drive the experience.',
        narrative: 'Axol explores how gesture, sensor data, and machine learning can make classroom reflection tangible, playful, and personal.',
        columns: [
            { heading: 'Motivation', text: 'Driven to make classroom reflection tangible, playful, and personal for every learner.' },
            { heading: 'Approach', text: 'A hand-gesture-driven system where sensor data feeds a learning experience students shape in real time.' },
            { heading: 'Findings', text: 'An open experiment blending sensing, ML, and interaction to turn reflection into a lived practice.' },
        ],
        tags: ['ml', 'sensors'], image: 'assets/axol.gif', demo: '#', repo: '#', page: 'axol.html'
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
    }
];

const grid = document.getElementById('portfolio-grid');
const detail = document.getElementById('portfolio-detail');

function renderCard(entry) {
    return `
        <article class="portafolio-card" data-index="${entry.index}">
            <div class="portafolio-card-media">
                <img src="${entry.image}" alt="${entry.title} thumbnail" loading="lazy">
                <span class="portafolio-badge"><span class="badge-shape"></span></span>
            </div>
            <div class="portafolio-card-body">
                <span class="portafolio-label">${entry.label}</span>
                <h3 class="portafolio-title">${entry.title}</h3>
                <p class="portafolio-summary">${entry.summary}</p>
                <div class="portafolio-metadata">
                    <span class="portafolio-group">AleHdzB Lab</span>
                    <span class="portafolio-author">Lead · A. Hernandez</span>
                    <div class="portafolio-tags">${entry.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
            </div>
        </article>
    `;
}

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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (grid && detail) {
    grid.innerHTML = portfolioData.map(renderCard).join('');

    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.portafolio-card');
        if (card) {
            const entry = portfolioData[parseInt(card.dataset.index, 10)];
            if (entry) {
                if (entry.page) {
                    window.location.href = entry.page;
                } else {
                    renderDetail(entry);
                }
            }
        }
    });
}

/* ============ GITHUB CONTRIBUTION GRAPH ============ */

const githubFull = document.getElementById('github-full');

if (githubFull) {
    const GITHUB_USER = 'AleHdzB';
    const YEAR = new Date().getFullYear();
    githubFull.classList.add('loading');

    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=${YEAR}`)
        .then((res) => {
            if (!res.ok) throw new Error('GitHub API error');
            return res.json();
        })
        .then((data) => {
            githubFull.classList.remove('loading');
            const days = data.contributions || [];
            if (!days.length) return;

            const byDate = new Map(days.map((d) => [d.date, d]));
            const pad = (n) => String(n).padStart(2, '0');
            const iso = (dayNum) => {
                const dt = new Date(YEAR, 0, dayNum);
                return `${YEAR}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`;
            };
            const isLeap = (YEAR % 4 === 0 && YEAR % 100 !== 0) || YEAR % 400 === 0;
            const totalDays = isLeap ? 366 : 365;

            const firstDow = new Date(YEAR, 0, 1).getDay(); // 0 = Sun

            const cells = [];
            const colMonth = [];
            let col = 0;
            let row = firstDow;

            for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
                const key = iso(dayNum);
                const d = byDate.get(key) || { date: key, count: 0, level: 0 };
                cells.push({ col, row, level: d.level, count: d.count, date: d.date });

                if (col >= colMonth.length) {
                    const m = new Date(YEAR, 0, dayNum).getMonth();
                    colMonth.push(m);
                }

                if (row === 6) {
                    row = 0;
                    col++;
                } else {
                    row++;
                }
            }

            const numCols = colMonth.length;

            const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

            let lastMonth = -1;
            let monthStart = 0;
            const monthSpans = [];
            for (let c = 0; c <= numCols; c++) {
                const m = c < numCols ? colMonth[c] : -1;
                if (c < numCols && m === lastMonth) continue;
                if (lastMonth !== -1) {
                    monthSpans.push({ m: lastMonth, start: monthStart, end: c });
                }
                lastMonth = m;
                monthStart = c;
            }
            if (lastMonth !== -1 && monthStart < numCols) {
                monthSpans.push({ m: lastMonth, start: monthStart, end: numCols });
            }

            const monthsHtml = monthSpans.map((s) =>
                `<span class="github-month" style="grid-column: ${s.start + 2} / ${s.end + 2}">${monthNames[s.m]}</span>`
            ).join('');

            const cellHtml = cells.map((c) => `
                <span class="github-cell" data-level="${c.level}"
                    title="${c.date}: ${c.count} contribution${c.count === 1 ? '' : 's'}"
                    style="grid-column: ${c.col + 2}; grid-row: ${c.row + 1}"></span>
            `).join('');

            const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            const weekHtml = [1, 3, 5].map((r) =>
                `<span class="github-week" style="grid-column: 1; grid-row: ${r + 1}">${weekdays[r]}</span>`
            ).join('');

            const legendLevels = [0, 1, 2, 3, 4].map((l) =>
                `<span class="github-cell" data-level="${l}"></span>`
            ).join('');

            const numColsBase = numCols + 1;
            githubFull.innerHTML = `
                <div class="github-month-row"
                     style="grid-template-columns: 44px repeat(${numCols}, 14px)">
                    ${monthsHtml}
                </div>
                <div class="github-grid"
                     style="grid-template-columns: 44px repeat(${numCols}, 14px)">
                    ${weekHtml}
                    ${cellHtml}
                </div>
                <div class="github-legend">
                    <span class="legend-label">Less</span>
                    ${legendLevels}
                    <span class="legend-label">More</span>
                </div>
            `;
        })
        .catch(() => {
            githubFull.classList.remove('loading');
            githubFull.innerHTML = '<p class="github-error">Could not load GitHub contributions.</p>';
        });
}
