
/*==================================================
RESIZE
==================================================*/

function resizeCanvas(){

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

}


/*==================================================
CLEAR CANVAS
==================================================*/

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


/*==================================================
UTILITY FUNCTIONS
==================================================*/

function random(min, max){
    return Math.random() * (max - min) + min;
}





