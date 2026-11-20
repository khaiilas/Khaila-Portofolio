
<header class="navbar">
    <div class="nav-container">

        <a href="index.php" class="logo">
            khaila<span>sukmawati</span>
        </a>

        <button class="menu-toggle" id="menuToggle"
            aria-label="Open navigation menu"
            aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav class="nav-menu" id="navMenu">
            <a href="#home" data-i18n="home">Home</a>
            <a href="#about" data-i18n="about">About</a>
            <a href="#skills" data-i18n="skills">Skills</a>
            <a href="#projects" data-i18n="projects">Projects</a>
            <a href="#certifications" data-i18n="certifications">Certifications</a>
            <a href="#contact" data-i18n="contact">Contact</a>

            <!-- CV khusus HP -->
            <div class="cv-dropdown mobile-cv">
                <button type="button" class="cv-toggle" aria-expanded="false">
                    <i class="fa fa-download"></i>
                    <span data-i18n="button_CV">Download CV</span>
                    <i class="fa fa-chevron-down cv-arrow"></i>
                </button>

                <div class="cv-menu">
                    <a href="assets/file/CV-Indonesia.pdf"
                        download="CV-Khaila-Sukmawati-Indonesia.pdf">
                        <i class="fa fa-file-pdf"></i>
                        CV Bahasa Indonesia
                    </a>

                    <a href="assets/file/CV-English.pdf"
                        download="CV-Khaila-Sukmawati-English.pdf">
                        <i class="fa fa-file-pdf"></i>
                        CV English
                    </a>
                </div>
            </div>
        </nav>

        <div class="nav-actions">

            <!-- CV khusus desktop -->
            <div class="cv-dropdown desktop-cv">
                <button type="button" class="btn btn-outline cv-toggle"
                    aria-expanded="false">
                    <i class="fa fa-download"></i>
                    <span data-i18n="button_CV">Download CV</span>
                    <i class="fa fa-chevron-down cv-arrow"></i>
                </button>

                <div class="cv-menu">
                    <a href="assets/file/CV-Indonesia.pdf"
                        download="CV-Khaila-Sukmawati-Indonesia.pdf">
                        <i class="fa fa-file-pdf"></i>
                        CV Bahasa Indonesia
                    </a>

                    <a href="assets/file/CV-English.pdf"
                        download="CV-Khaila-Sukmawati-English.pdf">
                        <i class="fa fa-file-pdf"></i>
                        CV English
                    </a>
                </div>
            </div>

            <div class="language-switcher">
                <button type="button" id="languageToggle"
                    onclick="toggleLanguage()">EN</button>
            </div>

            <button type="button" class="theme-toggle"
                id="themeToggle" aria-label="Toggle dark mode">
                <i class="fas fa-moon"></i>
            </button>

        </div>
    </div>
</header>
