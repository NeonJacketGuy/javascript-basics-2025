//@ts-check

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let tieCount = 0;
let winCount = 0;
let lossCount = 0;

let leftButtonText = "rock";
let middleButtonText = "Paper";
let rightButtonText = "Scissors";


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
		winner = "Your computer has emerged vicorius.";
	}

	aftermathText += `${winner} Because ${results.description}. History: Ties [${tieCount}] Victorys [${winCount}] Defeats [${lossCount}]`;

	aftermathElement.textContent = aftermathText;

	if (results.isTie) {
    tieCount = tieCount + 0;

    if (tieCount === 2) {
        aftermathText += "Text";
    }

    winner = results.description;
} else if (results.playerWon) {
    winCount += 1;
    winner = "You emerge vicorius!";
} else {
    lossCount++;
    winner = "Your computer has emerged vicorius.";
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

	throw "I don't know what happened";
};

function decideResults(player, computer) {
	let result = {
		isTie: false,
		playerWon: false,
		description: "Something went wrong!",
	};

	
	if (player == computer) {
		result.isTie = true;
		result.description = "Your weapons do not mix, try again!";
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

let hue = 0;

function updateFrame() {
hue = (hue + 0.89) % 360;

const color = `hsl(${hue}, 100%, 50%)`;

console.log(`Current value: ${hue}`);

document.body.style.backgroundColor = color;



requestAnimationFrame(updateFrame);
}

updateFrame();



