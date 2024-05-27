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
      name: 'Sociologia',
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
      name: 'Sociologia',
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
      name: 'Sociologia',
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

export { graph_3b, graph_3a, graph_tads }
