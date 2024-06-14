
// eixo escolas literárias 
let questao1_eixo1 = [1, 6, 14, 1, 4];
let questao2_eixo1 = [4, 11, 10, 1, 0];
let questao3_eixo1 = [2, 11, 7, 1, 5];

// eixo interpretação de texto
let questao1_eixo2 = [2, 11, 7, 5, 1];
let questao2_eixo2 = [1, 11, 11, 2, 1];
let questao3_eixo2 = [6, 10, 8, 1, 1];

// eixo figuras de linguagem
let questao1_eixo3 = [2, 8, 9, 7, 0];
let questao2_eixo3 = [2, 12, 4, 8, 0];
let questao3_eixo3 = [2, 7, 8, 4, 5];

// eixo funções de linguaguem
let questao1_eixo4 = [1, 9, 8, 6, 2];
let questao2_eixo4 = [2, 8, 6, 7, 3];
let questao3_eixo4 = [2, 7, 5, 5, 7];

// eixo gêneros literários
let questao1_eixo5 = [3, 6, 7, 8, 2];
let questao2_eixo5 = [7, 6, 10, 3, 0];
let questao3_eixo5 = [4, 7, 6, 6, 3];

let respondentes = 26


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