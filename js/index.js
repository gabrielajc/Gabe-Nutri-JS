var titulo = document.querySelector(".header");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");

  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var alturaEhValida = true;
  var pesoEhValido = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }

  function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura)
    return imc.toFixed(2);
}

}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
  console.log("Ola eu fui clicado");
}

