var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Tecnologia da Informação',
        top: '3%',
    },
    legend: {
        data: ['Ética e Tecnologia Política', 'Fake News e Propagação Online', 'Influência das IA na Sociedade', 'Sociedade da Informação', 'Transformação Cultural pelas TIC', 'Marketing e Publicidade Online', 'Impacto Sociocultural das TIC', 'Redes Sociais e Influência Digital', 'Acesso e Inclusão Social', 'Tendências do Mercado de Trabalho', 'Impacto das TIC nas Profissões']
    },
    radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: 100,
        indicator: [
            { name: 'Eixo 1', max: 5 },
            { name: 'Eixo 2', max: 5 },
            { name: 'Eixo 3', max: 5 },
            { name: 'Eixo 4', max: 5 },
            { name: 'Eixo 5', max: 5 },
        ]
    },
    series: [
        {
            name: 'Nível de Competência',
            type: 'radar',
            data: [
                {
                    value: [5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    name: 'Ética e Tecnologia Política'
                },
                {
                    value: [5, 3, 5, 5, 2, 5, 1, 5, 5, 5, 5],
                    name: 'Fake News e Propagação Online'
                },
                {
                    value: [5, 3, 5, 4, 5, 5, 5, 3, 5, 5, 5],
                    name: 'Influência das IA na Sociedade'
                },
                {
                    value: [5, 3, 5, 2, 5, 5, 1, 5, 5, 5, 5],
                    name: 'Sociedade da Informação'
                },
                {
                    value: [5, 3, 5, 5, 1, 5, 5, 5, 3, 5, 5],
                    name: 'Transformação Cultural pelas TIC'
                },
                {
                    value: [5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    name: 'Marketing e Publicidade Online'
                },
                {
                    value: [5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    name: 'Impacto Sociocultural das TIC'
                },
                {
                    value: [5, 3, 5, 5, 5, 5, 5, 4, 5, 5, 4],
                    name: 'Redes Sociais e Influência Digital'
                },
                {
                    value: [5, 1, 5, 5, 5, 5, 2, 5, 5, 5, 3],
                    name: 'Acesso e Inclusão Social'
                },
                {
                    value: [5, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5],
                    name: 'Tendências do Mercado de Trabalho'
                },
                {
                    value: [5, 3, 5, 5, 3, 4, 1, 0, 5, 5, 5],
                    name: 'Impacto das TIC nas Profissões'
                },
            ]
        }
    ]
};

option && myChart.setOption(option);
