  var chartDom = document.getElementById('grafico');
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    title: {
      text: 'Espanhol - TADS',
      bottom: 0
    },
    legend: {
      data: ['Interpretação Texto', 'Diversidade Linguistica', 'Conjunções']
    },
    radar: {
      shape: 'circle',
      center: ['50%', '50%'],
      radius: 100,
      indicator: [
        { name: 'Entendo', max: 100 },
        { name: 'Discutivel', max: 100 },
        { name: 'Conhecido', max: 100 },
        { name: 'Complicado', max: 100 },
        { name: 'Não conheço', max: 100 },
      ]
    },
    series: [
      {
        name: 'TADS vs 3',
        type: 'radar',
        data: [
          {
            value: [62, 50, 40, 55, 70],
            name: 'Interpretação Texto'
          },
          {
            value: [40, 44, 48, 46, 62],
            name: 'Diversidade Linguistica'
          },
          {
            value: [40, 44, 38, 56, 62],
            name: 'Conjunções'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
