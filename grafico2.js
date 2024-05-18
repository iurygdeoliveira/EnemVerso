var myChart2 = echarts.init(document.getElementById('grafico2'));

option2 = {
  title: {
    text: 'Filosofia - 3A',
    bottom: 0
  },
    legend: {
      data: ['Filosofos', 'Conceitos', 'Ética e Moral']
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
          name: 'Filosofos'
        },
        {
          value: [40, 44, 40, 55, 70],
          name: 'Conceitos'
        },
        {
          value: [40, 44, 48, 46, 62],
          name: 'Ética e Moral'
        }
      ]
    }
  ]
};

option2 && myChart2.setOption(option2);
