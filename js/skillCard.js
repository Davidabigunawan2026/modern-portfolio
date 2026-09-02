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
            <span>HTML5 Elements</span>
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


    // CLICK SEMANTIC HTML
    const semanticItem =
        skillFeatures.querySelector(".feature-item");

    semanticItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/curriculum/core/semantic-html/",
            "_blank"
        );
    });


    // CLICK HTML5 ELEMENTS
    const html5Item =
        skillFeatures.querySelectorAll(".feature-item")[1];

    html5Item.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "_blank"
        );
    });


    // CLICK LINKS & NAVIGATION
    const linksItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    linksItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a",
            "_blank"
        );
    });


    // CLICK IMAGES & MEDIA
    const imagesMediaItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    imagesMediaItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/Media",
            "_blank"
        );
    });


    // CLICK FORMS & INPUTS
    const formsItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    formsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form",
            "_blank"
        );
    });


    // CLICK ACCESSIBILITY
    const accessibilityItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    accessibilityItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
            "_blank"
        );
    });


});

// ==========================================
// DEFAULT SKILL
// ==========================================

cardHTML.click();



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

    // CLICK FLEXBOX & GRID
    const flexboxGridItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    flexboxGridItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout",
            "_blank"
        );
    });


    // CLICK RESPONSIVE DESIGN
    const responsiveItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    responsiveItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
            "_blank"
        );
    });


    // CLICK COLORS & TYPOGRAPHY
    const colorsTypographyItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    colorsTypographyItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors",
            "_blank"
        );
    });


    // CLICK ANIMATIONS & EFFECTS
    const animationsItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    animationsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animations",
            "_blank"
        );
    });


    // CLICK LAYOUTS & POSITIONING
    const layoutsItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    layoutsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Positioned_layout",
            "_blank"
        );
    });


    // CLICK MODERN CSS
    const modernCSSItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    modernCSSItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "_blank"
        );
    });


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


    // CLICK VARIABLES & DATA TYPES
    const variablesItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    variablesItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables",
            "_blank"
        );
    });


    // CLICK FUNCTIONS
    const functionsItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    functionsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions",
            "_blank"
        );
    });


    // CLICK EVENTS
    const eventsItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    eventsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events",
            "_blank"
        );
    });


    // CLICK DOM MANIPULATION
    const domManipulationItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    domManipulationItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
            "_blank"
        );
    });


    // CLICK ARRAYS & OBJECTS
    const arraysObjectsItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    arraysObjectsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays",
            "_blank"
        );
    });


    // CLICK ASYNC JAVASCRIPT
    const asyncJavaScriptItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    asyncJavaScriptItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises",
            "_blank"
        );
    });


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


    // CLICK DOM SELECTORS
    const domSelectorsItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    domSelectorsItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree",
            "_blank"
        );
    });


    // CLICK ELEMENT MANIPULATION
    const elementManipulationItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    elementManipulationItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/API/Element",
            "_blank"
        );
    });


    // CLICK EVENT HANDLING
    const eventHandlingItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    eventHandlingItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
            "_blank"
        );
    });


    // CLICK DOM TRAVERSAL
    const domTraversalItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    domTraversalItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM",
            "_blank"
        );
    });

    // CLICK DYNAMIC STYLING
    const dynamicStylingItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    dynamicStylingItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information",
            "_blank"
        );
    });


    // CLICK DYNAMIC CONTENT
    const dynamicContentItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    dynamicContentItem.addEventListener("click", function () {
        window.open(
            "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
            "_blank"
        );
    });



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


    // CLICK COMPONENTS
    const componentsItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    componentsItem.addEventListener("click", function () {
        window.open(
            "https://react.dev/learn/your-first-component",
            "_blank"
        );
    });


    // CLICK PROPS
    const propsItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    propsItem.addEventListener("click", function () {
        window.open(
            "https://react.dev/learn/passing-props-to-a-component",
            "_blank"
        );
    });


    // CLICK STATE
    const stateItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    stateItem.addEventListener("click", function () {
        window.open(
            "https://react.dev/learn/state-a-components-memory",
            "_blank"
        );
    });


    // CLICK HOOKS
    const hooksItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    hooksItem.addEventListener("click", function () {
        window.open(
            "https://react.dev/reference/react/hooks",
            "_blank"
        );
    });


    // CLICK JSX
    const jsxItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    jsxItem.addEventListener("click", function () {
        window.open(
            "https://react.dev/learn/writing-markup-with-jsx",
            "_blank"
        );
    });


    // CLICK REUSABLE UI
    const reusableUIItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    reusableUIItem.addEventListener("click", function () {

        window.open(
            "https://react.dev/learn/importing-and-exporting-components",
            "_blank"
        );

    });



});



// ==================================================
// DATABASE DEVELOPMENT
// ==================================================

const cardDatabase = document.getElementById("cardDatabase");

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


    // CLICK DATABASE DESIGN
    const databaseDesignItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    databaseDesignItem.addEventListener("click", function () {

        window.open(
            "https://www.postgresql.org/docs/current/ddl.html",
            "_blank"
        );

    });


    // CLICK TABLES & RELATIONSHIPS
    const tablesRelationshipsItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    tablesRelationshipsItem.addEventListener("click", function () {

        window.open(
            "https://www.postgresql.org/docs/current/ddl-constraints.html",
            "_blank"
        );

    });


    // CLICK SQL QUERIES
    const sqlQueriesItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    sqlQueriesItem.addEventListener("click", function () {
        window.open(
            "https://www.postgresql.org/docs/current/queries.html",
            "_blank"
        );
    });


    // CLICK DATA SEARCHING
    const dataSearchingItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    dataSearchingItem.addEventListener("click", function () {
        window.open(
            "https://www.postgresql.org/docs/current/functions-matching.html",
            "_blank"
        );
    });


    // CLICK FILTERING & SORTING
    const filteringSortingItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    filteringSortingItem.addEventListener("click", function () {
        window.open(
            "https://www.postgresql.org/docs/current/queries-order.html",
            "_blank"
        );
    });


    // CLICK QUERY OPTIMIZATION
    const queryOptimizationItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    queryOptimizationItem.addEventListener("click", function () {
        window.open(
            "https://www.postgresql.org/docs/current/using-explain.html",
            "_blank"
        );
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

    // CLICK VERSION CONTROL
    const versionControlItem =
        skillFeatures.querySelectorAll(".feature-item")[0];

    versionControlItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/get-started/using-git/about-git",
            "_blank"
        );

    });



    // CLICK COMMITS
    const commitsItem =
        skillFeatures.querySelectorAll(".feature-item")[1];

    commitsItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/rest/git/commits",
            "_blank"
        );

    });



    // CLICK BRANCHES
    const branchesItem =
        skillFeatures.querySelectorAll(".feature-item")[2];

    branchesItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/pull-requests/reference/branches",
            "_blank"
        );

    });


    // CLICK PUSH & PULL
    const pushPullItem =
        skillFeatures.querySelectorAll(".feature-item")[3];

    pushPullItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository",
            "_blank"
        );

    });


    // CLICK MERGE
    const mergeItem =
        skillFeatures.querySelectorAll(".feature-item")[4];

    mergeItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/get-started/using-git/about-git-subtree-merges",
            "_blank"
        );

    });


    // CLICK GITHUB REPOSITORY
    const githubRepositoryItem =
        skillFeatures.querySelectorAll(".feature-item")[5];

    githubRepositoryItem.addEventListener("click", function () {

        window.open(
            "https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories",
            "_blank"
        );

    });




});




