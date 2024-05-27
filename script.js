function drawGrafico1 () {

  var chartDom = document.getElementById('grafico_3b');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3 A informática'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'INTERPRETAÇÃO DE TEXTO', max: 6500 },
        { name: 'CONHECIMENTO GRAMATICAL BÁSICO ', max: 16000 },
        { name: 'TEMPOS VERBAIS', max: 30000 },
        { name: 'VOZ PASSIVA', max: 38000 },
        { name: 'CONECTIVOS E ADJUNTOS ADVERBIAIS', max: 52000 },

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
      text: '3 B informática'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
      { name: 'INTERPRETAÇÃO DE TEXTO', max: 6500 },
      { name: 'CONHECIMENTO GRAMATICAL BÁSICO ', max: 16000 },
      { name: 'TEMPOS VERBAIS', max: 30000 },
      { name: 'VOZ PASSIVA', max: 38000 },
      { name: 'CONECTIVOS E ADJUNTOS ADVERBIAIS', max: 52000 },
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
      text: 'Tads'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'INTERPRETAÇÃO DE TEXTO', max: 6500 },
        { name: 'CONHECIMENTO GRAMATICAL BÁSICO ', max: 16000 },
        { name: 'TEMPOS VERBAIS', max: 30000 },
        { name: 'VOZ PASSIVA', max: 38000 },
        { name: 'CONECTIVOS E ADJUNTOS ADVERBIAIS', max: 52000 },
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

