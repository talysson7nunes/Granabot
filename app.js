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
  let totalGastos = gastosFixos.reduce((acc, g) => acc + g.valor, 0);
  let saldo = salario - totalGastos;

  document.getElementById("resultado").textContent = "R$ " + saldo.toFixed(2);

  let lista = document.getElementById("gastosFixos");
  lista.innerHTML = "";
  gastosFixos.forEach(g => {
    let li = document.createElement("li");
    li.textContent = `${g.nome}: R$ ${g.valor.toFixed(2)}`;
    lista.appendChild(li);
  });

  mostrarGrafico(saldo);
}

function mostrarGrafico(saldoAtual) {
  const ctx = document.getElementById('graficoSaldo').getContext('2d');
  const meses = ["Jun", "Jul", "Ago", "Set", "Out", "Nov"];
  const saldos = Array(6).fill().map((_, i) => saldoAtual * (i + 1));

  if (window.graficoInstancia) {
    window.graficoInstancia.destroy();
  }

  window.graficoInstancia = new Chart(ctx, {
    type: 'line',
    data: {
      labels: meses,
      datasets: [{
        label: 'Saldo Acumulado',
        data: saldos,
        borderColor: 'green',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

window.onload = calcularSaldo;
