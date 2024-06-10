
function calculate() {
    var numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
        outputDiv.innerHTML = '<p>Por favor, insira um número válido de pessoas.</p>';
        return;
    }

    var eggsPerPerson = 2;
    var cheesePerPerson = 50;
    var totalEggs = eggsPerPerson * numberOfPeople;
    var totalCheese = cheesePerPerson * numberOfPeople;

    var result = 'Para ' + numberOfPeople + ' pessoa(s), você precisará de:<br>';
    result += totalEggs + ' ovos<br>';
    result += totalCheese + ' gramas de queijo';
    outputDiv.innerHTML = result;
}