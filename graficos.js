var dom = document.getElementById('graficos');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

// Definir tamanho pré-definido para o gráfico (opcional)
// Isso garante que o gráfico tenha uma dimensão mínima inicial, mas não é necessário para torná-lo responsivo

var app = {};

var option;

option = {
    title: {
        text: 'TADS'
    },
    legend: {
        data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
        indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
        ],
        center: ["50%", "50%"],
        radius: ["0%", "50%"]
    },
    series: [{
        name: 'Budget vs spending',
        type: 'radar',
        data: [{
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
            },
            {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
            }
        ]
    }]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
