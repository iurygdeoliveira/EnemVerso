// eixo filosofia antiga
let questao1_eixo1 = [4, 3, 13, 6, 3];
let questao2_eixo1 = [4, 6, 7, 8, 4];
let questao3_eixo1 = [10, 5, 9, 2, 3];

// eixo filosofia moderna
let questao1_eixo2 = [12, 11, 5, 1, 0];
let questao2_eixo2 = [9, 3, 11, 2, 4];
let questao3_eixo2 = [7, 2, 8, 3, 9];

// eixo ética e filosofia política
let questao1_eixo3 = [1, 9, 6, 6, 7];
let questao2_eixo3 = [6, 10, 4, 6, 3];
let questao3_eixo3 = [9, 5, 8, 3, 4];

// eixo lógica e conhecimento 
let questao1_eixo4 = [10, 8, 6, 0, 5];
let questao2_eixo4 = [7, 5, 5, 15, 7];
let questao3_eixo4 = [8, 6, 5, 6, 4];

// eixo estética e filosofia da arte
let questao1_eixo5 = [11, 9, 4, 4, 1];
let questao2_eixo5 = [10, 11, 3, 2, 3];
let questao3_eixo5 = [5, 6, 2, 2, 14];

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