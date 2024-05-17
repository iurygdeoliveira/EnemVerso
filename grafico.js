var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'ADS',
        top: '3%',
    },
    legend: {
        data: ['orçamento alocado', 'gastos reais']
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
                    name: 'orçamento alocado'
                },
                {
                    value: [5, 5, 1, 5, 5, 5, 5],
                    name: 'gastos reais'
                },
            ]
        }
    ]
};

option && myChart.setOption(option);
