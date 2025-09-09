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
	let result = {
		isTie: false,
		playerWon: false,
		description: "",
	};

	if (playerWeapon == computerWeapon) {
		result.isTie = true;
		result.description = "It's a tie!";
		return result;
	}

	
	if (playerWeapon == ROCK && computerWeapon == SCISSORS) {
		result.playerWon = true;
		result.description = "rock crushes scissors";
		return result;
	}

	
	if (playerWeapon == PAPER && computerWeapon == ROCK) {
		result.playerWon = true;
		result.description = "paper covers rock";
		return result;
	}

	
	if (playerWeapon == SCISSORS && computerWeapon == PAPER) {
		result.playerWon = true;
		result.description = "scissors cuts paper";
		return result;
	}

	
	if (computerWeapon == ROCK && playerWeapon == SCISSORS) {
		result.description = "rock crushes scissors";
		return result;
	}

	
	if (computerWeapon == PAPER && playerWeapon == ROCK) {
		result.description = "paper covers rock";
		return result;
	}

	
	if (computerWeapon == SCISSORS && playerWeapon == PAPER) {
		result.description = "scissors cuts paper";
		return result;
	}
}