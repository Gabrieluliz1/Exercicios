document.getElementById("notaForm").onsubmit = function() {
  var nota = parseFloat(document.getElementById("nota").value);
  var resultado = "";
  
  if (nota > 6) {
    resultado = "Aprovado";
  } else if (nota <= 6 && nota >= 4) {
    resultado = "Precisa fazer prova substitutiva";
  } else {
    resultado = "Reprovado";
  }
  
  document.getElementById("resultadoNota").innerHTML = "<p>Resultado: " + resultado + "</p>";
  
  return false; // Evita que o formulário seja enviado
}