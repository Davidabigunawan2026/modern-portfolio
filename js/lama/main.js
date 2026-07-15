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
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

createNebula();
createStars();

setSkill("html");

requestAnimationFrame(animate);



/*==================================================
SKILL CARD EVENT
==================================================*/

document.getElementById("cardHTML").addEventListener("click", () => {
    setSkill("html");
});

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

    deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    clearCanvas();

    updateNebula(deltaTime);
    drawNebula();

    updateStars(deltaTime);
    drawStars();

    updateMeteor(deltaTime);
    drawMeteor();

    updateFloatingTags();
    drawFloatingTags();

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



