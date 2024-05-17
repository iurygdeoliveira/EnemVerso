var chartDom = document.getElementById('grafico3');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '3A',
        top: '3%',
    },
    legend: {
        data: ['SUPERIOR', 'E.MÉDIO']
    },
    radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: 100,
        indicator: [
            { name: 'ÉTICA E USO POLÍTICO DAS TIC', max: 5 },
            { name: 'SOCIEDADE DA INFORMAÇÃO E IMPACTO CULTURAL', max: 5 },
            { name: 'RELAÇÃO ENTRE INTERNET E CONSUMO', max: 5 },
            { name: 'IMPACTO SOCIOCULTURAL DAS TIC', max: 5 },
            { name: 'ACESSO ÀS NOVAS TECNOLOGIAS E TIC NO MERCADO DE TRABALHO', max: 5 },
        ]
    },
    series: [
        {
            name: 'Nível de Competência',
            type: 'radar',
            data: [
                {
                    value: [5, 3, 5, 5, 5, 5, 5],
                    name: 'SUPERIOR'
                },
                {
                    value: [5, 5, 1, 5, 5, 5, 5],
                    name: 'E.MÉDIO'
                },
            ]
        }
    ]
};

option && myChart.setOption(option);