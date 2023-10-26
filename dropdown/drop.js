// JavaScript para mostrar u ocultar el menú desplegable al hacer clic en el botón "CV"
document.getElementById("desplegableBoto").addEventListener("click", function() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Cerrar el menú desplegable si se hace clic fuera de él
window.addEventListener("click", function(event) {
    if (event.target != document.getElementById("desplegableBoto") && event.target != document.getElementById("myDropdown")) {
        var dropdown = document.getElementById("myDropdown");
        dropdown.style.display = "none";
    }
});
