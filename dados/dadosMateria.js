import { materias } from "/dados/data.js";

function calcularMedia(dados, respondentes) {

    let somatoria = 0;

    for (let i = 1; i <= 5; i++) {

        somatoria = somatoria + dados[i - 1] * i;

    }

    const media = somatoria / respondentes

    if (media != Infinity) return media

}

export function dadosMateria (idMateria, turma) {

    //idMateria = 'literatura', por padrão.
    const materia = materias[turma][idMateria]
    const mediasEixos = []
    let i = 0
    while (i < 15) {

        const respondentes = materia[i].reduce((acumulador, atual) => acumulador + atual, 0)
        const mediaQ1 = calcularMedia(materia[i], respondentes)
        const mediaQ2 = calcularMedia(materia[i + 1], respondentes)
        const mediaQ3 = calcularMedia(materia[i + 2], respondentes)

        mediasEixos.push((mediaQ1 + mediaQ2 + mediaQ3) / 3)

        i += 3

    }

    return mediasEixos

}
