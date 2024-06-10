document.getElementById("numerosForm").onsubmit = function() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = "";
    
    if (numero1 > numero2) {
      resultado = "O primeiro número é maior que o segundo.";
    } else if (numero1 < numero2) {
      resultado = "O primeiro número é menor que o segundo.";
    } else {
      resultado = "Os dois números são iguais.";
    }
    
    document.getElementById("resultadoComparacao").innerHTML = "<p>" + resultado + "</p>";
    
    return false; // Evita que o formulário seja enviado
  }