function alterarConteudo(topico) {
    var divs = document.getElementById('content').getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none'; // Oculta todos os divs
    }

    var divTopico = document.getElementById(topico);
    if (divTopico) {
        divTopico.style.display = 'block'; // Mostra o div do topico clicado
    }
}