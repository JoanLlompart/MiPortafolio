
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

document.querySelector("#formulari-contacte").addEventListener("submit", function(event) {
    if (!validarEmail() || !validarMotivo()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación no es exitosa
    }
});

