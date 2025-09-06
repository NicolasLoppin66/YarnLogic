// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      mobileMenu.classList.add("hidden");
    }
  });
});

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-red-800");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-red-800");
    }
  });
});

// Form submission (demo)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre message ! Dans un site réel, ce formulaire enverrait vos données à un serveur."
  );
});

// Newsletter subscription (demo)
document.querySelector("footer form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Merci pour votre inscription ! Dans un site réel, votre email serait ajouté à notre liste."
  );
});

// Download buttons (demo)
document
  .querySelectorAll('button:contains("Télécharger")')
  .forEach((button) => {
    button.addEventListener("click", function () {
      alert(
        "Dans un site réel, ceci déclencherait le téléchargement du patron après paiement."
      );
    });
  });
