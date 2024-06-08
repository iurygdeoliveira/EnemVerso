var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);

fetch('./assets/charts/linguaportuguesa.json')
  .then(response => response.json())
  .then(data => {
    // Filtrar apenas as respostas relevantes para o gráfico e converter para array
    const respostasRelevantes = data.map(participante => [
      participante["Consigo entender o tema principal de um texto complexo ?"],
      participante["Sou capaz de identificar ideias secundárias em um texto ?"],
      participante["Consigo reconhecer a intenção do Autor e o tom usado em diferentes tipos de texto (informativo, persuasivo, literário, etc.) ?"],
      participante["Sinto-me confiante na utilização correta da gramática da língua portuguesa ?"],
      participante["Posso identificar e corrigir erros gramaticais em textos ?"],
      participante["Sou capaz de aplicar regras de concordância verbal e nominal de forma correta em minhas redações e na correção de textos ?"],
      participante["Tenho um bom vocabulário em língua portuguesa ?"],
      participante["Consigo entender o significado de palavras desconhecidas pelo contexto ?"],
      participante["Tenho habilidade para utilizar sinônimos e antônimos adequadamente para enriquecer meus textos e evitar repetições ?"],
      participante["Consigo expressar ideias de forma clara e organizada por escrito ?"],
      participante["Sou capaz de escrever textos com diferentes propósitos (narrar, descrever, argumentar) ?"],
      participante["Consigo manter a coerência e a coesão ao desenvolver parágrafos e ao conectar ideias em um texto ?"],
      participante["Consigo interpretar o subtexto e as nuances em diferentes gêneros textuais ?"],
      participante["Sou capaz de fazer uma análise crítica de textos, identificando argumentos e pontos de vista ?"],
      participante["Sou capaz de identificar e avaliar a eficácia dos recursos estilísticos utilizados pelo autor em diferentes tipos de texto ?"]
    ]);

    // Calcular a média dos valores relevantes
    const valoresCalculados = respostasRelevantes.reduce((acc, respostas) => {
      return respostas.map((resposta, i) => (acc[i] || 0) + parseInt(resposta, 10));
    }, []).map(soma => soma / respostasRelevantes.length);

    // Definir a opção do gráfico com os valores calculados
    const option = {
      title: {
        bottom: 0,
        text: 'TADS',
        left: 'center'
      },
      legend: {
        data: ['Português']
      },
      radar: {
        shape: 'circle',
        center: ['50%', '50%'],
        radius: 100,
        indicator: [
          { name: 'Interpretação', max: 5 },
          { name: 'Gramática', max: 5 },
          { name: 'Vocabulário', max: 5 },
          { name: 'Coesão', max: 5 },
          { name: 'Nao sabo', max: 5 },
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: valoresCalculados,
              name: 'Português'
            }
          ]
        }
      ]
    };

    // Atualizar o gráfico com as novas opções
    myChart.setOption(option);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
  });