 // Cargar el header
 /*
fetch("/htmls/header.html")
.then(res => res.text())
.then(data => {
  document.getElementById("header").innerHTML = data;

  // 💡 Agregá esto adentro del .then, después de cargar el header:
  const toggleBtn = document.querySelector(".toggle-menu");
  const menu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  const links = document.querySelectorAll(".menu a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove("show");
      }
    });
  });
});
*/
/*
fetch("/htmls/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // 🔽 Ejecutar funciones relacionadas al footer una vez cargado

    // Validación visual del input email (si querés hacerlo en JS además de CSS)
    const form = document.querySelector(".newsletter");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      if (email && email.includes("@")) {
        alert("📧 ¡Gracias por suscribirte!");
        form.reset();
      } else {
        alert("❌ Por favor, ingresá un email válido.");
      }
    });
  });
*/