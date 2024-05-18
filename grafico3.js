var myChart3 = echarts.init(document.getElementById('grafico3'));

option3 = {
  title: {
    text: 'Inglês - 3B',
    bottom: 0
  },
    legend: {
      data: ['Estrura Inglês', 'Voz passiva e ativa', 'Tempos verbais']
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
          name: 'Estrura Inglês'
        },
        {
          value: [40, 44, 48, 46, 62],
          name: 'Voz passiva e ativa'
        },
        {
          value: [40, 74, 38, 56, 62],
          name: 'Tempos verbais'
        }
      ]
    }
  ]
};

option3 && myChart3.setOption(option3);