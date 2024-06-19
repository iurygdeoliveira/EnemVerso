function renderChartADS(mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5){
  let chartDom = document.getElementById('graphic-ads');
  let myChart = echarts.init(chartDom);
  let option;

    option = {
        title: {
            text: 'ADS'
        },
        tooltip: {},
        legend: {
            data: ['Média']
        },
        radar: {
            shape: 'circle',
            indicator: [
                { name: 'Quimica Geral', max: 10 },
                { name: 'Quimica Organica', max: 10 },
                { name: 'Fisico-Quimica', max: 10 },
                { name: 'Quimica Analitica', max: 10 },
                { name: 'Quimica Ambiental', max: 10 }
            ]
        },
        series: [{
            name: 'Média',
            type: 'radar',
            data: [{
                value: [mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5],
                name: 'Média'
            }]
        }]
    };

    option && myChart.setOption(option);
}
function renderChart3A(mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5){
    let chartDom = document.getElementById('graphic-3a');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        title: {
            text: '3A'
        },
        tooltip: {},
        legend: {
            data: ['Média']
        },
        radar: {
            shape: 'circle',
            indicator: [
                { name: 'Quimica Geral', max: 10 },
                { name: 'Quimica Organica', max: 10 },
                { name: 'Fisico-Quimica', max: 10 },
                { name: 'Quimica Analitica', max: 10 },
                { name: 'Quimica Ambiental', max: 10 }
            ]
        },
        series: [{
            name: 'Média',
            type: 'radar',
            data: [{
                value: [mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5],
                name: 'Média'
            }]
        }]
    };

    option && myChart.setOption(option);
}

function renderChart3B(mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5){
    let chartDom = document.getElementById('graphic-3b');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
        title: {
            text: '3B'
        },
        tooltip: {},
        legend: {
            data: ['Média']
        },
        radar: {
            shape: 'circle',
            indicator: [
                { name: 'Quimica Geral', max: 10 },
                { name: 'Quimica Organica', max: 10 },
                { name: 'Fisico-Quimica', max: 10 },
                { name: 'Quimica Analitica', max: 10 },
                { name: 'Quimica Ambiental', max: 10 }
            ]
        },
        series: [{
            name: 'Média',
            type: 'radar',
            data: [{
                value: [mediaPonto1, mediaPonto2, mediaPonto3, mediaPonto4, mediaPonto5],
                name: 'Média'
            }]
        }]
    };

    option && myChart.setOption(option);
}