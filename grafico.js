  var chartDom = document.getElementById('grafico');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    title: {
      text: 'Basic Radar Chart'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: 100,
      indicator: [
        { name: 'Eixo 1', max: 100 },
        { name: 'Eixo 2', max: 100 },
        { name: 'Eixo 3', max: 100 },
        { name: 'Eixo 4', max: 100 },
        { name: 'Eixo 5', max: 100 },
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [42, 30, 20, 35, 50],
            name: 'Allocated Budget'
          },
          {
            value: [50, 14, 28, 26, 42],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
