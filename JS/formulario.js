 
  const form = document.getElementById('formulario');
  const spinner = document.querySelector('.spinner');
  const modal = document.getElementById('modal');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    if (form.checkValidity()) {
      // Todos los campos son válidos
      spinner.classList.remove('hidden');
  
      setTimeout(() => {
        spinner.classList.add('hidden');
        modal.classList.remove('hidden');
        form.reset();
      }, 2000);
    } else {
      // Algún campo no es válido
      alert("❌ Por favor, completá correctamente todos los campos antes de enviar.");
      form.classList.add("shake");
      setTimeout(() => form.classList.remove("shake"), 300);
    }
  });
  

  // Modo oscuro opcional
  const toggleDark = () => document.body.classList.toggle('dark');


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });