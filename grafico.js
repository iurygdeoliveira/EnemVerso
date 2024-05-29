var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);
var option;

function updateChartLayout() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var layout;

  if (screenWidth > 600) {
    layout = {
      radar: [
        { center: ['20%', '50%'], radius: 80 },
        { center: ['50%', '50%'], radius: 80 },
        { center: ['80%', '50%'], radius: 80 }
      ]
    };
  } else {
    layout = {
      radar: [
        { center: ['50%', '20%'], radius: 80 },
        { center: ['50%', '50%'], radius: 80 },
        { center: ['50%', '80%'], radius: 80 }
      ]
    };
  }

  myChart.setOption(layout, true);
}

option = {
    color: ['#f5ed23', '#23f5ed', '#ed23f5'],
      legend: {
        data: ['3° ano A', '3° ano B', '3° Biotec']
  },
  radar: [
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
      ],
      radius: 80,
       center: ['20%', '50%'],
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      }
    },
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
      ],
      radius: 80,
      center: ['50%', '50%'],
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      }
    },
    {
      indicator: [
        { text: 'Português', max: 100 },
        { text: 'Matemática', max: 100 },
        { text: 'Física', max: 100 },
        { text: 'Química', max: 100 },
        { text: 'Biologia', max: 100 },
        { text: 'História', max: 100 },
      ],
      radius: 80,
       center: ['80%', '50%'],
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4'
      }
    }
  ],
  series: [
    {
      name: '3° ano A',
      type: 'radar',
      radarIndex: 0,
      data: [
        {
          value: [48, 92, 53, 96, 25, 72],
          name: '3° ano A',
        }
      ]
    },
    {
      name: '3° ano B',
      type: 'radar',
      radarIndex: 1,
      data: [
        {
          value: [48, 92, 53, 96, 25, 72],
          name: '3° ano B',
        }
      ]
    },
    {
      name: '3° Biotec',
      type: 'radar',
      radarIndex: 2,
      data: [
        {
          value: [48, 92, 53, 96, 25, 72],
          name: '3°  Biotec',
        }
      ]
    }
  ]
};

myChart.setOption(option);
