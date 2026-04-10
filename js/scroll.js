const scrollBtn = document.getElementById("scroll-btn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});