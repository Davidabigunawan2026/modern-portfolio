// ==================================================
// SKILL CARD
// Mengatur tampilan panel Skills saat card diklik
// ==================================================


// Ambil semua element yang diperlukan
const cardHTML = document.getElementById("cardHTML");
const cardCSS = document.getElementById("cardCSS");

const skillTitle = document.getElementById("skillTitle");
const skillSubtitle = document.getElementById("skillSubtitle");
const skillDescription = document.getElementById("skillDescription");

const skillPercentage = document.querySelector(".skill-percentage");    //  90% atas
const skillLevel = document.getElementById("skillLevel");               // 90% bawah

const skillCards = document.querySelectorAll(".skill-card");            

const skillFeatures = document.getElementById("skillFeatures");


// ==================================================
// HTML
// ==================================================


cardHTML.addEventListener("click", function(){

    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardHTML.classList.add("active");

    skillTitle.textContent = "HTML5";

    skillSubtitle.textContent =
        "HyperText Markup Language";

    skillDescription.textContent =
        "HTML is a markup language used to build " +
        "the structure and foundation of a web page.";

    skillPercentage.textContent = "90%";          // atas
    skillProgress.style.width = "90%";            // bawah
    skillLevel.textContent = "HTML5 = 90%";       // bawah


    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>Semantic HTML</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-layer-group"></i>
            <span>Page Structure</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-link"></i>
            <span>Links & Navigation</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-image"></i>
            <span>Images & Media</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-list-check"></i>
            <span>Forms & Inputs</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-universal-access"></i>
            <span>Accessibility</span>
        </div>
    `;


});



// ==================================================
// CSS
// ==================================================

cardCSS.addEventListener("click", function(){

    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardCSS.classList.add("active");

    skillTitle.textContent = "CSS3";

    skillSubtitle.textContent =
        "Cascading Style Sheets";

    skillDescription.textContent =
        "CSS is a stylesheet language used to control " +
        "the visual appearance and presentation of a web page.";


    skillPercentage.textContent = "85%";
    skillProgress.style.width = "85%";
    skillLevel.textContent = "CSS3 = 85%";        // bawah

    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-table-columns"></i>
            <span>Flexbox & Grid</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-mobile-screen"></i>
            <span>Responsive Design</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-palette"></i>
            <span>Colors & Typography</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <span>Animations & Effects</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-layer-group"></i>
            <span>Layouts & Positioning</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>Modern CSS</span>
        </div>
    `;

});





// ==================================================
// JAVASCRIPT
// ==================================================

const cardJS = document.getElementById("cardJS");

cardJS.addEventListener("click", function(){

    // Pindahkan active card
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardJS.classList.add("active");


    // Ubah isi panel
    skillTitle.textContent = "JavaScript";

    skillSubtitle.textContent =
        "Programming Language";

    skillDescription.textContent =
        "JavaScript is a programming language used " +
        "to add interactivity and dynamic behavior to web pages.";

    skillPercentage.textContent = "80%";
    skillProgress.style.width = "80%";
    skillLevel.textContent = "JavaScript = 80%";        // bawah

    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>Variables & Data Types</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-gears"></i>
            <span>Functions</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-bolt"></i>
            <span>Events</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-sitemap"></i>
            <span>DOM Manipulation</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-list"></i>
            <span>Arrays & Objects</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-clock"></i>
            <span>Async JavaScript</span>
        </div>
    `;


});



// ==================================================
// DOM
// ==================================================

const cardDOM = document.getElementById("cardDOM");


cardDOM.addEventListener("click", function(){

    // Pindahkan active card
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardDOM.classList.add("active");


    // Ubah isi panel
    skillTitle.textContent = "DOM";

    skillSubtitle.textContent =
        "Document Object Model";

    skillDescription.textContent =
        "The DOM is a programming interface that represents " +
        "the structure of a web page as a tree of objects.";

    skillPercentage.textContent = "80%";
    skillProgress.style.width = "80%";
    skillLevel.textContent = "DOM = 80%";        // bawah

    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>DOM Selectors</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Element Manipulation</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-bolt"></i>
            <span>Event Handling</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-sitemap"></i>
            <span>DOM Traversal</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-paintbrush"></i>
            <span>Dynamic Styling</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>Dynamic Content</span>
        </div>
    `;



});



