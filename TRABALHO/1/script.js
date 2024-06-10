function calculate() {
    var exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (isNaN(exchangeRate)) {
        outputDiv.innerHTML = '<p>Por favor, insira um valor válido para a cotação do dólar.</p>';
        return;
    }

    var percentages = [1, 2, 5, 10];

    percentages.forEach(function(percent) {
        var newRate = exchangeRate * (1 + percent / 100);
        var result = exchangeRate.toFixed(2) + ' + ' + percent + '% = ' + newRate.toFixed(2);
        outputDiv.innerHTML += '<p>' + result + '</p>';
    });
}