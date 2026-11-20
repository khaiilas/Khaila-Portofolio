const translations = {
    en: {
        home: "Home",
        about: "Introduction",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        hero_role: "Open to Work · System Analyst | Business Analyst",
        hero_hello: "Hello, I'm",
        hero_button_work: "Explore My Work",
        hero_button_contact: "Contact Me",
        button_CV: "Download CV",
        hero_education: "Undergraduate Student,",
        hero_degree: "Bachelor of Information Systems, Gunadarma University",
        hero_year: "(2022-2026)",
        about_title: "About Me.",
        about_role: "BNSP Certified System Analyst",
        about_paragraph1: "Hi, I’m Khaila, an Information Systems graduate from Universitas Gunadarma (GPA 3.79/4.00) and a BNSP-certified System Analyst. I’m most interested in the work that happens before any code is written: understanding how a business really operates, finding where the actual problems are, and turning them into clear requirements.",
        about_paragraph2: "In my projects, I’ve modeled business processes with UML and BPMN, written SRS and SDD documents, designed databases, and validated systems through Black Box Testing and UAT. My thesis was a web-based POS and stock forecasting system built with Laravel and MySQL, using Single Exponential Smoothing to predict demand.",
        about_paragraph3: "I'm always eager to learn, strengthen my analytical and problem-solving skills, and explore how technology can help businesses work more effectively.",
        skills_label: "MY EXPERTISE",
        skills_title: "Skills &",
        skills_highlight: "Knowledge.",
        skills_core: "01 — Core Competencies",
        skills_system: "System Analysis",
        skills_system_desc: "System Modeling · Use Case · UML · Functional Requirements",
        skills_business: "Business Analysis",
        skills_business_desc: "Requirement Gathering · Business Process Analysis · User Needs Analysis",
        skills_documentation: "Documentation",
        skills_documentation_desc: "SRS · SDD · Requirement Documentation",
        skills_data: "Data & Database",
        skills_data_desc: "SQL · Database Design · Data Analysis",
        skills_tools: "02 — Tools & Technologies",
         // PROJECTS
        projects_label: "MY WORK",
        projects_title: "Project Experience",
        projects_description: "A selection of projects that reflect my experience in system analysis, software development, and digital solutions.",
        project1_category: "Web Application | Business Process Analysis",
        project1_title: "Inventory Management System",
        project1_description: "A web-based inventory management system designed to streamline stock management, track incoming and outgoing goods, monitor product availability, and generate inventory reports.",
        project2_category: "System Analysis | System Document",
        project2_title: "Software Requirement & System Design",
        project2_description: "A software documentation project covering requirements analysis, system workflows, UML modeling, database structure, and UI design.",
        project3_category: "Web Application",
        project3_title: "Point of Sale & Stock Forecasting",
        project3_description: "An enhancement of an inventory management system with sales transaction features and stock forecasting using the Single Exponential Smoothing method.",
        project_detail_button: "Project Details",
        // PROJECT DETAIL
        detail_year: "Project Year:",
        detail_information: "Information Systems",
        detail_overview: "Project Overview",
        detail_problem: "Problem Statement",
        detail_objectives: "Project Objectives",
        detail_contributions: "My Contributions",
        detail_documentation: "Project Documentation",
        detail_gallery: "A visual overview of the project interface, system design, and development documentation.",
        detail_results: "Results & Outcomes",
        detail_tools: "Tools & Technologies",
        detail_explore: "Explore More Projects",
        detail_explore_desc: "Discover more projects and explore my experience in system analysis and software development.",
        detail_back: "Back to Portfolio",
        // INVENTORY PROJECT
        inventory_category: "Web Application Development",
        inventory_description: "A web-based inventory management system developed to improve stock monitoring, inventory administration, and reporting processes.",
        inventory_problem: "Manual inventory recording can lead to inaccurate stock information, difficulties in monitoring product availability, and delays in preparing inventory reports.",
        inventory_objective: "To develop a structured inventory management system that supports stock recording, monitoring, and reporting through a web-based platform.",
        inventory_contribution_1: "Identified inventory management problems and analyzed system requirements.",
        inventory_contribution_2: "Translated user needs into functional system specifications.",
        inventory_contribution_3: "Designed system workflows using Use Case, Activity, and Class Diagrams.",
        inventory_contribution_4: "Designed database structures to support inventory data management.",
        inventory_contribution_5: "Developed inventory management features using Laravel and MySQL.",
        inventory_contribution_6: "Implemented stock monitoring and inventory reporting functionalities.",
        inventory_contribution_7: "Conducted Black Box Testing and Usability Testing.",
        inventory_results: "Developed a web-based inventory management system that supports more organized stock recording, inventory monitoring, and reporting processes.",
        // SYSTEM DESIGN PROJECT
        system_category: "System Analysis & Documentation",
        system_description: "A software analysis and design project focused on identifying system requirements and preparing technical documentation as a foundation for software development.",
        system_problem: "Software development requires clear requirements and structured technical documentation to ensure that the proposed system meets user needs.",
        system_objective: "To translate user and business needs into structured system requirements and design specifications.",
        system_contribution_1: "Analyzed project requirements and identified system functionalities.",
        system_contribution_2: "Prepared Software Requirements Specification (SRS) documentation.",
        system_contribution_3: "Developed Software Design Description (SDD) documentation.",
        system_contribution_4: "Created UML diagrams to illustrate system structure and interactions.",
        system_contribution_5: "Documented functional requirements and system specifications.",
        system_contribution_6: "Organized technical documentation to support the software development process.",
        system_results: "Produced structured SRS and SDD documents describing system requirements, design specifications, and expected system behavior.",
        // POS PROJECT
        pos_category: "Inventory System Enhancement",
        pos_description: "An enhancement of an existing web-based inventory management system through the integration of Point of Sale functionality and stock forecasting using Single Exponential Smoothing.",
        pos_problem: "The existing inventory system required additional functionality to support sales transactions and improve stock planning. Sales activities also needed to be connected with inventory records.",
        pos_objective: "To enhance the existing inventory system by integrating sales transaction features and stock forecasting to support inventory monitoring and replenishment planning.",
        pos_contribution_1: "Analyzed existing inventory processes and identified opportunities for system enhancement.",
        pos_contribution_2: "Designed and integrated Point of Sale functionality into the existing system.",
        pos_contribution_3: "Developed sales transaction features, including product selection, payment processing, and transaction recording.",
        pos_contribution_4: "Connected sales transactions with inventory updates.",
        pos_contribution_5: "Implemented Single Exponential Smoothing for stock demand forecasting.",
        pos_contribution_6: "Evaluated forecasting results using Mean Squared Error (MSE).",
        pos_contribution_7: "Conducted functional and usability testing.",
        pos_results: "Enhanced the existing inventory management system with integrated sales transaction features and stock forecasting capabilities to support inventory monitoring and replenishment planning.",
        // CERTIFICATIONS
        cert_label: "MY QUALIFICATIONS",
        cert_title: "Certifications",
        cert_title_suffix: " & Credentials",
        cert_description: "A collection of certifications and training programs reflecting my knowledge and competencies in Information Systems, Software Development, and System Analysis.",
        cert_category_web: "Web Development",
        cert_category_system: "System Analysis",
        cert_category_programming: "Programming",
        cert_web_title: "Fundamental Web Programming",
        cert_web_desc: "Learned core web development concepts including HTML, CSS, and basic programming logic.",
        cert_js_title: "JavaScript Workshop",
        cert_js_desc: "Participated in a hands-on workshop to strengthen JavaScript skills and build interactive web projects.",
        cert_design_title: "Designing Software",
        cert_design_desc: "Completed professional training in software design covering software structures, components, UI, and UX.",
        cert_go_title: "Go-Lang for Beginner",
        cert_go_desc: "Learned Go programming fundamentals and web development using Polymer, including data structures, routing, web servers, and JSON.",
        cert_analyze_title: "Analyze Software Requirements",
        cert_analyze_desc: "Gained skills in analyzing and documenting software requirements to support effective system design and development.",
        cert_bnsp_title: "Occupation of System Analyst",
        cert_view: "View Certificate ↗",
        // CONTACT
        contact_label: "GET IN TOUCH",
        contact_title: "Let's Connect",
        contact_title_suffix: " & Collaborate",
        contact_description: "I'm open to opportunities in System Analysis, Business Analysis, and IT & Digital Transformation. Feel free to reach out for professional opportunities or collaboration.",
        contact_location_label: "Domicile / Location",
        contact_phone: "Telephone",
        contact_email: "Email",
        network: "Social Network",
    },

    id: {
        home: "Beranda",
        about: "Perkenalan",
        skills: "Keahlian",
        projects: "Proyek",
        certifications: "Sertifikasi",
        contact: "Kontak",
        hero_role: "Terbuka untuk Peluang Kerja · Analisis Sistem | Analisis Bisnis",
        hero_hello: "Halo, saya",
        hero_education: "Mahasiswa lulusan",
        hero_degree: "S1 Sistem Informasi, Universitas Gunadarma",
        hero_year: "(2022-2026)",
        hero_button_work: "Lihat Proyek Saya",
        hero_button_contact: "Hubungi Saya",
        button_CV: "Unduh CV",
        hero_education: "Mahasiswa",
        hero_degree: "lulusan S1 Sistem Informasi, Universitas Gunadarma",
        hero_year: "(2022-2026)",
        about_title: "Tentang Saya.",
        about_role: "Analis Sistem Bersertifikat BNSP",
        about_paragraph1: "Halo, saya Khaila, lulusan Sistem Informasi dari Universitas Gunadarma dengan IPK 3,79/4,00 dan bersertifikat Analis Sistem BNSP. Saya tertarik pada proses sebelum pengembangan sistem dimulai, mulai dari memahami bagaimana bisnis berjalan, mengidentifikasi permasalahan, hingga menerjemahkannya menjadi kebutuhan sistem yang jelas.",
        about_paragraph2: "Dalam proyek akademik, saya telah memodelkan proses bisnis menggunakan UML dan BPMN, menyusun dokumen SRS dan SDD, merancang database, serta melakukan validasi sistem melalui Black Box Testing dan UAT. Skripsi saya berupa sistem POS dan prediksi stok berbasis web menggunakan Laravel dan MySQL, dengan metode Single Exponential Smoothing untuk memprediksi kebutuhan stok.",
        about_paragraph3: "Saya selalu antusias untuk belajar, mengembangkan kemampuan analisis dan pemecahan masalah, serta mengeksplorasi bagaimana teknologi dapat membantu bisnis berjalan lebih efektif.",
        skills_label: "KEAHLIAN SAYA",
        skills_title: "Keahlian &",
        skills_highlight: "Pengetahuan.",
        skills_core: "01 — Kompetensi Utama",
        skills_system: "Analisis Sistem",
        skills_system_desc: "Pemodelan Sistem · Use Case · UML · Kebutuhan Fungsional",
        skills_business: "Analisis Bisnis",
        skills_business_desc: "Pengumpulan Kebutuhan · Analisis Proses Bisnis · Analisis Kebutuhan Pengguna",
        skills_documentation: "Dokumentasi",
        skills_documentation_desc: "SRS · SDD · Dokumentasi Kebutuhan",
        skills_data: "Data & Database",
        skills_data_desc: "SQL · Perancangan Database · Analisis Data",
        skills_tools: "02 — Perangkat & Teknologi",
        // PROJECTS
        projects_label: "PROYEK SAYA",
        projects_title: "Pengalaman Proyek",
        projects_description: "Pilihan proyek yang mencerminkan pengalaman saya dalam analisis sistem, pengembangan perangkat lunak, dan solusi digital.",
        project1_category: "Aplikasi Web | Analisis Proses Bisnis",
        project1_title: "Sistem Manajemen Inventaris",
        project1_description: "Sistem manajemen inventaris berbasis web yang dirancang untuk mempermudah pengelolaan stok, mencatat barang masuk dan keluar, memantau ketersediaan produk, serta menghasilkan laporan inventaris.",
        project2_category: "Analisis Sistem | Dokumentasi Sistem",
        project2_title: "Analisis Kebutuhan & Perancangan Sistem",
        project2_description: "Proyek dokumentasi perangkat lunak yang mencakup analisis kebutuhan, alur kerja sistem, pemodelan UML, struktur database, dan desain antarmuka pengguna.",
        project3_category: "Aplikasi Web",
        project3_title: "Point of Sale & Prediksi Stok",
        project3_description: "Pengembangan lanjutan sistem manajemen inventaris dengan penambahan fitur transaksi penjualan dan prediksi stok menggunakan metode Single Exponential Smoothing.",
        project_detail_button: "Detail Proyek",
        // PROJECT DETAIL
        detail_year: "Tahun Proyek:",
        detail_information: "Sistem Informasi",
        detail_overview: "Gambaran Umum Proyek",
        detail_problem: "Identifikasi Masalah",
        detail_objectives: "Tujuan Proyek",
        detail_contributions: "Kontribusi Saya",
        detail_documentation: "Dokumentasi Proyek",
        detail_gallery: "Gambaran visual antarmuka proyek, desain sistem, dan dokumentasi pengembangan.",
        detail_results: "Hasil & Pencapaian",
        detail_tools: "Tools & Teknologi",
        detail_explore: "Jelajahi Proyek Lainnya",
        detail_explore_desc: "Temukan proyek lainnya dan pelajari pengalaman saya dalam analisis sistem dan pengembangan perangkat lunak.",
        detail_back: "Kembali ke Portofolio",
        // INVENTORY PROJECT
        inventory_category: "Pengembangan Aplikasi Web",
        inventory_description: "Sistem informasi manajemen stok barang berbasis web yang dikembangkan untuk meningkatkan pemantauan stok, pengelolaan inventaris, dan proses pelaporan.",
        inventory_problem: "Pencatatan inventaris secara manual dapat menyebabkan ketidakakuratan informasi stok, kesulitan memantau ketersediaan produk, dan keterlambatan dalam penyusunan laporan inventaris.",
        inventory_objective: "Mengembangkan sistem manajemen inventaris terstruktur yang mendukung pencatatan, pemantauan, dan pelaporan stok melalui platform berbasis web.",
        inventory_contribution_1: "Mengidentifikasi permasalahan pengelolaan inventaris dan menganalisis kebutuhan sistem.",
        inventory_contribution_2: "Menerjemahkan kebutuhan pengguna menjadi spesifikasi fungsional sistem.",
        inventory_contribution_3: "Merancang alur kerja sistem menggunakan Use Case, Activity, dan Class Diagram.",
        inventory_contribution_4: "Merancang struktur database untuk mendukung pengelolaan data inventaris.",
        inventory_contribution_5: "Mengembangkan fitur manajemen inventaris menggunakan Laravel dan MySQL.",
        inventory_contribution_6: "Mengimplementasikan fitur pemantauan stok dan pelaporan inventaris.",
        inventory_contribution_7: "Melakukan Black Box Testing dan Usability Testing.",
        inventory_results: "Menghasilkan sistem manajemen inventaris berbasis web yang mendukung pencatatan stok, pemantauan inventaris, dan proses pelaporan secara lebih terstruktur.",
        // SYSTEM DESIGN PROJECT
        system_category: "Analisis Sistem & Dokumentasi",
        system_description: "Proyek analisis dan perancangan perangkat lunak yang berfokus pada identifikasi kebutuhan sistem serta penyusunan dokumentasi teknis sebagai dasar pengembangan perangkat lunak.",
        system_problem: "Pengembangan perangkat lunak membutuhkan kebutuhan yang jelas dan dokumentasi teknis yang terstruktur untuk memastikan sistem yang dirancang sesuai dengan kebutuhan pengguna.",
        system_objective: "Menerjemahkan kebutuhan pengguna dan bisnis menjadi kebutuhan sistem serta spesifikasi desain yang terstruktur.",
        system_contribution_1: "Menganalisis kebutuhan proyek dan mengidentifikasi fungsionalitas sistem.",
        system_contribution_2: "Menyusun dokumentasi Software Requirements Specification (SRS).",
        system_contribution_3: "Mengembangkan dokumentasi Software Design Description (SDD).",
        system_contribution_4: "Membuat diagram UML untuk menggambarkan struktur dan interaksi sistem.",
        system_contribution_5: "Mendokumentasikan kebutuhan fungsional dan spesifikasi sistem.",
        system_contribution_6: "Menyusun dokumentasi teknis untuk mendukung proses pengembangan perangkat lunak.",
        system_results: "Menghasilkan dokumen SRS dan SDD terstruktur yang menjelaskan kebutuhan sistem, spesifikasi desain, dan perilaku sistem yang diharapkan.",
        // POS PROJECT
        pos_category: "Pengembangan Sistem Inventaris",
        pos_description: "Pengembangan dari sistem manajemen inventaris berbasis web yang telah tersedia dengan mengintegrasikan fitur Point of Sale dan prediksi stok menggunakan metode Single Exponential Smoothing.",
        pos_problem: "Sistem inventaris yang telah tersedia membutuhkan fitur tambahan untuk mendukung transaksi penjualan dan meningkatkan perencanaan stok. Aktivitas penjualan juga perlu terhubung dengan pencatatan inventaris.",
        pos_objective: "Mengembangkan sistem inventaris yang telah tersedia dengan mengintegrasikan fitur transaksi penjualan dan prediksi stok untuk mendukung pemantauan inventaris serta perencanaan pengadaan barang.",
        pos_contribution_1: "Menganalisis proses inventaris yang sudah berjalan dan mengidentifikasi peluang pengembangan sistem.",
        pos_contribution_2: "Merancang dan mengintegrasikan fitur Point of Sale ke dalam sistem yang sudah tersedia.",
        pos_contribution_3: "Mengembangkan fitur transaksi penjualan, termasuk pemilihan produk, pemrosesan pembayaran, dan pencatatan transaksi.",
        pos_contribution_4: "Menghubungkan transaksi penjualan dengan pembaruan data stok.",
        pos_contribution_5: "Mengimplementasikan metode Single Exponential Smoothing untuk prediksi kebutuhan stok.",
        pos_contribution_6: "Mengevaluasi hasil prediksi menggunakan Mean Squared Error (MSE).",
        pos_contribution_7: "Melakukan pengujian fungsional dan usability.",
        pos_results: "Mengembangkan sistem manajemen inventaris yang telah tersedia dengan fitur transaksi penjualan terintegrasi dan kemampuan prediksi stok untuk mendukung pemantauan inventaris serta perencanaan pengadaan barang.",
        // SERTIFIKASI
        cert_label: "KUALIFIKASI SAYA",
        cert_title: "Sertifikasi",
        cert_title_suffix: " & Kredensial",
        cert_description: "Kumpulan sertifikat dan program pelatihan yang mencerminkan pengetahuan serta kompetensi saya dalam bidang Sistem Informasi, Pengembangan Perangkat Lunak, dan Analisis Sistem.",
        cert_category_web: "Pengembangan Web",
        cert_category_system: "Analisis Sistem",
        cert_category_programming: "Pemrograman",
        cert_web_title: "Pemrograman Web Fundamental",
        cert_web_desc: "Mempelajari konsep dasar pengembangan web, termasuk HTML, CSS, dan logika pemrograman dasar.",
        cert_js_title: "Workshop JavaScript",
        cert_js_desc: "Mengikuti workshop praktik untuk meningkatkan kemampuan JavaScript dan membangun proyek web interaktif.",
        cert_design_title: "Perancangan Perangkat Lunak",
        cert_design_desc: "Menyelesaikan pelatihan perancangan perangkat lunak yang mencakup struktur perangkat lunak, komponen, UI, dan UX.",
        cert_go_title: "Go-Lang untuk Pemula",
        cert_go_desc: "Mempelajari dasar pemrograman Go dan pengembangan web menggunakan Polymer, termasuk struktur data, routing, web server, dan JSON.",
        cert_analyze_title: "Analisis Kebutuhan Perangkat Lunak",
        cert_analyze_desc: "Memperoleh keterampilan dalam menganalisis dan mendokumentasikan kebutuhan perangkat lunak untuk mendukung perancangan dan pengembangan sistem.",
        cert_bnsp_title: "Okupasi Analis Sistem",
        cert_view: "Lihat Sertifikat ↗",
        // KONTAK
        contact_label: "HUBUNGI SAYA",
        contact_title: "Mari Terhubung",
        contact_title_suffix: " & Berkolaborasi",
        contact_description: "Saya terbuka terhadap peluang di bidang Analisis Sistem, Analisis Bisnis, serta Transformasi IT & Digital. Silakan hubungi saya untuk peluang profesional maupun kolaborasi.",
        contact_location_label: "Domisili / Lokasi",
        contact_phone: "Telepon",
        contact_email: "Email",
        network: "Koneksi Jaringan Sosial"
    }
};


function setLanguage(lang) {

    if (!translations[lang]) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;
        const translatedText = translations[lang][key];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }

    });

    const languageButton = document.getElementById("languageToggle");

    if (languageButton) {
        languageButton.textContent = lang.toUpperCase();
    }

    localStorage.setItem("portfolio-language", lang);
    document.documentElement.lang = lang;
}

// Tombol bahasa bulat
function toggleLanguage() {

    const currentLanguage =
        localStorage.getItem("portfolio-language") || "en";

    const newLanguage = currentLanguage === "en" ? "id" : "en";

    setLanguage(newLanguage);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("portfolio-language") || "en";

    setLanguage(savedLanguage);

});