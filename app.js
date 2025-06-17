let salario = parseFloat(localStorage.getItem("salario")) || 3000;

let gastosFixos = [
  { nome: "Financiamento carro", valor: 1650 },
  { nome: "Cartão de crédito", valor: 600 },
  { nome: "Telefone", valor: 30 },
  { nome: "Mercado", valor: 800 }
];

document.getElementById("salario").value = salario;

function salvarSalario() {
  salario = parseFloat(document.getElementById("salario").value);
  localStorage.setItem("salario", salario);
  calcularSaldo();
}

function calcularSaldo() {
  let totalGastos = gastosFixos.reduce((soma, gasto) => soma + gasto.valor, 0);
  let saldo = salario - totalGastos;
  document.getElementById("resultado").textContent = "R$ " + saldo.toFixed(2);

  let lista = document.getElementById("gastosFixos");
  lista.innerHTML = "";
  gastosFixos.forEach(gasto => {
    let item = document.createElement("li");
    item.textContent = `${gasto.nome}: R$ ${gasto.valor.toFixed(2)}`;
    lista.appendChild(item);
  });
}

window.onload = calcularSaldo;
