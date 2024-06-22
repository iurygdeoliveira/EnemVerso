const caminhos = {
    TresA: "3A/EducacaoFisica.json",
    TresB: "3B/EducacaoFisica.json",
    TADS: "TADS/EducacaoFisica.json"
};

const perguntas = {
    JogosBrincadeirasArtes: [
        "Compreendo a relevância dos jogos e brincadeiras na Educação Física, sobretudo para o crescimento das crianças.",
        "Sinto-me capaz de avaliar como brincadeiras ajudam no desenvolvimento de habilidades sociais e cognitivas?",
        "Conheço a integração entre educação física e as artes, como as danças e expressões corporais de movimento?"
    ],
    FuncaoSocialDasAtvsFisicas: [
        "Compreendo como as atividades físicas contribuem para o bem-estar social e a qualidade de vida ?",
        "Compreendo como as atividades físicas influenciam o desenvolvimento de honestidade, lealdade e trabalho em equipe?",
        "Consigo identificar os benefícios sociais das diferentes modalidades esportivas e de atividade física ?"
    ],
    EducacaoFisicaInclusiva: [
        "Tenho conhecimento sobre as adaptações necessárias na Educação Física para incluir pessoas com necessidades especiais?",
        "Entendo o impacto e a importância de eventos como as Paraolimpíadas na promoção da inclusão através do esporte?",
        "Consigo reconhecer a relevância da Educação Física na promoção da igualdade e na superação de barreiras físicas e sociais?"
    ],
    ExercicioFisicoSaude: [
        "Compreendo a relação entre a prática regular de exercícios físicos e a manutenção da saúde física e mental?",
        "Sinto-me informado sobre como diferentes formas de exercício físico contribuem para a saúde e prevenção de doenças?",
        "Tenho habilidade para analisar como a Educação Física pode influenciar estilos de vida mais saudáveis?"
    ],
    EsportesPraticasCulturais: [
        "Entendo a história e a evolução de diferentes esportes e como eles se relacionam com a cultura e sociedade?",
        "Consigo identificar e compreender as regras e habilidades técnicas de diferentes modalidades esportivas?",
        "Tenho conhecimento sobre como as práticas corporais podem ser expressões de autonomia e identidade cultural?"
    ]
};

async function ColetarMedias() {
    const TresA_Media = await ColetarMediasTurmas(caminhos.TresA);
    const TresB_Media = await ColetarMediasTurmas(caminhos.TresB);
    const TADS_Media = await ColetarMediasTurmas(caminhos.TADS);

return {
    '3A': TresA_Media,
    '3B': TresB_Media,
    'tads': TADS_Media
    };
}

async function ColetarMediasTurmas(CaminhoUrl) {
    const data = await ColetarDados(CaminhoUrl);

    const pc = Object.keys(perguntas);
    const Media_Perguntas = {};

    for (const key of pc) {
        Media_Perguntas[key] = new Array(perguntas[key].length).fill(0).map(() => new Array(5).fill(0));
    }

    data.forEach(respostas => {
        for (const key of pc) {
            perguntas[key].forEach((pergunta, reg) => {
                Media_Perguntas[key][reg][respostas[pergunta] - 1]++;
            });
        }
    });

    const qntdRespostas = data.length;
    const medias = {};

    for (const key of pc) {
        medias[key] = ColetarMediaBlocos(Media_Perguntas[key], qntdRespostas);
    }

    return medias;
}

function ColetarMediaBlocos(bloco, qntdRespostas) {
    const MP = bloco.map(pergunta =>
        pergunta.reduce((soma, quantidade, reg) => soma + quantidade * (reg + 1), 0) / qntdRespostas
    );

    return MP.reduce((soma, media) => soma + media, 0) / bloco.length;
}

async function ColetarDados(CaminhoUrl) {
    const url = await ColetarDownload(CaminhoUrl);
    const response = await fetch(url);
    return await response.json();
}
async function ColetarDownload(CaminhoUrl) {
    const resultado = await obterPorCaminho(CaminhoUrl);
    return resultado.data.download_url;
}
async function obterPorCaminho(Caminho) {
    return await ExecRequisicao(Caminho);
}

const ExecRequisicao = async (caminho) => {
 
    const { request } = await import('https://cdn.skypack.dev/@octokit/request');

    const options = {
        method: "GET",
        url: `/repos/MarioRafaelCostaFerreira/EnemVerso_Data/contents/${caminho}`,
        headers: {
            authorization: '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'
        }
    };

    return await request(options);
};

export { ColetarMedias };
