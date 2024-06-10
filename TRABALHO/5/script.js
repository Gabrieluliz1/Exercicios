document.getElementById("pessoasForm").onsubmit = function() {
    var nome1 = document.getElementById("nome1").value;
    var anoNascimento1 = parseInt(document.getElementById("anoNascimento1").value);
    var nome2 = document.getElementById("nome2").value;
    var anoNascimento2 = parseInt(document.getElementById("anoNascimento2").value);
    var nome3 = document.getElementById("nome3").value;
    var anoNascimento3 = parseInt(document.getElementById("anoNascimento3").value);
    
    var anoAtual = (new Date()).getFullYear();
    
    var idade1 = anoAtual - anoNascimento1;
    var idade2 = anoAtual - anoNascimento2;
    var idade3 = anoAtual - anoNascimento3;
    
    var maisVelha = "";
    var segundaMaisVelha = "";
    var terceiraMaisVelha = "";
    
    if (idade1 >= idade2 && idade1 >= idade3) {
      maisVelha = nome1 + " - " + idade1 + " anos";
      if (idade2 >= idade3) {
        segundaMaisVelha = nome2 + " - " + idade2 + " anos";
        terceiraMaisVelha = nome3 + " - " + idade3 + " anos";
      } else {
        segundaMaisVelha = nome3 + " - " + idade3 + " anos";
        terceiraMaisVelha = nome2 + " - " + idade2 + " anos";
      }
    } else if (idade2 >= idade1 && idade2 >= idade3) {
      maisVelha = nome2 + " - " + idade2 + " anos";
      if (idade1 >= idade3) {
        segundaMaisVelha = nome1 + " - " + idade1 + " anos";
        terceiraMaisVelha = nome3 + " - " + idade3 + " anos";
      } else {
        segundaMaisVelha = nome3 + " - " + idade3 + " anos";
        terceiraMaisVelha = nome1 + " - " + idade1 + " anos";
      }
    } else {
      maisVelha = nome3 + " - " + idade3 + " anos";
      if (idade1 >= idade2) {
        segundaMaisVelha = nome1 + " - " + idade1 + " anos";
        terceiraMaisVelha = nome2 + " - " + idade2 + " anos";
      } else {
        segundaMaisVelha = nome2 + " - " + idade2 + " anos";
        terceiraMaisVelha = nome1 + " - " + idade1 + " anos";
      }
    }
    
    var resultadoHTML = "<h2>Pessoas Mais Velhas:</h2>";
    resultadoHTML += "<p>Pessoa mais velha: " + maisVelha + "</p>";
    resultadoHTML += "<p>Segunda pessoa mais velha: " + segundaMaisVelha + "</p>";
    resultadoHTML += "<p>Terceira pessoa mais velha: " + terceiraMaisVelha + "</p>";
    
    document.getElementById("resultadoPessoas").innerHTML = resultadoHTML;
    
    return false; // Evita que o formulário seja enviado
  }