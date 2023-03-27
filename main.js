function somar() {
  let valor1 = parseFloat(
    document.getElementById("valor1").value.replace(",", ".")
  );
  let valor2 = parseFloat(
    document.getElementById("valor2").value.replace(",", ".")
  );
  let resultado = (valor1 + valor2) / 1024; // converte MB para GB
  document.getElementById("resultado").innerHTML =
    resultado.toFixed(2) + " GBps";
}

function toggleDarkMode() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-mode");

  let button = document.getElementById("modo");
  if (button.innerText === "Change theme") {
    button.innerText = "Change theme";
  } else {
    button.innerText = "Change theme";
  }
}
