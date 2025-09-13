//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let tieCount = 0;
let winCount = 0;
let lossCount = 0;

/** @type { HTMLElement } */
//@ts-ignore checking for null below
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null) {
	throw "Aftermath is not deffined! Go check it because you suck!!!";
}

const pickWeapon = function (weapon) {
	let aftermathText = `You picked ${weapon}. `;
	console.log("You picked", weapon);

	let computerWeapon = selectComputerWeapon();
	console.log("Computer picked", computerWeapon);
	aftermathText = aftermathText + `Computer picked ${computerWeapon}. `;


	let results = decideResults(weapon, computerWeapon);
	console.log("Battle results", results);

	let winner = "";
	if (results.isTie) {
		tieCount = tieCount + 1;
		winner = results.description;
	} else if (results.playerWon) {
		winCount += 1;
		winner = "You emerge vicorius!";
	} else {
		lossCount++;
		winner = "Your computer has emerged vicorius. Try again!";
	}

	aftermathText += `${winner} Because ${results.description}. Current tally: ties [${tieCount}] wins [${winCount}] losses [${lossCount}]`;

	aftermathElement.textContent = aftermathText;
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

	throw "I don't know what happened";
};

function decideResults(player, computer) {
	let result = {
		isTie: false,
		playerWon: false,
		description: "something went wrong",
	};

	
	if (player == computer) {
		result.isTie = true;
		result.description = "2829 PAW PRINT WAY CASTLE ROCK CO 80109";
		return result;
	}

	
	if (player == ROCK && computer == SCISSORS) {
		result.playerWon = true;
		result.description = "rock smights down upon the scissors";
		return result;
	}

	
	if (player == PAPER && computer == ROCK) {
		result.playerWon = true;
		result.description = "paper envelops rock";
		return result;
	}

	
	if (player == SCISSORS && computer == PAPER) {
		result.playerWon = true;
		result.description = "scissors cleaves paper";
		return result;
	}

	
	if (computer == ROCK && player == SCISSORS) {
		result.description = "rock smights down upon scissors";
		return result;
	}

	
	if (computer == PAPER && player == ROCK) {
		result.description = "paper envelops rock";
		return result;
	}

	
	if (computer == SCISSORS && player == PAPER) {
		result.description = "scissors cleaves paper";
		return result;
	}

	result.description = "Ya broke it...";
	return result;
}