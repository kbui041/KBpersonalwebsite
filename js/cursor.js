document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas dimensions
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let particles = [];
  const mouse = {
    x: null,
    y: null
  };

  function getThemeColor() {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    return theme === 'light' ? 'rgba(79, 70, 229,' : 'rgba(129, 140, 248,';
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    
    // Create particles based on mouse movement speed
    const speed = Math.sqrt(
      Math.pow(e.movementX || 0, 2) + 
      Math.pow(e.movementY || 0, 2)
    );
    
    const particleCount = Math.min(Math.floor(speed / 5), 5);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  });

  class Particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.alpha = 1;
      this.color = getThemeColor();
      this.decay = 0.01 + Math.random() * 0.01;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= this.decay;
      this.size -= this.decay * 0.5;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} ${this.alpha})`;
      ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((particle, i) => {
      particle.update();
      particle.draw();
      
      if (particle.alpha <= 0 || particle.size <= 0) {
        particles.splice(i, 1);
      }
    });
    
    requestAnimationFrame(animate);
  }

  animate();
});
