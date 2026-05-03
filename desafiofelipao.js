const prompt = require('prompt-sync')();
 
let nome = prompt ("Nome do herói: ");
let XpdoHeroi = parseInt(prompt("Xp do Herói: "));

let nivel;

if (XpdoHeroi<=1000) {
     nivel = "Ferro";}
    else if (XpdoHeroi>=1001 && XpdoHeroi<=2000){
            nivel = "Bronze";}
    else if (XpdoHeroi>=2001 && XpdoHeroi<=5000){
            nivel = "Prata";}
    else if (XpdoHeroi>=5001 && XpdoHeroi<=7000){
            nivel = "Ouro";}
    else if (XpdoHeroi>=7001 && XpdoHeroi<=8000){
            nivel = "Platina";}
    else if (XpdoHeroi>=8001 && XpdoHeroi<=9000){
            nivel = "Ascendente";}
    else if (XpdoHeroi>=9001 && XpdoHeroi<=10000){
            nivel = "Imortal";}
    else if (XpdoHeroi>=10000){
            nivel = "Radiante";}

console.log("O Herói de nome " + nome + " está no nível " + nivel);



