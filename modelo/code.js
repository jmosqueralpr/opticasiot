// JavaScript para el formulario de contacto (puedes agregar funcionalidad adicional según sea necesario)
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Aquí puedes agregar el código para enviar el formulario o realizar otras acciones
        alert("Formulario enviado correctamente.");
        contactForm.reset();
    });
});
