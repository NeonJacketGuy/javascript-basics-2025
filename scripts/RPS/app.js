//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const RAGE = "rage";


let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
    console.log("Player picked", weapon);
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
    if (rand == 3) {
        return RAGE;
    }
};