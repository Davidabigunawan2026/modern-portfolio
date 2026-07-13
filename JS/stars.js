/*==================================================
CREATE STARS
==================================================*/

const STAR_RESPAWN_OFFSET = 5;


// ----------------- STAR COLOR ---------------
function randomStarColor(){

    const colors = [
        "#FFFFFF",   // putih
        "#FFF8DC",   // kuning pucat
        "#E6F7FF",   // biru muda
        "#FFEFD5"    // oranye sangat pucat
    ];

    return colors[Math.floor(Math.random() * colors.length)];

}


// ----------------- Create STAR ----------------
function createStars(){
    stars.length = 0;

for(let i=0;i<STAR_COUNT;i++){

    const baseAlpha = 0.3 + Math.random() * 0.7;

    stars.push({

       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,

       radius: Math.random() * 1.8 + 0.5,
       color: randomStarColor(),
       alpha: baseAlpha,
       speed: 0.5 + Math.random(),
       phase: Math.random() * Math.PI * 2

     });

  }

}

// -------------- UPDATE STAR ------------------------
function updateStars(deltaTime){

    stars.forEach(star=>{

        star.phase += deltaTime * 2 * star.speed;
        star.alpha = 0.6 + Math.sin(star.phase) * 0.4;

    });

}



// ------------------- DRAW STAR --------------------
function drawStars(){

    stars.forEach(star=>{

        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.fillStyle = star.color;

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();
        ctx.restore();

    });

    ctx.globalAlpha = 1;

}






