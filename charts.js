var currentCharts = [];

document.addEventListener("DOMContentLoaded", function () {
    var radarDataArtesTADS = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Artes',
                data: [5, 18, 20, 10, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    };

    var radarDataArtes3A = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Artes',
                data: [12, 18, 8, 16, 22],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    };

    var radarDataArtes3B = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Artes',
                data: [15, 18, 20, 30, 10],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    };
  var radarDataBiologiaTADS = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Biologia',
              data: [15, 5, 30, 10, 25],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
          }
      ]
  };

  var radarDataBiologia3A = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Biologia',
              data: [16, 10, 5, 16, 25],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
          }
      ]
  };

  var radarDataBiologia3B = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Biologia',
              data: [15, 5, 20, 10, 15],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
          }
      ]
  };

  var radarDataEducacaoFisicaTADS = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Educação Física',
              data: [15, 25, 10, 30, 25],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
          }
      ]
  };
  var radarDataEducacaoFisica3A = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Educação Física',
              data: [15, 20, 30, 10, 25],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
          }
      ]
  };var radarDataEducacaoFisica3B = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
              label: 'Educação Física',
              data: [10, 10, 5, 35, 20],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
          }
      ]
  };
  var radarDataEspanholTADS = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
            label: 'Espanho',
            data: [10, 10, 5, 35, 20],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: 'rgba(255, 206, 86, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 206, 86, 1)'

          }
      ]
  };var radarDataEspanhol3A = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
            label: 'Espanho',
            data: [16, 10, 5, 16, 25],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: 'rgba(255, 206, 86, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 206, 86, 1)'

          }
      ]
  };var radarDataEspanhol3B = {
      labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
      datasets: [
          {
            label: 'Espanho',
            data: [10, 10, 5, 35, 20],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: 'rgba(255, 206, 86, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 206, 86, 1)'

          }
      ]
  };
    var radarDataFilosofiaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Filosofia',
                      data: [10, 15, 20, 25, 30],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 99, 132, 1)'

              }
          ]
      };
    var radarDataFilosofia3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Filosofia',
                      data:[20, 30, 5, 25, 30],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 99, 132, 1)'

              }
          ]
      };
    var radarDataFilosofia3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Filosofia',
                      data: [5, 10, 20, 25, 30],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 99, 132, 1)'

              }
          ]
      };
    var radarDataFisicaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Física',
                  data: [5, 10, 30, 25, 30],
                      backgroundColor: 'rgba(255, 159, 64, 0.2)',
                      borderColor: 'rgba(255, 159, 64, 1)',
                      pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 159, 64, 1)'

              }
          ]
      }; var radarDataFisica3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Física',
                  data: [30, 15, 20, 25, 20],
                      backgroundColor: 'rgba(255, 159, 64, 0.2)',
                      borderColor: 'rgba(255, 159, 64, 1)',
                      pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 159, 64, 1)'


              }
          ]
      };
    var radarDataFisica3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Física',
                  data: [5, 11, 20, 25, 30],
                      backgroundColor: 'rgba(255, 159, 64, 0.2)',
                      borderColor: 'rgba(255, 159, 64, 1)',
                      pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 159, 64, 1)'


              }
          ]
      };
    var radarDataGeografiaTADS = {
          labels: ['Eixo 01', 'Eixo 02', 'Eixo 03', 'Eixo 04', 'Eixo 05'],
          datasets: [
              {
                  label: 'Geografia',
                      data: [3, 3, 3, 3, 4],
                      backgroundColor: 'rgba(144, 238, 144, 0.2)',
                      borderColor: 'rgba(144, 238, 144, 1)',
                      pointBackgroundColor: 'rgba(144, 238, 144, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(144, 238, 144, 1)'


              }
          ]
      };var radarDataGeografia3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Geografia',
                      data: [15, 15, 15, 15, 15],
                      backgroundColor: 'rgba(144, 238, 144, 0.2)',
                      borderColor: 'rgba(144, 238, 144, 1)',
                      pointBackgroundColor: 'rgba(144, 238, 144, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(144, 238, 144, 1)'



              }
          ]
      };var radarDataGeografia3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Geografia',
            data: [5, 10, 25, 30, 30],
            backgroundColor: 'rgba(144, 238, 144, 0.2)',
            borderColor: 'rgba(144, 238, 144, 1)',
            pointBackgroundColor: 'rgba(144, 238, 144, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(144, 238, 144, 1)'



              }
          ]
      };
    var radarDataHistoriaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                label: 'Historia',
                data: [17, 8, 24, 29, 13],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)'




              }
          ]
      };var radarDataHistoria3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
            label: 'Historia',
            data: [25, 10, 21, 30, 16],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 192, 192, 1)'

              }
          ]
      };var radarDataHistoria3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Historia',
            data: [11, 28, 5, 23, 19],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 192, 192, 1)'


              }
          ]
      };
    var radarDataInglesTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Ingles',
            data: [7, 21, 14, 27, 18],
                  backgroundColor: 'rgba(46, 139, 87, 0.2)',
                      borderColor: 'rgba(46, 139, 87, 1)',
                      pointBackgroundColor: 'rgba(46, 139, 87, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(46, 139, 87, 1)'


              }
          ]
      };
    var radarDataIngles3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Ingles',
            data: [30, 9, 19, 11, 25],
                  backgroundColor: 'rgba(46, 139, 87, 0.2)',
                      borderColor: 'rgba(46, 139, 87, 1)',
                      pointBackgroundColor: 'rgba(46, 139, 87, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(46, 139, 87, 1)'





              }
          ]
      }; var radarDataIngles3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Ingles',
            data: [12, 28, 6, 24, 20],
                  backgroundColor: 'rgba(46, 139, 87, 0.2)',
                      borderColor: 'rgba(46, 139, 87, 1)',
                      pointBackgroundColor: 'rgba(46, 139, 87, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(46, 139, 87, 1)'


              }
          ]
      };
    var radarDataLinguaportuguesaTADS = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Linguaportuguesa',
                data: [7, 21, 14, 27, 18],
                    backgroundColor: 'rgba(0, 51, 102, 0.2)',
                    borderColor: 'rgba(0, 51, 102, 1)',
                    pointBackgroundColor: 'rgba(0, 51, 102, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 51, 102, 1)'

            }
        ]
    };

    var radarDataLinguaportuguesa3A = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Linguaportuguesa',
                data: [20, 25, 30, 35, 40],
                    backgroundColor: 'rgba(0, 51, 102, 0.2)',
                    borderColor: 'rgba(0, 51, 102, 1)',
                    pointBackgroundColor: 'rgba(0, 51, 102, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 51, 102, 1)'

            }
        ]
    };

    var radarDataLinguaportuguesa3B = {
        labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
        datasets: [
            {
                label: 'Linguaportuguesa',
                data: [12, 28, 6, 24, 20],
                    backgroundColor: 'rgba(0, 51, 102, 0.2)',
                    borderColor: 'rgba(0, 51, 102, 1)',
                    pointBackgroundColor: 'rgba(0, 51, 102, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 51, 102, 1)'

            }
        ]
    };
   
    var radarDataLiteraturaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Literatura',
            data: [10, 15, 20, 25, 30],
                  backgroundColor: 'rgba(153, 50, 204, 0.2)',
                      borderColor: 'rgba(153, 50, 204, 1)',
                      pointBackgroundColor: 'rgba(153, 50, 204, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(153, 50, 204, 1)'



              }
          ]
      };
    var radarDataLiteratura3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Literatura',
            data: [12, 28, 6, 24, 20],
                  backgroundColor: 'rgba(153, 50, 204, 0.2)',
                      borderColor: 'rgba(153, 50, 204, 1)',
                      pointBackgroundColor: 'rgba(153, 50, 204, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(153, 50, 204, 1)'



              }
          ]
      };var radarDataLiteratura3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Literatura',
            data: [12, 10, 6, 24, 25],
                  backgroundColor: 'rgba(153, 50, 204, 0.2)',
                      borderColor: 'rgba(153, 50, 204, 1)',
                      pointBackgroundColor: 'rgba(153, 50, 204, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(153, 50, 204, 1)'



              }
          ]
      };
    var radarDataMatematicaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Matematica',
                  data: [10, 5, 40, 15, 30],
                      backgroundColor: 'rgba(139, 0, 0, 0.2)',
                      borderColor: 'rgba(139, 0, 0, 1)',
                      pointBackgroundColor: 'rgba(139, 0, 0, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(139, 0, 0, 1)'

              }
          ]
      };
    var radarDataMatematica3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Matematica',
                  data: [20, 15, 40, 15, 30],
                      backgroundColor: 'rgba(139, 0, 0, 0.2)',
                      borderColor: 'rgba(139, 0, 0, 1)',
                      pointBackgroundColor: 'rgba(139, 0, 0, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(139, 0, 0, 1)'

              }
          ]
      };var radarDataMatematica3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                   label: 'Matematica',
                  data: [10, 5, 20, 10, 35],
                      backgroundColor: 'rgba(139, 0, 0, 0.2)',
                      borderColor: 'rgba(139, 0, 0, 1)',
                      pointBackgroundColor: 'rgba(139, 0, 0, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(139, 0, 0, 1)'

              }
          ]
      };
    var radarDataQuimicaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Química',
                      data: [25, 10, 5, 30, 10],
                      backgroundColor: 'rgba(75, 0, 130, 0.2)',
                      borderColor: 'rgba(75, 0, 130, 1)',
                      pointBackgroundColor: 'rgba(75, 0, 130, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 0, 130, 1)'





              }
          ]
      };
    var radarDataQuimica3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {label: 'Química',
                      data: [30, 35, 40, 45, 30],
                      backgroundColor: 'rgba(75, 0, 130, 0.2)',
                      borderColor: 'rgba(75, 0, 130, 1)',
                      pointBackgroundColor: 'rgba(75, 0, 130, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 0, 130, 1)'

              }
          ]
      };
    var radarDataQuimica3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Química',
                      data: [10, 35, 15, 5, 20],
                      backgroundColor: 'rgba(75, 0, 130, 0.2)',
                      borderColor: 'rgba(75, 0, 130, 1)',
                      pointBackgroundColor: 'rgba(75, 0, 130, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(75, 0, 130, 1)'

              }
          ]
      };
    var radarDataSociologiaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Sociologia',
                  data: [12, 28, 6, 24, 20],
                      backgroundColor: 'rgba(255, 140, 0, 0.2)',
                      borderColor: 'rgba(255, 140, 0, 1)',
                      pointBackgroundColor: 'rgba(255, 140, 0, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 140, 0, 1)'

              }
          ]
      };
    var radarDataSociologia3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {label: 'Sociologia',
                   data: [30, 35, 40, 45, 50],
                   backgroundColor: 'rgba(255, 140, 0, 0.2)',
                   borderColor: 'rgba(255, 140, 0, 1)',
                   pointBackgroundColor: 'rgba(255, 140, 0, 1)',
                   pointBorderColor: '#fff',
                   pointHoverBackgroundColor: '#fff',
                   pointHoverBorderColor: 'rgba(255, 140, 0, 1)'

              }
          ]
      };
    var radarDataSociologia3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Sociologia',
                  data: [20, 30, 15, 25, 10],
                      backgroundColor: 'rgba(255, 140, 0, 0.2)',
                      borderColor: 'rgba(255, 140, 0, 1)',
                      pointBackgroundColor: 'rgba(255, 140, 0, 1)',
                      pointBorderColor: '#fff',
                      pointHoverBackgroundColor: '#fff',
                      pointHoverBorderColor: 'rgba(255, 140, 0, 1)'


              }
          ]
      };
    var radarDataTecnologiaTADS = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Sociologia',
                  data: [7, 21, 14, 27, 18],
                  backgroundColor: 'rgba(153, 102, 255, 0.2)', 
                         borderColor: 'rgba(153, 102, 255, 1)', 
                         pointBackgroundColor: 'rgba(153, 102, 255, 1)', 
                         pointBorderColor: '#fff', 
                         pointHoverBackgroundColor: '#fff', 
                         pointHoverBorderColor: 'rgba(153, 102, 255, 1)'

              }
          ]
      };
    var radarDataTecnologia3A = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {label: 'Sociologia',
                   data: [30, 35, 40, 45, 50],
               backgroundColor: 'rgba(153, 102, 255, 0.2)', 
                   borderColor: 'rgba(153, 102, 255, 1)', 
                   pointBackgroundColor: 'rgba(153, 102, 255, 1)', 
                   pointBorderColor: '#fff', 
                   pointHoverBackgroundColor: '#fff', 
                   pointHoverBorderColor: 'rgba(153, 102, 255, 1)' 

              }
          ]
      };
    var radarDataTecnologia3B = {
          labels: ['Subtema 01', 'Subtema 02', 'Subtema 03', 'Subtema 04', 'Subtema 05'],
          datasets: [
              {
                  label: 'Sociologia',
                  data: [20, 30, 15, 25, 10],
                  backgroundColor: 'rgba(153, 102, 255, 0.2)', 
                         borderColor: 'rgba(153, 102, 255, 1)', 
                         pointBackgroundColor: 'rgba(153, 102, 255, 1)', 
                         pointBorderColor: '#fff', 
                         pointHoverBackgroundColor: '#fff', 
                         pointHoverBorderColor: 'rgba(153, 102, 255, 1)'

              }
          ]
      };

    function createRadarChart(ctx, data) {
        return new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                scale: {
                    ticks: { beginAtZero: true }
                }
            }
        });
    }

    function updateRadarCharts(data1, data2, data3) {
        currentCharts.forEach(chart => chart.destroy());

        currentCharts = [
            createRadarChart(document.getElementById('myRadarChart1'), data1),
            createRadarChart(document.getElementById('myRadarChart2'), data2),
            createRadarChart(document.getElementById('myRadarChart3'), data3)
        ];
    }

    var subjectLinks = document.querySelectorAll('.subject-list');

  subjectLinks.forEach(link => {
      link.addEventListener('click', function () {
          var subjectId = this.id;

          if (subjectId === 'artes') {
              updateRadarCharts(radarDataArtesTADS, radarDataArtes3A, radarDataArtes3B);
          } else if (subjectId === 'biologia') {
              updateRadarCharts(radarDataBiologiaTADS, radarDataBiologia3A, radarDataBiologia3B);
          } else if (subjectId === 'educacao-fisica') {
              updateRadarCharts(radarDataEducacaoFisicaTADS, radarDataEducacaoFisica3A, radarDataEducacaoFisica3B);
          } else if (subjectId === 'espanhol') {
              updateRadarCharts(radarDataEspanholTADS, radarDataEspanhol3A, radarDataEspanhol3B);
          } else if (subjectId === 'filosofia') {
              updateRadarCharts(radarDataFilosofiaTADS, radarDataFilosofia3A, radarDataFilosofia3B);
          }else if (subjectId === 'fisica') {
              updateRadarCharts(radarDataFisicaTADS, radarDataFisica3A, radarDataFisica3B);
          } else if (subjectId === 'geografia') {
                updateRadarCharts(radarDataGeografiaTADS, radarDataGeografia3A, radarDataGeografia3B);
         } else if (subjectId === 'historia') {
                  updateRadarCharts(radarDataHistoriaTADS, radarDataHistoria3A, radarDataHistoria3B);
         } else if (subjectId === 'ingles') {
                      updateRadarCharts(radarDataInglesTADS, radarDataIngles3A, radarDataIngles3B);
          } else if (subjectId === 'linguaportuguesa') {
                    updateRadarCharts(radarDataLinguaportuguesaTADS, radarDataLinguaportuguesa3A, radarDataLinguaportuguesa3B);
         } else if (subjectId === 'literatura') {
                          updateRadarCharts(radarDataLiteraturaTADS, radarDataLiteratura3A, radarDataLiteratura3B);
        } else if (subjectId === 'matematica') {
                            updateRadarCharts(radarDataMatematicaTADS, radarDataMatematica3A, radarDataMatematica3B);
        } else if (subjectId === 'quimica') {
                              updateRadarCharts(radarDataQuimicaTADS, radarDataQuimica3A, radarDataQuimica3B);
        } else if (subjectId === 'sociologia') {
                            updateRadarCharts(radarDataSociologiaTADS, radarDataSociologia3A, radarDataSociologia3B);
        } else if (subjectId === 'tecnologia') {
                          updateRadarCharts(radarDataTecnologiaTADS, radarDataTecnologia3A, radarDataTecnologia3B);
        }

      });
  });

    updateRadarCharts(radarDataArtesTADS, radarDataArtes3A, radarDataArtes3B);
});
