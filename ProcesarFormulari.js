
/*
function enviarForm {
    var formulari = document.getElementById("formulari-contacte");

    formulari.addEventListener("submit", function(event)) {

    }
}
*/
document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario-contacto");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        var email = document.getElementById("email").value;
        var motivo = document.getElementById("motivo").value;

        // Aquí puedes enviar los datos del formulario a una dirección de correo constante
        // Esto requerirá un servidor del lado del servidor para enviar correos electrónicos.

        // Por ejemplo, puedes usar la función fetch para enviar los datos a un servidor:
        fetch("tu-servidor-de-correo.com/enviar-correo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, motivo: motivo })
        })
        .then(function (response) {
            if (response.ok) {
                alert("Formulario enviado con éxito.");
                // Puedes redirigir al usuario a una página de confirmación aquí.
            } else {
                alert("Error al enviar el formulario.");
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
        });
    });
});
