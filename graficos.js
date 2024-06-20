async function enviarMateria(materia){
  function calcularMediasDaTurma(jsonData) {
    const totais = Array(5).fill(0); // Array para armazenar os totais de cada categoria
    const contadores = Array(5).fill(0); // Array para contar o número de elementos em cada categoria

    jsonData.forEach(entrada => {
        const slice_start = (Object.keys(entrada).indexOf(info_materia["1_Perg"]));
        const slice_end = (Object.keys(entrada).indexOf(info_materia["1_Perg"])) + 15;
        const valores = Object.values(entrada).slice(slice_start, slice_end); // Pega os valores das perguntas a partir da 9ª chave

        console.log(valores);

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

  async function getJSON(arquivo){
    const resultado = await fetch(arquivo);
    return await resultado.json();
  }

  const info_materias = await getJSON("materias.json");

  function buscarInfoMateria(materia){
    const resultado = info_materias.filter(item => item.Materia === materia);
    console.log(resultado);
    return resultado;
  }

  let info_materia = buscarInfoMateria(materia);

  let path = info_materia["Path"];

  async function obterMediasDaTurma() {
    let resultado = await getByPath(path);

    let url = resultado.data.download_url;

    let dados = await fetch(url)
        .then(
            res => res.json()
        );

    const mediasDaTurma = calcularMediasDaTurma(Object.values(dados));
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
      data: [info_materia["Materia"]]
    },
    radar: {
      indicator: [
        { name: info_materia["Eixo1"], max: 5 },
        { name: info_materia["Eixo2"], max: 5 },
        { name: info_materia["Eixo3"], max: 5 },
        { name: info_materia["Eixo4"], max: 5 },
        { name: info_materia["Eixo5"], max: 5 }
      ],
      center: ["50%", "50%"],
      radius: ["0%", "50%"]
    },
    series: [{
      name: 'Áreas da língua inglesa',
      type: 'radar',
      data: [{
        value: valores,
        name: info_materia["Materia"]
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
