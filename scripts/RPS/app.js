//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

/** @type { HTMLElement } */
//@ts-ignore checking for null below : )
let aftermathElement = document.getElementById("aftermath");
if (aftermathElement == null) {
	throw "aftermath is not defined! Go look at your HTML because you made an mistake because you suck!!!";
}
const pickWeapon = function (weapon) {
	let aftermathText = `Player pciked ${weapon}. `;
	console.log("Player picked", weapon);

	
	let computerWeapon = selectComputerWeapon();
	console.log("Computer picked", computerWeapon);
	aftermathText = aftermathText + `Computer picked ${computerWeapon}. `;

	let results = decideResults(weapon, computerWeapon);
	console.log("Battle results", results);

	if(results?.isTie) {

	}
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
	let result = {
		isTie: false,
		playerWon: false,
		description: "",
	};

	if (playerWeapon == computerWeapon) {
		result.isTie = true;
		result.description = "Draw! Battle again!";
		return result;
	}

	
	if (playerWeapon == ROCK && computerWeapon == SCISSORS) {
		result.playerWon = true;
		result.description = "Rock bludgeons scissors!";
		return result;
	}

	
	if (playerWeapon == PAPER && computerWeapon == ROCK) {
		result.playerWon = true;
		result.description = "Paper envelops rock";
		return result;
	}

	
	if (playerWeapon == SCISSORS && computerWeapon == PAPER) {
		result.playerWon = true;
		result.description = "Scissors smites down upon paper!";
		return result;
	}

	
	if (computerWeapon == ROCK && playerWeapon == SCISSORS) {
		result.description = "Rock bludgeons scissors!";
		return result;
	}

	
	if (computerWeapon == PAPER && playerWeapon == ROCK) {
		result.description = "Paper envelops rock";
		return result;
	}

	
	if (computerWeapon == SCISSORS && playerWeapon == PAPER) {
		result.description = "Scissors smites down upon paper!";
		return result;
	}

	result.description = "2829 PAW PRINT WAY CASTLE ROCK CO 80109!!!";
};