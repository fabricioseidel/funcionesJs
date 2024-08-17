const divRojo = document.getElementById("divRojo");
divRojo.addEventListener("click", function (event) {
  const targetDiv = event.target;
  targetDiv.style.backgroundColor = "black";
});

const divVerde = document.getElementById("divVerde");
divVerde.addEventListener("click", function (event) {
  const targetDiv = event.target;
  targetDiv.style.backgroundColor = "black";
});
const divAmarillo = document.getElementById("divAmarillo");
divAmarillo.addEventListener("click", function (event) {
  const targetDiv = event.target;
  targetDiv.style.backgroundColor = "black";
});
const divAzul = document.getElementById("divAzul");
divAzul.addEventListener("click", function (event) {
  const targetDiv = event.target;
  targetDiv.style.backgroundColor = "black";
});

let globalColor = "#FFFFFF";
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      globalColor = "pink";
      break;
    case "s":
      globalColor = "orange";
      break;

    case "d":
      globalColor = "green";
  }
  document.getElementById("key").style.backgroundColor = globalColor;
});
document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    agregarMorado();
  }
  if (event.key === "w" || event.key === "W") {
    agregarGris();
  } else if (event.key === "e" || event.key === "E") {
    agregarCafe();
  }
});

function agregarMorado() {
  contenedor = document.getElementById("contenedor");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.border = "1px solid black";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.backgroundColor = "purple";
  contenedor.appendChild(nuevoElemento);
}
function agregarGris() {
  contenedor = document.getElementById("contenedor");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.border = "1px solid black";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.backgroundColor = "grey";
  contenedor.appendChild(nuevoElemento);
}

function agregarCafe() {
  contenedor = document.getElementById("contenedor");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.border = "1px solid black";
  nuevoElemento.style.height = "200px";
  nuevoElemento.style.backgroundColor = "brown";
  contenedor.appendChild(nuevoElemento);
}
