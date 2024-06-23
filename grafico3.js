var chartDom = document.getElementById('grafico3');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
      text: '3B',
      top: '3%',
  },
  legend: {
      data: ['TADS', 'ENSINO MEDIO']
  },
  radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: 100,
      indicator: [
          { name: 'QUESTÃO 1', max: 5 },
          { name: 'QUESTÃO 2', max: 5 },
          { name: 'QUESTÃO 3', max: 5 },
          { name: 'QUESTÃO 4', max: 5 },
          { name: 'QUESTÃO 5', max: 5 },
      ]
  },
  series: [
      {
          name: 'Nível de Competência',
          type: 'radar',
          data: [
              {
                  value: [4, 4, 3, 4, 5],
                  name: 'TADS'
              },
              {
                  value: [1, 2, 1, 5, 5],
                  name: 'ENSINO MEDIO'
              },
          ]
      }
  ]
};

option && myChart.setOption(option);