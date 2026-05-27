window.addEventListener('DOMContentLoaded', () => {

    // 1. SIMULADOR DE BIODEGRADACIÓN
    const selectorTiempo = document.getElementById('selectorTiempo');
    const etiquetaTiempo = document.getElementById('etiquetaTiempo');
    const vasoEfimero = document.getElementById('vasoEfimero');
    const estadoEfimero = document.getElementById('estadoEfimero');

    function actualizarSimulador(valor) {
        if (!selectorTiempo) return;
        
        if (valor == 0) {
            etiquetaTiempo.innerText = "Día 1 (Recién desechado)";
            estadoEfimero.innerText = "Intacta y funcional.";
            vasoEfimero.style.transform = "scale(1)";
            vasoEfimero.style.opacity = "1";
            vasoEfimero.style.filter = "blur(0px)";
        } 
        else if (valor > 0 && valor <= 33) {
            etiquetaTiempo.innerText = "Mes 1 (Inicio del compostaje)";
            estadoEfimero.innerText = "Los microorganismos y la humedad empiezan a ablandar la grenetina.";
            vasoEfimero.style.transform = "scale(0.85)";
            vasoEfimero.style.opacity = "0.8";
            vasoEfimero.style.filter = "blur(0.5px)";
        } 
        else if (valor > 33 && valor <= 66) {
            etiquetaTiempo.innerText = "Mes 3 (Descomposición avanzada)";
            estadoEfimero.innerText = "El bioplástico se fragmenta por completo sin liberar ningún residuo tóxico.";
            vasoEfimero.style.transform = "scale(0.5) translateY(20px)";
            vasoEfimero.style.opacity = "0.4";
            vasoEfimero.style.filter = "blur(1.5px)";
        } 
        else if (valor > 66 && valor < 100) {
            etiquetaTiempo.innerText = "Mes 5 (Integración al suelo)";
            estadoEfimero.innerText = "La glicerina y grenetina se degradan casi al 100%, volviendo a la tierra.";
            vasoEfimero.style.transform = "scale(0.2) translateY(35px)";
            vasoEfimero.style.opacity = "0.1";
            vasoEfimero.style.filter = "blur(2px)";
        } 
        else if (valor == 100) {
            etiquetaTiempo.innerText = "¡Pocos meses después! (Economía Circular)";
            estadoEfimero.innerText = "¡Nutrientes orgánicos! Se convirtió en parte de la naturaleza otra vez.";
            vasoEfimero.style.transform = "scale(0)";
            vasoEfimero.style.opacity = "0";
        }
    }

    if (selectorTiempo) {
        selectorTiempo.addEventListener('input', (e) => actualizarSimulador(e.target.value));
        actualizarSimulador(0);
    }

    // 2. DETECTAR SECCIÓN ACTIVA AL SCROLLEAR (Con la pestaña Concepto integrada)
    const secciones = document.querySelectorAll('.seccion-bloque');
    const enlacesMenu = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let seccionActual = "";
        
        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            if (pageYOffset >= seccionTop - 160) {
                seccionActual = seccion.getAttribute('id');
            }
        });

        enlacesMenu.forEach(enlace => {
            enlace.classList.remove('active');
            if (enlace.getAttribute('href') === `#${seccionActual}`) {
                enlace.classList.add('active');
            }
        });
    });
});
