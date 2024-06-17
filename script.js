//3A
function createGrafico1(idMateria) {
  
  var chartDom = document.getElementById('grafico_1');
  var myChart = echarts.init(chartDom);
  var option;
  

  option = {
    title: {
      text: '3º A'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']

    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5},
        { name: topicos[idMateria][1], max: 5},
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
            value: calcularMédiasGerais(idMateria, '3A')
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}


// TADS
function createGrafico2(idMateria) {

  var chartDom = document.getElementById('grafico_2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5},
        { name: topicos[idMateria][1], max: 5},
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
            value: calcularMédiasGerais(idMateria, 'TADS')
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}

//3B
function createGrafico3(idMateria) {

  var chartDom = document.getElementById('grafico_3');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3º B'
    },
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: topicos[idMateria][0], max: 5},
        { name: topicos[idMateria][1], max: 5},
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
            value: calcularMédiasGerais(idMateria, '3B')
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}

createGrafico1('literatura');
createGrafico2('literatura');
createGrafico3('literatura');

const botoesMat = document.getElementsByClassName('botaoMat')

for (let b = 0; b < botoesMat.length; b++) {

  botoesMat.item(b).addEventListener('click', (event) => {

    createGrafico1(event.target.id)
    createGrafico2(event.target.id)
    createGrafico3(event.target.id)

  })

}