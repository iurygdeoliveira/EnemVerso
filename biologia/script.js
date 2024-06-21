import { mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5 } from './calcGraficos.js';

function drawGrafico1 () {

  var chartDom = document.getElementById('graph1');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3 ano A'
    },
    legend: {
      data: ['ensino medio', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'biologia celular e molecular', max: 5 },
        { name: 'ecologia e meio ambiente', max: 5 },
        { name: 'funções genética e evolução', max: 5 },
        { name: 'anatomia e fisiologia humana', max: 5 },
        { name: 'química ambiental', max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5],
            name: 'ensino medio'
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
      text: '3 ano B'
    },
    legend: {
      data: ['ensino medio', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'ÁLGEBRA', max: 5 },
        { name: 'GEOMETRIA', max: 5 },
        { name: 'FUNÇÕES E ANÁLISE GRÁFICA', max: 5 },
        { name: 'ESTATÍSTICA E PROBABILIDADE', max: 5 },
        { name: 'MATEMÁTICA FINANCEIRA', max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [5, 5, 2, 3, 3, 4],
            name: 'ensino medio'
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
      text: '3 ano C'
    },
    legend: {
      data: ['ensino medio', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'ÁLGEBRA', max: 5 },
        { name: 'GEOMETRIA', max: 5 },
        { name: 'FUNÇÕES E ANÁLISE GRÁFICA', max: 5 },
        { name: 'ESTATÍSTICA E PROBABILIDADE', max: 5 },
        { name: 'MATEMÁTICA FINANCEIRA', max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [2, 3, 5, 3, 3, 4],
            name: 'ensino medio'
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
