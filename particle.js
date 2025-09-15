document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  let width = 0, height = 0;

  function resize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  // 粒子參數
  const particles = [];
  const PARTICLE_NUM = 50; // 數量多
  const MAX_DIST = 120;

  for (let i = 0; i < PARTICLE_NUM; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2 + Math.random() * 2, // 小點
      dx: (Math.random() - 0.5) * 1,
      dy: (Math.random() - 0.5) * 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 畫粒子
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffffcc"; // 淡白色點
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      // 邊界反彈
      if (p.x < 0 || p.x > width) p.dx *= -1;
      if (p.y < 0 || p.y > height) p.dy *= -1;
    }

    // 畫連線
    for (let i = 0; i < PARTICLE_NUM; i++) {
      for (let j = i + 1; j < PARTICLE_NUM; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.strokeStyle = `rgba(200,200,255,${1 - dist / MAX_DIST})`;
          ctx.lineWidth = 5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
});
