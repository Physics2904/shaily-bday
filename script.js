let text = "Happy 21st Birthday Shaily 💖";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();

// floating hearts
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 300);

// cake click
function blowCandles() {
  document.querySelector(".cake").innerHTML = "🎂✨";

  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
  }

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 2500);
}