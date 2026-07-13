/*==================================================
CREATE METEOR
==================================================*/

function createMeteor(){

    const angle = (30 + Math.random() * 10) * Math.PI / 180;
    const speed = 700 + Math.random() * 300;

    let x;
    let y;
    let vx;
    let vy;

    // 0 = kiri → kanan
    // 1 = kanan → kiri
    const direction = Math.random() < 0.5 ? 0 : 1;

    if(direction === 0){

        x = -150;
        y = Math.random() * height * 0.6;

        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;

    }else{

        x = width + 150;
        y = Math.random() * height * 0.6;

        vx = -Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;

    }

    meteors.push({

        x,
        y,

        vx,
        vy,

        life:0,
        maxLife:2,

        length:220 + Math.random() * 120,

        headRadius:2 + Math.random() * 2,

        alpha:1

    });

}


/*==================================================
UPDATE METEOR
==================================================*/

function updateMeteor(deltaTime){

    meteorTimer += deltaTime * 1000;

    if(meteorTimer >= nextMeteorTime){

        createMeteor();

        meteorTimer = 0;

        nextMeteorTime = random(
            METEOR_INTERVAL_MIN,
            METEOR_INTERVAL_MAX
        );

    }

    for(let i = meteors.length - 1; i >= 0; i--){

        const meteor = meteors[i];

        meteor.x += meteor.vx * deltaTime;
        meteor.y += meteor.vy * deltaTime;

        meteor.life += deltaTime;

        meteor.alpha = 1 - (meteor.life / meteor.maxLife);

        if(meteor.life >= meteor.maxLife){

            meteors.splice(i,1);

        }

    }

}


/*==================================================
DRAW METEOR
==================================================*/

function drawMeteor(){

    for(const meteor of meteors){

        const angle = Math.atan2(meteor.vy, meteor.vx);

        const tailX =
            meteor.x - Math.cos(angle) * meteor.length;

        const tailY =
            meteor.y - Math.sin(angle) * meteor.length;

        // Ekor
        const gradient = ctx.createLinearGradient(

            meteor.x,
            meteor.y,

            tailX,
            tailY

        );

        gradient.addColorStop(
            0,
            "rgba(255,255,255," + meteor.alpha + ")"
        );

        gradient.addColorStop(
            1,
            "rgba(255,255,255,0)"
        );

        ctx.beginPath();

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 2;

        ctx.moveTo(meteor.x, meteor.y);

        ctx.lineTo(tailX, tailY);

        ctx.stroke();

        // Kepala meteor
        ctx.beginPath();

        ctx.fillStyle =
            "rgba(255,255,255," + meteor.alpha + ")";

        ctx.arc(

            meteor.x,
            meteor.y,

            meteor.headRadius,

            0,
            Math.PI * 2

        );

        ctx.fill();

    }

}





