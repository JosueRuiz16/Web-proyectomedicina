function calcularResultado() {
    let respuestas = document.querySelectorAll('input[type="radio"]:checked');
    let puntaje = Array.from(respuestas).filter(r => r.value === "yes").length;
    
    let mensaje = "";
    if (puntaje >= 4) {
        mensaje = "Podrías estar experimentando síntomas de depresión. Te recomendamos buscar apoyo profesional haz click para comenzar.";
    } else if (puntaje >= 2) {
        mensaje = "Algunos síntomas están presentes. Buscar ayuda haz click para comenzar.";
    } else {
        mensaje = "Parece que no hay signos significativos de depresión. Si en algún momento te sientes mal, busca apoyo.";
    }
    
    document.getElementById("resultado").innerText = mensaje;
}


window.onload = function() {
    mostrarAlerta();
};

function mostrarAlerta() {
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.innerHTML = `
        <div id="alerta">
            <p>Bienvenido/a. Este test tiene como objetivo ayudarte a identificar posibles síntomas de depresión. Recuerda que esto no sustituye una consulta profesional.</p>
            <button onclick="cerrarAlerta()">Continuar</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

function cerrarAlerta() {
    document.getElementById("overlay").remove();
}

function calcularResultado() {
    let totalPreguntas = 5;
    let respuestasSi = 0;

    for (let i = 1; i <= totalPreguntas; i++) {
        let respuesta = document.querySelector(`input[name="q${i}"]:checked`);
        if (respuesta && respuesta.value === "yes") {
            respuestasSi++;
        }
    }

    let porcentaje = (respuestasSi / totalPreguntas) * 100;
    let resultadoTexto = "";

    if (porcentaje >= 80) {
        resultadoTexto = "Podrías estar experimentando síntomas de depresión.";
    } else if (porcentaje >= 40) {
        resultadoTexto = "Es posible que tengas algunos síntomas de depresión.";
    } else {
        resultadoTexto = "No parece que tengas síntomas de depresión.";
    }

    // Mostrar barra de progreso
    let progressBar = document.getElementById("progressBar");
    let progressContainer = document.querySelector(".progress-container");
    progressContainer.style.display = "block";
    progressBar.style.width = `${porcentaje}%`;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `<p>${resultadoTexto}</p>`;

    // Mostrar enlace solo si hay síntomas
    let enlaceAyuda = document.getElementById("enlaceAyuda");
    if (porcentaje >= 40) {
        enlaceAyuda.style.display = "block";
    } else {
        enlaceAyuda.style.display = "none";
    }
}
