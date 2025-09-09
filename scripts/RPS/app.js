//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let aftermathElement = document.getElementById("aftermath");

const pickWeapon = function (weapon) {
	console.log("Player picked", weapon);


	let computerWeapon = selectComputerWeapon();
	console.log("Computer picked", computerWeapon);

};

const selectComputerWeapon = function () {
	
	const rand = Math.floor(Math.random() * 3);

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

function decideResults(playerWeapon, computerWeapon) {
    let results = {
        isTie: false,
        playerWon: false,
        description: "",

    };

    if (playerWeapon == computerWeapon) {
        results.isTie = true;
        results.description = "It's a tie! Battle Again!";
        return results;
    }

    if (playerWeapon == ROCK && computerWeapon == SCISSORS) {
        results.playerWon = true;
        results.description = "Rock crushes sissors";
        return results;
    }


    if (playerWeapon == SCISSORS && computerWeapon == PAPER) {
        results.playerWon = true;
        results.description = "Scissors Cuts Paper";
        return results;
    }

}