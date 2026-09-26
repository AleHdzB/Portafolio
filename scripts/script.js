/* ============ HEADER SCROLL EFFECT ============ */

const header = document.getElementById('header');

function updateHeaderOnScroll() {
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }
}

window.addEventListener('scroll', updateHeaderOnScroll);
updateHeaderOnScroll();

/* ============ HAMBURGER MENU ============ */

const menuBtn = document.getElementById('header-menu');
const navMenu = document.getElementById('header-navegacion');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        menuBtn.classList.toggle('active', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    navMenu.querySelectorAll('.header-navegacion-link').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Open menu');
        });
    });
}

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
    const sections = ['home', 'about', 'skills', 'portfolio', 'credentials', 'contact'];
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
const typedTagline = document.getElementById('typed-tagline');
const terminalCursor = document.getElementById('terminal-cursor');
const taglineWords = [
    'Software Engineer',
    'Backend Developer',
    'Embedded Systems Engineer',
    'IoT Developer',
    'R&D Engineer',
];

if (typedTagline) typedTagline.textContent = '';

if (typedLine) {
    const fullText = "Hello I'm";
    let i = 0;

    function typeStep() {
        typedLine.textContent = fullText.slice(0, i);
        if (i < fullText.length) {
            i++;
            setTimeout(typeStep, 120);
        } else if (typedTagline) {
            setTimeout(startTaglineLoop, 400);
        }
    }

    function startTaglineLoop() {
        if (terminalCursor && typedTagline.parentElement) {
            typedTagline.parentElement.appendChild(terminalCursor);
        }

        const TYPE_SPEED = 60;
        const ERASE_SPEED = 30;
        const READ_TIME = 2100;

        let wordIndex = 0;
        let charIndex = 0;
        let typing = true;
        let holdTimer = null;

        function showWord() {
            typedTagline.textContent = taglineWords[wordIndex].slice(0, charIndex);
        }

        function tick() {
            const word = taglineWords[wordIndex];

            if (typing) {
                charIndex++;
                showWord();
                if (charIndex < word.length) {
                    setTimeout(tick, TYPE_SPEED);
                } else {
                    holdTimer = setTimeout(() => {
                        typing = false;
                        tick();
                    }, READ_TIME);
                }
            } else {
                charIndex--;
                showWord();
                if (charIndex > 0) {
                    setTimeout(tick, ERASE_SPEED);
                } else {
                    wordIndex = (wordIndex + 1) % taglineWords.length;
                    typing = true;
                    setTimeout(tick, 150);
                }
            }
        }

        tick();
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
        tags: ['ml', 'sensors'], image: 'assets/Axol/axol.gif', demo: '#', repo: '#', page: 'axol.html'
    },
    {
        index: 1, title: 'UR Robot Controller', label: 'Engineering',
        summary: 'A browser-based controller for a Universal Robots arm, supporting joint jogging, pick-and-place routines, and live motion monitoring.',
        narrative: 'An engineering narrative describing how a production system was designed, shipped, and maintained to solve a concrete product problem.',
        columns: [
            { heading: 'Scope', text: 'Define the system boundary, user needs, and the measurable outcomes the product must deliver.' },
            { heading: 'Build', text: 'Ship a modular, testable architecture with clear interfaces, observability, and performance budgets.' },
            { heading: 'Outcome', text: 'A deployed system with metrics demonstrating reliability, maintainability, and measurable product impact.' },
        ],
        tags: ['robotics', 'web'], image: 'assets/UR_Robot_Controller/ur_controller_complete.gif', demo: '#', repo: '#', page: 'ur_robot_controller.html'
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
        tags: ['ml', 'data'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
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
        tags: ['css', 'ui'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
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
        tags: ['cv', 'vision'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
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
        tags: ['node', 'api'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
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
        tags: ['nlg', 'nlp'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
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
        tags: ['react', 'webgl'], image: 'assets/ISS_APP/YOIABN.png', demo: '#', repo: '#'
    }
];

const grid = document.getElementById('portfolio-grid');
const detail = document.getElementById('portfolio-detail');

function renderCard(entry) {
    return `
        <article class="portafolio-card" data-index="${entry.index}">
            <div class="portafolio-card-media">
                <img src="${entry.image}" alt="${entry.title} thumbnail" loading="lazy">
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
        <button class="portafolio-back" id="portfolio-back">← Back to Projects Overview</button>
        <div class="portafolio-detail-hero">
            <img src="${entry.image}" alt="${entry.title}">
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

/* ============ GITHUB REPO COUNT (STATS) ============ */

const GITHUB_STATS_API = ''; // e.g. 'https://your-api.onrender.com' — your github-portfolio-api deploy (includes private repos)
const GITHUB_STATS_USER = 'AleHdzB';
const STATIC_REPO_COUNT = '40+';

async function loadRepoCount() {
    const valueEl = document.getElementById('stat-repos-value');
    if (!valueEl) return;

    const setCount = (n) => {
        valueEl.textContent = typeof n === 'number' ? n : STATIC_REPO_COUNT;
    };

    try {
        if (GITHUB_STATS_API) {
            const res = await fetch(`${GITHUB_STATS_API}/user/${GITHUB_STATS_USER}`);
            if (!res.ok) throw new Error('stats API error');
            const data = await res.json();
            const total = data.aggregates && data.aggregates.total_repos;
            if (typeof total === 'number') {
                setCount(total);
                return;
            }
        }
        const res = await fetch(`https://api.github.com/users/${GITHUB_STATS_USER}`);
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        setCount(data.public_repos);
    } catch (_err) {
        setCount(STATIC_REPO_COUNT);
    }
}

loadRepoCount();

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

            const yearTotal = (data.total && data.total[YEAR]) || 0;
            const totalsHtml = `<span class="github-total">${yearTotal} contributions in ${YEAR}</span>`;

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
                <div class="github-footer">
                    <div class="github-totals">${totalsHtml}</div>
                    <div class="github-legend">
                        <span class="legend-label">Less</span>
                        ${legendLevels}
                        <span class="legend-label">More</span>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            githubFull.classList.remove('loading');
            githubFull.innerHTML = '<p class="github-error">Could not load GitHub contributions.</p>';
        });
}

/* ============ SKILLS ICONS GRID ============ */

const DEVICON_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const skillsData = [
    { name: 'JavaScript', category: 'backend', slug: 'javascript', version: 'original', display: 'JavaScript', level: 90 },
    { name: 'TypeScript', category: 'backend', slug: 'typescript', version: 'original', display: 'TypeScript', level: 85 },
    { name: 'Node.js', category: 'backend', slug: 'nodejs', version: 'original', display: 'Node.js', level: 80 },
    { name: 'Express', category: 'backend', slug: 'express', version: 'original', display: 'Express', level: 75 },
    { name: 'Python', category: 'backend', slug: 'python', version: 'original', display: 'Python', level: 85 },
    { name: 'Java', category: 'backend', slug: 'java', version: 'original', display: 'Java', level: 70 },
    { name: 'Go', category: 'backend', slug: 'go', version: 'original', display: 'Go', level: 65 },
    { name: 'PHP', category: 'backend', slug: 'php', version: 'original', display: 'PHP', level: 60 },
    { name: 'Spring', category: 'backend', slug: 'spring', version: 'original', display: 'Spring', level: 55 },
    { name: 'FastAPI', category: 'backend', slug: 'fastapi', version: 'original', display: 'FastAPI', level: 65 },

    { name: 'HTML5', category: 'frontend', slug: 'html5', version: 'original', display: 'HTML5', level: 95 },
    { name: 'CSS3', category: 'frontend', slug: 'css3', version: 'original', display: 'CSS3', level: 90 },
    { name: 'React', category: 'frontend', slug: 'react', version: 'original', display: 'React', level: 85 },
    { name: 'Vue.js', category: 'frontend', slug: 'vuejs', version: 'original', display: 'Vue.js', level: 70 },
    { name: 'Angular', category: 'frontend', slug: 'angular', version: 'original', display: 'Angular', level: 60 },
    { name: 'Next.js', category: 'frontend', slug: 'nextjs', version: 'original', display: 'Next.js', level: 75 },
    { name: 'Tailwind CSS', category: 'frontend', slug: 'tailwindcss', version: 'original-wordmark', display: 'Tailwind', level: 88 },
    { name: 'Sass', category: 'frontend', slug: 'sass', version: 'original', display: 'Sass', level: 80 },
    { name: 'Bootstrap', category: 'frontend', slug: 'bootstrap', version: 'original', display: 'Bootstrap', level: 85 },
    { name: 'Vite', category: 'frontend', slug: 'vite', version: 'original', display: 'Vite', level: 70 },

    { name: 'MySQL', category: 'database', slug: 'mysql', version: 'original', display: 'MySQL', level: 85 },
    { name: 'PostgreSQL', category: 'database', slug: 'postgresql', version: 'original', display: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', category: 'database', slug: 'mongodb', version: 'original', display: 'MongoDB', level: 75 },
    { name: 'Redis', category: 'database', slug: 'redis', version: 'original', display: 'Redis', level: 60 },
    { name: 'SQLite', category: 'database', slug: 'sqlite', version: 'original', display: 'SQLite', level: 85 },
    { name: 'Firebase', category: 'database', slug: 'firebase', version: 'original', display: 'Firebase', level: 65 },

    { name: 'Git', category: 'devops', slug: 'git', version: 'original', display: 'Git', level: 90 },
    { name: 'GitHub', category: 'devops', slug: 'github', version: 'original', display: 'GitHub', level: 90 },
    { name: 'Docker', category: 'devops', slug: 'docker', version: 'original', display: 'Docker', level: 80 },
    { name: 'Kubernetes', category: 'devops', slug: 'kubernetes', version: 'original', display: 'K8s', level: 55 },
    { name: 'Linux', category: 'devops', slug: 'linux', version: 'original', display: 'Linux', level: 75 },
    { name: 'Nginx', category: 'devops', slug: 'nginx', version: 'original', display: 'Nginx', level: 60 },
    { name: 'GitHub Actions', category: 'devops', slug: 'githubactions', version: 'original', display: 'Actions', level: 70 },
    { name: 'Terraform', category: 'devops', slug: 'terraform', version: 'original', display: 'Terraform', level: 50 },
    { name: 'AWS', category: 'devops', slug: 'amazonwebservices', version: 'original-wordmark', display: 'AWS', level: 55 },

    { name: 'TensorFlow', category: 'ai', slug: 'tensorflow', version: 'original', display: 'TensorFlow', level: 70 },
    { name: 'PyTorch', category: 'ai', slug: 'pytorch', version: 'original', display: 'PyTorch', level: 65 },
    { name: 'Pandas', category: 'ai', slug: 'pandas', version: 'original', display: 'Pandas', level: 85 },
    { name: 'NumPy', category: 'ai', slug: 'numpy', version: 'original', display: 'NumPy', level: 85 },
    { name: 'Keras', category: 'ai', slug: 'keras', version: 'original', display: 'Keras', level: 60 },
    { name: 'Jupyter', category: 'ai', slug: 'jupyter', version: 'original', display: 'Jupyter', level: 90 },
    { name: 'OpenCV', category: 'ai', slug: 'opencv', version: 'original', display: 'OpenCV', level: 65 },
];

const skillsSlot = document.getElementById('skills-grid');
const skillsGrid = document.querySelector('#skills-grid .skills-grid-inner');
const skillsFilterBtns = document.querySelectorAll('.skill-filtro');
let activeSkillFilter = 'all';
let skillsPendingTimer = null;

function renderSkills() {
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skillsData.map((tech) => {
        const src = `${DEVICON_URL}${tech.slug}/${tech.slug}-${tech.version}.svg`;
        const duration = (2.6 + Math.random() * 2.2).toFixed(2);
        const delay = (-Math.random() * 4).toFixed(2);
        return `
            <button class="skill-card" type="button" data-category="${tech.category}" data-name="${tech.display}">
                <span class="skill-card-inner" style="animation-duration:${duration}s;animation-delay:${delay}s">
                    <img src="${src}" alt="${tech.display} logo" loading="lazy" title="${tech.display}">
                </span>
                <span class="skill-card-name">${tech.display}</span>
            </button>`;
    }).join('');
}

function cardMatches(card, filter) {
    return filter === 'all' || card.dataset.category === filter;
}

function reserveSkillsHeight() {
    if (!skillsSlot) return;
    skillsSlot.style.height = '';
    skillsSlot.querySelectorAll('.skill-card').forEach((c) => {
        c.style.display = '';
        c.style.transform = '';
        c.style.opacity = '';
        c.style.transition = '';
        c.classList.remove('skill-leave');
    });
    const h = skillsGrid.offsetHeight;
    skillsSlot.style.height = `${h}px`;
}

function layoutSkillsFilter(filter, animate = true) {
    if (!skillsGrid) return;

    if (skillsPendingTimer) {
        clearTimeout(skillsPendingTimer);
        skillsPendingTimer = null;
    }

    const cards = [...skillsGrid.querySelectorAll('.skill-card')];
    const shown = cards.filter((c) => cardMatches(c, filter));
    const hidden = cards.filter((c) => !cardMatches(c, filter));
    const wasHidden = new Map(cards.map((c) => [c, c.style.display === 'none']));

    if (!animate) {
        shown.forEach((c) => {
            c.style.display = '';
            c.style.transform = '';
            c.style.opacity = '';
            c.style.transition = '';
            c.classList.remove('skill-leave');
        });
        hidden.forEach((c) => {
            c.style.display = 'none';
            c.style.transform = '';
            c.style.opacity = '';
            c.style.transition = '';
            c.classList.remove('skill-leave');
        });
        return;
    }

    hidden.forEach((c) => c.classList.add('skill-leave'));
    const startRects = shown.map((c) => c.getBoundingClientRect());

    skillsPendingTimer = setTimeout(() => {
        skillsPendingTimer = null;
        hidden.forEach((c) => {
            c.classList.remove('skill-leave');
            c.style.display = 'none';
        });
        shown.forEach((c) => {
            if (wasHidden.get(c)) c.style.display = '';
        });
        const endRects = shown.map((c) => c.getBoundingClientRect());

        shown.forEach((c, i) => {
            if (wasHidden.get(c)) {
                c.style.transition = 'none';
                c.style.transform = 'scale(0.6)';
                c.style.opacity = '0';
                void c.offsetWidth;
                c.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.15), opacity 0.5s ease';
                c.style.transform = 'scale(1)';
                c.style.opacity = '1';
            } else {
                const dx = startRects[i].left - endRects[i].left;
                const dy = startRects[i].top - endRects[i].top;
                c.style.transition = 'none';
                c.style.transform = `translate(${dx}px, ${dy}px) scale(0.7)`;
                c.style.opacity = '0.15';
                void c.offsetWidth;
                c.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.15), opacity 0.5s ease';
                c.style.transform = 'translate(0, 0) scale(1)';
                c.style.opacity = '1';
            }
        });

        setTimeout(() => {
            shown.forEach((c) => {
                c.style.transition = '';
                c.style.transform = '';
                c.style.opacity = '';
            });
        }, 600);
    }, 340);
}

