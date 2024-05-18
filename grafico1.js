var chartDom = document.getElementById('grafico1');
var myChart = echarts.init(chartDom);
var option;
option = {
  title: {
    text: '3A'
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
      { name: 'QUÍMICA GERAL E INORGÂNICA', max: 100 },
      { name: 'QUÍMICA ORGÂNICA', max: 100 },
      { name: 'FÍSICO-QUÍMICA', max: 100 },
      { name: 'QUÍMICA ANALÍTICA', max: 100 },
      { name: 'QUÍMICA AMBIENTAL', max: 100 },
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [42, 30, 70, 35, 50],
          name: 'TADS'
        },
        {
          value: [50, 78, 28, 26, 42],
          name: 'Ensino Médio'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);