const translations = {
    en: {
        home: "Home",
        about: "Introduction",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        heroTitle: "Information Systems Graduate",
        heroDescription: "Interested in System Analysis, Business Analysis, and IT & Digital Transformation.",
        downloadCV: "Download CV PDF",
        projectTitle: "Project Experience",
        contactTitle: "Let's Connect & Collaborate"
    },

    id: {
        home: "Beranda",
        about: "Perkenalan",
        skills: "Keahlian",
        projects: "Proyek",
        certifications: "Sertifikasi",
        contact: "Kontak",
        heroTitle: "Lulusan Sistem Informasi",
        heroDescription: "Memiliki minat dalam Analisis Sistem, Analisis Bisnis, dan Transformasi Digital.",
        downloadCV: "Unduh CV PDF",
        projectTitle: "Pengalaman Proyek",
        contactTitle: "Mari Terhubung dan Berkolaborasi"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );
    });

    localStorage.setItem("portfolio-language", lang);
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
    });
});

const savedLanguage =
    localStorage.getItem("portfolio-language") || "en";

setLanguage(savedLanguage);
