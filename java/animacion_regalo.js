function mostrarSeccion(id) {
    document.querySelectorAll('.pantalla').forEach(seccion => {
        seccion.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pantalla-inicial").style.display = "block";
});

function resolverPuzzle() {
    alert("¡Felicidades, completaste el rompecabezas! Te amo 💖");
}