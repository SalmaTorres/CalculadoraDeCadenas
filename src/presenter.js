import sumar from "./sumador";

const inputCadena = document.querySelector("#cadena-numeros");
const formulario = document.querySelector("#sumar-form");
const resultado = document.querySelector("#resultado-div");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  resultado.innerHTML =
    `<p>${sumar(inputCadena.value)}</p>`;
});