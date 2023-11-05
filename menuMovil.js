
// Selecciona el botón para dispositivos móviles y todos los elementos 'li' dentro de 'nav'
const btnMovil = document.querySelector('.btnmovil');
const menuItems = document.querySelectorAll('nav li');

// Añade un listener para el evento 'click' al botón
btnMovil.addEventListener('click', function () {
    // Itera sobre cada ítem del menú y alterna la clase 'active'
    menuItems.forEach(function (item) {
        item.classList.toggle('active');
    });
});

