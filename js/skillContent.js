const semanticHTML = {

    title: "Semantic HTML",

    description: `
        Semantic HTML adalah penggunaan elemen HTML
        yang memiliki makna dan menjelaskan fungsi
        dari bagian konten secara jelas.
    `,

    example: `
<header>
    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>
</header>

<main>

    <section>
        <h1>Front-End Web Developer</h1>
        <p>I build modern websites.</p>
    </section>

    <article>
        <h2>My Project</h2>
        <p>Website portfolio project.</p>
    </article>

</main>

<footer>
    <p>&copy; 2026 David Gunawan</p>
</footer>
    `,

    purpose: `
        Semantic HTML membantu browser, search engine,
        dan assistive technologies memahami struktur
        halaman dengan lebih baik.
    `
};


// ==========================================
// SHOW SKILL CONTENT
// ==========================================

function showSkillContent(content) {

    const modal = document.getElementById("skillContentModal");

    if (!modal) {
        console.error("skillContentModal tidak ditemukan.");
        return;
    }

    modal.querySelector(".skill-content-title").textContent =
        content.title;

    modal.querySelector(".skill-content-description").textContent =
        content.description;

    modal.querySelector(".skill-content-code").textContent =
        content.example;

    modal.querySelector(".skill-content-purpose").textContent =
        content.purpose;

    modal.classList.add("show");
}


// ==========================================
// CLOSE MODAL
// ==========================================

const closeSkillModal =
    document.getElementById("closeSkillModal");

closeSkillModal.addEventListener("click", function () {

    const modal =
        document.getElementById("skillContentModal");

    modal.classList.remove("show");

});



// ==========================================
// HTML5
// ==========================================

const html5Elements = {

    title: "HTML5 Elements",

    description: `
        HTML5 menyediakan berbagai elemen baru yang
        membantu membuat struktur dan konten website
        menjadi lebih lengkap dan modern.
    `,

    example: `
<header>
    <h1>My Website</h1>
</header>

<main>

    <section>
        <h2>About Me</h2>
        <p>I am a Front-End Web Developer.</p>
    </section>

    <figure>
        <img src="photo.jpg" alt="My Photo">
        <figcaption>My Profile Photo</figcaption>
    </figure>

    <audio controls>
        <source src="music.mp3" type="audio/mpeg">
    </audio>

    <video controls width="400">
        <source src="video.mp4" type="video/mp4">
    </video>

</main>

<footer>
    <p>&copy; 2026 David Gunawan</p>
</footer>
    `,

    purpose: `
        HTML5 Elements membantu developer menggunakan
        elemen yang lebih jelas dan sesuai dengan jenis
        konten yang digunakan, seperti gambar, audio,
        video, figure, dan struktur halaman.
    `
};


