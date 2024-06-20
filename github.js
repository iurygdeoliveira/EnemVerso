require('dotenv').config();
import { request } from 'https://cdn.skypack.dev/@octokit/request';

let path = "TADS/Geografira.json";

exibirResultado();

async function exibirResultado() {
    try {
        console.log('Buscando metadados do arquivo...');
        let resultado = await getByPath(path);
        console.log('Metadados obtidos:', resultado);

        if (!resultado.data || !resultado.data.download_url) {
            throw new Error('URL de download não encontrada na resposta');
        }

        let url = resultado.data.download_url;

        console.log('Buscando dados JSON da URL:', url);
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Resposta de rede não foi bem-sucedida');
        }
        let dados = await response.json();

        console.log('Dados JSON obtidos:', dados);

        processarDados(dados);
        exportarDados(dados); 
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

async function getByPath(path) {
    return await executeRequest(path);
}

async function executeRequest(path) {
    try {
        console.log('Octokit carregado:', request);

        let response = await request('GET /repos/{owner}/{repo}/contents/{path}', {
            headers: {
                authorization: `Bearer ${process.env.GITHUB_TOKEN}`
            },
            owner: "Jeozadaqueoliveira",
            repo: "EnemVerso-Data",
            path: path
        });

        console.log('Resposta da API do GitHub:', response);
        return response;
    } catch (error) {
        console.error('Erro ao executar a requisição:', error);
    }
}

function processarDados(dados) {
    let contagemQuestao1_eixo1 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao2_eixo1 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao3_eixo1 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    let contagemQuestao1_eixo2 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao2_eixo2 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao3_eixo2 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    let contagemQuestao1_eixo3 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao2_eixo3 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao3_eixo3 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    let contagemQuestao1_eixo4 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao2_eixo4 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao3_eixo4 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    let contagemQuestao1_eixo5 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao2_eixo5 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    let contagemQuestao3_eixo5 = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};

    for (let email in dados) {
        let entry = dados[email];

        //eixo1
        let resposta1_eixo1 = parseInt(entry["Sinto-me confiante ao explicar os conceitos de Geografia Física, como clima, relevo e hidrografia ?"]);
        let resposta2_eixo1 = parseInt(entry["Consigo relacionar facilmente os fenômenos naturais estudados em Geografia Física com o ambiente ao meu redor ?"]);
        let resposta3_eixo1 = parseInt(entry["Acho desafiador entender como os diferentes sistemas da Terra interagem e afetam a vida humana."]);

        //eixo2
        let resposta1_eixo2 = parseInt(entry["Tenho um bom entendimento sobre os temas de Geografia Humana, como urbanização, migrações e demografia."]); 
        let resposta2_eixo2 = parseInt(entry["\nConsigo analisar criticamente os problemas sociais e econ\u00f4micos das cidades com base nos conceitos de Geografia Humana."]); 
        let resposta3_eixo2 = parseInt(entry["Sinto dificuldade em compreender a relação entre a distribuição da população e os aspectos econômicos e culturais nas diversas regiões do mundo."]); 

        //eixo3
        let resposta1_eixo3 = parseInt(entry["Entendo bem o papel da Geopol\u00edtica e das Rela\u00e7\u00f5es Internacionais no cen\u00e1rio mundial atual ?"]); 
        let resposta2_eixo3 = parseInt(entry["Consigo identificar como os conflitos geopol\u00edticos e as rela\u00e7\u00f5es internacionais influenciam as pol\u00edticas internas dos pa\u00edses ?"]); 
        let resposta3_eixo3 = parseInt(entry["Acho complicado acompanhar e entender as mudan\u00e7as nas rela\u00e7\u00f5es internacionais e seus  impactos em escala local e global."]); 

        //eixo4
        let resposta1_eixo4 = parseInt(entry["Sinto-me seguro ao analisar a diversidade geogr\u00e1fica e os desafios ambientais do Brasil ? "]); 
        let resposta2_eixo4 = parseInt(entry["Consigo relacionar os aspectos geogr\u00e1ficos do Brasil com as quest\u00f5es sociais e econ\u00f4micas atuais do pa\u00eds ?"]); 
        let resposta3_eixo4 = parseInt(entry["Tenho dificuldade em entender como as caracter\u00edsticas geogr\u00e1ficas do Brasil influenciam seu desenvolvimento econ\u00f4mico e social ?"]); 

        //eixo5
        let resposta1_eixo5 = parseInt(entry["Compreendo a import\u00e2ncia e os desafios das quest\u00f5es ambientais e da sustentabilidade no mundo contempor\u00e2neo ?"]); 
        let resposta2_eixo5 = parseInt(entry["Consigo relacionar os conceitos de sustentabilidade com a\u00e7\u00f5es pr\u00e1ticas no meu cotidiano e na comunidade ?"]); 
        let resposta3_eixo5 = parseInt(entry["Sinto que o tema de sustentabilidade \u00e9 complexo e requer uma compreens\u00e3o mais aprofundada dos impactos humanos no ambiente."]);


//eixo1
        if (contagemQuestao1_eixo1[resposta1_eixo1] !== undefined) {
            contagemQuestao1_eixo1[resposta1_eixo1]++;
        }
        if (contagemQuestao2_eixo1[resposta2_eixo1] !== undefined) {
            contagemQuestao2_eixo1[resposta2_eixo1]++;
        }
        if (contagemQuestao3_eixo1[resposta3_eixo1] !== undefined) {
            contagemQuestao3_eixo1[resposta3_eixo1]++;
        }
//eixo2
        if (contagemQuestao1_eixo2[resposta1_eixo2] !== undefined) {
            contagemQuestao1_eixo2[resposta1_eixo2]++;
        }
        if (contagemQuestao2_eixo2[resposta2_eixo2] !== undefined) {
            contagemQuestao2_eixo2[resposta2_eixo2]++;
        }
        if (contagemQuestao3_eixo2[resposta3_eixo2] !== undefined) {
            contagemQuestao3_eixo2[resposta3_eixo2]++;
        }
//eixo3
        if (contagemQuestao1_eixo3[resposta1_eixo3] !== undefined) {
            contagemQuestao1_eixo3[resposta1_eixo3]++;
        }
        if (contagemQuestao2_eixo3[resposta2_eixo3] !== undefined) {
            contagemQuestao2_eixo3[resposta2_eixo3]++;
        }
        if (contagemQuestao3_eixo3[resposta3_eixo3] !== undefined) {
            contagemQuestao3_eixo3[resposta3_eixo3]++;
        }
//eixo4
        if (contagemQuestao1_eixo4[resposta1_eixo4] !== undefined) {
            contagemQuestao1_eixo4[resposta1_eixo4]++;
        }
        if (contagemQuestao2_eixo4[resposta2_eixo4] !== undefined) {
            contagemQuestao2_eixo4[resposta2_eixo4]++;
        }
        if (contagemQuestao3_eixo4[resposta3_eixo4] !== undefined) {
            contagemQuestao3_eixo4[resposta3_eixo4]++;
        }
//eixo5
        if (contagemQuestao1_eixo5[resposta1_eixo5] !== undefined) {
            contagemQuestao1_eixo5[resposta1_eixo5]++;
        }
        if (contagemQuestao2_eixo5[resposta2_eixo5] !== undefined) {
            contagemQuestao2_eixo5[resposta2_eixo5]++;
        }
        if (contagemQuestao3_eixo5[resposta3_eixo5] !== undefined) {
            contagemQuestao3_eixo5[resposta3_eixo5]++;
        }
    }


    function formatarContagem(contagem) {
        return Object.values(contagem).join(', ');
    }

    console.log('// Eixo 1 - Contagem de Respostas');
    console.log('Questão 1:', formatarContagem(contagemQuestao1_eixo1));
    console.log('Questão 2:', formatarContagem(contagemQuestao2_eixo1));
    console.log('Questão 3:', formatarContagem(contagemQuestao3_eixo1));

    console.log('// Eixo 2 - Contagem de Respostas');
    console.log('Questão 1:', formatarContagem(contagemQuestao1_eixo2));
    console.log('Questão 2:', formatarContagem(contagemQuestao2_eixo2));
    console.log('Questão 3:', formatarContagem(contagemQuestao3_eixo2));

    console.log('// Eixo 3 - Contagem de Respostas');
    console.log('Questão 1:', formatarContagem(contagemQuestao1_eixo3));
    console.log('Questão 2:', formatarContagem(contagemQuestao2_eixo3));
    console.log('Questão 3:', formatarContagem(contagemQuestao3_eixo3));

    console.log('// Eixo 4 - Contagem de Respostas');
    console.log('Questão 1:', formatarContagem(contagemQuestao1_eixo4));
    console.log('Questão 2:', formatarContagem(contagemQuestao2_eixo4));
    console.log('Questão 3:', formatarContagem(contagemQuestao3_eixo4));

    console.log('// Eixo 5 - Contagem de Respostas');
    console.log('Questão 1:', formatarContagem(contagemQuestao1_eixo5));
    console.log('Questão 2:', formatarContagem(contagemQuestao2_eixo5));
    console.log('Questão 3:', formatarContagem(contagemQuestao3_eixo5));
}

function exportarDados(data) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = data;
    } else {
        window.githubData = data;
    }
}

export async function obterDados() {
    try {
        let response = await fetch('https://raw.githubusercontent.com/Jeozadaqueoliveira/EnemVerso-Data/main/TADS/Geografira.json');

        if (!response.ok) {
            throw new Error('Erro ao buscar dados do GitHub: ' + response.status + ' ' + response.statusText);
        }

        let data = await response.json();

        if (!data.content || typeof data.content !== 'string') {
            throw new Error('Formato de dados inválido: content não é uma string válida');
        }

        let decodedData = JSON.parse(atob(data.content));
        return decodedData;
    } catch (error) {
        console.error('Erro ao obter dados do GitHub:', error);
        throw error; 
    }
}
