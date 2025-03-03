import convertir from "./convertidor";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#convertir-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  
  div.innerHTML = "<p>" + convertir(firstNumber) + "</p>";
});
