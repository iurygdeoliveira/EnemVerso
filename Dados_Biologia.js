let tadsPath = "TADS/Biologia.json";
let em3APath = "3A/Biologia.json";
let em3BPath = "3B/Biologia.json";

//#region Nome das chaves das questões

// Bloco "BIOLOGIA CELULAR E MOLECULAR" - Nome das chaves
const arteContemporanea_questao1Key = "Sinto-me confiante ao entender e explicar a estrutura e função das células e moléculas biológicas ?";
const arteContemporanea_questao2Key = "Consigo relacionar os conceitos de Biologia Celular e Molecular com processos do cotidiano e doenças ?";
const arteContemporanea_questao3Key = "Acho desafiador compreender os processos moleculares complexos, como a replicação do DNA e a síntese proteica ??";

// Bloco "ECOLOGIA E MEIO AMBIENTE" - Nome das chaves
const vanguardasArtisticasEuropeias_questao1Key = "Tenho um bom entendimento sobre ecossistemas, biodiversidade e questões ambientais ?";
const vanguardasArtisticasEuropeias_questao2Key = "Consigo identificar a relação entre os conceitos ecológicos e os desafios ambientais atuais, como as mudanças climáticas ?";
const vanguardasArtisticasEuropeias_questao3Key = "Sinto dificuldade em compreender a complexidade das interações ecológicas e sua importância para a conservação ambiental ?";

// Bloco "GENÉTICA E EVOLUÇÃO" - Nome das chaves
const modernismo_questao1Key = "Compreendo os princípios básicos da genética e da teoria evolutiva ?";
const modernismo_questao2Key = "Consigo aplicar o conhecimento genético e evolutivo para entender a variabilidade e a hereditariedade em organismos ?";
const modernismo_questao3Key = "Tenho dificuldades para entender conceitos como herança genética, mutações e seleção natural ?";

// Bloco "ANATOMIA E FISIOLOGIA HUMANA" - Nome das chaves
const historiaArte_questao1Key = "Entendo a estrutura e o funcionamento do corpo humano, incluindo seus sistemas orgânicos ?";
const historiaArte_questao2Key = "Consigo fazer a comparação da anatomia e fisiologia humana a saúde de forma integrativa ?";
const historiaArte_questao3Key = "A compreensão e memorização das diversas estruturas e funções do corpo humano apresentam-se como um desafio ?";

// Bloco "QUÍMICA AMBIENTAL" - Nome das chaves
const arteBrasil_questao1Key = "Compreendo a diversidade e a biologia das plantas (botânica) e dos animais (zoologia) ?";
const arteBrasil_questao2Key = "Você consegue reconhecer que o estudo das plantas e dos animais é de uma suma importância para compreender a vida na Terra  ?";
const arteBrasil_questao3Key = " Conceitos como herança genética, as mutações e a seleção natural são difíceis de entender ?";

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