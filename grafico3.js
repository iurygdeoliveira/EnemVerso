var chartDom3 = document.getElementById('grafico3');
var myChart3 = echarts.init(chartDom3);
var option3;
option3 = {
  title: {
    text: '3°B',
    left: 115
  },
  legend: {
    data: ['Estudou', 'Não Estudou'],
    top: 25
  },
  radar: {
    shape: 'circle',
    center: ['50%', '50%'],
    radius: 85,
    indicator: [
      { name: 'Anatomia', max: 100 },
      { name: 'Genética', max: 100 },
      { name: 'Evolução', max: 100 },
      { name: 'Botânica', max: 100 },
      { name: 'Zoologia', max: 100 },
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [42, 30, 20, 35, 50],
          name: 'Estudou'
        },
        {
          value: [50, 14, 28, 26, 42],
          name: 'Não Estudou'
        }
      ]
    }
  ]
};
option3 && myChart3.setOption(option3);