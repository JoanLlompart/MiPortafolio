
function validarEmail() {
    var email = document.querySelector("textarea[name='email']").value;
    if(!/\S+@\S+\.\S+/.test(email)) {
        alert("El format de email no es correcte .");
        return false;
    }
    //email valid
    return true;
}



var motivo = document.getElementById("motivo");

function validarMotivo() {
    var motivo = document.querySelector("textarea[name='motivo']").value;
    var paraules = motivo.split(" ");
    if(paraules.length <=10) {
        alert("El motivo de contacto requiere un minimo de 10 palabras.");
        return false;
    }
    //si el motivo es valid
    return true;
}
// Muestra el mensaje de ayuda cuando se detecta el evento de scroll
window.addEventListener('scroll', function() {
    var scrollHelp = document.getElementById('scrollHelp');
    if (window.scrollX > 20) {
        scrollHelp.style.display = 'block';
    } else {
        scrollHelp.style.display = 'none';
    }
});

document.querySelector("#formulari-contacte").addEventListener("submit", function(event) {
    if (!validarEmail() || !validarMotivo()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación no es exitosa
    } else {
        var mensatge = document.getElementById("missatgeForm");
        mensatge.textContent = "Formulario enviado correctamente, recibira una respuesta lo antes posible.";
    }
});
