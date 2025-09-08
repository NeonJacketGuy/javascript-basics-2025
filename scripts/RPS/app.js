//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
var RAGE =0;


let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
    RAGE = RAGE+1 
    console.log("Player picked", weapon, RAGE);
    
    let computerWeapon = selectComputerWeapon();
};
// math.random gives us a random number.

const selectComputerWeapon = function () {
    const rand = Math.floor(Math.random() * 4);

    if (rand == 0) {
        return ROCK;
    }
    
    if (rand == 1) {
        return PAPER;
    }
    
     return SCISSORS;
    };