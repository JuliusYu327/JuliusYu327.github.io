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
  const PARTICLE_NUM = 25;
  const colors = ['#c6c8caff', '#ddebf7af', '#e0efffff', '#f5f8fb'];

  for (let i = 0; i < PARTICLE_NUM; i++) {
    // 集中在中間偏右
    const xCenter = width * 0.6 + (Math.random() - 0.5) * width * 0.2;
    const yCenter = height * 0.5 + (Math.random() - 0.5) * height * 0.4;

    particles.push({
      x: xCenter,
      y: yCenter,
      r: 20 + Math.random() * 40,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.1 + Math.random() * 0.3,
      dx: 0.3 + Math.random() * 0.2,  // 整體偏右
      dy: (Math.random() - 0.5) * 0.3, // 上下微幅漂浮
      t: Math.random() * Math.PI * 2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 粒子連線
    for (let i = 0; i < PARTICLE_NUM; i++) {
      for (let j = i + 1; j < PARTICLE_NUM; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.strokeStyle = `rgba(200,200,255,${0.1 * (1 - dist/150)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // 畫粒子
    for (const p of particles) {
      p.t += 0.01;
      ctx.globalAlpha = p.alpha + 0.05 * Math.sin(p.t);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + 5 * Math.sin(p.t), 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // 移動
      p.x += p.dx;
      p.y += p.dy;

      // 邊界循環
      if (p.x < -p.r) p.x = width + p.r;
      if (p.x > width + p.r) p.x = -p.r;
      if (p.y < -p.r) p.y = height + p.r;
      if (p.y > height + p.r) p.y = -p.r;
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
});