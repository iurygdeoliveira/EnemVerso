// eixo interpretação de texto
let questao1_eixo1 = [15, 6, 8, 1, 2];
let questao2_eixo1 = [22, 3, 5, 2, 0];
let questao3_eixo1 = [12, 5, 10, 3, 2];

// eixo estruturas linguísticas e uso social
let questao1_eixo2 = [23, 7, 2, 0, 0];
let questao2_eixo2 = [15, 8, 2, 6, 1];
let questao3_eixo2 = [20, 5, 1, 5, 1];

// eixo conjuções/conectivos
let questao1_eixo3 = [23, 7, 1, 0, 1];
let questao2_eixo3 = [23, 8, 0, 1, 0];
let questao3_eixo3 = [25, 6, 1, 0, 0];

// eixo advérbios
let questao1_eixo4 = [21, 7, 2, 1, 1];
let questao2_eixo4 = [22, 8, 1, 1, 0];
let questao3_eixo4 = [23, 6, 1, 2, 0];

// eixo verbos ser, estar e haver
let questao1_eixo5 = [17, 9, 3, 1, 2];
let questao2_eixo5 = [26, 4, 1, 1, 0];
let questao3_eixo5 = [26, 4, 1, 0, 1];

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