function applySkillFilter(filter, target) {
    if (filter === activeSkillFilter) return;
    activeSkillFilter = filter;

    skillsFilterBtns.forEach((btn) => btn.classList.toggle('is-active', btn === target));
    layoutSkillsFilter(filter);
}

function initSkills() {
    renderSkills();
    if (!skillsSlot) return;

    const skillStat = document.getElementById('stat-skills');
    if (skillStat) skillStat.textContent = skillsData.length;

    reserveSkillsHeight();

    skillsFilterBtns.forEach((btn) => {
        btn.addEventListener('click', () => applySkillFilter(btn.dataset.filter, btn));
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            reserveSkillsHeight();
            layoutSkillsFilter(activeSkillFilter, false);
        }, 200);
    });
}

initSkills();

/* ============ SKILLS PROFICIENCY PROGRESS ============ */

const skillsProgressCard = document.getElementById('skills-progress-card');

const skillCategories = [
    { key: 'backend', label: 'Backend' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps' },
    { key: 'ai', label: 'AI & ML' },
];

function renderSkillsProgress() {
    if (!skillsProgressCard) return;

    const grouped = skillCategories.map((cat) => ({
        ...cat,
        count: skillsData.filter((s) => s.category === cat.key).length,
    }));
    const MAX_PROGRESS = 20;

    const rows = grouped.map((cat) => {
        const width = Math.round((cat.count / MAX_PROGRESS) * 100);
        return `
            <div class="skill-progress-row">
                <span class="skill-progress-label">${cat.label}</span>
                <div class="skill-progress-track">
                    <span class="skill-progress-fill" data-width="${width}"></span>
                </div>
                <span class="skill-progress-value">${cat.count}</span>
            </div>`;
    }).join('');

    skillsProgressCard.innerHTML = `
        <h3 class="skills-progress-title">Proficiency</h3>
        <div class="skills-progress-list">${rows}</div>`;

    const fills = [...skillsProgressCard.querySelectorAll('.skill-progress-fill')];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                fills.forEach((fill, i) => {
                    setTimeout(() => {
                        fill.style.width = `${fill.dataset.width}%`;
                    }, i * 140);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(skillsProgressCard);
}

renderSkillsProgress();

/* ============ CREDENTIALS TIMELINE ============ */

const credentialsData = [
    {
        title: 'Software Engineering Professional Certificate',
        issuer: 'Coursera',
        date: '2024',
        slug: 'software-engineering-professional',
        issueId: 'ABCD-1234-XYZQ',
        description: 'A comprehensive credential covering clean architecture, testing strategies, delivery pipelines, and reliability practices for building dependable software systems.',
        file: '#',
    },
    {
        title: 'Machine Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: '2023',
        slug: 'machine-learning-specialization',
        issueId: 'MLSS-7761-KLOP',
        description: 'Supervised and unsupervised learning, neural networks, and applied ML best practices through hands-on projects in Python.',
        file: '#',
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: '2025',
        slug: 'aws-cloud-practitioner',
        issueId: 'AWS-CP-5543-00RT',
        description: 'Foundation-level knowledge of AWS cloud concepts, core services, security, architecture, and pricing models.',
        file: '#',
    },
    {
        title: 'Full Stack Web Development',
        issuer: 'freeCodeCamp',
        date: '2022',
        slug: 'full-stack-web-development',
        issueId: 'FCC-9980-ABWX',
        description: 'Modern web development with responsive design, JavaScript, and APIs, applied across end-to-end projects.',
        file: '#',
    },
    {
        title: 'Professional Scrum Master',
        issuer: 'Scrum.org',
        date: '2024',
        slug: 'professional-scrum-master',
        issueId: 'PSM-2204-MMTY',
        description: 'Scrum framework, empirical process control, and facilitation skills for effective agile team collaboration.',
        file: '#',
    },
    {
        title: 'Data Analysis with Python',
        issuer: 'IBM',
        date: '2023',
        slug: 'data-analysis-with-python',
        issueId: 'IBM-DA-4418-QWER',
        description: 'Data wrangling, exploratory analysis, and visualization using pandas, numpy, and matplotlib.',
        file: '#',
    },
];

function credentialPlaceholder(title, issuer) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="560" viewBox="0 0 800 560">
        <rect width="800" height="560" fill="#eef2e6"/>
        <rect x="24" y="24" width="752" height="512" fill="none" stroke="#7b2fbe" stroke-width="6"/>
        <rect x="44" y="44" width="712" height="472" fill="none" stroke="#a8ff00" stroke-width="3"/>
        <text x="400" y="150" font-family="Georgia, serif" font-size="34" font-weight="bold" fill="#161616" text-anchor="middle" letter-spacing="4">CERTIFICATE</text>
        <text x="400" y="205" font-family="Arial, sans-serif" font-size="18" fill="#555" text-anchor="middle" letter-spacing="2">OF COMPLETION</text>
        <text x="400" y="330" font-family="Georgia, serif" font-size="40" fill="#101010" text-anchor="middle">${title}</text>
        <text x="400" y="400" font-family="Arial, sans-serif" font-size="22" fill="#333" text-anchor="middle">${issuer}</text>
        <text x="400" y="490" font-family="Arial, sans-serif" font-size="13" fill="#888" text-anchor="middle" letter-spacing="3">ALEJANDRO HERNANDEZ · PLACEHOLDER DOCUMENT</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const credentialsTimeline = document.getElementById('credentials-timeline');
const credentialsFilters = document.getElementById('credentials-filtros');
const credentialsModal = document.getElementById('credential-modal');
const modalDoc = document.getElementById('modal-doc');
const modalInfo = document.getElementById('modal-info');

let activeCredentialFilter = 'all';
const credentialHideTimers = new Map();

function renderCredentials() {
    if (!credentialsTimeline) return;

    const certStat = document.getElementById('stat-certs');
    if (certStat) certStat.textContent = credentialsData.length;

    credentialsTimeline.innerHTML = credentialsData.map((entry, i) => {
        const side = i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right';
        const preview = credentialPlaceholder(entry.title, entry.issuer);
        return `
            <article class="timeline-item ${side}" data-year="${entry.date}" style="animation-delay:${(i % 4) * 120}ms">
                <div class="timeline-node" aria-hidden="true"></div>
                <div class="flip-card" data-index="${i}" tabindex="0" aria-label="View ${entry.title}">
                    <div class="flip-card-inner">
                        <div class="flip-card-face flip-card-front">
                            <img src="${preview}" alt="${entry.title} preview" loading="lazy">
                            <div class="flip-card-front-caption">
                                <h3>${entry.title}</h3>
                                <span>${entry.issuer} · ${entry.date}</span>
                            </div>
                        </div>
                        <div class="flip-card-face flip-card-back">
                            <span class="flip-card-back-label">Certificate</span>
                            <h3>${entry.title}</h3>
                            <span class="flip-card-back-meta">${entry.issuer} · ${entry.date}</span>
                            <p class="flip-card-back-desc">${entry.description}</p>
                            <span class="flip-card-back-cta">Click to open full document</span>
                        </div>
                    </div>
                </div>
            </article>`;
    }).join('');

    const items = credentialsTimeline.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach((item) => observer.observe(item));

    buildCredentialFilters();
}

function buildCredentialFilters() {
    if (!credentialsFilters || !credentialsTimeline) return;

    const years = [...new Set(credentialsData.map((c) => c.date))].sort();
    const options = [{ value: 'all', label: 'All' }, ...years.map((y) => ({ value: y, label: y }))];

    credentialsFilters.innerHTML = options.map((opt, i) => `
        <button class="credential-filtro${i === 0 ? ' is-active' : ''}" data-year="${opt.value}" type="button">${opt.label}</button>`).join('');

    credentialsFilters.querySelectorAll('.credential-filtro').forEach((btn) => {
        btn.addEventListener('click', () => applyCredentialFilter(btn.dataset.year, btn));
    });
}

function applyCredentialFilter(year, target) {
    if (year === activeCredentialFilter) return;
    activeCredentialFilter = year;

    credentialsFilters.querySelectorAll('.credential-filtro').forEach((b) =>
        b.classList.toggle('is-active', b === target));

    credentialsTimeline.querySelectorAll('.timeline-item').forEach((item) => {
        if (credentialHideTimers.has(item)) {
            clearTimeout(credentialHideTimers.get(item));
            credentialHideTimers.delete(item);
        }

        const match = year === 'all' || item.dataset.year === year;

        if (match) {
            item.classList.remove('credential-hidden');
            item.style.opacity = '';
            item.style.transform = '';
            item.style.pointerEvents = '';
            item.classList.remove('visible');
            void item.offsetWidth;
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
            item.style.opacity = '0';
            item.style.transform = 'translateY(18px) scale(0.92)';
            item.style.pointerEvents = 'none';
            credentialHideTimers.set(item, setTimeout(() => {
                item.classList.add('credential-hidden');
                credentialHideTimers.delete(item);
            }, 560));
        }
    });
}

function openCredentialModal(index) {
    const entry = credentialsData[index];
    if (!entry || !credentialsModal) return;

    const preview = credentialPlaceholder(entry.title, entry.issuer);
    const hasDoc = entry.file && entry.file !== '#';
    const isPdf = hasDoc && entry.file.toLowerCase().endsWith('.pdf');

    modalDoc.innerHTML = isPdf
        ? `<iframe src="${entry.file}" title="${entry.title}"></iframe>`
        : `<img src="${hasDoc ? entry.file : preview}" alt="${entry.title} document">`;

    modalInfo.innerHTML = `
        <span class="modal-info-label">Credential</span>
        <h3>${entry.title}</h3>
        <p class="modal-info-meta">${entry.issuer} · ${entry.date}</p>
        <p class="modal-info-desc">${entry.description}</p>
        <span class="modal-info-id">Verification ID ${entry.issueId}</span>
        <a class="credential-download" href="${entry.file}" download="${entry.slug}.pdf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
        </a>`;

    credentialsModal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeCredentialModal() {
    if (!credentialsModal) return;
    credentialsModal.hidden = true;
    modalDoc.innerHTML = '';
    modalInfo.innerHTML = '';
    document.body.style.overflow = '';
}

if (credentialsTimeline) {
    credentialsTimeline.addEventListener('click', (e) => {
        const card = e.target.closest('.flip-card');
        if (card) openCredentialModal(parseInt(card.dataset.index, 10));
    });

    credentialsTimeline.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.flip-card');
            if (card) {
                e.preventDefault();
                openCredentialModal(parseInt(card.dataset.index, 10));
            }
        }
    });
}

if (credentialsModal) {
    document.getElementById('modal-close').addEventListener('click', closeCredentialModal);
    document.getElementById('modal-overlay').addEventListener('click', closeCredentialModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCredentialModal();
    });
}

renderCredentials();
