/*==================================================
HTML TAG EXPLORER
==================================================*/

const htmlTags = [];

const HTML_TAG_COUNT = 30;

const htmlTagList = [

"<html>",
"<head>",
"<body>",
"<header>",
"<main>",
"<section>",
"<article>",
"<aside>",
"<footer>",
"<nav>",
"<div>",
"<span>",
"<img>",
"<picture>",
"<canvas>",
"<svg>",
"<video>",
"<audio>",
"<form>",
"<label>",
"<input>",
"<textarea>",
"<button>",
"<select>",
"<option>",
"<table>",
"<tr>",
"<td>",
"<ul>",
"<li>",
"<a>",
"<script>",
"<link>",
"<meta>"

];

function randomHtmlTag(){

    return htmlTagList[
        Math.floor(Math.random()*htmlTagList.length)
    ];

}

/*==================================================
CLASS
==================================================*/

class HtmlTag{

    constructor(){

        this.reset();

    }

    reset(){

        this.text = randomHtmlTag();

        this.x = random(0,width);
        this.y = random(0,height);

        this.size = random(16,38);

        this.alpha = random(.03,.08);

        this.speedX = random(-0.08,0.08);
        this.speedY = random(-0.05,0.05);

        this.rotation = random(-12,12);

        this.rotateSpeed = random(-0.03,0.03);

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        this.rotation += this.rotateSpeed;

        if(this.x < -150) this.x = width+50;
        if(this.x > width+150) this.x = -50;

        if(this.y < -50) this.y = height+50;
        if(this.y > height+50) this.y = -50;

    }

    draw(){

        ctx.save();

        ctx.translate(this.x,this.y);

        ctx.rotate(this.rotation*Math.PI/180);

        ctx.font =
            `${this.size}px Consolas`;

        ctx.textAlign="center";

        ctx.fillStyle=
            `rgba(94,234,212,${this.alpha})`;

        ctx.fillText(this.text,0,0);

        ctx.restore();

    }

}

/*==================================================
CREATE
==================================================*/

function createHtmlTags(){

    htmlTags.length=0;

    for(let i=0;i<HTML_TAG_COUNT;i++){

        htmlTags.push(new HtmlTag());

    }

}

/*==================================================
UPDATE
==================================================*/

function updateHtmlTags(){

    htmlTags.forEach(tag=>tag.update());

}

/*==================================================
DRAW
==================================================*/

function drawHtmlTags(){

    htmlTags.forEach(tag=>tag.draw());

}