// Variável para armazenar o conteúdo anterior
let previousContent = '';

// Função para carregar o conteúdo de outra página
function loadContent(url) {
    // Armazena o conteúdo atual antes de carregar o novo
    previousContent = document.getElementById('content').innerHTML;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Carrega o novo conteúdo
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Função para voltar ao conteúdo anterior
function goBack() {
    document.getElementById('content').innerHTML = previousContent;
}

// Adiciona um evento de clique ao botão de voltar
window.onload = function(){
    document.getElementById('backButton').addEventListener('click', goBack);
}

//====================================
// Desativar um segundo clique no link
//====================================
document.addEventListener('DOMContentLoaded', function() {
    const quimicaLink = document.getElementById('quimica');
    const otherLink = document.getElementById('backButton'); // Substitua 'otherLink' pelo ID do outro link

    // Função para desabilitar o clique no link
    function disableClick() {
        quimicaLink.style.pointerEvents = 'none'; // Desabilita o clique
        quimicaLink.style.cursor = 'not-allowed'; // Altera o cursor para indicar que o link não pode ser clicado
    }

    // Função para habilitar o clique no link
    function enableClick() {
        quimicaLink.style.pointerEvents = 'auto'; // Habilita o clique
        quimicaLink.style.cursor = 'pointer'; // Altera o cursor para indicar que o link pode ser clicado
    }

    // Adiciona um ouvinte de eventos para desabilitar o clique após o primeiro clique no link #quimica
    quimicaLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previne a ação padrão do link
        disableClick(); // Desabilita o clique após o primeiro clique
    });

    // Adiciona um ouvinte de eventos para reativar o clique no link #quimica após clicar no outro link
    otherLink.addEventListener('click', function() {
        enableClick(); // Reativa o clique no link #quimica
    });

    // Habilita o clique no link #quimica inicialmente
    enableClick();
});