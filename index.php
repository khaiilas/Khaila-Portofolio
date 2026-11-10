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

    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <!-- NAVIGATION -->
    <?php include 'includes/navbar.php'; ?>

    <main>

        <!-- HERO SECTION -->
        <section class="hero" id="about">

            <div class="hero-content">

                <p class="hero-label">
                    WELCOME TO MY PORTFOLIO
                </p>

                <h1>
                    Hello, I'm
                    <span>Khaila Sukmawati.</span>
                </h1>
                <p class="intro-role">
                    System Analyst | Business Analyst
                </p>

                <div class="intro-description">
            <p>
                I am an Information Systems graduate from
                Gunadarma University with an interest in
                UI/UX Design, System Analysis, and
                Business Analysis.
            
                I enjoy transforming user needs into structured,
                functional, and user-friendly digital solutions.
                Through academic projects and software development
                experiences, I have developed knowledge in system
                analysis, database management, UI/UX design,
                software documentation, and web application development.
            
                I am eager to continuously learn, improve my skills,
                and contribute to meaningful technology-driven projects.
            </p>
        </div>

                <div class="hero-buttons">

                    <a href="#projects" class="btn btn-primary">
                        Explore My Work
                    </a>

                    <a href="assets/file/CV-KHAILA-SUKMAWATI.pdf"
                        class="btn btn-outline"
                        download>
                        CV <span>↓</span>
                    </a>

                </div>
            </div>

            <!-- PROFILE IMAGE -->
            <div class="hero-visual">

                <div class="profile-card">

                    <div class="profile-placeholder">

                        <img
                            src="assets/images/profile/foto-profile.jpg"
                            alt="Khaila Sukmawati">

                    </div>

                </div>

            </div>

        </section>

        <!-- INTRODUCTION STRIP -->
        <section class="intro-strip">

            <p>
                Interested in creating meaningful solutions
                through technology, analysis, and innovation.
            </p>

        </section>

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

    <script src="assets/js/script.js"></script>
    <script src="assets/js/language.js"></script>

</body>
</html>
