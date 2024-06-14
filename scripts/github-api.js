// Importa os arrays com as questões
import { Ponto1, Ponto2, Ponto3, Ponto4, Ponto5 } from './github_data/qmc_questions.js';

//Importa a função que recebe os valores do EChart
import { renderChartADS } from './graphic-1.js';

let path = "TADS/quimica.json";

consoleGetData(path);

exibirResultado();
async function exibirResultado() {
    let resultado = await getData(path);

    let url = resultado.data.download_url;
    
    let dados = await fetch(url).then(res => res.json());
        
    let respondentes = Object.keys(dados).length;

    console.log("Total de respondentes: " + respondentes);
    console.log(url, dados[1]);

    // Contar respostas para cada ponto
    let contagemPonto1 = contarRespostas(dados, Ponto1);
    let contagemPonto2 = contarRespostas(dados, Ponto2);
    let contagemPonto3 = contarRespostas(dados, Ponto3);
    let contagemPonto4 = contarRespostas(dados, Ponto4);
    let contagemPonto5 = contarRespostas(dados, Ponto5);

    console.log("Contagem Ponto 1:", contagemPonto1);
    console.log("Contagem Ponto 2:", contagemPonto2);
    console.log("Contagem Ponto 3:", contagemPonto3);
    console.log("Contagem Ponto 4:", contagemPonto4);
    console.log("Contagem Ponto 5:", contagemPonto5);

    // Calcular e exibir a média ponderada para cada ponto
    let mediaPonto1 = calcularMediaPonderada(contagemPonto1, respondentes);
    let mediaPonto2 = calcularMediaPonderada(contagemPonto2, respondentes);
    let mediaPonto3 = calcularMediaPonderada(contagemPonto3, respondentes);
    let mediaPonto4 = calcularMediaPonderada(contagemPonto4, respondentes);
    let mediaPonto5 = calcularMediaPonderada(contagemPonto5, respondentes);

    console.log("Média Ponderada Ponto 1:", mediaPonto1);
    console.log("Média Ponderada Ponto 2:", mediaPonto2);
    console.log("Média Ponderada Ponto 3:", mediaPonto3);
    console.log("Média Ponderada Ponto 4:", mediaPonto4);
    console.log("Média Ponderada Ponto 5:", mediaPonto5);

    renderChartADS(mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5);
}

function contarRespostas(dados, ponto) {
    // Inicializa um objeto para contar as respostas para cada questão
    let contagem = {};
    for (let questao of ponto) {
        contagem[questao] = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
    }

    // Percorre cada respondente nos dados
    for (let respondente in dados) {
        let respostas = dados[respondente];
        // Para cada questão no ponto, incrementa a contagem da resposta correspondente
        for (let questao of ponto) {
            if (questao in respostas) {
                let resposta = respostas[questao];
                if (resposta in contagem[questao]) {
                    contagem[questao][resposta]++;
                }
            }
        }
    }
    return contagem;
}

function calcularMediaPonderada(contagem, respondentes) {
    let somaPonderada = 0;
    let totalRespostas;

    for (let questao in contagem) {
        let respostas = contagem[questao];
        for (let valor in respostas) {
            somaPonderada += valor * respostas[valor];
        }
    }

    //Verifica se é 0, se for, retorna 0, se não, retorna a divisão da soma com o total de respondentes
    return totalRespostas === 0 ? 0 : (somaPonderada / respondentes).toFixed(2);
}

async function getData(path) {
    return await executeRequest(path);
}

async function executeRequest(path) {
    let { request } = await import('https://cdn.skypack.dev/@octokit/request');

    return await request({
        method: "GET",
        url: '/repos/{owner}/{repo}/contents/{path}',
        headers: {
            authorization: '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',
        },
        owner: "jhonloll",
        repo: "EnemVerso-Data",
        path: path
    });
}

async function consoleGetData(path) {
    console.log(await getData(path));
}
