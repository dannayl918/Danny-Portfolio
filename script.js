/* =========================================
   DANNY PORTFOLIO
   Interactive JavaScript
========================================= */

"use strict";

/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleNavbarScroll);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-main-card, " +
    ".about-side-card, " +
    ".timeline-item, " +
    ".achievement-card, " +
    ".skill-card, " +
    ".experiment-card, " +
    ".scholarship-content, " +
    ".mit-card, " +
    ".vision-statement, " +
    ".contact-content"
);

revealElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================
   SMOOTH NAVIGATION
========================================= */

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    ".nav-links a"
);


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {

                const linkTarget =
                    link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    linkTarget === `#${currentId}`
                );
            });

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================================
   MAGNETIC BUTTON EFFECT
========================================= */

const magneticButtons = document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-button"
);


magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });


    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });

});


/* =========================================
   AI CARD PARALLAX
========================================= */

const aiCard = document.querySelector(".ai-card");

if (aiCard) {

    aiCard.addEventListener("mousemove", (event) => {

        const rect =
            aiCard.getBoundingClientRect();

        const x =
            event.clientX -
            rect.left -
            rect.width / 2;

        const y =
            event.clientY -
            rect.top -
            rect.height / 2;

        const rotateY =
            (x / rect.width) * 8;

        const rotateX =
            -(y / rect.height) * 8;

        aiCard.style.animation =
            "none";

        aiCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-6px)`;
    });


    aiCard.addEventListener("mouseleave", () => {

        aiCard.style.animation =
            "";

        aiCard.style.transform = "";
    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear =
    document.querySelector(".footer-bottom span");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} Daniyal Aslam`;
}


/* =========================================
   REDUCE MOTION SUPPORT
========================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    document.documentElement.style
        .scrollBehavior = "auto";

}


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});
