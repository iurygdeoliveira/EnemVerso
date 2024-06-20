async function enviarMateria(materia){
  function calcularMediasDaTurma(jsonData) {
    const totais = Array(5).fill(0); // Array para armazenar os totais de cada categoria
    const contadores = Array(5).fill(0); // Array para contar o número de elementos em cada categoria

    let medias = [];
    
    for(let j = 0; j < jsonData.length; j++){
      jsonData[j].forEach(entrada => {
          const slice_start = (Object.keys(entrada).indexOf(info_materia[j]["1_Perg"]));
          const slice_end = (Object.keys(entrada).indexOf(info_materia[j]["1_Perg"])) + 15;
          const valores = Object.values(entrada).slice(slice_start, slice_end); // Pega os valores das perguntas a partir da 9ª chave

          for (let i = 0; i < valores.length; i += 3) {
              const categoriaIndex = Math.floor(i / 3);
              const chunk = valores.slice(i, i + 3).map(Number);

              chunk.forEach(valor => {
                  totais[categoriaIndex] += valor;
                  contadores[categoriaIndex] += 1;
              });
          }
      });

      medias.push(totais.map((total, index) => total / contadores[index]));
    }
    return medias;
  }

  async function getJSON(arquivo){
    const resultado = await fetch(arquivo);
    return await resultado.json();
  }

  const info_materias = await getJSON("materias.json");

  function buscarInfoMateria(materia){
    const resultado = info_materias.filter(item => item.Materia === materia);
    return resultado;
  }

  let info_materia = buscarInfoMateria(materia);



    async function obterMediasDaTurma() {
      let mediasDaTurma = [];
      for (let i = 0; i < info_materia.length; i++){
        let path = info_materia[i]["Path"];
        let resultado = await getByPath(path);

        let url = resultado.data.download_url;

        let dados = await fetch(url)
            .then(
                res => res.json()
            );

        mediasDaTurma.push(Object.values(dados));
      }
      mediasDaTurma = calcularMediasDaTurma(mediasDaTurma);
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
  dom.style.display = 'block';
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
      data: [info_materia[0]["Materia"]]
    },
    radar: {
      indicator: [
        { name: info_materia[0]["Eixo1"], max: 5 },
        { name: info_materia[0]["Eixo2"], max: 5 },
        { name: info_materia[0]["Eixo3"], max: 5 },
        { name: info_materia[0]["Eixo4"], max: 5 },
        { name: info_materia[0]["Eixo5"], max: 5 }
      ],
      center: ["50%", "50%"],
      radius: ["0%", "50%"]
    },
    series: [{
      name: info_materia[0]["Materia"],
      type: 'radar',
      data: [{
        value: valores,
        name: info_materia[0]["Materia"]
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
      for (let i = 1; i <= 3; i++){
        document.getElementById(`grafico${i}`).style.display = 'none';
      }
      for(let i = 0; i < mediasDaTurma.length; i++){
        let valores = [
          mediasDaTurma[i][0],
          mediasDaTurma[i][1],
          mediasDaTurma[i][2],
          mediasDaTurma[i][3],
          mediasDaTurma[i][4]
        ];
        criarGrafico(`grafico${i + 1}`, valores, info_materia[i]["Turma"]);
      }
    }
  })
  .catch(error => {
    console.error('Erro ao obter as médias da turma:', error);
  });

  // Definir tamanho pré-definido para o gráfico (opcional)
  // Isso garante que o gráfico tenha uma dimensão mínima inicial, mas não é necessário para torná-lo responsivo
}
