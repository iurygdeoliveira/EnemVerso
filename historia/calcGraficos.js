// história do Brasil 
let questao1_eixo1 = [0, 4, 12, 10, 1];
let questao2_eixo1 = [0, 7, 8, 6, 6];
let questao3_eixo1 = [2, 4, 15, 5, 1];

// eixo história geral
let questao1_eixo2 = [2, 4, 17, 3, 1];
let questao2_eixo2 = [1, 6, 13, 4, 3];
let questao3_eixo2 = [5, 5, 10, 6, 1];

// eixo história comtemporânea
let questao1_eixo3 = [3, 3, 12, 6, 3];
let questao2_eixo3 = [5, 7, 13, 2, 0];
let questao3_eixo3 = [5, 4, 11, 5, 2];

// eixo história da Ámerica
let questao1_eixo4 = [0, 6, 11, 7, 3];
let questao2_eixo4 = [1, 13, 8, 4, 1];
let questao3_eixo4 = [1, 3, 9, 10, 4];

// eixo arte de origem africana no Brasil e tradições indígenas
let questao1_eixo5 = [1, 4, 10, 11, 1];
let questao2_eixo5 = [4, 10, 9, 4, 0];
let questao3_eixo5 = [1, 2, 8, 7, 9];

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