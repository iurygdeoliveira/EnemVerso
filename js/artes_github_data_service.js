let tadsPath = "TADS/artes.json";

//#region Nome das chaves das questões

// Bloco "Arte Contemporâneqa" - Nome das chaves
const arteContemporanea_questao1Key = "Consigo identificar e entender as principais características e conceitos da arte contemporânea, como body art e arte digital?";
const arteContemporanea_questao2Key = "Sinto-me capaz de analisar e interpretar obras de arte contemporâneas, considerando seu contexto e mensagem?";
const arteContemporanea_questao3Key = "Tenho habilidade para relacionar as formas de expressão da arte contemporânea, como performances e instalações, com questões sociais e culturais atuais?";

// Bloco "Vanguardas Artísticas Europeias" - Nome das chaves
const vanguardasArtisticasEuropeias_questao1Key = "Entendo as principais características e influências das vanguardas artísticas europeias, como o expressionismo, cubismo e surrealismo?";
const vanguardasArtisticasEuropeias_questao2Key = "Sou capaz de identificar as diferenças entre as várias vanguardas artísticas e explicar suas propostas de inovação na arte?";
const vanguardasArtisticasEuropeias_questao3Key = "Consigo relacionar obras e artistas específicos às suas respectivas vanguardas artísticas?";

// Bloco "Modernismo" - Nome das chaves
const modernismo_questao1Key = "Tenho conhecimento sobre o modernismo, especialmente no contexto brasileiro, e suas principais características e representantes?";
const modernismo_questao2Key = "Consigo compreender como o modernismo brasileiro foi influenciado pelas vanguardas europeias e ainda assim desenvolveu uma identidade própria?";
const modernismo_questao3Key = "Sinto-me confiante ao analisar obras modernistas, como as de Tarsila do Amaral, considerando seu contexto histórico e temático?";

// Bloco "História da Arte" - Nome das chaves
const historiaArte_questao1Key = "Tenho conhecimento sobre a história da arte em geral e posso identificar diferentes estilos e períodos artísticos?";
const historiaArte_questao2Key = "Sinto-me confortável ao analisar e interpretar diferentes formas de arte, como fotografia, ópera do século XIX e xilogravura nordestina?";
const historiaArte_questao3Key = "Consigo apreciar e entender a importância cultural de expressões artísticas como a cerâmica marajoara e a colagem?";

// Bloco "Arte no Brasil" - Nome das chaves
const arteBrasil_questao1Key = "Tenho conhecimento sobre a influência e as características da arte de origem africana no Brasil e das tradições indígenas?";
const arteBrasil_questao2Key = "Consigo reconhecer e valorizar a contribuição dessas culturas para a diversidade e riqueza da arte brasileira?";
const arteBrasil_questao3Key = "Sinto-me capaz de identificar e interpretar elementos culturais africanos e indígenas em diversas formas de expressão artística no Brasil?";

//#endregion 

async function obterTodasMedias() {
    let medias3A = await obterMediasPorTurma(tadsPath);
    let medias3B = await obterMediasPorTurma(tadsPath);
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

    let arteContemporanea_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let arteContemporanea_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let arteContemporanea_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let vanguardasArtisticasEuropeias_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let vanguardasArtisticasEuropeias_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let vanguardasArtisticasEuropeias_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let modernismo_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let modernismo_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let modernismo_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let historiaArte_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let historiaArte_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let historiaArte_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let arteBrasil_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let arteBrasil_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let arteBrasil_qntdRespostasP3 = [0, 0, 0, 0, 0];

    //#endregion

    //#region Iterando os dados, e adicionando nos arrays.

    data.forEach(respostas => {
        //#region Arte contemporânea

        arteContemporanea_qntdRespostasP1[
            respostas[arteContemporanea_questao1Key] - 1
        ]++;

        arteContemporanea_qntdRespostasP2[
            respostas[arteContemporanea_questao2Key] - 1
        ]++;

        arteContemporanea_qntdRespostasP3[
            respostas[arteContemporanea_questao3Key] - 1
        ]++;

        //#endregion
        
        //#region Vanguardas Artísticas Europeias

        vanguardasArtisticasEuropeias_qntdRespostasP1[
            respostas[vanguardasArtisticasEuropeias_questao1Key] - 1
        ]++;

        vanguardasArtisticasEuropeias_qntdRespostasP2[
            respostas[vanguardasArtisticasEuropeias_questao2Key] - 1
        ]++;

        vanguardasArtisticasEuropeias_qntdRespostasP3[
            respostas[vanguardasArtisticasEuropeias_questao3Key] - 1
        ]++;

        //#endregion

        //#region Modernismo

        modernismo_qntdRespostasP1[
            respostas[modernismo_questao1Key] - 1
        ]++;

        modernismo_qntdRespostasP2[
            respostas[modernismo_questao2Key] - 1
        ]++;

        modernismo_qntdRespostasP3[
            respostas[modernismo_questao3Key] - 1
        ]++;

        //#endregion

        //#region História da Arte

        historiaArte_qntdRespostasP1[
            respostas[historiaArte_questao1Key] - 1
        ]++;

        historiaArte_qntdRespostasP2[
            respostas[historiaArte_questao2Key] - 1
        ]++;

        historiaArte_qntdRespostasP3[
            respostas[historiaArte_questao3Key] - 1
        ]++;

        //#endregion

        //#region Arte no Brasil

        arteBrasil_qntdRespostasP1[
            respostas[arteBrasil_questao1Key] - 1
        ]++;

        arteBrasil_qntdRespostasP2[
            respostas[arteBrasil_questao2Key] - 1
        ]++;

        arteBrasil_qntdRespostasP3[
            respostas[arteBrasil_questao3Key] - 1
        ]++;

        //#endregion
    });

    //#endregion   

    //#region 

    //#endregion

    let qntdRespostas = data.length;

    let arteContemporanea_media = obterMediaPorBlocos(
        [
            arteContemporanea_qntdRespostasP1,
            arteContemporanea_qntdRespostasP2,
            arteContemporanea_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let vanguardasArtisticasEuropeias_media = obterMediaPorBlocos(
        [
            vanguardasArtisticasEuropeias_qntdRespostasP1,
            vanguardasArtisticasEuropeias_qntdRespostasP2,
            vanguardasArtisticasEuropeias_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let modernismo_media = obterMediaPorBlocos(
        [
            modernismo_qntdRespostasP1,
            modernismo_qntdRespostasP2,
            modernismo_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let historiaArte_media = obterMediaPorBlocos(
        [
            historiaArte_qntdRespostasP1,
            historiaArte_qntdRespostasP2,
            historiaArte_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let arteBrasil_media = obterMediaPorBlocos(
        [
            arteBrasil_qntdRespostasP1,
            arteBrasil_qntdRespostasP2,
            arteBrasil_qntdRespostasP3,
        ],
        qntdRespostas
    );

    return {
        "arteContemporanea": arteContemporanea_media,
        "vanguardasArtisticasEuropeias": vanguardasArtisticasEuropeias_media,
        "modernismo": modernismo_media,
        "historiaArte": historiaArte_media,
        "arteBrasil": arteBrasil_media,
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
    return await executeRequest(path);
}

async function executeRequest(path) {
    let github = await import('https://cdn.skypack.dev/@octokit/request');

    return await github.request({
        method: "GET",
        url: '/repos/{owner}/{repo}/contents/{path}',
        headers: {
            authorization: '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',
        },
        owner: "vilaJJ",
        repo: "EnemVerso-Data",
        path: path
    });
}

export {obterTodasMedias}