// // Variável para armazenar o conteúdo anterior
// let previousContent = '';

// // Função para carregar o conteúdo de outra página
// function loadContent(url) {
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             // Armazena o conteúdo atual antes de carregar o novo
//             previousContent = document.getElementById('content').innerHTML;
//             // Carrega o novo conteúdo
//             document.getElementById('content').innerHTML = data;
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }

// // Função para voltar ao conteúdo anterior
// function goBack() {
//     document.getElementById('content').innerHTML = previousContent;
// }

// // Carrega o home.html quando entra no site
// // loadContent('home.html')

// // Adiciona um evento de clique ao botão de voltar
// window.onload = function(){
//     document.getElementById('backButton').addEventListener('click', goBack);
// }

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