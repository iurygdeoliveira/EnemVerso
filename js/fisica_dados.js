let tadsPath = "TADS/Fisica.json";
let em3APath = "3A/Fisica.json";
let em3BPath = "3B/Fisica.json";


//#region Nome das chaves das questões

// Bloco "Eletrodinâmica" - Nome das chaves
const eletrodinamica_questao1Key = "Sinto-me confiante em resolver problemas que envolvem potência elétrica e circuitos elétricos ?";
const eletrodinamica_questao2Key = "Consigo aplicar corretamente os conceitos de resistência elétrica em diferentes contextos ?";
const eletrodinamica_questao3Key = "Tenho habilidade para interpretar e analisar graficos e tabelas em experimentos práticos ?";

// Bloco "Termológica" - Nome das chaves
const termologia_questao1Key = "Sou capaz de compreender e aplicar conceitos de calor e temperatura em diferentes experimentos práticos?";
const termologia_questao2Key = "Entendo a relação entre a transferência de calor e mudanças de estado físico dos materiais ?";
const termologia_questao3Key = "Sinto-me seguro(a) ao trabalhar com escalas termométricas em geral?";

// Bloco "Ondulatoria" - Nome das chaves
const ondulatoria_questao1Key = "Consigo identificar e explicar fenômenos ondulatórios como reflexão, refração e difração ?";
const ondulatoria_questao2Key = "Tenho facilidade em entender e usar o conceito de frequência e comprimento de onda em problemas ?";
const ondulatoria_questao3Key = "Consigo aplicar os princípios de acústica e ondas eletromagnéticas em contextos reais e teóricos ?";

// Bloco "Cinemática" - Nome das chaves
const cinematica_questao1Key = "Sinto-me confortável ao analisar e interpretar gráficos de movimento, como os de posição-tempo e velocidade-tempo?";
const cinematica_questao2Key = "Tenho facilidade em aplicar as equações de movimento em problemas de física ?";
const cinematica_questao3Key = "Consigo entender conceitos de velocidade, aceleração e movimento uniformemente variado em diferentes contextos ?";

// Bloco "Óptica" - Nome das chaves
const optica_questao1Key = "Entendo bem os fenômenos de reflexão e refração da luz e posso aplicá-los em situações práticas ?";
const optica_questao2Key = "Sou capaz de explicar sucintamente a diferença na formação de imagens de lentes e espelhos?";
const optica_questao3Key = "Tenho habilidade para relacionar conceitos de óptica (principios e fenômenos) com aplicações no cotidiano?";


//#endregion 

async function obterTodasMedias() {
    let medias3A = await obterMediasPorTurma(em3APath);
    let medias3B = await obterMediasPorTurma(em3BPath);
    let mediasTads = await obterMediasPorTurma(tadsPath); 

    return {
        '3A': medias3A,
        '3B': medias3B,
        'tads': mediasTads,
    };
}

