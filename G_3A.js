var chartDom2 = document.getElementById('G_3A');
var myChart2 = echarts.init(chartDom2);
var option2;
option2 = {
  title: {
    text: '3°A',
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

option2 && myChart2.setOption(option2);