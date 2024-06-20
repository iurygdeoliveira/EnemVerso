import {obterTodasMedias} from "./fisica_dados.js"

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
        { name: 'Eletrodinâmica', max: 5 },
        { name: 'Termologia', max: 5 },
        { name: 'Ondulatoria', max: 5 },
        { name: 'Cinemática', max: 5 },
        { name: 'Óptica', max: 5 },
      ]
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [
              dados["eletrodinamica"],
              dados["termologia"],
              dados["ondulatoria"],
              dados["cinematica"],
              dados["optica"],
            ],
            name: titulo,
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}