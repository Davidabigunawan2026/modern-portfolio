/*==================================================
GLOBAL VARIABLES
==================================================*/

const isMobile = window.innerWidth <= 768;
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let width;
let height;

const stars = [];
const meteors = [];
const nebulas = [];

let lastTime = 0;
let deltaTime = 0;

const STAR_COUNT = 200;
const NEBULA_COUNT = 4;

let meteorTimer = 0;
const METEOR_INTERVAL_MIN = 800;
const METEOR_INTERVAL_MAX = 2500;
let nextMeteorTime = random(METEOR_INTERVAL_MIN, METEOR_INTERVAL_MAX);


/*==================================================
INITIALIZE
==================================================*/

/*==================================================
INITIALIZE
==================================================*/

function init() {

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (!isMobile) {
        createNebula();
        createStars();
        createMeteor();
    }

//    setSkill("html");

    requestAnimationFrame(animate);

}

init();



/* ==================================================
   PREMIUM CURSOR
================================================== */

const cursor = document.querySelector(".cursor");
const threadPath = document.querySelector("#threadPath");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const points = [];
const POINT_COUNT = 8;


/* Buat titik benang */
for (let i = 0; i < POINT_COUNT; i++) {

    points.push({
        x: 0,
        y: 0
    });

}


/* ==================================================
   MOUSE MOVE
================================================== */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});



/* ==================================================
   ANIMATE  CURSOR
================================================== */

function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;


    /* Cursor */
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";


    /* Benang */
    points[0].x = cursorX;
    points[0].y = cursorY;


    for (let i = 1; i < POINT_COUNT; i++) {

        points[i].x +=
            (points[i - 1].x - points[i].x) * 0.18;

        points[i].y +=
            (points[i - 1].y - points[i].y) * 0.18;

    }


    let path =
        `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < POINT_COUNT; i++) {

        const p = points[i - 1];
        const c = points[i];
        const x = (p.x + c.x) / 2;
        const y = (p.y + c.y) / 2;
        path +=
            ` Q ${p.x} ${p.y} ${x} ${y}`;

    }

    threadPath.setAttribute("d", path);

    requestAnimationFrame(animateCursor);

}

animateCursor();









/*==================================================
SKILL CARD EVENT
==================================================*/


document.getElementById("cardCSS").addEventListener("click", () => {
    setSkill("css");
});

document.getElementById("cardJS").addEventListener("click", () => {
    setSkill("javascript");
});

document.getElementById("cardDOM").addEventListener("click", () => {
    setSkill("dom");
});

document.getElementById("cardReact").addEventListener("click", () => {
    setSkill("react");
});

document.getElementById("cardDatabase").addEventListener("click", () => {
    setSkill("database");
});

document.getElementById("cardGit").addEventListener("click", () => {
    setSkill("git");
});


/*==================================================
MAIN LOOP
==================================================*/

function animate(currentTime){

    if(lastTime === 0){
        lastTime = currentTime;
    }

    deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    clearCanvas();

//    if (!isMobile) {
        updateNebula(deltaTime);
        drawNebula();
//    }


    updateStars(deltaTime);
    drawStars();

    updateMeteor(deltaTime);
    drawMeteor();

//    updateFloatingTags();
//    drawFloatingTags();

    requestAnimationFrame(animate);

}



/*==================================================
ACTIVE NAVBAR
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const observer = new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{
            if(!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach(link=>{
                link.classList.remove("active");
                if(link.getAttribute("href")==="#" + id){
                    link.classList.add("active");
                }
            });

        });

    },

    {
        root:null,
        threshold:0.45
    }

);


sections.forEach(section=>{
    observer.observe(section);
});



