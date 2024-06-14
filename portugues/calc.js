// eixo compreensão de texto
let questao1_eixo1 = [1, 4, 7, 13, 6];
let questao2_eixo1 = [4, 4, 4, 13, 6];
let questao3_eixo1 = [2, 6, 4, 11, 8];

// eixo gramática e uso da língua 
let questao1_eixo2 = [1, 2, 14, 11, 3];
let questao2_eixo2 = [0, 4, 11, 13, 3];
let questao3_eixo2 = [3, 5, 14, 7, 2];

// eixo semântica 
let questao1_eixo3 = [0, 4, 12, 6, 9];
let questao2_eixo3 = [4, 9, 6, 8, 4];
let questao3_eixo3 = [4, 4, 6, 15, 2];

// eixo escrita
let questao1_eixo4 = [1, 4, 13, 5, 8];
let questao2_eixo4 = [0, 9, 6, 6, 10];
let questao3_eixo4 = [1, 9, 8, 5, 8];

// eixo interpretação e análise crítica
let questao1_eixo5 = [9, 9, 6, 4, 3];
let questao2_eixo5 = [1, 7, 7, 10, 6];
let questao3_eixo5 = [10, 5, 10, 3, 3];
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