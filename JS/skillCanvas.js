/*==================================================
SKILL CANVAS LOOP
==================================================*/

function animateSkill(){

    updateFloatingTags();
    drawFloatingTags();
    requestAnimationFrame(animateSkill);

}


/*==================================================
INITIALIZE
==================================================*/

setSkill("html");
animateSkill();