document.addEventListener("DOMContentLoaded", () => {
    // === Scroll Reveal para cartas de entrenadores ===
    const cartas = document.querySelectorAll('.carta');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    cartas.forEach(carta => observer.observe(carta));

    // === Modo oscuro activable manualmente ===
    const darkToggle = document.createElement('button');
    darkToggle.textContent = '🌙 Modo Oscuro';
    darkToggle.style.position = 'fixed';
    darkToggle.style.top = '10px';
    darkToggle.style.right = '10px';
    darkToggle.style.padding = '10px 15px';
    darkToggle.style.border = 'none';
    darkToggle.style.borderRadius = '8px';
    darkToggle.style.backgroundColor = '#333';
    darkToggle.style.color = 'white';
    darkToggle.style.cursor = 'pointer';
    darkToggle.style.zIndex = '999';
    document.body.appendChild(darkToggle);

    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('modoOscuroEntrenadores', document.body.classList.contains('dark'));
    });

    if (localStorage.getItem('modoOscuroEntrenadores') === 'true') {
      document.body.classList.add('dark');
    }

    // === Rating visual: mostrar valor seleccionado ===
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating => {
      const inputs = rating.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          const valor = input.id.replace(/\D/g, ''); // Extrae número
          alert(`¡Gracias por valorar con ${valor} estrella(s)!`);
        });
      });
    });

        // === Favoritos: marcar entrenador preferido ===
        const nombres = document.querySelectorAll('.card-front h3');

        nombres.forEach(nombre => {
          nombre.style.cursor = 'pointer';
          nombre.title = 'Agregar a favoritos';
    
          nombre.addEventListener('click', () => {
            const id = nombre.dataset.id;
            localStorage.setItem('entrenadorFavorito', id);
            mostrarNotificacion(`✅ ${nombre.textContent} fue agregado a favoritos`);
            resaltarFavorito(id);
          });
        });
    
        function resaltarFavorito(id) {
          nombres.forEach(n => n.classList.remove('favorito'));
          const favorito = document.querySelector(`[data-id="${id}"]`);
          if (favorito) favorito.classList.add('favorito');
        }
    
        function mostrarNotificacion(mensaje) {
          const noti = document.createElement('div');
          noti.textContent = mensaje;
          noti.style.position = 'fixed';
          noti.style.bottom = '20px';
          noti.style.right = '20px';
          noti.style.padding = '15px 20px';
          noti.style.background = '#00c2ff';
          noti.style.color = 'white';
          noti.style.borderRadius = '8px';
          noti.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
          noti.style.zIndex = '1000';
          document.body.appendChild(noti);
          setTimeout(() => noti.remove(), 3000);
        }
    
        // Al cargar la página, mostrar favorito guardado
        const favoritoGuardado = localStorage.getItem('entrenadorFavorito');
        if (favoritoGuardado) resaltarFavorito(favoritoGuardado);
    
        nombre.addEventListener('click', () => {
          const id = nombre.dataset.id;
          localStorage.setItem('entrenadorFavorito', id);
          mostrarNotificacion(`✅ ${nombre.textContent} fue agregado a favoritos`);
          resaltarFavorito(id);
        
          // 👉 Agrega marca visual en la carta
          document.querySelectorAll('.carta').forEach(c => c.classList.remove('seleccionada'));
          nombre.closest('.carta').classList.add('seleccionada');
        });

        document.querySelectorAll('.carta').forEach(carta => {
          carta.addEventListener('click', () => {
            carta.classList.toggle('rotar');
          });
        });
  });