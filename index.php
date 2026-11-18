<?php
$pageTitle = "Khaila Sukmawati | Khaila Portfolio";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="Khaila Sukmawati's portfolio showcasing projects, skills, and experience in Information Systems, System Analysis, and IT Transformation.">

    <title><?= $pageTitle; ?></title>

    <link rel="stylesheet" href="assets/css/style.css?v=5">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>

    <!-- NAVIGATION -->
    <?php include 'includes/navbar.php'; ?>

    <main>

        <!-- HERO SECTION -->
        <section class="hero" id="home">

            <div class="hero-content">
                <p class="intro-role">
                    <span class="status-dot"></span>
                    Open to Work · System Analyst | Business Analyst
                </p>
                <h1>
                    Hello, I'm
                    <span>Khaila Sukmawati.</span>
                </h1>
                <div class="intro-description">
                    <p>
                        Undergraduate Student, <span>Bachelor of Information Systems, 
                        Gunadarma University</span> (2022-2026)
                    </p>
                </div>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                        Explore My Work
                    </a>
                    <a href="#contact" class="btn btn-primary">
                        <i class="fa-solid fa-paper-plane"></i>
                        <span>Contact Me</span>
                    </a>
                </div>
            </div>

            <!-- PROFILE IMAGE -->
            <div class="hero-visual">
                <div class="profile-card">
                    <div class="profile-placeholder">
                        <img
                            src="assets/images/profile/profile.png"
                            alt="Khaila Sukmawati">
                    </div>
                </div>
            </div>

        </section>

        <!-- INTRODUCTION STRIP
        <section class="intro-strip">
            <p>
                Interested in creating meaningful solutions
                through technology, analysis, and innovation.
            </p>
        </section> -->

        <!-- ABOUT AND SKILLS -->
        <?php include 'pages/about.php'; ?>

        <!-- PROJECT EXPERIENCE -->
        <?php include 'pages/projects.php'; ?>

        <!-- CERTIFICATIONS -->
        <?php include 'pages/certifications.php'; ?>

        <!-- CONTACT -->
        <?php include 'pages/contact.php'; ?>

    </main>

    <!-- FOOTER -->
    <?php include 'includes/footer.php'; ?>
        <script src="assets/js/script.js?v=3"></script>
        <script src="assets/js/language.js"></script>
        <script>
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');

            // Buka dan tutup hamburger menu
            menuToggle.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('active');

                menuToggle.setAttribute('aria-expanded', isOpen);
                menuToggle.setAttribute(
                    'aria-label',
                    isOpen ? 'Close navigation menu' : 'Open navigation menu'
                );
            });

            // Tutup menu ketika link diklik
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');

                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open navigation menu');
                });
            });

            // Tutup menu ketika area di luar navbar diklik
            document.addEventListener('click', (event) => {
                if (
                    !navMenu.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Open navigation menu');
                }
            });
        </script>
</body>
</html>
