// eixo geografia física
let questao1_eixo1 = [1, 9, 11, 5, 4];
let questao2_eixo1 = [3, 5, 12, 2, 8];
let questao3_eixo1 = [2, 6, 19, 2, 1];

// eixo geografia humana
let questao1_eixo2 = [3, 3, 14, 5, 5];
let questao2_eixo2 = [2, 9, 11, 4, 4];
let questao3_eixo2 = [8, 3, 10, 8, 1];

// eixo geopolítica e relações internacionais 
let questao1_eixo3 = [3, 7, 13, 5, 2];
let questao2_eixo3 = [3, 9, 6, 6, 6];
let questao3_eixo3 = [6, 4, 13, 6, 1];

// eixo geografia do Brasil
let questao1_eixo4 = [3, 8, 8, 10, 1];
let questao2_eixo4 = [1, 6, 9, 7, 7];
let questao3_eixo4 = [4, 7, 7, 11, 1];

// eixo questões ambientais e sustentabilidade
let questao1_eixo5 = [2, 7, 5, 9, 7];
let questao2_eixo5 = [1, 10, 8, 4, 7];
let questao3_eixo5 = [6, 4, 14, 1, 5];

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