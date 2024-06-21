let tadsPath = "TADS/Biologia.json";
let em3APath = "3A/Biologia.json";
let em3BPath = "3B/Biologia.json";

//#region Nome das chaves das questões

// Bloco "BIOLOGIA CELULAR E MOLECULAR" - Nome das chaves
const bioCelularMolecular_questao1Key = "Sinto-me confiante ao entender e explicar a estrutura e função das células e moléculas biológicas ?";
const bioCelularMolecular_questao2Key = "Consigo relacionar os conceitos de Biologia Celular e Molecular com processos do cotidiano e doenças ?";
const bioCelularMolecular_questao3Key = "Acho desafiador compreender os processos moleculares complexos, como a replicação do DNA e a síntese proteica ??";

// Bloco "ECOLOGIA E MEIO AMBIENTE" - Nome das chaves
const ecoMeioAmbiente_questao1Key = "Tenho um bom entendimento sobre ecossistemas, biodiversidade e questões ambientais ?";
const ecoMeioAmbiente_questao2Key = "Consigo identificar a relação entre os conceitos ecológicos e os desafios ambientais atuais, como as mudanças climáticas ?";
const ecoMeioAmbiente_questao3Key = "Sinto dificuldade em compreender a complexidade das interações ecológicas e sua importância para a conservação ambiental ?";

// Bloco "GENÉTICA E EVOLUÇÃO" - Nome das chaves
const geneticaEvolucao_questao1Key = "Compreendo os princípios básicos da genética e da teoria evolutiva ?";
const geneticaEvolucao_questao2Key = "Consigo aplicar o conhecimento genético e evolutivo para entender a variabilidade e a hereditariedade em organismos ?";
const geneticaEvolucao_questao3Key = "Tenho dificuldades para entender conceitos como herança genética, mutações e seleção natural ?";

// Bloco "ANATOMIA E FISIOLOGIA HUMANA" - Nome das chaves
const anatomiaFisioHumana_questao1Key = "Entendo a estrutura e o funcionamento do corpo humano, incluindo seus sistemas orgânicos ?";
const anatomiaFisioHumana_questao2Key = "Consigo fazer a comparação da anatomia e fisiologia humana a saúde de forma integrativa ?";
const anatomiaFisioHumana_questao3Key = "A compreensão e memorização das diversas estruturas e funções do corpo humano apresentam-se como um desafio ?";

