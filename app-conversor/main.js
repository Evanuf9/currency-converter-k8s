let conversion = document.getElementById("conversion");
let cantidad = document.getElementById("cantidad");
let divisa = document.getElementById("divisa");
let resultado = document.getElementById("resultado");
let modo = document.getElementById("modo");
let pic = document.getElementById("pic");

modo.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", modo.checked);
});

const convertilos = () => {
  const valorIngresado = Number(cantidad.value);

  if (!valorIngresado) {
    resultado.textContent = "Ingresa una cantidad válida";
    resultado.style.color = "#ef4444";
    return;
  }

  let valor = 0;
  let moneda = "USD";

  if (divisa.value === "usd") {
    valor = 1575;
    moneda = "USD";
    resultado.style.color = "#22c55e";
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuBvC5HKeVxLbFfuaya-RTf9yd-tUJaWTdfbrAK9hZA&s=10";
  } else {
    valor = 1700;
    moneda = "EUR";
    resultado.style.color = "#60a5fa";
    pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8f/Euro_symbol.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
  }

  const total = valorIngresado * valor;
  resultado.textContent = `${valorIngresado} ${moneda} son ${total.toFixed(2)} pesos Argentinos`;
};

conversion.addEventListener("click", convertilos);
