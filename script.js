const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 100;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.fillStyle = 'rgba(240,240,240, 0.4)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00aaff';
  stars.forEach((s) => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.speed;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animate);
}

animate();