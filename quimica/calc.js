// eixo química geral e inorgânica
let questao1_eixo1 = [5, 9, 6, 5, 1];
let questao2_eixo1 = [10, 9, 1, 6, 0];
let questao3_eixo1 = [2, 5, 7, 6, 6];

// eixo química orgânica
let questao1_eixo2 = [6, 11, 8, 0, 1];
let questao2_eixo2 = [6, 12, 7, 1, 0];
let questao3_eixo2 = [3, 7, 3, 2, 11];

// eixo físico-químico
let questao1_eixo3 = [11, 11, 2, 2, 0];
let questao2_eixo3 = [10, 13, 2, 1, 0];
let questao3_eixo3 = [4, 8, 5, 3, 6];

// eixo química analítica
let questao1_eixo4 = [11, 13, 2, 0, 0];
let questao2_eixo4 = [6, 9, 5, 3, 3];
let questao3_eixo4 = [1, 4, 5, 5, 11];

// eixo química ambiental
let questao1_eixo5 = [2, 7, 6, 3, 8];
let questao2_eixo5 = [4, 7, 7, 6, 2];
let questao3_eixo5 = [1, 5, 5, 12, 3];

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