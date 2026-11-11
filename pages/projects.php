<section class="projects-section" id="projects">
    <div class="section-heading">
        <p class="section-label">MY WORK</p>
        <h2>Project Experience</h2>
        <p class="section-description">
            A selection of projects that reflect my experience in
            system analysis, software development, and digital solutions.
        </p>
    </div>

    <div class="projects-grid">

        <!-- Project 1 -->
        <article class="project-card">
        <div class="project-image">
            <div class="project-slides">
                <img src="assets/images/project/inventory-1.png"
                    alt="Data Stok Barang"
                    class="active">
                <img src="assets/images/project/inventory-2.png"
                    alt="Data Barang Masuk">
                <img src="assets/images/project/inventory-3.png"
                    alt="Data Kategori">
            </div>

            <button class="slide-btn prev" onclick="changeSlide(this, -1)">&#10094;</button>
            <button class="slide-btn next" onclick="changeSlide(this, 1)">&#10095;</button>

            <div class="slide-indicators">
                <span class="active" onclick="goToSlide(this, 0)"></span>
                <span onclick="goToSlide(this, 1)"></span>
                <span onclick="goToSlide(this, 2)"></span>
            </div>
        </div>

            <div class="project-content">
                <p class="project-category">Web Application | Business Process Analysis</p>
                <h3>Inventory Management System</h3>
                <p>
                    A web-based inventory management system designed to streamline stock management, 
                    track incoming and outgoing goods, monitor product availability, and generate 
                    inventory reports.
                </p>

                <div class="project-tags">
                    <span>Laravel</span>
                    <span>MySQL</span>
                    <span>Bootstrap</span>
                </div>

                <div>
                <a href="https://github.com/khaiilas/Inventory-Management-System" class="project-link">
                    <span>View Project</span>
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
                <button type="button" class="project-link"
                    onclick="openProjectDetail('inventory')">
                    <span>Detail Project</span>
                    <i class="fa fa-arrow-right"></i>
                </button>
                </div>
            </div>
        </article>

        <!-- Project 2 -->
        <article class="project-card">
            <div class="project-image">
            <div class="project-slides">
                <img src="assets/images/project/system-design-1.png"
                    alt="Data Stok Barang"
                    class="active">
                <img src="assets/images/project/system-design-2.png"
                    alt="Data Barang Masuk">
                <img src="assets/images/project/system-design-3.jpg"
                    alt="Data Kategori">
                <img src="assets/images/project/system-design-4.jpg"
                    alt="Data Kategori">
            </div>

            <button class="slide-btn prev" onclick="changeSlide(this, -1)">&#10094;</button>
            <button class="slide-btn next" onclick="changeSlide(this, 1)">&#10095;</button>

            <div class="slide-indicators">
                <span class="active" onclick="goToSlide(this, 0)"></span>
                <span onclick="goToSlide(this, 1)"></span>
                <span onclick="goToSlide(this, 2)"></span>
                <span onclick="goToSlide(this, 3)"></span>
            </div>
        </div>

            <div class="project-content">
                <p class="project-category">System Analysis | System Document</p>
                <h3>Software Requirement & System Design</h3>
                <p>
                    A software documentation project covering
                    requirements analysis, system workflows,
                    UML modeling, database structure, and UI design.
                </p>

                <div class="project-tags">
                    <span>SRS</span>
                    <span>UML</span>
                    <span>UI/UX</span>
                </div>

                <div>
                <button type="button" class="project-link"
                    onclick="openProjectDetail('system-design')">
                    <span>Detail Project</span>
                    <i class="fa fa-arrow-right"></i>
                </button>
                </div>
            </div>
        </article>

        <!-- Project 3 -->
        <article class="project-card">
            <div class="project-image">
            <div class="project-slides">
                <img src="assets/images/project/pos-1.png"
                    alt="Data Stok Barang"
                    class="active">
                <img src="assets/images/project/pos-2.png"
                    alt="Data Barang Masuk">
                <img src="assets/images/project/pos-3.png"
                    alt="Data Kategori">
            </div>

            <button class="slide-btn prev" onclick="changeSlide(this, -1)">&#10094;</button>
            <button class="slide-btn next" onclick="changeSlide(this, 1)">&#10095;</button>

            <div class="slide-indicators">
                <span class="active" onclick="goToSlide(this, 0)"></span>
                <span onclick="goToSlide(this, 1)"></span>
                <span onclick="goToSlide(this, 2)"></span>
            </div>
        </div>

            <div class="project-content">
                <p class="project-category">Web Application</p>
                <h3>Point of Sale & Stock Forecasting</h3>
                <p>
                    An enhancement of an inventory management system
                    with sales transaction features and stock forecasting
                    using the Single Exponential Smoothing method.
                </p>

                <div class="project-tags">
                    <span>PHP</span>
                    <span>MySQL</span>
                    <span>SES</span>
                </div>

                <div class="project-links">
                    <a href="https://github.com/khaiilas/pos-stock-forecasting"
                    class="project-link">
                        <span>View Project</span>
                        <i class="fa fa-external-link" aria-hidden="true"></i>
                    </a>

                    <button type="button" class="project-link"
                        onclick="openProjectDetail('pos-forecasting')">
                        <span>Detail Project</span>
                        <i class="fa fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </article>

    </div>

<!-- PROJECT DETAIL MODAL -->
<div class="project-modal" id="projectModal">
    <div class="project-modal-overlay"
         onclick="closeProjectDetail()"></div>
    <div class="project-modal-content">
        <button class="modal-close"
                onclick="closeProjectDetail()"
                aria-label="Close">
            &times;
        </button>
        <div id="modalProjectContent"></div>
    </div>
</div>

</section>