// Bloco "QUÍMICA AMBIENTAL" - Nome das chaves
const quimicaAmbiental_questao1Key = "Compreendo a diversidade e a biologia das plantas (botânica) e dos animais (zoologia) ?";
const quimicaAmbiental_questao2Key = "Você consegue reconhecer que o estudo das plantas e dos animais é de uma suma importância para compreender a vida na Terra  ?";
const quimicaAmbiental_questao3Key = " Conceitos como herança genética, as mutações e a seleção natural são difíceis de entender ?";

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

    let bioCelularMolecular_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let bioCelularMolecular_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let bioCelularMolecular_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let ecoMeioAmbiente_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let ecoMeioAmbiente_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let ecoMeioAmbiente_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let geneticaEvolucao_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let geneticaEvolucao_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let geneticaEvolucao_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let anatomiaFisioHumana_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let anatomiaFisioHumana_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let anatomiaFisioHumana_qntdRespostasP3 = [0, 0, 0, 0, 0];

    let quimicaAmbiental_qntdRespostasP1 = [0, 0, 0, 0, 0];
    let quimicaAmbiental_qntdRespostasP2 = [0, 0, 0, 0, 0];
    let quimicaAmbiental_qntdRespostasP3 = [0, 0, 0, 0, 0];

    //#endregion

    //#region Iterando os dados, e adicionando nos arrays.

    data.forEach(respostas => {
        //#region BIOLOGIA CELULAR E MOLECULAR

        bioCelularMolecular_qntdRespostasP1[
            respostas[bioCelularMolecular_questao1Key] - 1
        ]++;

        bioCelularMolecular_qntdRespostasP2[
            respostas[bioCelularMolecular_questao2Key] - 1
        ]++;

        bioCelularMolecular_qntdRespostasP3[
            respostas[bioCelularMolecular_questao3Key] - 1
        ]++;

        //#endregion

        //#region ECOLOGIA E MEIO AMBIENTE

        ecoMeioAmbiente_qntdRespostasP1[
            respostas[ecoMeioAmbiente_questao1Key] - 1
        ]++;

        ecoMeioAmbiente_qntdRespostasP2[
            respostas[ecoMeioAmbiente_questao2Key] - 1
        ]++;

        ecoMeioAmbiente_qntdRespostasP3[
            respostas[ecoMeioAmbiente_questao3Key] - 1
        ]++;

        //#endregion

        //#region GENÉTICA E EVOLUÇÃO

        geneticaEvolucao_qntdRespostasP1[
            respostas[geneticaEvolucao_questao1Key] - 1
        ]++;

        geneticaEvolucao_qntdRespostasP2[
            respostas[geneticaEvolucao_questao2Key] - 1
        ]++;

        geneticaEvolucao_qntdRespostasP3[
            respostas[geneticaEvolucao_questao3Key] - 1
        ]++;

        //#endregion

        //#region ANATOMIA E FISIOLOGIA HUMANA

        anatomiaFisioHumana_qntdRespostasP1[
            respostas[anatomiaFisioHumana_questao1Key] - 1
        ]++;

        anatomiaFisioHumana_qntdRespostasP2[
            respostas[anatomiaFisioHumana_questao2Key] - 1
        ]++;

        anatomiaFisioHumana_qntdRespostasP3[
            respostas[anatomiaFisioHumana_questao3Key] - 1
        ]++;

        //#endregion

        //#region QUIMICA AMBIENTAL

        quimicaAmbiental_qntdRespostasP1[
            respostas[quimicaAmbiental_questao1Key] - 1
        ]++;

        quimicaAmbiental_qntdRespostasP2[
            respostas[quimicaAmbiental_questao2Key] - 1
        ]++;

        quimicaAmbiental_qntdRespostasP3[
            respostas[quimicaAmbiental_questao3Key] - 1
        ]++;

        //#endregion
    });

    //#endregion   

    //#region 

    //#endregion

    let qntdRespostas = data.length;

    let bioCelularMolecular_media = obterMediaPorBlocos(
        [
            bioCelularMolecular_qntdRespostasP1,
            bioCelularMolecular_qntdRespostasP2,
            bioCelularMolecular_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let ecoMeioAmbiente_media = obterMediaPorBlocos(
        [
            ecoMeioAmbiente_qntdRespostasP1,
            ecoMeioAmbiente_qntdRespostasP2,
            ecoMeioAmbiente_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let geneticaEvolucao_media = obterMediaPorBlocos(
        [
            geneticaEvolucao_qntdRespostasP1,
            geneticaEvolucao_qntdRespostasP2,
            geneticaEvolucao_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let anatomiaFisioHumana_media = obterMediaPorBlocos(
        [
            anatomiaFisioHumana_qntdRespostasP1,
            anatomiaFisioHumana_qntdRespostasP2,
            anatomiaFisioHumana_qntdRespostasP3,
        ],
        qntdRespostas
    );

    let quimicaAmbiental_media = obterMediaPorBlocos(
        [
            quimicaAmbiental_qntdRespostasP1,
            quimicaAmbiental_qntdRespostasP2,
            quimicaAmbiental_qntdRespostasP3,
        ],
        qntdRespostas
    );

    return {
        "bioCelularMolecular": bioCelularMolecular_media,
        "ecoMeioAmbiente": ecoMeioAmbiente_media,
        "geneticaEvolucao": geneticaEvolucao_media,
        "anatomiaFisioHumana": anatomiaFisioHumana_media,
        "quimicaAmbiental": quimicaAmbiental_media,
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
        owner: "Aarao3007",
        repo: "EnemVerso-Data",
        path: path
    });
}

export {obterTodasMedias}