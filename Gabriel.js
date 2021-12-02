function Enviar() {

    var nome =  document.getElementById("nomeId");
    
    if (nome.value != ""){
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso')
    }
}