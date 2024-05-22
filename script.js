
const graph_3b = {
  title: {
    text: '3º B'
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 100 },
      { name: 'Administration', max: 100 },
      { name: 'Information Technology', max: 100 },
      { name: 'Customer Support', max: 100 },
      { name: 'Development', max: 100 },
      { name: 'Marketing', max: 100 }
    ]
  },
  series: [
    {
      name: 'Inglês',
      type: 'radar',
      data: [
        {
          value: [100, 99, 80, 78, 90, 85],
          name: 'Allocated Budget'
        }
      ]
    }
  ]
}

const graph_3a = {

  title: {
    text: '3º A'
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 100 },
      { name: 'Administration', max: 100 },
      { name: 'Information Technology', max: 100 },
      { name: 'Customer Support', max: 100 },
      { name: 'Development', max: 100 },
      { name: 'Marketing', max: 100 }
    ]
  },
  series: [
    {
      name: 'Inglês',
      type: 'radar',
      data: [
        {
          value: [80, 70, 75, 68, 50, 65],
          name: 'Allocated Budget'
        }
      ]
    }
  ]

}

const graph_tads = {

  title: {
    text: 'TADS'
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Sales', max: 100 },
      { name: 'Administration', max: 100 },
      { name: 'Information Technology', max: 100 },
      { name: 'Customer Support', max: 100 },
      { name: 'Development', max: 100 },
      { name: 'Marketing', max: 100 }
    ]
  },
  series: [
    {
      name: 'Inglês',
      type: 'radar',
      data: [
        {
          value: [85, 79, 75, 80, 62, 70],
          name: 'Allocated Budget'
        }
      ]
    }
  ]

}


const div1 = document.getElementById('grafico_3b')
const div2 = document.getElementById('grafico_3a')
const div3 = document.getElementById('grafico_tads')

const graph1 = echarts.init(div1)
const graph2 = echarts.init(div2)
const graph3 = echarts.init(div3)

graph1.setOption(graph_3b)
graph2.setOption(graph_3a)
graph3.setOption(graph_tads)