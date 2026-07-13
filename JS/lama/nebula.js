/*==================================================
NEBULA CLASS
==================================================*/

class Nebula{

    constructor(){
        this.reset();
    }

    reset(){

        this.x = random(0, width);
        this.y = random(0, height);

        this.radius = random(180,260);

        this.color = randomColor();

        this.alpha = random(0.03,0.05);

        this.speedX = random(-0.08,0.08);
        this.speedY = random(-0.04,0.04);

        this.blobs = [];

    for(let i = 0; i < 14; i++){

    const angle = random(0, Math.PI * 2);
    const distance = random(0, this.radius * 0.75);

    this.blobs.push({

        ox : Math.cos(angle) * distance,
        oy : Math.sin(angle) * distance,

        size : random(35,90)

    });

    }


for(let i = 0; i < 12; i++){

    const angle = random(0, Math.PI * 2);
    const distance = random(0, this.radius * 0.90);

    this.blobs.push({
        ox : Math.cos(angle) * distance,
        oy : Math.sin(angle) * distance,
        size : random(12,35)
    });

    }

    }

}   // ← Penutup class Nebula



    
 
/*==================================================
NEBULA COLORS
==================================================*/
function randomColor(){

    const colors = [

        {r:80,  g:220, b:255},
        {r:60,  g:170, b:255},
        {r:160, g:90,  b:255},
        {r:255, g:120, b:220},
        {r:120, g:255, b:220}

    ];

    return colors[Math.floor(Math.random() * colors.length)];

}



/*==================================================
CREATE NEBULA
==================================================*/

function createNebula(){

    nebulas.length = 0;

    for(let i = 0; i < NEBULA_COUNT; i++){
        nebulas.push(new Nebula());
    }

//    console.log("Jumlah Nebula:", nebulas.length);
//    console.log(nebulas);

}


/*==================================================
UPDATE NEBULA
==================================================*/

function updateNebula(dt){

    nebulas.forEach(nebula=>{

        nebula.x += nebula.speedX * dt;
        nebula.y += nebula.speedY * dt;

        if(nebula.x < -nebula.radius){
            nebula.x = width + nebula.radius;
        }

        if(nebula.x > width + nebula.radius){
            nebula.x = -nebula.radius;
        }

        if(nebula.y < -nebula.radius){
            nebula.y = height + nebula.radius;
        }

        if(nebula.y > height + nebula.radius){
            nebula.y = -nebula.radius;
        }

    });

}


/*==================================================
DRAW NEBULA
==================================================*/

function drawNebula(){

    nebulas.forEach(nebula=>{

//    console.log(nebula.color);
//    console.log(nebula.alpha);

        ctx.save();
        ctx.filter = "blur(20px)";
    //    ctx.filter="none";

        nebula.blobs.forEach(blob=>{

            const g=ctx.createRadialGradient(

                nebula.x+blob.ox,
                nebula.y+blob.oy,
                0,

                nebula.x+blob.ox,
                nebula.y+blob.oy,
                blob.size

            );


       //     g.addColorStop(0, "rgba(0,255,255,0.8)");
       //     g.addColorStop(0.5, "rgba(0,255,255,0.3)");
       //     g.addColorStop(1, "rgba(0,255,255,0)");

       const color0 =
`rgba(${nebula.color.r},${nebula.color.g},${nebula.color.b},0.18)`;

const color1 =
`rgba(${nebula.color.r},${nebula.color.g},${nebula.color.b},0.08)`;

const color2 =
`rgba(${nebula.color.r},${nebula.color.g},${nebula.color.b},0)`;


g.addColorStop(0, color0);
g.addColorStop(0.5, color1);
g.addColorStop(1, color2);


            ctx.fillStyle=g;
            ctx.beginPath();
            ctx.arc(

                nebula.x+blob.ox,
                nebula.y+blob.oy,
                blob.size,

                0,

                Math.PI*2

            );

            ctx.fill();

        });

        ctx.restore();

    });

}





    







