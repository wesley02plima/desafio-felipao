// Desafio do Felipão 2;

const prompt = require('prompt-sync')();

let name = prompt("Hero's name: ");
let victories = parseInt(prompt("Number of victories: "));
let defeats = parseInt(prompt("Number of defeats: "));
let rankedBalance = calcule(victories,defeats);
let rank ;

function calcule(victories,defeats) {
  return   victories - defeats
}

if (rankedBalance < 10) {
     rank = "Iron";}
    else if (rankedBalance >=11 && rankedBalance <=20){
            rank = "Bronze";}
    else if (rankedBalance >=21 && rankedBalance <=50){
            rank = "Silver";}
    else if (rankedBalance >= 51 && rankedBalance <=80){
            rank = "Gold";}
    else if (rankedBalance >=81 && rankedBalance <=90){
            rank = "Diamond";}
    else if (rankedBalance >=91 && rankedBalance <=100){
            rank = "Legendary";}
    else if (rankedBalance >=101) {
            rank = "Immortal";}
    

console.log("The Hero has a win ratio of " + rankedBalance + " and his rank is " + rank )



