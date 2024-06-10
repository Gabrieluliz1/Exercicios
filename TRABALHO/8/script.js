document.getElementById("numeroForm").onsubmit = function() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = "";
    
    if (numero % 2 === 0) {
      resultado = "O número " + numero + " é par.";
    } else {
      resultado = "O número " + numero + " é ímpar.";
    }
    
    document.getElementById("resultadoNumero").innerHTML = "<p>" + resultado + "</p>";
    
    return false; // Evita que o formulário seja enviado
  }