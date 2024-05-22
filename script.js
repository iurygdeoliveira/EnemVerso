function drawChart1() {

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
        { name: 'Eixo1', max: 6500 },
        { name: 'Eixo2', max: 16000 },
        { name: 'Eixo3', max: 30000 },
        { name: 'Eixo4', max: 38000 },
        { name: 'Eixo5', max: 52000 },
        { name: 'Eixo6', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  
}
function drawChart2() {

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
        { name: 'Eixo1', max: 6500 },
        { name: 'Eixo2', max: 16000 },
        { name: 'Eixo3', max: 30000 },
        { name: 'Eixo4', max: 38000 },
        { name: 'Eixo5', max: 52000 },
        { name: 'Eixo6', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4000, 17000, 30000, 10000, 40000, 20000],
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  
}

function drawChart3() {

  var chartDom = document.getElementById('grafico3');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: '3C INFO'
    },
    legend: {
      data: ['Graficos']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Eixo1', max: 6500 },
        { name: 'Eixo2', max: 16000 },
        { name: 'Eixo3', max: 30000 },
        { name: 'Eixo4', max: 38000 },
        { name: 'Eixo5', max: 52000 },
        { name: 'Eixo6', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4000, 17000, 30000, 10000, 40000, 20000],
            name: 'Graficos'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);


}


drawChart1();
drawChart2();
drawChart3();