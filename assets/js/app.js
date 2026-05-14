document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    if (!header || !hero) {
        return;
    }

    const headerHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});
