function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (isNaN(num1) || isNaN(num2)) {
        outputDiv.innerHTML = '<p>Por favor, insira dois números inteiros válidos.</p>';
        return;
    }

    outputDiv.innerHTML += '<p>Soma: ' + (num1 + num2) + '</p>';
    outputDiv.innerHTML += '<p>Subtração: ' + (num1 - num2) + '</p>';
    outputDiv.innerHTML += '<p>Multiplicação: ' + (num1 * num2) + '</p>';

    if (num2 !== 0) {
        outputDiv.innerHTML += '<p>Divisão: ' + (num1 / num2) + '</p>';
    } else {
        outputDiv.innerHTML += '<p>A divisão por zero não é possível.</p>';
    }
}