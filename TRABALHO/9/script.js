document.getElementById("turmasForm").onsubmit = function() {
    var alunosSala = parseInt(document.getElementById("alunosSala").value);
    var numTurmas = parseInt(document.getElementById("numTurmas").value);
    
    var pessoasPorTurma = Math.floor(alunosSala / numTurmas);
    var pessoasSemTurma = alunosSala % numTurmas;
    
    var resultadoHTML = "<h2>Resultados:</h2>";
    resultadoHTML += "<p>Pessoas por turma: " + pessoasPorTurma + "</p>";
    resultadoHTML += "<p>Pessoas sem turma: " + pessoasSemTurma + "</p>";
    
    document.getElementById("resultadoTurmas").innerHTML = resultadoHTML;
    
    return false; // Evita que o formulário seja enviado
  }