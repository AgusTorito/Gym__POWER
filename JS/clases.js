document.addEventListener("DOMContentLoaded", () => {

    // === 1. Scroll Reveal en las tarjetas ===
    const clases = document.querySelectorAll('.clase');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    clases.forEach(clase => observer.observe(clase));

    // === 2. Resaltado dinámico de filtro activo ===
    const radios = document.querySelectorAll('.filtros input[type="radio"]');
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        localStorage.setItem('filtroSeleccionado', radio.id);
      });
    });

    // === 3. Cargar filtro seleccionado desde localStorage ===
    const filtroGuardado = localStorage.getItem('filtroSeleccionado');
    if (filtroGuardado) {
      document.getElementById(filtroGuardado).checked = true;
    }

    // === 4. Botón para activar modo oscuro ===
    const toggleDark = document.createElement('button');
    toggleDark.textContent = '🌙 Modo Oscuro';
    toggleDark.style.position = 'fixed';
    toggleDark.style.top = '10px';
    toggleDark.style.right = '10px';
    toggleDark.style.padding = '10px 15px';
    toggleDark.style.zIndex = '999';
    toggleDark.style.borderRadius = '8px';
    toggleDark.style.background = '#222';
    toggleDark.style.color = 'white';
    toggleDark.style.cursor = 'pointer';
    toggleDark.style.border = 'none';
    document.body.appendChild(toggleDark);

    toggleDark.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('modoOscuro', document.body.classList.contains('dark'));
    });

    // Cargar estado del modo oscuro
    if (localStorage.getItem('modoOscuro') === 'true') {
      document.body.classList.add('dark');
    }
  });