function gerarGrafico(
  nomeGrafico,
  eixo1,
  eixo2,
  eixo3,
  eixo4,
  eixo5,
  disciplina,
  media1,
  media2,
  media3,
  media4,
  media5) {

  var chartDom = document.getElementById(nomeGrafico);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {},
    title: {
      text: disciplina
    },
    legend: {
      data: ['TADS', 'Ensino Médio'],
      bottom: 0
    },
    radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: 100,
      indicator: [
        { name: eixo1, max: 5 },
        { name: eixo2, max: 5 },
        { name: eixo3, max: 5 },
        { name: eixo4, max: 5 },
        { name: eixo5, max: 5 },
      ]
    },
    series: [
      {
        name: disciplina,
        type: 'radar',
        data: [
          {
            value: [media1, media2, media3, media4, media5],
            name: 'Ensino Médio'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

