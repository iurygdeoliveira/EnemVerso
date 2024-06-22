import { ColetarMedias } from "./EducacaoFisica.js";

document.addEventListener('DOMContentLoaded', () => {
        ColetarMedias().then(data => {
        const graficos = [
            { id: "grafico_3A", titulo: "3A", dados: data["3A"] },
            { id: "grafico_3B", titulo: "3B", dados: data["3B"] },
            { id: "grafico_TADS", titulo: "TADS", dados: data["tads"] }
        ];

        graficos.forEach(({ id, titulo, dados }) => gerarGrafico(id, titulo, dados));
    });
});

function gerarGrafico(id, titulo, dados) {
    const chartDom = document.getElementById(id);
    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: titulo,
        },
        radar: {
            shape: 'circle',
            center: ['50%', '50%'],
            radius: 100,
            axisName: {
                color: "black",
            },
            indicator: [
                { name: 'JOGOS, BRINCADEIRAS E ARTES', max: 5 },
                { name: 'FUNÇÃO SOCIAL DAS ATIVIDADES FÍSICAS', max: 5 },
                { name: 'EDUCAÇÃO FÍSICA INCLUSIVA', max: 5 },
                { name: 'EXERCÍCIO FÍSICO E SAÚDE', max: 5 },
                { name: 'ESPORTES E PRÁTICAS CORPORAIS', max: 5 },
            ]
        },
        series: [{
            type: 'radar',
            data: [{
                value: [
                    dados["JogosBrincadeirasArtes"],
                    dados["FuncaoSocialDasAtvsFisicas"],
                    dados["EducacaoFisicaInclusiva"],
                    dados["ExercicioFisicoSaude"],
                    dados["EsportesPraticasCulturais"]
                ],
                name: titulo,
            }]
        }]
    };

    myChart.setOption(option);
}
