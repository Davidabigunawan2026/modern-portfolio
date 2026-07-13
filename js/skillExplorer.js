const skillCanvas = document.getElementById("skillCanvas");
const skillCtx = skillCanvas.getContext("2d");


/*==================================================
SKILL EXPLORER ENGINE
==================================================*/

const explorer = {
    current:null,
    floatingTags:[]
};


function resizeSkillCanvas(){

    skillCanvas.width =
        skillCanvas.clientWidth;

    skillCanvas.height =
        skillCanvas.clientHeight;

}

resizeSkillCanvas();

window.addEventListener(
    "resize",
    resizeSkillCanvas
);



/*==================================================
CLASS
==================================================*/

class FloatingTag{

    constructor(text){
        this.text=text;
        this.reset();
    }

    reset() {

        this.speedX = (Math.random() - .5) * 0.08;

        // Bergerak ke atas
        this.speedY = -(0.2 + Math.random() * 0.3);

        this.alpha = .03 + Math.random() * .05;

        this.rotation = (Math.random() * 20) - 10;
        this.rotateSpeed = (Math.random() - .5) * 0.05;

        const margin = 80;

        // 25% tag menjadi lebih besar
        this.isHighlight = Math.random() < 0.25;
        if (this.isHighlight) {
            this.size = 26 + Math.random() * 6;
        } else {
            this.size = 18 + Math.random() * 2;
        }


        this.x =
            margin +
            Math.random() *
            (skillCanvas.width - margin * 2);

        this.y =
            margin +
            Math.random() *
            (skillCanvas.height - margin * 2);

    }

}



/*==================================================
CREATE
==================================================*/

function createFloatingTags(skill){

    explorer.current = skill;
    explorer.floatingTags = [];

    skill.tags.forEach(text=>{

        const tag = new FloatingTag(text);
        let safe = false;
        let tries = 0;

        while (!safe && tries < 100) {

            safe = true;
            tag.x = 60 + Math.random() * (skillCanvas.width - 120);
            tag.y = 60 + Math.random() * (skillCanvas.height - 120);

            for (const other of explorer.floatingTags) {
                const dx = tag.x - other.x;
                const dy = tag.y - other.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                const requiredDistance =
                    Math.max(
                        other.text.length,
                        tag.text.length
                    ) * 8;

                if(distance < requiredDistance){
                    safe = false;
                    break;
                }

            }

            tries++;

        }

        explorer.floatingTags.push(tag);

    });

}




/*==================================================
UPDATE
==================================================*/

function updateFloatingTags(){

    explorer.floatingTags.forEach(tag=>{

        tag.x+=tag.speedX;
        tag.y+=tag.speedY;
        tag.rotation+=tag.rotateSpeed;

        if(tag.x < -150) tag.x = skillCanvas.width + 100;
        if(tag.x > skillCanvas.width + 100) tag.x = -100;

        if(tag.y < -50) tag.y = skillCanvas.height + 50;
        if(tag.y > skillCanvas.height + 50) tag.y = -50;

        if(tag.y < -60){
            tag.y = skillCanvas.height + 60;
            tag.x = Math.random()*skillCanvas.width;
        }

    });

}


/*==================================================
DRAW
==================================================*/

function drawFloatingTags(){

    const skill = explorer.current;


    skillCtx.clearRect(
            0,
            0,
            skillCanvas.width,
            skillCanvas.height
    );
    
  
    explorer.floatingTags.forEach((tag, index) => {

        skillCtx.save();

        // Pindahkan titik gambar ke posisi tag
        skillCtx.translate(tag.x, tag.y);

        // Jika nanti ingin rotasi, aktifkan lagi
        // skillCtx.rotate(tag.rotation * Math.PI / 180);

        skillCtx.font = `bold ${tag.size}px Consolas`;
        skillCtx.textAlign = "center";
        skillCtx.textBaseline = "middle";

        if(tag.isHighlight){
            skillCtx.globalAlpha = 1;
            skillCtx.shadowBlur = 12;
        }else{
            skillCtx.globalAlpha = 0.65;
            skillCtx.shadowBlur = 5;
        }




        /*=====================================
        Glow Besar
        =====================================*/

        skillCtx.shadowColor = skill.shadowColor;

        skillCtx.shadowOffsetX = 0;
        skillCtx.shadowOffsetY = 0;

        skillCtx.strokeStyle = skill.shadowColor;
        skillCtx.lineWidth = 2.5;

        skillCtx.strokeText(tag.text, 0, 0);




        /*=====================================
        Teks Utama
        =====================================*/



        skillCtx.shadowBlur = 0;
        skillCtx.globalAlpha = 1;

        skillCtx.fillStyle = skill.textColor;
        skillCtx.fillText(tag.text, 0, 0);

        skillCtx.globalAlpha = 1;    // -------- Ini Harus ada  Penting Sekali ---------
        skillCtx.restore();          // -------- Ini Penting sekali, agar TAG muncul



    });

}




/*==================================================
CHANGE SKILL
==================================================*/



function setSkill(skillName) {

    const title = document.getElementById("skillTitle");
    const description = document.getElementById("skillDescription");
    const skill = Skills[skillName];

    title.style.color = skill.color;
    description.style.color = skill.color;

    explorer.current = skill;
    createFloatingTags(skill);

    document.getElementById("skillTitle").textContent =
        skill.title;
    document.getElementById("skillDescription").textContent =
        skill.description;
    document.documentElement.style.setProperty(
        "--skill-color",
        skill.color

    );

    document.documentElement.style.setProperty(
        "--skill-glow",
        skill.glow
    );


    /*=====================================
    ACTIVE CARD
    =====================================*/

    document.querySelectorAll(".skill-card")
        .forEach(card => {
            card.classList.remove("active");
        });


    if (skillName === "html") {
        document.getElementById("cardHTML")
            .classList.add("active");
    }

    if (skillName === "css") {
        document.getElementById("cardCSS")
            .classList.add("active");
    }

    if (skillName === "javascript") {
        document.getElementById("cardJS")
            .classList.add("active");
    }

    if (skillName === "dom") {
        document
            .getElementById("cardDOM")
            .classList.add("active");
    }

    if (skillName === "react") {
        document.getElementById("cardReact")
            .classList.add("active");
    }

    if (skillName === "database") {
        document.getElementById("cardDatabase")
            .classList.add("active");
    }

    if (skillName === "git") {
        document.getElementById("cardGit")
            .classList.add("active");
    }


}



