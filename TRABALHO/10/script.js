document.getElementById("vendasForm").onsubmit = function() {
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);
    
    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;
    
    var resultadoHTML = "<h2>Resultados:</h2>";
    
    if (valorVendido >= meta) {
      resultadoHTML += "<p>Parabéns! Você atingiu a meta.</p>";
    } else if (valorVendido >= metaMinima) {
      resultadoHTML += "<p>Você atingiu a meta mínima.</p>";
    } else {
      resultadoHTML += "<p>Você não atingiu nenhuma das metas.</p>";
    }
    
    resultadoHTML += "<p>Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%</p>";
    resultadoHTML += "<p>Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%</p>";
    
    document.getElementById("resultadoVendas").innerHTML = resultadoHTML;
    
    return false; // Evita que o formulário seja enviado
  }