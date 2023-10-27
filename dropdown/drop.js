// Obtén el botón y el menú desplegable
var boton = document.getElementById("desplegableBoto");
var dropdown = document.getElementById("myDropdown");

// Añade el evento de escucha para el paso del ratón
boton.addEventListener("click", function(event) {
    console.log(event);
    if (dropdown.hasAttribute("hidden")) {
        dropdown.removeAttribute("hidden");
    } else {
        dropdown.setAttribute("hidden", "");
    }
});

// Añade el evento de escucha para cuando el ratón deja de pasar por encima
dropdown.addEventListener("mouseleave", function() {
    
});
