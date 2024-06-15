import { materias, topicos } from "/dados_das_turmas.js";

function calcularMedia(dados, respondentes) {

    let somatoria = 0;

    for (let i = 1; i <= 5; i++) {

        somatoria = somatoria + dados[i - 1] * i;

    }

    const media = somatoria / respondentes

    if (media != Infinity) return media

}

function mediasMateria (idMateria, turma) {

    const materia = materias[turma][idMateria]
    const mediasEixos = []
    let i = 0
    while (i < 15) {

        const respondentes = materia[i].reduce((acumulador, atual) => acumulador + atual, 0)
        const mediaQuestão1 = calcularMedia(materia[i], respondentes)
        const mediaQuestão2 = calcularMedia(materia[i + 1], respondentes)
        const mediaQuestão3 = calcularMedia(materia[i + 2], respondentes)

        mediasEixos.push((mediaQuestão1 + mediaQuestão2 + mediaQuestão3) / 3)

        i += 3

    }

    return mediasEixos

}


function drawChart1(idMateria) {

  var chartDom = document.getElementById('grafico1');
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    title: {
      text: '3A INFO'
    },
    legend: {
      data: ['Graficos']
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
            value: mediasMateria(idMateria, '3A'),
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  
}

function drawChart2(idMateria) {

  var chartDom = document.getElementById('grafico2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3B INFO'
    },
    legend: {
      data: ['Graficos']
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
            value: mediasMateria(idMateria, '3B'),
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  
}

function drawChart3(idMateria) {

  var chartDom = document.getElementById('grafico3');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: 'TADS'
    },
    legend: {
      data: ['Graficos']
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
            value: mediasMateria(idMateria, 'TADS'),
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

}

drawChart1('biologia');
drawChart2('biologia');
drawChart3('biologia');

const botoesMaterias = document.getElementsByClassName('botaoMateria')

for (let botao = 0; botao < botoesMaterias.length; botao++) {

  botoesMaterias.item(botao).addEventListener('click', (event) => {

    drawChart1(event.target.id)
    drawChart2(event.target.id)
    drawChart3(event.target.id)

  })

}