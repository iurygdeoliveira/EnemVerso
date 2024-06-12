//1

let questao1_eixo1 = [0, 1, 3, 7, 22];
let questao2_eixo1 = [1, 2, 3, 8, 19];
let questao3_eixo1 = [3, 3, 5, 8, 14];
// eixo função social das atividades físicas
let questao1_eixo2 = [0, 1, 2, 7, 23];
let questao2_eixo2 = [0, 1, 6, 9, 17];
let questao3_eixo2 = [0, 2, 4, 9, 18];

// eixo educação física inclusiva
let questao1_eixo3 = [2, 2, 6, 4, 19];
let questao2_eixo3 = [4, 5, 2, 4, 18];
let questao3_eixo3 = [0, 5, 4, 4, 20];

// eixo exercício físico e saúde
let questao1_eixo4 = [0, 1, 6, 3, 23];
let questao2_eixo4 = [0, 2, 6, 2, 23];
let questao3_eixo4 = [0, 4, 3, 1, 25];

// eixo esportes práticas corporais
let questao1_eixo5 = [1, 6, 10, 8, 8];
let questao2_eixo5 = [1, 4, 15, 5, 8];
let questao3_eixo5 = [2, 3, 5, 15, 8];

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