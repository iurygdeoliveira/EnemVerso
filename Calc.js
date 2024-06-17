function calcularRespondentes(dadosQuestao) {

  let respondentes = 0;
  dadosQuestao.forEach((element) => {
    respondentes += element
  })

  return respondentes
  
}

function calcularMedia(dados) {
  
  let somatoria = 0;
  
  for (let i = 1; i <= 5; i++) {
    somatoria = somatoria + dados[i - 1] * i;
  }
  return somatoria / calcularRespondentes(dados);
}

function calcularMédiasGerais(idMateria, turma) {

  const materia = materias[turma][idMateria]
  const mediasGerais = []
  let i = 0
  while (i < 15) {

    const mediaQ1 = calcularMedia(materia[i])
    const mediaQ2 = calcularMedia(materia[i + 1])
    const mediaQ3 = calcularMedia(materia[i + 2])

    mediasGerais.push((mediaQ1 + mediaQ2 + mediaQ3) / 3)

    i += 3

  }

  return mediasGerais

}