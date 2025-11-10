const seeWorkBtn = document.getElementById("see-work");
const aboutSection = document.getElementById("about");

seeWorkBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

const hamburgerBtn = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerBtn.addEventListener("click", () => {
    // Menü görünürlüğünü CSS'teki 'active' sınıfı ile değiştirir
    navLinks.classList.toggle("active");
    // Buton ikonunu animasyon için 'open' sınıfı ile değiştirir (X veya Hamburger)
    hamburgerBtn.classList.toggle("open");
});

// Menüdeki bir linke tıklandığında menüyü kapat
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1500) {
            navLinks.classList.remove('active');
            hamburgerBtn.classList.remove('open');
        }
    });
});