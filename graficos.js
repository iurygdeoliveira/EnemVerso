function calcularMediasDaTurma(inglesData) {
  // Organizando as perguntas em cada área da língua inglesa
  const areas = [
    {
      nome: "interpretação",
      perguntas: [
        "Consigo compreender o significado geral e os detalhes específicos de textos em inglês, independentemente do formato ou do tema?",
        "Tenho habilidade para identificar a ideia principal e os argumentos secundários em um texto em inglês?",
        "Sinto-me confiante na minha capacidade de interpretar textos em inglês que abordam temas econômicos, políticos e socioculturais?​"
      ]
    },
    {
      nome: "gramática",
      perguntas: [
        "Entendo as regras básicas da gramática inglesa, incluindo tempos verbais, uso de pronomes e diferenças de palavras entre inglês e português?",
        "Consigo aplicar corretamente as estruturas gramaticais do inglês em diferentes contextos?",
        "Sinto-me seguro(a) ao usar a gramática inglesa para aprimorar minha compreensão de textos?"
      ]
    },
    {
      nome: "tempos_verbais",
      perguntas: [
        "Tenho facilidade em identificar e usar corretamente diferentes tempos verbais em inglês, como o passado simples, presente simples e futuro simples ?",
        "Consigo compreender e aplicar o present perfect em contextos adequados?",
        "Entendo como os tempos verbais em inglês influenciam o sentido de uma frase ou texto?"
      ]
    },
    {
      nome: "voz_passiva_ativa",
      perguntas: [
        "Compreendo a estrutura e o uso da voz passiva em inglês e consigo identificá-la em diferentes textos?",
        "Sou capaz de transformar frases da voz ativa para a voz passiva em inglês?",
        "Entendo a função e o efeito da voz passiva no contexto de uma frase ou texto em inglês?"
      ]
    },
    {
      nome: "conectivos",
      perguntas: [
        "Sinto-me confortável utilizando conectivos (linking words) em inglês para estabelecer relações lógicas em textos?",
        "Consigo identificar e empregar corretamente adjuntos adverbiais em inglês para especificar tempo, lugar, modo, razão, entre outros?",
        "Entendo como os conectivos e adjuntos adverbiais contribuem para a coesão e a coerência de um texto em inglês?"
      ]
    }
  ];

  // Objeto para armazenar o total de notas de cada área
  const totalNotasPorArea = {};

  // Iterar sobre cada área e inicializar o total de notas como zero
  areas.forEach(area => {
    totalNotasPorArea[area.nome] = 0;
  });

  // Iterar sobre cada aluno no arquivo JSON
  inglesData.forEach(aluno => {
    // Calcular o total de notas de cada área para o aluno atual e acumular no objeto totalNotasPorArea
    areas.forEach(area => {
      const totalNotas = area.perguntas.reduce((acc, pergunta) => {
        return acc + parseInt(aluno[pergunta]);
      }, 0);
      totalNotasPorArea[area.nome] += totalNotas;
    });
  });

  // Calcular a média da turma inteira para cada área da língua inglesa
  const mediasDaTurmaPorArea = {};
  areas.forEach(area => {
    const mediaDaTurma = totalNotasPorArea[area.nome] / (inglesData.length * area.perguntas.length);
    mediasDaTurmaPorArea[area.nome] = mediaDaTurma;
  });

  return mediasDaTurmaPorArea;
}

let path = "TADS/Ingles.json";

async function obterMediasDaTurma() {
  let resultado = await getByPath(path);

  let url = resultado.data.download_url;

  let dados = await fetch(url)
      .then(
          res => res.json()
      );

  const mediasDaTurma = calcularMediasDaTurma(dados);
  return mediasDaTurma;

}

async function getByPath(path) {
  return await executeRequest(path);
}

async function executeRequest(path) {
  let github = await import('https://cdn.skypack.dev/@octokit/request');

  return await github.request({
      method: "GET",
      url: '/repos/{owner}/{repo}/contents/{path}',
      owner: "Micier",
      repo: "EnemVerso-Data",
      path: path
  })
}


// função de gerar os gráficos
function criarGrafico(elementId, valores, titulo) {
var dom = document.getElementById(elementId);
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

var option = {
  title: {
    text: titulo,
    left: 'center',
    bottom: 0
  },
  legend: {
    data: ['Língua Inglesa']
  },
  radar: {
    indicator: [
      { name: 'Interpretação', max: 5 },
      { name: 'Gramática', max: 5 },
      { name: 'Tempos Verbais', max: 5 },
      { name: 'Voz Passiva e Ativa', max: 5 },
      { name: 'Conectivos', max: 5 }
    ],
    center: ["50%", "50%"],
    radius: ["0%", "50%"]
  },
  series: [{
    name: 'Áreas da língua inglesa',
    type: 'radar',
    data: [{
      value: valores,
      name: 'Língua Inglesa'
    }]
  }]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
}



// Para usar a função e obter as médias da turma
obterMediasDaTurma()
.then(mediasDaTurma => {
  if (mediasDaTurma) {
    const valores = [
      mediasDaTurma['interpretação'],
      mediasDaTurma['gramática'],
      mediasDaTurma['tempos_verbais'],
      mediasDaTurma['voz_passiva_ativa'],
      mediasDaTurma['conectivos']
    ];
    criarGrafico('graficos_3A', valores, '3A');
    criarGrafico('graficos_3B', valores, '3B');
    criarGrafico('graficos_TADS', valores, 'TADS');
  }
})
.catch(error => {
  console.error('Erro ao obter as médias da turma:', error);
});

// Definir tamanho pré-definido para o gráfico (opcional)
// Isso garante que o gráfico tenha uma dimensão mínima inicial, mas não é necessário para torná-lo responsivo

