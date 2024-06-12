// 1

let questao1_eixo1 = [6, 8, 11, 9, 1];
let questao2_eixo1 = [6, 5, 10, 8, 6];
let questao3_eixo1 = [9, 7, 14, 3, 2];


//  2

let questao1_eixo2 = [13, 10, 10, 1, 1];
let questao2_eixo2 = [14, 8, 10, 3, 0];
let questao3_eixo2 = [12, 12, 6, 3, 2];

//  3

let questao1_eixo3 = [7, 10, 12, 4, 2];
let questao2_eixo3 = [11, 8, 7, 6, 3];
let questao3_eixo3 = [10, 5, 11, 4, 5];
// eixo 4

let questao1_eixo4 = [9, 10, 13, 1, 2];
let questao2_eixo4 = [13, 14, 5, 2, 1];
let questao3_eixo4 = [11, 7, 14, 2, 1];


// eixo 5

let questao1_eixo5 = [5, 9, 7, 7, 7];
let questao2_eixo5 = [6, 3, 10, 3, 13];
let questao3_eixo5 = [3, 10, 11, 4, 7];

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