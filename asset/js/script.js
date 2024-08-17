function pintar(color = "green") {
  elemento = document.getElementById("ele1");
  elemento.addEventListener("click", function (evento) {
    const target = evento.target;
  });
  elemento.style.backgroundColor = color;
}
