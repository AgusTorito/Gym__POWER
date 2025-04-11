document.addEventListener("DOMContentLoaded", () => {

   // === Contador animado en bucle ===
const contador = document.querySelector('.numero');
const meta = 1000;
const intervaloAnimacion = 30; // milisegundos entre cada número
const tiempoReinicio = 10000;  // tiempo total entre cada reinicio (10 segundos)

function animarContador() {
  let cuenta = 0;
  const incremento = Math.ceil(meta / 100);
  contador.textContent = "0+";

  const intervalo = setInterval(() => {
    cuenta += incremento;
    if (cuenta >= meta) {
      cuenta = meta;
      clearInterval(intervalo);
    }
    contador.textContent = `${cuenta}+`;
  }, intervaloAnimacion);
}

// === Ejecutar la animación en bucle ===
function iniciarBucleContador() {
  animarContador(); // primera vez
  setInterval(() => {
    animarContador(); // repetir cada X tiempo
  }, tiempoReinicio);
}

// Esperar a que el contador entre en pantalla
const observerContador = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      iniciarBucleContador();
      observerContador.disconnect();
    }
  });
}, { threshold: 0.5 });

observerContador.observe(contador);

    // === 2. Scroll Reveal con IntersectionObserver ===
    const secciones = document.querySelectorAll('.clases, .contador, .testimonios, .card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    secciones.forEach(sec => observer.observe(sec));

    // === 3. Video fallback si falla la carga ===
    const video = document.querySelector('video');
    video.addEventListener('error', () => {
      alert("⚠️ El video de motivación no pudo cargarse.");
    });

    // === 4. Botón flotante para volver arriba ===
    const btnArriba = document.createElement('button');
    btnArriba.textContent = '⬆️';
    btnArriba.title = 'Volver arriba';
    btnArriba.style.position = 'fixed';
    btnArriba.style.bottom = '20px';
    btnArriba.style.right = '20px';
    btnArriba.style.padding = '10px 15px';
    btnArriba.style.border = 'none';
    btnArriba.style.borderRadius = '50%';
    btnArriba.style.background = '#f40000';
    btnArriba.style.color = 'white';
    btnArriba.style.fontSize = '20px';
    btnArriba.style.display = 'none';
    btnArriba.style.cursor = 'pointer';
    btnArriba.style.boxShadow = '0 0 10px red';
    document.body.appendChild(btnArriba);

    btnArriba.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btnArriba.style.display = 'block';
      } else {
        btnArriba.style.display = 'none';
      }
    });

    // === 5. Activar modo oscuro manualmente ===
    const darkToggle = document.createElement('button');
    darkToggle.textContent = '🌙';
    darkToggle.title = 'Modo Oscuro';
    Object.assign(darkToggle.style, {
      position: 'fixed',
      top: '20px',
      right: '60px',
      zIndex: '999',
      background: 'black',
      color: 'white',
      border: 'none',
      padding: '10px',
      borderRadius: '8px',
      cursor: 'pointer'
    });
    document.body.appendChild(darkToggle);

    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('modoOscuro', document.body.classList.contains('dark'));
    });

    if (localStorage.getItem('modoOscuro') === 'true') {
      document.body.classList.add('dark');
    }

        // === 6. Menú hamburguesa responsivo ===
        const toggleMenu = document.querySelector(".toggle-menu");
        const menu = document.querySelector(".menu");
    
        if (toggleMenu && menu) {
          toggleMenu.addEventListener("click", () => {
            menu.classList.toggle("show");
          });
    
          // Cerrar el menú al hacer clic en una opción (en móvil)
          const links = menu.querySelectorAll("a");
          links.forEach(link => {
            link.addEventListener("click", () => {
              if (window.innerWidth <= 768) {
                menu.classList.remove("show");
              }
            });
          });
        }
    
        // Opcional: cerrar si se hace clic fuera del menú
        document.addEventListener("click", (e) => {
          if (
            !menu.contains(e.target) &&
            !toggleMenu.contains(e.target) &&
            window.innerWidth <= 768
          ) {
            menu.classList.remove("show");
          }
        });
    
  });