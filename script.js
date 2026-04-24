const blogs = [
  {
    title: "Happy 3 Months ❤️",
    content: "These 3 months changed everything for me. You make life softer, brighter, and infinitely better. I love you more than words can ever hold."
  }
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

setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);

document.body.addEventListener("click", () => {
    document.getElementById("music").play();
}, { once: true });
