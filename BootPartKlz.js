<!-- bootstrap -->
  <script type="module">
     import { di_initParticles } from 'https://kodux78k.github.io/oiDual-ParTKlz/oiDual-ParTKlz.js';

    // init imediato só pra preview (override minimal)
di_initParticles({
  di_target: 'particles-js',
  di_config: {
    particles: {
      number: { value: 40 },

      color: {
        value: ['#0ff', '#f0f']
      },

      shape: { type: 'circle' },
      opacity: { value: 0.4 },
      size: { value: 2.4 },

      move: {
        enable: true,
        speed: 1.5
      }
    }
  }
});
  </script>