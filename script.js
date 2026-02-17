/* =========================
   MENU MOBILE
========================= */
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
}

/* =========================
   ANIMAÇÃO AO APARECER (Scroll Reveal)
========================= */
const animatedElements = document.querySelectorAll(
    ".card, h2, h3, .section p, .kids-image img"
);

const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // para não ficar observando após animar
        }
    });
}, observerOptions);

animatedElements.forEach(el => {
    el.classList.add("hidden"); // estado inicial invisível
    observer.observe(el);
});

/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mostrar botão somente após scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

/* =========================
   EFEITO SUAVE NA NAVBAR
========================= */
const navbar = document.querySelector(".navbar");
const navbarDefaultBg = "rgba(17, 17, 17, 0.95)";
const navbarScrolledBg = "rgba(0, 0, 0, 0.98)";

window.addEventListener("scroll", () => {
    if (!navbar) return;

    navbar.style.backgroundColor =
        window.scrollY > 50 ? navbarScrolledBg : navbarDefaultBg;

    navbar.style.transition = "background-color 0.3s ease";
});
