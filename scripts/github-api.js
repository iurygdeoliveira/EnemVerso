const q1_p1 = "Sinto-me confiante ao entender e aplicar os conceitos básicos da Química Geral, como tabela periódica e ligações químicas ?";
const q2_p1 = "Consigo relacionar os conceitos de Química Inorgânica com fenômenos do cotidiano e processos industriais ?";
const q3_p1 = "Acho desafiador entender as teorias atômicas e suas implicações para a compreensão da matéria ?";

//Segundo Ponto do Gráfico - Quimica Organica 
const q1_p2 = "Tenho um bom entendimento sobre a estrutura, propriedades e reações dos compostos orgânicos ?";
const q2_p2 = "Consigo identificar a presença e a importância dos compostos orgânicos em contextos biológicos e industriais.";
const q3_p2 = "Sinto dificuldade em compreender as diferentes funções orgânicas e sua nomenclatura.";

//Terceiro Ponto do Gráfico - Fisico-Quimica
const q1_p3 = "Compreendo conceitos de Físico-Química, como termodinâmica, cinética química e equilíbrio químico ?";
const q2_p3 = "Consigo aplicar os princípios da Físico-Química para resolver problemas práticos e teóricos ?";
const q3_p3 = "Tenho dificuldades com os cálculos e as aplicações matemáticas em Físico-Química.";

//Quarto Ponto do Gráfico - Quimica Analitica
const q1_p4 = "Entendo os princípios e as técnicas de Química Analítica, incluindo análises qualitativas e quantitativas.";
const q2_p4 = "Consigo perceber a importância da Química Analítica em áreas como saúde, meio ambiente e indústria.";
const q3_p4 = "Acho desafiador interpretar os resultados de análises químicas e entender seus métodos ?";

//Quinto Ponto do Gráfico - Quimica Ambiental 
const q1_p5 = "Compreendo a importância da Química Ambiental e seu impacto na poluição e na conservação ambiental ?";
const q2_p5 = "Consigo relacionar conceitos de Química Ambiental com questões de sustentabilidade e gestão de recursos ?";
const q3_p5 = "Tenho dificuldade em entender como os processos químicos afetam o meio ambiente e a saúde humana ?";

const Ponto1 = [q1_p1, q2_p1, q3_p1];

const Ponto2 = [q1_p2, q2_p2, q3_p2];

const Ponto3 = [q1_p3, q2_p3, q3_p3];

const Ponto4 = [q1_p4, q2_p4, q3_p4];

const Ponto5 = [q1_p5, q2_p5, q3_p5];

async function loadDataMateria(materia){
    async function renderDataADS(materia) {
        let url = `TADS/${materia}.json`;
        let resultado = await exibirResultado(url);

        renderChartADS(resultado[0], resultado[1], resultado[2], resultado[3], resultado[4]);
    }
    async function renderData3A(materia){
        let url = `3A/${materia}.json`;
        let resultado = await exibirResultado(url);

        renderChart3A(resultado[0], resultado[1], resultado[2], resultado[3], resultado[4]);
    }
    async function renderData3B(materia){
        let url = `3B/${materia}.json`;
        let resultado = await exibirResultado(url);

        renderChart3B(resultado[0], resultado[1], resultado[2], resultado[3], resultado[4]);
    }
    renderDataADS(materia);
    renderData3A(materia);
    renderData3B(materia);
}
async function exibirResultado(path) {
    let resultado = await getData(path);

    let url = resultado.data.download_url;
    
    let dados = await fetch(url).then(res => res.json());
        
    let respondentes = Object.keys(dados).length;

    console.log("Total de respondentes: " + respondentes);

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

    console.log("Média Geral Ponto 1:", mediaPonto1);
    console.log("Média Geral Ponto 2:", mediaPonto2);
    console.log("Média Geral Ponto 3:", mediaPonto3);
    console.log("Média Geral Ponto 4:", mediaPonto4);
    console.log("Média Geral Ponto 5:", mediaPonto5);

    return [mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5];
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

