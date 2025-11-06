// ===== Mobile Nav Toggle =====
function showAndHideClass() {
    const headerNavPages = document.querySelector(".header__nav__pages");
    headerNavPages.classList.toggle("header__nav__pages--open");
}

// ===== Fade-in on Scroll for Images =====
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img--fade_in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
});
