const spider = document.getElementById("spider");
const legs = document.querySelectorAll(".leg");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let spiderX = mouseX;
let spiderY = mouseY;

let angle = 0;
let legWave = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateSpider() {

  spiderX += (mouseX - spiderX) * 0.08;
  spiderY += (mouseY - spiderY) * 0.08;


  angle = Math.atan2(mouseY - spiderY, mouseX - spiderX) * (180 / Math.PI);

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
  spider.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;


  requestAnimationFrame(animateSpider);
}

animateSpider();


const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 160 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  size: Math.random() * 2 + 0.5,
  speed: Math.random() * 0.3 + 0.1
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(220,225,220,0.9)";
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = -5;
      star.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(drawStars);
}

animateSpider();
drawStars();