//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
var RAGE =0;


let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
    RAGE = RAGE+1 
    console.log("Player picked", weapon, RAGE);
    if (RAGE ===10 ){
       const rageBtnEl = document.getElementById("rageBtn")?.setAttribute("display", "show")
    console.log(rageBtnEl)
    }

};


const selectComputerWeapon = function () {
    const rand = Math.floor(Math.random() * 4);

    if (rand == 0) {
        return ROCK;
    }
    if (rand == 1) {
        return PAPER;
    }
    if (rand == 2) {
        return SCISSORS;
    }
    
};