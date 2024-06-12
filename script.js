import { topicos } from "./data.js";
import { dadosMateria } from "./dadosMateria.js";

function drawGrafico1 (idMateria) {

  var chartDom = document.getElementById('grafico_3b');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3º B'
    },

    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5 },
        { name: topicos[idMateria][1], max: 5 },
        { name: topicos[idMateria][2], max: 5 },
        { name: topicos[idMateria][3], max: 5 },
        { name: topicos[idMateria][4], max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [2, 3, 5, 2, 4, 4],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico2 (idMateria) {

  var chartDom = document.getElementById('grafico_3a');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3º A'
    },

    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5 },
        { name: topicos[idMateria][1], max: 5 },
        { name: topicos[idMateria][2], max: 5 },
        { name: topicos[idMateria][3], max: 5 },
        { name: topicos[idMateria][4], max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: dadosMateria(idMateria),
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

function drawGrafico3 (idMateria) {

  var chartDom = document.getElementById('grafico_tads');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },

    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5 },
        { name: topicos[idMateria][1], max: 5 },
        { name: topicos[idMateria][2], max: 5 },
        { name: topicos[idMateria][3], max: 5 },
        { name: topicos[idMateria][4], max: 5 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [2, 3, 5, 2, 4, 4],
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

drawGrafico1('literatura')
drawGrafico2('literatura')
drawGrafico3('literatura')

const botsMateria = document.getElementsByClassName('butMateria')

for (let b = 0; b < botsMateria.length; b++) {

  botsMateria.item(b).addEventListener('click', (event) => {

    drawGrafico2(event.target.id)

  })

}