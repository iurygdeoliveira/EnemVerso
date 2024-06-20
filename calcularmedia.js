/*let ranking = ((6 * 1) + (5 * 2) + (10 * 3) + (9 * 4) + (6 * 5))/ 35;

function calcularMedia(dados, respondentes) {

  let somatoria = 0;
  for (let i = 1; i <= 5; i++) {

    somatoria = somatoria + dados[i - 1] * i;
  }
  return somatoria / respondentes;
}*/


import { obterDados } from './github.js';

async function main() {
    try {
        const githubData = await obterDados();
        console.log('Dados obtidos do GitHub:', githubData);
        processarDados(githubData);
    } catch (error) {
        console.error('Erro ao obter dados do GitHub:', error);
    }

    try {
        const response = await fetch('https://raw.githubusercontent.com/Jeozadaqueoliveira/EnemVerso-Data/main/TADS/Geografira.json');
        if (!response.ok) throw new Error('Erro ao carregar Geografia.json: ' + response.statusText);

        const jsonData = await response.json();
        console.log('Dados obtidos do arquivo JSON:', jsonData);
        processarDados(jsonData);
    } catch (error) {
        console.error('Erro ao carregar Geografia.json:', error);
    }
}

function processarDados(data) {
    console.log('Iniciando processamento dos dados...', data);

    const contagemQuestaoEixo1 = {
        questao1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    const contagemQuestaoEixo2 = {
        questao1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    const contagemQuestaoEixo3 = {
        questao1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    const contagemQuestaoEixo4 = {
        questao1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    const contagemQuestaoEixo5 = {
        questao1: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao2: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        questao3: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    for (let email in data) {
        let entry = data[email];

        // Eixo 1
        let respostaEixo1_1 = parseInt(entry["Sinto-me confiante ao explicar os conceitos de Geografia Física, como clima, relevo e hidrografia ?"]);
        let respostaEixo1_2 = parseInt(entry["Consigo relacionar facilmente os fenômenos naturais estudados em Geografia Física com o ambiente ao meu redor ?"]);
        let respostaEixo1_3 = parseInt(entry["Acho desafiador entender como os diferentes sistemas da Terra interagem e afetam a vida humana."]);

        if (contagemQuestaoEixo1.questao1[respostaEixo1_1] !== undefined) {
            contagemQuestaoEixo1.questao1[respostaEixo1_1]++;
        }
        if (contagemQuestaoEixo1.questao2[respostaEixo1_2] !== undefined) {
            contagemQuestaoEixo1.questao2[respostaEixo1_2]++;
        }
        if (contagemQuestaoEixo1.questao3[respostaEixo1_3] !== undefined) {
            contagemQuestaoEixo1.questao3[respostaEixo1_3]++;
        }

        // Eixo 2
        let respostaEixo2_1 = parseInt(entry["Tenho um bom entendimento sobre os temas de Geografia Humana, como urbanização, migrações e demografia."]);
        let respostaEixo2_2 = parseInt(entry["\nConsigo analisar criticamente os problemas sociais e econ\u00f4micos das cidades com base nos conceitos de Geografia Humana."]);
        let respostaEixo2_3 = parseInt(entry["Sinto dificuldade em compreender a relação entre a distribuição da população e os aspectos econômicos e culturais nas diversas regiões do mundo."]);

        if (contagemQuestaoEixo2.questao1[respostaEixo2_1] !== undefined) {
            contagemQuestaoEixo2.questao1[respostaEixo2_1]++;
        }
        if (contagemQuestaoEixo2.questao2[respostaEixo2_2] !== undefined) {
            contagemQuestaoEixo2.questao2[respostaEixo2_2]++;
        }
        if (contagemQuestaoEixo2.questao3[respostaEixo2_3] !== undefined) {
            contagemQuestaoEixo2.questao3[respostaEixo2_3]++;
        }

        // Eixo 3
        let respostaEixo3_1 = parseInt(entry["Entendo bem o papel da Geopol\u00edtica e das Rela\u00e7\u00f5es Internacionais no cen\u00e1rio mundial atual ?"]);
        let respostaEixo3_2 = parseInt(entry["Consigo identificar como os conflitos geopol\u00edticos e as rela\u00e7\u00f5es internacionais influenciam as pol\u00edticas internas dos pa\u00edses ?"]);
        let respostaEixo3_3 = parseInt(entry["Acho complicado acompanhar e entender as mudan\u00e7as nas rela\u00e7\u00f5es internacionais e seus  impactos em escala local e global."]);

        if (contagemQuestaoEixo3.questao1[respostaEixo3_1] !== undefined) {
            contagemQuestaoEixo3.questao1[respostaEixo3_1]++;
        }
        if (contagemQuestaoEixo3.questao2[respostaEixo3_2] !== undefined) {
            contagemQuestaoEixo3.questao2[respostaEixo3_2]++;
        }
        if (contagemQuestaoEixo3.questao3[respostaEixo3_3] !== undefined) {
            contagemQuestaoEixo3.questao3[respostaEixo3_3]++;
        }

        // Eixo 4
        let respostaEixo4_1 = parseInt(entry["Sinto-me seguro ao analisar a diversidade geogr\u00e1fica e os desafios ambientais do Brasil ? "]);
        let respostaEixo4_2 = parseInt(entry["Consigo relacionar os aspectos geogr\u00e1ficos do Brasil com as quest\u00f5es sociais e econ\u00f4micas atuais do pa\u00eds ?"]);
        let respostaEixo4_3 = parseInt(entry["Tenho dificuldade em entender como as caracter\u00edsticas geogr\u00e1ficas do Brasil influenciam seu desenvolvimento econ\u00f4mico e social ?"]);

        if (contagemQuestaoEixo4.questao1[respostaEixo4_1] !== undefined) {
            contagemQuestaoEixo4.questao1[respostaEixo4_1]++;
        }
        if (contagemQuestaoEixo4.questao2[respostaEixo4_2] !== undefined) {
            contagemQuestaoEixo4.questao2[respostaEixo4_2]++;
        }
        if (contagemQuestaoEixo4.questao3[respostaEixo4_3] !== undefined) {
            contagemQuestaoEixo4.questao3[respostaEixo4_3]++;
        }

        // Eixo 5
        let respostaEixo5_1 = parseInt(entry["Compreendo a import\u00e2ncia e os desafios das quest\u00f5es ambientais e da sustentabilidade no mundo contempor\u00e2neo ?"]);
        let respostaEixo5_2 = parseInt(entry["Consigo relacionar os conceitos de sustentabilidade com a\u00e7\u00f5es pr\u00e1ticas no meu cotidiano e na comunidade ?"]);
        let respostaEixo5_3 = parseInt(entry["Sinto que o tema de sustentabilidade \u00e9 complexo e requer uma compreens\u00e3o mais aprofundada dos impactos humanos no ambiente."]);

        if (contagemQuestaoEixo5.questao1[respostaEixo5_1] !== undefined) {
            contagemQuestaoEixo5.questao1[respostaEixo5_1]++;
        }
        if (contagemQuestaoEixo5.questao2[respostaEixo5_2] !== undefined) {
            contagemQuestaoEixo5.questao2[respostaEixo5_2]++;
        }
        if (contagemQuestaoEixo5.questao3[respostaEixo5_3] !== undefined) {
            contagemQuestaoEixo5.questao3[respostaEixo5_3]++;
        }
    }

    // Cálculo das médias do Eixo 1
    const mediaEixo1_1 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo1.questao1)));
    const mediaEixo1_2 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo1.questao2)));
    const mediaEixo1_3 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo1.questao3)));
    const mediaEixo1 = Math.round((mediaEixo1_1 + mediaEixo1_2 + mediaEixo1_3) / 3);
    
    console.log('----EIXO 1----');
    console.log('Ranking Médio - Questão 1:', mediaEixo1_1);
    console.log('Ranking Médio - Questão 2:', mediaEixo1_2);
    console.log('Ranking Médio - Questão 3:', mediaEixo1_3);
    console.log('Média Geral Eixo 1:', mediaEixo1);

    // Cálculo das médias do Eixo 2
    const mediaEixo2_1 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo2.questao1)));
    const mediaEixo2_2 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo2.questao2)));
    const mediaEixo2_3 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo2.questao3)));
    const mediaEixo2 = Math.round((mediaEixo2_1 + mediaEixo2_2 + mediaEixo2_3) / 3);

    console.log('----EIXO 2----');
    console.log('Ranking Médio - Questão 1:', mediaEixo2_1);
    console.log('Ranking Médio - Questão 2:', mediaEixo2_2);
    console.log('Ranking Médio - Questão 3:', mediaEixo2_3);
    console.log('Média Geral Eixo 2:', mediaEixo2);

    // Cálculo das médias do Eixo 3
    const mediaEixo3_1 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo3.questao1)));
    const mediaEixo3_2 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo3.questao2)));
    const mediaEixo3_3 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo3.questao3)));
    const mediaEixo3 = Math.round((mediaEixo3_1 + mediaEixo3_2 + mediaEixo3_3) / 3);

    console.log('----EIXO 3----');
    console.log('Ranking Médio - Questão 1:', mediaEixo3_1);
    console.log('Ranking Médio - Questão 2:', mediaEixo3_2);
    console.log('Ranking Médio - Questão 3:', mediaEixo3_3);
    console.log('Média Geral Eixo 3:', mediaEixo3);

    // Cálculo das médias do Eixo 4
    const mediaEixo4_1 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo4.questao1)));
    const mediaEixo4_2 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo4.questao2)));
    const mediaEixo4_3 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo4.questao3)));
    const mediaEixo4 = Math.round((mediaEixo4_1 + mediaEixo4_2 + mediaEixo4_3) / 3);

    console.log('----EIXO 4----');
    console.log('Ranking Médio - Questão 1:', mediaEixo4_1);
    console.log('Ranking Médio - Questão 2:', mediaEixo4_2);
    console.log('Ranking Médio - Questão 3:', mediaEixo4_3);
    console.log('Média Geral Eixo 4:', mediaEixo4);

    // Cálculo das médias do Eixo 5
    const mediaEixo5_1 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo5.questao1)));
    const mediaEixo5_2 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo5.questao2)));
    const mediaEixo5_3 = Math.round(calcularMediaPonderada(Object.values(contagemQuestaoEixo5.questao3)));
    const mediaEixo5 = Math.round((mediaEixo5_1 + mediaEixo5_2 + mediaEixo5_3) / 3);

    console.log('----EIXO 5----');
    console.log('Ranking Médio - Questão 1:', mediaEixo5_1);
    console.log('Ranking Médio - Questão 2:', mediaEixo5_2);
    console.log('Ranking Médio - Questão 3:', mediaEixo5_3);
    console.log('Média Geral Eixo 5:', mediaEixo5);

    console.log('----Média Geral de Todos os 5 Eixos----');
    console.log('Média do Eixo 1:', mediaEixo1);
    console.log('Média do Eixo 2:', mediaEixo2);
    console.log('Média do Eixo 3:', mediaEixo3);
    console.log('Média do Eixo 4:', mediaEixo4);
    console.log('Média do Eixo 5:', mediaEixo5);

    /*// Calculando a média geral de todos os eixos
    const mediaGeral = (mediaEixo1 + mediaEixo2 + mediaEixo3 + mediaEixo4 + mediaEixo5) / 5;
    console.log('Média Geral de todos o 5 Eixos:', mediaGeral);*/
}

function calcularMediaPonderada(respostas) {
    const alternativas = [1, 2, 3, 4, 5];
    const somaPonderada = respostas.reduce((soma, resposta, i) => soma + resposta * alternativas[i], 0);
    const totalRespostas = respostas.reduce((total, resposta) => total + resposta, 0);

    return somaPonderada / totalRespostas;
}


main();





