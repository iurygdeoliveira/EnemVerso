import {obterTodasMedias} from "./js/artes_github_data_service.js"

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
        color: "black"
      },
      indicator: [
        { name: 'Arte Contemporânea', max: 5 },
        { name: 'Vanguardas Artísticas Europeias', max: 5 },
        { name: 'Modernismo', max: 5 },
        { name: 'História da Arte e Outros Assuntos', max: 5 },
        { name: 'Arte de Origem Africana no Brasil e Tradições Indígenas', max: 5 },
      ]
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: [
              dados["arteContemporanea"],
              dados["vanguardasArtisticasEuropeias"],
              dados["modernismo"],
              dados["historiaArte"],
              dados["arteBrasil"],
            ],
            name: titulo,
          }
        ]
      }
    ]
  };
  
  option && myChart.setOption(option);
}
