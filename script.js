function drawGrafico1 () {

  var chartDom = document.getElementById('grafico_3b');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'Gráfico 3B'
    },
    legend: {
      data: ['', '']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Contemporânea', max: 6500 },
        { name: 'Vanguardas Artísticas Europeias', max: 16000 },
        { name: 'Modernismo', max: 30000 },
        { name: 'História da Arte', max: 38000 },
        { name: 'Arte Africana', max: 52000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico2 () {

  var chartDom = document.getElementById('grafico_3a');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'Gráfico 3A'
    },
    legend: {
      data: ['', '']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Contemporânea', max: 6500 },
        { name: 'Vanguardas Artísticas Europeias', max: 16000 },
        { name: 'Modernismo', max: 30000 },
        { name: 'História da Arte', max: 38000 },
        { name: 'Arte Africana', max: 52000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico3 () {

  var chartDom = document.getElementById('grafico_tads');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'Gráfico TADS'
    },
    legend: {
      data: ['', '']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Contemporânea', max: 6500 },
        { name: 'Vanguardas Artísticas Europeias', max: 16000 },
        { name: 'Modernismo', max: 30000 },
        { name: 'História da Arte', max: 38000 },
        { name: 'Arte Africana', max: 52000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

drawGrafico1()
drawGrafico2()
drawGrafico3()