// ==================================================
// REACT
// ==================================================

const cardReact = document.getElementById("cardReact");


cardReact.addEventListener("click", function(){

    // Pindahkan active card
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardReact.classList.add("active");


    // Ubah isi panel
    skillTitle.textContent = "React";

    skillSubtitle.textContent =
        "JavaScript Library";

    skillDescription.textContent =
        "React is a JavaScript library used to build " +
        "interactive and reusable user interfaces.";

    skillPercentage.textContent = "75%";
    skillProgress.style.width = "75%";              // grafik bawah
    skillLevel.textContent = "React = 75%";        // bawah

    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-puzzle-piece"></i>
            <span>Components</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-share-nodes"></i>
            <span>Props</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-database"></i>
            <span>State</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>Hooks</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>JSX</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-layer-group"></i>
            <span>Reusable UI</span>
        </div>
    `;

});



// ==================================================
// DATABASE DEVELOPMENT
// ==================================================

const cardDatabase = document.getElementById("cardDatabase");

cardDatabase.addEventListener("click", function(){

    // Pindahkan active card
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardDatabase.classList.add("active");


    // Ubah isi panel
    skillTitle.textContent = "Database Development";

    skillSubtitle.textContent =
        "Database Design & SQL";

    skillDescription.textContent =
        "Database development involves designing, managing, " +
        "and working with structured data using database systems.";

    skillPercentage.textContent = "80%";
    skillProgress.style.width = "80%";
    skillLevel.textContent = "Database = 80%";

cardDatabase.addEventListener("click", function(){

    // Card aktif
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardDatabase.classList.add("active");


    // Header
    skillTitle.textContent = "Database Development";

    skillSubtitle.textContent =
        "Database Design & SQL";


    // Description
    skillDescription.textContent =
        "Database development focuses on designing, managing, " +
        "and working with structured data using SQL and database systems.";


    // Percentage
    skillPercentage.textContent = "80%";
    skillProgress.style.width = "80%";
    skillLevel.textContent = "Database = 80%";


    // Core Skills
    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-database"></i>
            <span>Database Design</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-table"></i>
            <span>Tables & Relationships</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code"></i>
            <span>SQL Queries</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Data Searching</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-filter"></i>
            <span>Filtering & Sorting</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-bolt"></i>
            <span>Query Optimization</span>
        </div>
    `;


});



});



// ==================================================
// GIT / GITHUB
// ==================================================

const cardGit = document.getElementById("cardGit");

cardGit.addEventListener("click", function(){

    // Pindahkan active card
    skillCards.forEach(card => {
        card.classList.remove("active");
    });

    cardGit.classList.add("active");


    // Ubah isi panel
    skillTitle.textContent = "Git / GitHub";

    skillSubtitle.textContent =
        "Version Control & Collaboration";

    skillDescription.textContent =
        "Git is a version control system used to track changes " +
        "in source code and manage development projects.";

    skillPercentage.textContent = "75%";
    skillProgress.style.width = "75%";
    skillLevel.textContent = "Git / GitHub = 75%";

    
    // Core Skills
    skillFeatures.innerHTML = `
        <div class="feature-item">
            <i class="fa-solid fa-code-branch"></i>
            <span>Version Control</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code-commit"></i>
            <span>Commits</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code-branch"></i>
            <span>Branches</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Push & Pull</span>
        </div>

        <div class="feature-item">
            <i class="fa-solid fa-code-merge"></i>
            <span>Merge</span>
        </div>

        <div class="feature-item">
            <i class="fa-brands fa-github"></i>
            <span>GitHub Repository</span>
        </div>
    `;




});




