window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(18, 18, 18, 0.9)";
    } else {
        nav.style.background = "rgba(18, 18, 18, 0.8)";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".hero-content p:last-child");
    const words = ["Welcome!", "Selamat Datang!", "Bienvenido!", "欢迎!", "أهلا بك!", "ようこそ!"];
    let index = 0;

    setInterval(() => {
        text.textContent = words[index];
        index = (index + 1) % words.length;
    }, 2000);
});

