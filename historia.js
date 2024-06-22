function chamarGraficoHistoria() {
  document.getElementById("grafico1").value = "";
  document.getElementById("grafico2").value = "";
  document.getElementById("grafico3").value = "";

  // Eixo Idade Antiga
  let questao1_eixo1 = [6, 4, 7, 6, 5];
  let questao2_eixo1 = [6, 6, 10, 4, 2];
  let questao3_eixo1 = [7, 6, 10, 2, 3];

  // Eixo Idade Média
  let questao1_eixo2 = [11, 9, 7, 1, 0];
  let questao2_eixo2 = [11, 7, 8, 1, 1];
  let questao3_eixo2 = [8, 4, 12, 3, 1];

  // Eixo Idade Moderna
  let questao1_eixo3 = [13, 7, 5, 3, 0];
  let questao2_eixo3 = [13, 8, 4, 2, 1];
  let questao3_eixo3 = [15, 6, 4, 3, 0];

  // Eixo Idade Contemporânea
  let questao1_eixo4 = [9, 8, 7, 2, 2];
  let questao2_eixo4 = [11, 8, 5, 4, 0];
  let questao3_eixo4 = [13, 6, 6, 3, 0];

  // Eixo História Local
  let questao1_eixo5 = [9, 7, 8, 4, 0];
  let questao2_eixo5 = [9, 9, 8, 1, 1];
  let questao3_eixo5 = [11, 7, 7, 2, 1];

  let respondentes = 28;

  let media1 = calcularMedia(questao1_eixo1, respondentes);
  let media2 = calcularMedia(questao2_eixo1, respondentes);
  let media3 = calcularMedia(questao3_eixo1, respondentes);
  let mediageral1 = (media1 + media2 + media3) / 3;

  let media4 = calcularMedia(questao1_eixo2, respondentes);
  let media5 = calcularMedia(questao2_eixo2, respondentes);
  let media6 = calcularMedia(questao3_eixo2, respondentes);
  let mediageral2 = (media4 + media5 + media6) / 3;

  let media7 = calcularMedia(questao1_eixo3, respondentes);
  let media8 = calcularMedia(questao2_eixo3, respondentes);
  let media9 = calcularMedia(questao3_eixo3, respondentes);
  let mediageral3 = (media7 + media8 + media9) / 3;

  let media10 = calcularMedia(questao1_eixo4, respondentes);
  let media11 = calcularMedia(questao2_eixo4, respondentes);
  let media12 = calcularMedia(questao3_eixo4, respondentes);
  let mediageral4 = (media10 + media11 + media12) / 3;

  let media13 = calcularMedia(questao1_eixo5, respondentes);
  let media14 = calcularMedia(questao2_eixo5, respondentes);
  let media15 = calcularMedia(questao3_eixo5, respondentes);
  let mediageral5 = (media13 + media14 + media15) / 3;

  gerarGrafico(
    "grafico1",
    "Idade Antiga",
    "Idade Média",
    "Idade Moderna",
    "Idade Contemporânea",
    "História Local",
    "História",
    mediageral1,
    mediageral2,
    mediageral3,
    mediageral4,
    mediageral5
  );
}
