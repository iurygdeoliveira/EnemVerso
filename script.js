import { topicos } from "/dados/data.js";
import { dadosMateria } from "/dados/dadosMateria.js";

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
            value: dadosMateria(idMateria, '3B'),
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
            value: dadosMateria(idMateria, '3A'),
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
            value: dadosMateria(idMateria, 'TADS'),
            name: 'Allocated Budget'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}

drawGrafico1('linguaPortuguesa')
drawGrafico2('linguaPortuguesa')
drawGrafico3('linguaPortuguesa')

const botsMateria = document.getElementsByClassName('navButton')

for (let b = 0; b < botsMateria.length; b++) {

  botsMateria.item(b).addEventListener('click', (event) => {

    drawGrafico1(event.target.id)
    drawGrafico2(event.target.id)
    drawGrafico3(event.target.id)

  })

}