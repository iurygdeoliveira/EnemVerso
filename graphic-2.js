var chartDom = document.getElementById('graphic-2');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: ''
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    shape: 'circle',
    indicator: [
      { name: 'Questão 1', max: 821743500 },
      { name: 'Questão 2', max: 16000 },
      { name: 'Questão 3', max: 30000 },
      { name: 'Questão 4', max: 38000 },
      { name: 'Questão 5', max: 52000 },
      { name: 'Questão 6', max: 25000 },
      { name: 'Questão 7', max: 6500 },
      { name: 'Questão 8', max: 16000 },
      { name: 'Questão 9', max: 30000 },
      { name: 'Questão 10', max: 38000 },
      { name: 'Questão 11', max: 52000 },
      { name: 'Questão 12', max: 25000 },
      { name: 'Questão 13', max: 38000 },
      { name: 'Questão 14', max: 52000 },
      { name: 'Questão 15', max: 65000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000, 4200, 3000, 20000, 35000, 50000, 18000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000, 5000, 14000, 28000, 26000, 42000, 21000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};

option && myChart.setOption(option);
