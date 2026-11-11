<!-- <?php

$projects = [
    'inventory' => [
        'title' => 'Inventory Management System',
        'category' => 'Web Application Development',
        'year' => '2025',
        'description' => 'A web-based inventory management system developed to improve stock monitoring, inventory administration, and reporting processes.',
        'problem' => 'Manual inventory recording can lead to inaccurate stock information, difficulties in monitoring product availability, and delays in preparing inventory reports.',
        'objective' => 'To develop a structured inventory management system that supports stock recording, monitoring, and reporting through a web-based platform.',
        'contributions' => [
            'Identified inventory management problems and analyzed system requirements.',
            'Translated user needs into functional system specifications.',
            'Designed system workflows using Use Case, Activity, and Class Diagrams.',
            'Designed database structures to support inventory data management.',
            'Developed inventory management features using Laravel and MySQL.',
            'Implemented stock monitoring and inventory reporting functionalities.',
            'Conducted Black Box Testing and Usability Testing.'
        ],
        'results' => 'Developed a web-based inventory management system that supports more organized stock recording, inventory monitoring, and reporting processes.',
        'tools' => ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
        'images' => [
            'inventory-1.png',
            'inventory-2.png',
            'inventory-3.png'
        ]
    ],
    'system-design' => [
        'title' => 'Software Requirements & System Design',
        'category' => 'System Analysis & Documentation',
        'year' => '2025',
        'description' => 'A software analysis and design project focused on identifying system requirements and preparing technical documentation as a foundation for software development.',
        'problem' => 'Software development requires clear requirements and structured technical documentation to ensure that the proposed system meets user needs.',
        'objective' => 'To translate user and business needs into structured system requirements and design specifications.',
        'contributions' => [
            'Analyzed project requirements and identified system functionalities.',
            'Prepared Software Requirements Specification (SRS) documentation.',
            'Developed Software Design Description (SDD) documentation.',
            'Created UML diagrams to illustrate system structure and interactions.',
            'Documented functional requirements and system specifications.',
            'Organized technical documentation to support the software development process.'
        ],
        'results' => 'Produced structured SRS and SDD documents describing system requirements, design specifications, and expected system behavior.',
        'tools' => ['SRS', 'SDD', 'UML', 'Use Case Diagram', 'Activity Diagram', 'System Design'],
        'images' => [
            'system-design-1.png',
            'system-design-2.png',
            'system-design-3.jpg',
            'system-design-4.jpg'
        ]
    ],
    'pos-forecasting' => [
        'title' => 'Point of Sale & Stock Forecasting',
        'category' => 'Inventory System Enhancement',
        'year' => '2026',
        'description' => 'An enhancement of an existing web-based inventory management system through the integration of Point of Sale functionality and stock forecasting using Single Exponential Smoothing.',
        'problem' => 'The existing inventory system required additional functionality to support sales transactions and improve stock planning. Sales activities also needed to be connected with inventory records.',
        'objective' => 'To enhance the existing inventory system by integrating sales transaction features and stock forecasting to support inventory monitoring and replenishment planning.',
        'contributions' => [
            'Analyzed existing inventory processes and identified opportunities for system enhancement.',
            'Designed and integrated Point of Sale functionality into the existing system.',
            'Developed sales transaction features, including product selection, payment processing, and transaction recording.',
            'Connected sales transactions with inventory updates.',
            'Implemented Single Exponential Smoothing for stock demand forecasting.',
            'Evaluated forecasting results using Mean Squared Error (MSE).',
            'Conducted functional and usability testing.'
        ],
        'results' => 'Enhanced the existing inventory management system with integrated sales transaction features and stock forecasting capabilities to support inventory monitoring and replenishment planning.',
        'tools' => ['Laravel', 'PHP', 'MySQL', 'Point of Sale', 'Single Exponential Smoothing', 'MSE'],
        'images' => [
            'pos-1.png',
            'pos-2.png',
            'pos-3.png'
        ]
    ]

];

$projectKey = $_GET['project'] ?? 'inventory';

if (!isset($projects[$projectKey])) {
    http_response_code(404);
    $project = null;
} else {
    $project = $projects[$projectKey];
}
?>

<?php if ($project): ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($project['title']); ?> | Khaila Sukmawati</title>
    <link rel="stylesheet" href="../assets/css/style.css?v=2">
</head>

<body>
    <?php
        $basePath = '../';
        include '../includes/navbar.php';
    ?>
    <main class="project-detail-page">
        <!-- HERO -->
        <section class="project-detail-hero">
            <p class="project-detail-label">
                <?= htmlspecialchars($project['category']); ?>
            </p>
            <h1>
                <?= htmlspecialchars($project['title']); ?>
            </h1>
            <p class="project-detail-intro">
                <?= htmlspecialchars($project['description']); ?>
            </p>
            <div class="project-detail-meta">
                <span>Project Year: <?= htmlspecialchars($project['year']); ?></span>
                <span>Information Systems</span>
            </div>
        </section>

        <!-- PROJECT OVERVIEW -->
        <section class="project-detail-content">
            <div class="detail-section">
                <h2>Project Overview</h2>
                <p><?= htmlspecialchars($project['description']); ?></p>
            </div>

            <!-- PROBLEM -->
            <div class="detail-section">
                <h2>Problem Statement</h2>
                <p><?= htmlspecialchars($project['problem']); ?></p>
            </div>

            <!-- OBJECTIVE -->
            <div class="detail-section">
                <h2>Project Objectives</h2>
                <p><?= htmlspecialchars($project['objective']); ?></p>
            </div>


            <!-- CONTRIBUTIONS -->
            <div class="detail-section">
                <h2>My Contributions</h2>
                <div class="contribution-list">
                    <?php foreach ($project['contributions'] as $index => $contribution): ?>
                        <div class="contribution-item">
                            <span>
                                <?= str_pad($index + 1, 2, '0', STR_PAD_LEFT); ?>
                            </span>
                            <p><?= htmlspecialchars($contribution); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- PROJECT GALLERY -->
            <div class="detail-section">
                <h2>Project Documentation</h2>
                <p class="gallery-description">
                    A visual overview of the project interface, system design,
                    and development documentation.
                </p>
                <div class="project-detail-gallery">
                    <?php foreach ($project['images'] as $image): ?>
                        <div class="detail-gallery-item">
                            <img
                                src="../assets/images/project/<?= htmlspecialchars($image); ?>"
                                alt="<?= htmlspecialchars($project['title']); ?>"
                                loading="lazy"
                            >
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- RESULTS -->
            <div class="detail-section">
                <h2>Results & Outcomes</h2>
                <p><?= htmlspecialchars($project['results']); ?></p>
            </div>

            <!-- TOOLS -->
            <div class="detail-section">
                <h2>Tools & Technologies</h2>
                <div class="detail-tools">
                    <?php foreach ($project['tools'] as $tool): ?>
                        <span><?= htmlspecialchars($tool); ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- BACK TO PROJECT -->
        <section class="project-detail-footer">
            <h2>Explore More Projects</h2>
            <p>
                Discover more projects and explore my experience
                in system analysis and software development.
            </p>
            <a href="../index.php#projects" class="detail-back-button">
                Back to Portfolio
            </a>
        </section>
    </main>

    <?php include '../includes/footer.php'; ?>
</body>
</html>
<?php else: ?>
    <h1>404 - Project Not Found</h1>
    <a href="../index.php#projects">Back to Portfolio</a>
<?php endif; ?> -->