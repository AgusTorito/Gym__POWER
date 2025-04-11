

document.addEventListener("DOMContentLoaded", () => {
    const toggleMensual = document.getElementById("mensual");
    const toggleAnual = document.getElementById("anual");
    const preciosMensuales = document.querySelectorAll(".precio.mensual");
    const preciosAnuales = document.querySelectorAll(".precio.anual");
  
    function mostrarPrecios(tipo) {
      preciosMensuales.forEach(p => p.style.display = tipo === 'mensual' ? 'block' : 'none');
      preciosAnuales.forEach(p => p.style.display = tipo === 'anual' ? 'block' : 'none');
    }
  
    // Evento de cambio
    toggleMensual.addEventListener("change", () => mostrarPrecios("mensual"));
    toggleAnual.addEventListener("change", () => mostrarPrecios("anual"));
  
    // Inicialización por defecto
    mostrarPrecios("mensual");
  
    const botones = document.querySelectorAll(".plan button");
    const planes = document.querySelectorAll(".plan");
  
    botones.forEach((boton, index) => {
      boton.addEventListener("click", () => {
        
            // Quitar selección anterior de todos
            planes.forEach((plan, i) => {
              plan.classList.remove("seleccionado");
              botones[i].textContent = "Elegir";
            });
    
            // Agregar la selección solo al clickeado
            planes[index].classList.add("seleccionado");
            boton.textContent = "Seleccionado ✅";      
      });
    });
  
    // Modal de compra
const btnComprar = document.querySelector(".btnsub");
const modal = document.getElementById("modalCompra");

btnComprar.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Cerrar el modal al hacer clic fuera del mensaje y recargar
modal.addEventListener("click", (e) => {
  if (!e.target.closest(".modal-contenido")) {
    location.reload(); // recarga la página
  }
});

});