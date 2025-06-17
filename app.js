
let receita = 0;
let despesa = 0;

document.getElementById('upload').addEventListener('change', () => {
    const result = "Gasto lido: Mercado R$ 78,90 (simulado)";
    document.getElementById('ocr-result').innerText = result;
    despesa += 78.90;
    atualizarDashboard();
});

function enviarPergunta() {
    const input = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const pergunta = input.value;
    const resposta = "Simulação: Seu saldo está saudável! Continue economizando.";
    chatBox.innerHTML += "<p><strong>Você:</strong> " + pergunta + "</p>";
    chatBox.innerHTML += "<p><strong>GranaBot:</strong> " + resposta + "</p>";
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function atualizarDashboard() {
    document.getElementById('receita').innerText = receita.toFixed(2);
    document.getElementById('despesa').innerText = despesa.toFixed(2);
    document.getElementById('saldo').innerText = (receita - despesa).toFixed(2);
}
function adicionarReceita() {
    const valor = parseFloat(document.getElementById('valor-receita').value);
    if (!isNaN(valor) && valor > 0) {
        receita += valor;
        atualizarDashboard();
        document.getElementById('valor-receita').value = "";
    } else {
        alert("Insira um valor válido.");
    }
}
