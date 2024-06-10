document.getElementById("pedidoForm").onsubmit = function() {
    var sabor1 = document.getElementById("sabor1").value;
    var sabor2 = document.getElementById("sabor2").value;
    var sabor3 = document.getElementById("sabor3").value;
    var sabor4 = document.getElementById("sabor4").value;
    var quantidadeRefrigerante = parseInt(document.getElementById("refrigerante").value);
    var totalPizzas = 4;
    var precoPizza = 12;
    var precoRefrigerante = 7;
    
    var totalPizzasValor = totalPizzas * precoPizza;
    var totalRefrigerantesValor = quantidadeRefrigerante * precoRefrigerante;
    var totalPedido = totalPizzasValor + totalRefrigerantesValor;
    
    var resultadoHTML = "<h2>Seu Pedido:</h2>";
    resultadoHTML += "<p>Sabores de Pizza:</p>";
    resultadoHTML += "<ul>";
    resultadoHTML += "<li>" + sabor1 + "</li>";
    resultadoHTML += "<li>" + sabor2 + "</li>";
    resultadoHTML += "<li>" + sabor3 + "</li>";
    resultadoHTML += "<li>" + sabor4 + "</li>";
    resultadoHTML += "</ul>";
    resultadoHTML += "<p>Total a Pagar: R$ " + totalPedido.toFixed(2) + "</p>";
    
    document.getElementById("resultadoPedido").innerHTML = resultadoHTML;
    
    return false; // Evita que o formulário seja enviado
  }