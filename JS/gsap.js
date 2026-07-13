/*======================================
NAVBAR
======================================*/

gsap.from("header",{

    y:-80,

    opacity:0,

    duration:1,

    ease:"power3.out"

});

/*======================================
TITLE
======================================*/

gsap.to(".animate-title",{

    opacity:1,

    y:0,

    stagger:.25,

    duration:1.2,

    ease:"power3.out"

});

/*======================================
BUTTON
======================================*/

gsap.to(".animate-button",{

    opacity:1,

    delay:1.3,

    duration:1

});

/*======================================
PHOTO
======================================*/

gsap.to(".profile-image",{

    opacity:1,

    scale:1,

    duration:1.4,

    delay:.8,

    ease:"back.out(1.7)"

});

/*======================================
MOON GLOW
======================================*/

gsap.to(".moon-glow",{

    opacity:.8,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});