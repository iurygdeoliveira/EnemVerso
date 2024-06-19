function enviarMateria(materia){
  function calcularMediasDaTurma(jsonData) {
    const totais = Array(5).fill(0); // Array para armazenar os totais de cada categoria
    const contadores = Array(5).fill(0); // Array para contar o número de elementos em cada categoria

    jsonData.forEach(entrada => {
        const valores = Object.values(entrada).slice(8); // Pega os valores das perguntas a partir da 9ª chave

        for (let i = 0; i < valores.length; i += 3) {
            const categoriaIndex = Math.floor(i / 3);
            const chunk = valores.slice(i, i + 3).map(Number);

            chunk.forEach(valor => {
                totais[categoriaIndex] += valor;
                contadores[categoriaIndex] += 1;
            });
        }
    });

    const medias = totais.map((total, index) => total / contadores[index]);
    return medias;
  }

  let path = "TADS/Ingles.json";

  async function obterMediasDaTurma() {
    let resultado = await getByPath(path);

    let url = resultado.data.download_url;

    let dados = await fetch(url)
        .then(
            res => res.json()
        );

    const mediasDaTurma = calcularMediasDaTurma(Object.values(dados));
    console.log(mediasDaTurma);
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
        mediasDaTurma[0],
        mediasDaTurma[1],
        mediasDaTurma[2],
        mediasDaTurma[3],
        mediasDaTurma[4]
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
}
