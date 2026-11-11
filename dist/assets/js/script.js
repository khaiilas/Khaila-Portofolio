const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

function changeSlide(button, direction) {
    const slider = button.closest('.project-image');
    const slides = slider.querySelectorAll('.project-slides img');
    const indicators = slider.querySelectorAll('.slide-indicators span');

    let current = [...slides].findIndex(slide =>
        slide.classList.contains('active')
    );

    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');

    let next = (current + direction + slides.length) % slides.length;

    slides[next].classList.add('active');
    indicators[next].classList.add('active');
}

function goToSlide(indicator, index) {
    const slider = indicator.closest('.project-image');
    const slides = slider.querySelectorAll('.project-slides img');
    const indicators = slider.querySelectorAll('.slide-indicators span');

    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}


/* =========================
   PROJECT DETAIL DATA
========================= */

const projectDetails = {

    inventory: {
        title: "Inventory Management System",
        category: "Web Application Development",
        year: "2025",

        description: "A web-based inventory management system developed to improve stock monitoring, inventory administration, and reporting processes.",

        problem: "Manual inventory recording can lead to inaccurate stock information, difficulties in monitoring product availability, and delays in preparing inventory reports.",

        objective: "To develop a structured inventory management system that supports stock recording, monitoring, and reporting through a web-based platform.",

        contributions: [
            "Identified inventory management problems and analyzed system requirements.",
            "Translated user needs into functional system specifications.",
            "Designed system workflows using Use Case, Activity, and Class Diagrams.",
            "Designed database structures to support inventory data management.",
            "Developed inventory management features using Laravel and MySQL.",
            "Implemented stock monitoring and inventory reporting functionalities.",
            "Conducted Black Box Testing and Usability Testing."
        ],

        results: "Developed a web-based inventory management system that supports more organized stock recording, inventory monitoring, and reporting processes.",

        tools: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],

        images: [
            "inventory-1.png",
            "inventory-2.png",
            "inventory-3.png"
        ]
    },

    "system-design": {
        title: "Software Requirements & System Design",
        category: "System Analysis & Documentation",
        year: "2025",

        description: "A software analysis and design project focused on identifying system requirements and preparing technical documentation as a foundation for software development.",

        problem: "Software development requires clear requirements and structured technical documentation to ensure that the proposed system meets user needs.",

        objective: "To translate user and business needs into structured system requirements and design specifications.",

        contributions: [
            "Analyzed project requirements and identified system functionalities.",
            "Prepared Software Requirements Specification (SRS) documentation.",
            "Developed Software Design Description (SDD) documentation.",
            "Created UML diagrams to illustrate system structure and interactions.",
            "Documented functional requirements and system specifications.",
            "Organized technical documentation to support the software development process."
        ],

        results: "Produced structured SRS and SDD documents describing system requirements, design specifications, and expected system behavior.",

        tools: ["SRS", "SDD", "UML", "Use Case Diagram", "Activity Diagram", "System Design"],

        images: [
            "system-design-1.png",
            "system-design-2.png",
            "system-design-3.jpg",
            "system-design-4.jpg"
        ]
    },

    "pos-forecasting": {
        title: "Point of Sale & Stock Forecasting",
        category: "Inventory System Enhancement",
        year: "2026",

        description: "An enhancement of an existing web-based inventory management system through the integration of Point of Sale functionality and stock forecasting using Single Exponential Smoothing.",

        problem: "The existing inventory system required additional functionality to support sales transactions and improve stock planning. Sales activities also needed to be connected with inventory records.",

        objective: "To enhance the existing inventory system by integrating sales transaction features and stock forecasting to support inventory monitoring and replenishment planning.",

        contributions: [
            "Analyzed existing inventory processes and identified opportunities for system enhancement.",
            "Designed and integrated Point of Sale functionality into the existing system.",
            "Developed sales transaction features, including product selection, payment processing, and transaction recording.",
            "Connected sales transactions with inventory updates.",
            "Implemented Single Exponential Smoothing for stock demand forecasting.",
            "Evaluated forecasting results using Mean Squared Error (MSE).",
            "Conducted functional and usability testing."
        ],

        results: "Enhanced the existing inventory management system with integrated sales transaction features and stock forecasting capabilities to support inventory monitoring and replenishment planning.",

        tools: ["Laravel", "PHP", "MySQL", "Point of Sale", "Single Exponential Smoothing", "MSE"],

        images: [
            "pos-1.png",
            "pos-2.png",
            "pos-3.png"
        ]
    }
};


/* =========================
   OPEN PROJECT DETAIL
========================= */

function openProjectDetail(projectKey) {

    const project = projectDetails[projectKey];

    if (!project) return;

    const content = document.getElementById("modalProjectContent");

    const imagePath = "assets/images/project/";

    content.innerHTML = `
        <p class="modal-category">${project.category}</p>

        <h2 class="modal-title">${project.title}</h2>

        <p class="modal-description">
            ${project.description}
        </p>

        <p class="modal-description">
            Project Year: ${project.year}
        </p>

        <div class="modal-section">
            <h3>Problem Statement</h3>
            <p>${project.problem}</p>
        </div>

        <div class="modal-section">
            <h3>Project Objectives</h3>
            <p>${project.objective}</p>
        </div>

        <div class="modal-section">
            <h3>My Contributions</h3>
            <ul>
                ${project.contributions.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>
        </div>

        <div class="modal-section">
            <h3>Project Documentation</h3>

            <div class="modal-gallery">
                ${project.images.map(image => `
                    <img
                        src="${imagePath}${image}"
                        alt="${project.title}"
                        loading="lazy"
                    >
                `).join("")}
            </div>
        </div>

        <div class="modal-section">
            <h3>Results & Outcomes</h3>
            <p>${project.results}</p>
        </div>

        <div class="modal-section">
            <h3>Tools & Technologies</h3>

            <div class="modal-tools">
                ${project.tools.map(tool =>
                    `<span>${tool}</span>`
                ).join("")}
            </div>
        </div>
    `;

    const modal = document.getElementById("projectModal");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE PROJECT DETAIL
========================= */

function closeProjectDetail() {

    document.getElementById("projectModal")
        .classList.remove("active");

    document.body.style.overflow = "";
}


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProjectDetail();
    }

});
