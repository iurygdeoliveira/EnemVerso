// eixo interpretação de texto
let questao1_eixo1 = [12, 5, 9, 1, 0];
let questao2_eixo1 = [13, 7, 4, 2, 1];
let questao3_eixo1 = [10, 8, 7, 2, 0];

// eixo conhecimento gramatical básico
let questao1_eixo2 = [9, 11, 5, 2, 0];
let questao2_eixo2 = [15, 6, 5, 0, 1];
let questao3_eixo2 = [19, 4, 2, 1, 1];

// eixo tempos verbais
let questao1_eixo3 = [14, 7, 4, 2, 0];
let questao2_eixo3 = [9, 11, 7, 0, 0];
let questao3_eixo3 = [9, 6, 5, 7, 0];

// eixo voz passiva
let questao1_eixo4 = [17, 3, 5, 2, 0];
let questao2_eixo4 = [19, 6, 2, 0, 0];
let questao3_eixo4 = [18, 4, 5, 0, 0];

// eixo conectivos e adjuntos adverbiais
let questao1_eixo5 = [21, 3, 1, 2, 0];
let questao2_eixo5 = [12, 7, 6, 2, 0];
let questao3_eixo5 = [12, 11, 4, 0, 0];

let respondentes = 33

const mediaEixo1 = (calcularMedia(questao1_eixo1,respondentes) + calcularMedia(questao2_eixo1,respondentes) + calcularMedia(questao3_eixo1,respondentes)) / 3;


const mediaEixo2 = (calcularMedia(questao1_eixo2,respondentes) + calcularMedia(questao2_eixo2,respondentes) + calcularMedia(questao3_eixo2,respondentes)) / 3;

console.log(mediaEixo2)

const mediaEixo3=(calcularMedia(questao1_eixo3,respondentes)+
calcularMedia(questao2_eixo3,respondentes)+
calcularMedia(questao3_eixo3,respondentes))/3;

console.log(mediaEixo3)

const mediaEixo4=(calcularMedia(questao1_eixo4,respondentes)+
calcularMedia(questao2_eixo4,respondentes)+
calcularMedia(questao3_eixo4,respondentes))/3;

console.log(mediaEixo4)

const mediaEixo5=(calcularMedia(questao1_eixo5,respondentes)+
calcularMedia(questao2_eixo5,respondentes)+
calcularMedia(questao3_eixo5,respondentes))/3;

 console.log(mediaEixo5)

function calcularMedia(dados, respondentes){

  let somatoria = 0;
  for(let i=1 ; i<=5; i++){
    somatoria = somatoria + dados[i-1] *  i;
  }
  return somatoria/respondentes;
  }
export { mediaEixo1, mediaEixo2, mediaEixo3, mediaEixo4, mediaEixo5 }