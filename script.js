function calcularMedia(valores) {
    let soma = 0;
    valores.forEach(valor => {
        soma += parseFloat(valor);
    });
    return soma / valores.length;
}
    
function atualizarGrafico(data) {
    // Agrupar as respostas em grupos de três e calcular a média
    const grupos = [];
    for (let i = 0; i < Object.keys(data).length; i += 3) {
        const grupo = Object.keys(data).slice(i, i + 3).map(chave => data[chave]);
        grupos.push(grupo);
    }

    // Calcular a média para cada grupo e atualizar os valores do gráfico
    const valoresAtualizados = grupos.map(grupo => {
        return grupo.reduce((acc, val) => acc + parseFloat(val), 0) / grupo.length;
    });
    
    return valoresAtualizados;
}

window.calcularMedia = calcularMedia;
window.atualizarGrafico = atualizarGrafico;