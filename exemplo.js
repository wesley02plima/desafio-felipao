// 1. Importar o módulo (certifique-se de instalar prompt-sync)
const prompt = require('prompt-sync')();

// 2. Solicitar dados (sempre retorna string)
let nome = prompt('Qual é o seu nome? ');
let idade = prompt('Qual é a sua idade? ');

// 3. Conversão (opcional, para números)
let idadeNum = Number(idade);

console.log(`Olá ${nome}, você tem ${idadeNum} anos.`);
