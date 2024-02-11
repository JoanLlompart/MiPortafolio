// Obtén el botón y el menú desplegable
var boton = document.getElementById("desplegableBoto");
var dropdown = document.getElementById("myDropdown");

// Añade el evento de escucha para el paso del ratón
boton.addEventListener("click", function (event) {
    console.log(event);
    if (dropdown.hasAttribute("hidden")) {
        dropdown.removeAttribute("hidden");
    } else {
        dropdown.setAttribute("hidden", "");
    }
});

function mostrarAyuda() {
    var ayuda = document.getElementById('scrollHelp');
    ayuda.style.display = 'block';
}

// Añade el evento de escucha para cuando el ratón deja de pasar por encima
dropdown.addEventListener("mouseleave", function () {

});


const imagenes = document.querySelectorAll(".scroll-content img");
const textoImagen = document.getElementById("texto-imagen");

imagenes.forEach(imagen => {
    imagen.addEventListener("mouseenter", function () {
        const texto = this.getAttribute("data-texto"); // Obtener el texto del atributo "data-texto"
        textoImagen.textContent = texto;
        const posicionImagen = this.getBoundingClientRect();
        textoImagen.style.top = `${posicionImagen.top + this.offsetHeight}px`;
        textoImagen.style.left = `${posicionImagen.left}px`;
        textoImagen.classList.add("visible");
    });

    imagen.addEventListener("mouseleave", function () {
        textoImagen.classList.remove("visible");
    });
});
