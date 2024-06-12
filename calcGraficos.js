// eixo algebra 

let questao1_eixo1 = [3,8,5,10,7];
let questao2_eixo1 = [4,9,13,3,4];
let questao3_eixo1 = [6,7,7,5,8];

// eixo 2

let questao1_eixo2 = [6,4,12,7,4];
let questao2_eixo2 = [7,10,6,5,5];
let questao3_eixo2 = [7,9,6,6,5];

// eixo 3

let questao1_eixo3 = [8,6,6,10,3];
let questao2_eixo3 = [7,8,9,5,4];
let questao3_eixo3 = [3,10,6,12,2];

// eixo 4

let questao1_eixo4 = [11,8,11,3,0];
let questao2_eixo4 = [15,5,11,2,0];
let questao3_eixo4 = [5,6,15,4,3];

// eixo 5

let questao1_eixo5 = [5,6,17,5,0];
let questao2_eixo5 = [5,10,14,3,1];
let questao3_eixo5 = [5,8,12,4,4];

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