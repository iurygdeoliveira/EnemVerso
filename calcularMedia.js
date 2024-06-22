let ranking = ((6 * 1) + (5 * 2) + (10 * 3) + (9 * 4) + (6 * 5))/ 28;

function calcularMedia(dados, respondentes) {

  let somatoria = 0;
  for (let i = 1; i <= 5; i++) {

    somatoria = somatoria + dados[i - 1] * i;
  }
  return somatoria / respondentes;
}