
    document.addEventListener("DOMContentLoaded", function () {
        // Habilitar el comportamiento de desplazamiento suave en todos los enlaces con clase "smooth-scroll"
        const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        // Función para realizar el desplazamiento suave
        function smoothScroll(e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });

