// eixo fundamentos da sociologia 
let questao1_eixo1 = [0, 0, 0, 0, 0];
let questao2_eixo1 = [0, 0, 0, 0, 0];
let questao3_eixo1 = [0, 0, 0, 0, 0];

// eixo estrutura social e organização
let questao1_eixo2 = [0, 0, 0, 0, 0];
let questao2_eixo2 = [0, 0, 0, 0, 0];
let questao3_eixo2 = [0, 0, 0, 0, 0];

// eixo mudança social e desenvolvimento
let questao1_eixo3 = [4, 3, 12, 5, 9];
let questao2_eixo3 = [3, 2, 11, 10, 7];
let questao3_eixo3 = [10, 8, 7, 6, 2];

// eixo cultura e identidade
let questao1_eixo4 = [4, 2, 11, 6, 10];
let questao2_eixo4 = [3, 3, 9, 6, 12];
let questao3_eixo4 = [2, 9, 8, 7, 7];

// eixo sociologia comtemporânea 
let questao1_eixo5 = [4, 11, 5, 9, 4];
let questao2_eixo5 = [2, 10, 8, 10, 3];
let questao3_eixo5 = [3, 11, 10, 6, 3];

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