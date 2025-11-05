// ===== Mobile Nav Toggle =====
function showAndHideClass(className) {
    const headerNavPages = document.querySelector(className);

    if (headerNavPages) {
        if (headerNavPages.style.display === 'none' || headerNavPages.style.display === '') {
            headerNavPages.style.display = 'flex';
        } else {
            headerNavPages.style.display = '';
        }
    }
}

// ===== Fade-in on Scroll for Images =====
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img--fade_in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // stops watching once visible
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
});
