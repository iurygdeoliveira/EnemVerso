var chartDom = document.getElementById('graphic-ads');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'ADS'
  },
  radar: {
    shape: 'circle',
    indicator: [
      { name: 'Quimica Inorganica', max: 16000 },
      { name: 'Quimica Organica', max: 16000 },
      { name: 'Fisico-Quimica', max: 30000 },
      { name: 'Quimica Analitica', max: 38000 },
      { name: 'Bioquimica', max: 38000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [Math.random() * 12000, Math.random() * 12000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000],
          name: 'Allocated Budget'
        },
        {
          value: [Math.random() * 10999, Math.random() * 10999, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);