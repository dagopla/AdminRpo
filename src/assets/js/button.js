const boton = document.getElementById("miBoton");

boton.addEventListener('mousedown', function(event) {
    const rect = boton.getBoundingClientRect(); // Obtener el rectángulo del elemento
    const x = event.clientX - rect.left; // Obtener la posición X del mouse dentro del elemento
    const y = event.clientY - rect.top; // Obtener la posición Y del mouse dentro del elemento
    crearCirculo(x, y);
    console.log(`Coordenadas: (${x}, ${y})`);
  });
boton.addEventListener('mouseup', function(event) {
    const circulo= document.getElementById('circulo');
    circulo.remove();
});

function crearCirculo(x, y) {
    const circulo = document.createElement("div");
    circulo.id = "circulo";
    circulo.style.left = (x-5) + "px";
    circulo.style.top = (y-5) + "px";
    console.log(circulo.style.left, circulo.style.top);
    boton.appendChild(circulo);
    
  }
