<script type="module">
  import { di_initParticles } from 'https://kodux78k.github.io/oiDual-ParTKlz/oiDual-ParTKlz-1.js';

  // CSS override / guarantee layer
  const DI_CSS = `
  /* di particles module injected style */
  #particles-js {
    position: absolute !important;
    inset: 0 !important;
    z-index: 780 !important;
    pointer-events: none !important;
  }
  `;

  // injeta CSS uma vez
  if (!document.getElementById('di-particles-style')) {
    const style = document.createElement('style');
    style.id = 'di-particles-style';
    style.textContent = DI_CSS;
    document.head.appendChild(style);
  }

  // init com override (JS only)
  di_initParticles({
    di_target: 'particles-js',
    di_config: {
      particles: {
        color: { value: ['#0ff', '#f0f'] },
        move: { speed: 1.5 }
      }
    }
  });
</script>