document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const body = document.body;

    function handleBoxClick(event) {
        boxes.forEach(box => {
            if (box !== event.currentTarget) {
                box.classList.remove('active');
            }
        });

        event.currentTarget.classList.toggle('active');
        body.classList.toggle('active');
    }

    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    });

    // Cerrar el menú si se hace clic fuera de él
    body.addEventListener('click', function(event) {
        // Si el clic no está dentro de un box ni dentro del menú, cierra el menú
        if (!event.target.closest('.box') && !event.target.closest('.menu')) {
            boxes.forEach(box => {
                box.classList.remove('active');
            });
            body.classList.remove('active');
        }
    });
});