async function obterMediasPorTurma(urlPath) {
    /// Buscando o dado do github e baixando o JSON.
    let data = await obterDados(urlPath);

    //#region Iniciando arrays de cada questão, de cada bloco 

    let eletrodinamica_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let eletrodinamica_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let eletrodinamica_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let termologia_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let termologia_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let termologia_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let ondulatoria_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let ondulatoria_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let ondulatoria_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let cinematica_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let cinematica_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let cinematica_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let optica_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let optica_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let optica_qntdRespostasP3 = [0, 0, 0, 0, 0];

    //#endregion

    //#region Iterando os dados, e adicionando nos arrays.

    data.forEach(respostas => {
        //#region Eletrodiâmica

            eletrodinamica_qntdRespostasP1[
            respostas[eletrodinamica_questao1Key] - 1
        ]++;

            eletrodinamica_qntdRespostasP2[
            respostas[eletrodinamica_questao2Key] - 1
        ]++;

            eletrodinamica_qntdRespostasP3[
            respostas[eletrodinamica_questao3Key] - 1
        ]++;

        //#endregion

        //#region Termologia

        termologia_qntdRespostasP1[
            respostas[termologia_questao1Key] - 1
        ]++;

        termologia_qntdRespostasP2[
            respostas[termologia_questao2Key] - 1
        ]++;

        termologia_qntdRespostasP3[
            respostas[termologia_questao3Key] - 1
        ]++;

        //#endregion

        //#region Ondulatoria

        ondulatoria_qntdRespostasP1[
            respostas[ondulatoria_questao1Key] - 1
        ]++;

        ondulatoria_qntdRespostasP2[
            respostas[ondulatoria_questao2Key] - 1
        ]++;

        ondulatoria_qntdRespostasP3[
            respostas[ondulatoria_questao3Key] - 1
        ]++;

        //#endregion

        //#region Cinemática

        cinematica_qntdRespostasP1[
            respostas[cinematica_questao1Key] - 1
        ]++;

        cinematica_qntdRespostasP2[
            respostas[cinematica_questao2Key] - 1
        ]++;

        cinematica_qntdRespostasP3[
            respostas[cinematica_questao3Key] - 1
        ]++;

        //#endregion

        //#region Opica

        optica_qntdRespostasP1[
            respostas[optica_questao1Key] - 1
        ]++;

        optica_qntdRespostasP2[
            respostas[optica_questao2Key] - 1
        ]++;

        optica_qntdRespostasP3[
            respostas[optica_questao3Key] - 1
        ]++;

        //#endregion
    });

    //#endregion   

    //#region 

    //#endregion

    let qntdRespostas = data.length;

    let eletrodinamica_media = obterMediaPorBlocos(
        [
            eletrodinamica_qntdRespostasP1,
            eletrodinamica_qntdRespostasP2,
            eletrodinamica_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let termologia_media = obterMediaPorBlocos(
        [
            termologia_qntdRespostasP1,
            termologia_qntdRespostasP2,
            termologia_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let ondulatoria_media = obterMediaPorBlocos(
        [
            ondulatoria_qntdRespostasP1,
            ondulatoria_qntdRespostasP2,
            ondulatoria_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let cinematica_media = obterMediaPorBlocos(
        [
            cinematica_qntdRespostasP1,
            cinematica_qntdRespostasP2,
            cinematica_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let optica_media = obterMediaPorBlocos(
        [
            optica_qntdRespostasP1,
            optica_qntdRespostasP2,
            optica_qntdRespostasP3,
        ],
        qntdRespostas
    );

    return {
        "eletrodinamica": eletrodinamica_media,
        "termologia": termologia_media,
        "ondulatoria": ondulatoria_media,
        "cinematica": cinematica_media,
        "optica": optica_media,
    };
}

function obterMediaPorBlocos(bloco, qntdRespostas) {
    let mediaQuestoes = [0, 0, 0];

    for (let i = 0; i < bloco.length; i++) {
        let somatoria = 0;
        let questao = bloco[i];

        for (let j = 1; j <= 5; j++) {
            somatoria += questao[j - 1] * j;
        }

        mediaQuestoes[i] = somatoria / qntdRespostas;
    }

    let mediaBloco = 0;

    for (let i = 0; i < mediaQuestoes.length; i++) {
        mediaBloco += mediaQuestoes[i];
    }

    return mediaBloco / bloco.length;
}

async function obterDados(urlPath) {
    let url = await obterDownloadUrl(urlPath);    
    let arrayRespostas = await downloadFile(url);

    return arrayRespostas;
}

async function downloadFile(url) {
    return await fetch(url)
        .then(
            res => res.json()
        );
}

async function obterDownloadUrl(urlPath) {
    let resultado = await getByPath(urlPath);
    return resultado.data.download_url;
}

async function getByPath(path) {
    return await executeRequest(path);historiaArte
}

async function executeRequest(path) {
    let github = await import('https://cdn.skypack.dev/@octokit/request');

    return await github.request({
        method: "GET",
        url: '/repos/{owner}/{repo}/contents/{path}',
        headers: {
            authorization: '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',
        },
        owner: "Sara-Ghabi",
        repo: "EnemVerso-Data",
        path: path
    });
}

export {obterTodasMedias}