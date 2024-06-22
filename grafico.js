function gerarGrafico(
  nomeGrafico,
  eixo1,
  eixo2,
  eixo3,
  eixo4,
  eixo5,
  disciplina,
  media1,
  media2,
  media3,
  media4,
  media5
) {
  var chartDom = document.getElementById(nomeGrafico);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {},
    title: {
      text: disciplina,
    },
    legend: {
      data: ["TADS", "3A", "3B"],
      bottom: 0,
    },
    toolbox: {
      feature: {
        saveAsImage: {
          show: true,
          title: "Salvar Imagem",
        },
        restore: {
          show: true,
          title: "Restaurar",
        },
        dataZoom: {
          show: true,
          title: {
            zoom: "Zoom",
            back: "Restaurar Zoom",
          },
        },
        dataView: {
          show: true,
          title: "Ver Dados",
          readOnly: true,
        },
      },
    },
    dataZoom: {
      show: true,
      start: 0,
      end: 100,
    },
    radar: {
      shape: "circle",
      center: ["50%", "50%"],
      radius: 100,
      indicator: [
        { name: eixo1, max: 100 },
        { name: eixo2, max: 100 },
        { name: eixo3, max: 100 },
        { name: eixo4, max: 100 },
        { name: eixo5, max: 100 },
      ],
    },
    series: [
      {
        name: "TADS vs MIKE",
        type: "radar",
        data: [
          {
            value: [62, 50, 40, 55, 70],
            name: "TADS",
            itemStyle: {
              color: "#5470c6",
            },
          },
          {
            value: [40, 84, 48, 46, 62],
            name: "3A",
            itemStyle: {
              color: "#fac858",
            },
          },
          {
            value: [80, 44, 48, 46, 62],
            name: "3B",
            itemStyle: {
              color: "#ee6666",
            },
          },
        ],
      },
    ],
    color: ["#5470c6", "#91cc75", "#fac858", "#ee6666"],
  };

  myChart.setOption(option);

  chartDom.addEventListener("dblclick", function (params) {
    myChart.dispatchAction({
      type: "takeGlobalCursor",
      key: "dataZoomSelect",
      dataZoomSelectActive: true,
    });
  });
}
