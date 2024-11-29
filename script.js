document.querySelector('.cta').addEventListener('click', function() {
    alert('¡Explora nuestro menú saludable y delicioso!');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();  // Resetea el formulario después de enviar
});