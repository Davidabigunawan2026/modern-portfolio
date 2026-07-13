/*==================================================
CANVAS SETUP
==================================================*/

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

// Inisialisasi ukuran
resizeCanvas();


/*==================================================
RESIZE
==================================================*/

    window.addEventListener("resize", () => {
    resizeCanvas();

    // Perbarui posisi objek setelah resize
    if (typeof createNebula === "function") {

        nebulae.length = 0;
        createNebula();

    }

    if (typeof createStars === "function") {

        stars.length = 0;
        createStars();

    }

});

/*==================================================
CLEAR CANVAS
==================================================*/

