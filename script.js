var radarIndex = 0;

function showRadar(n) {
  var radarData = [
    // Seus dados do gráfico de radar para cada índice
  ];

  var ctx = document.getElementById('myRadarChart').getContext('2d');

  // Certifique-se de que o gráfico anterior seja destruído para evitar sobreposição
  if (window.myRadarChart) {
    window.myRadarChart.destroy();
  }

  window.myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
      datasets: [{
        label: 'Dados do Gráfico',
        data: radarData[radarIndex],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true
        }
      }
    }
  });
}

function prevRadar() {
  radarIndex = (radarIndex - 1 + totalRadarItems) % totalRadarItems;
  showRadar(0);
}

function nextRadar() {
  radarIndex = (radarIndex + 1) % totalRadarItems;
  showRadar(0);
}