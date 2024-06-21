import {obterTodasMedias} from "./Dados_Biologia.js"

inicializarGraficos();

function inicializarGraficos() {
  obterTodasMedias().then(data => {
    inicializarGrafico("graficoTads", "TADS", data["tads"]);
    inicializarGrafico("grafico3A", "3A", data["3A"]);
    inicializarGrafico("grafico3B", "3B", data["3B"]);
  }); 
}

function inicializarGrafico(id, titulo, dados) {
  var chartDom = document.getElementById(id);

  var myChart = echarts.init(chartDom);
  
  var option;
  
  option = {
    title: {
      text: titulo,
    },
    radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: 100,
      axisName: {
        color: "black",
      },
      indicator: [
        { name: 'Biologia Celular e Molecular', max: 5 },
        { name: 'Ecologia e Meio Ambiente', max: 5 },
        { name: 'Genética e Evolução', max: 5 },
        { name: 'Anatomia e Fisiologia Humana', max: 5 },
        { name: 'Química Ambiental', max: 5 },
      ]
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [
              dados["bioCelularMolecular"],
              dados["ecoMeioAmbiente"],
              dados["geneticaEvolucao"],
              dados["anatomiaFisioHumana"],
              dados["quimicaAmbiental"],
            ],
            name: titulo,
          }
        ]
      }
    ]
  };
  
  option && myChart.setOption(option);
}