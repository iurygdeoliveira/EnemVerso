var chartDom = document.getElementById('grafico03');

var myChart = echarts.init(chartDom);

var option;

option = {
  title: {
    text: '3B'
  },
  legend: {
    data: ['TADS', 'Ensino Médio'],
    bottom: 0
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
      name: 'TADS vs Ensino Médio',
      type: 'radar',
      data: [
        {
          value: [3, 4, 2, 3, 5],
          name: 'TADS'
        },
        {
          value: [5, 4, 5, 3, 4],
          name: 'Ensino Médio'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
