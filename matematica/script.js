import { mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5 }from '/calc.js';  
function drawGrafico1 () {

  var chartDom = document.getElementById('graph1');
  var myChart = echarts.init(chartDom);
  var option;
    

  option = {
    title: {
      text: '3º A'
    },
    legend: {
      data: ['ensino médio','Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'ÉTICA E USO', max: 5 },
        { name: 'SIIC', max: 5 },
        { name: 'REIC', max: 5 },
        { name: 'IST', max: 5 },
        { name: 'ANTTIMT', max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5],
            name: 'ensino médio'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}

function drawGrafico2 () {

  var chartDom = document.getElementById('graph2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3º B'
    },
    legend: {
      data: ['ensino médio','Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'ÉTICA E USO', max: 5 },
        { name: 'SIIC', max: 5 },
        { name: 'REIC', max: 5 },
        { name: 'IST', max: 5 },
        { name: 'ANTTIMT', max: 5 }
       
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [1, 2, 3, 4, 5],
            name: 'ensino médio'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}

function drawGrafico3 () {

  var chartDom = document.getElementById('graph3');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },
    legend: {
      data: ['ensino médio','Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'ÉTICA E USO', max: 5 },
        { name: 'SIIC', max: 5 },
        { name: 'REIC', max: 5 },
        { name: 'IST', max: 5 },
        { name: 'ANTTIMT', max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [1, 2, 3, 4, 5],
            name: 'ensino médio'
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
