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
