export function carregarGrafico(materia) {
    var chartDom = document.getElementById('grafico');
    var myChart = echarts.init(chartDom);

    fetch(materia.path)
        .then(response => response.json())
        .then(data => {
            const respostasRelevantes = Object.values(data).map(participante =>
                materia.perguntas.map(pergunta => parseInt(participante[pergunta], 10))
            );

            const valoresCalculados = respostasRelevantes.reduce((acc, respostas) => {
                return respostas.map((resposta, i) => (acc[i] || 0) + resposta);
            }, []).map(soma => soma / respostasRelevantes.length);

            const option = {
                title: {
                    bottom: 0,
                    text: materia.nome,
                    left: 'center'
                },
                legend: {
                    data: [materia.nome]
                },
                radar: {
                    shape: 'circle',
                    center: ['50%', '50%'],
                    radius: 100,
                    indicator: materia.indicadores.map(indicador => ({ name: indicador.nome, max: indicador.max }))
                },
                series: [
                    {
                        name: 'Desempenho',
                        type: 'radar',
                        data: [
                            {
                                value: valoresCalculados,
                                name: materia.nome
                            }
                        ]
                    }
                ]
            };

            myChart.setOption(option);
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
}
