const blogs = [
  {
    title: "Happy 3 Months ❤️",
    content: "Happy 3 months darling ❤️ These past three months have genuinely been the best time of my life, and I hope you feel the same way. I know I’m not perfect, but I promise I’ll always try to be better for you. I’ll always do my best to keep you happy, comfortable, and cared for — because you truly mean everything to me."  }
];

const container = document.getElementById("blogs");

blogs.forEach(b => {
    const div = document.createElement("div");
    div.className = "blog";
    div.innerHTML = `<h2>${b.title}</h2><p>${b.content}</p>`;
    container.appendChild(div);
});

function goGame() {
    window.location.href = "game.html";
}

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
}

/* 💖 Floating hearts */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    document.querySelector(".bg").style.transform =
        `translateY(${scroll * 0.2}px) scale(1.05)`;
});
