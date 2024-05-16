var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    text: 'Física'
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
      { name: 'Eletrodinâmica', max: 100 },
      { name: 'Termologia', max: 100 },
      { name: 'Ondulatório', max: 100 },
      { name: 'Cinemática', max: 100 },
      { name: 'Óptica', max: 100 },
    ]
  },
  series: [
    {
      name: 'TADS vs Ensino Médio',
      type: 'radar',
      data: [
        {
          value: [42, 30, 20, 35, 50],
          name: 'TADS'
        },
        {
          value: [50, 14, 28, 26, 42],
          name: 'Ensino Médio'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
