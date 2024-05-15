var chartDom = document.getElementById('grafico');

var myChart = echarts.init(chartDom);

var option;

option = {
  title: {
    text: 'Consigo relacionar obras e artistas específicos às suas respectivas vanguardas artísticas?',
    textStyle: {
      fontSize: 14,
    }
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
      { name: 'Indiferente', max: 5 },
      { name: 'Discordo', max: 5 },
      { name: 'Discordo totalmente', max: 5 },
      { name: 'Concordo totalmente', max: 5 },
      { name: 'Concordo', max: 5 },
    ]
  },
  series: [
    {
      name: 'TADS vs Ensino Médio',
      type: 'radar',
      data: [
        {
          value: [3, 4, 2, 1, 5, 1, 5, 4, 3, 4],
          name: 'TADS'
        },
        {
          value: [5, 4, 1, 3, 4, 2, 5, 1, 4, 5],
          name: 'Ensino Médio'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
