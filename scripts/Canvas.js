//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore is not null
const CTX = CANVAS.getContext("2d");

const HEIGHT = 1500;
const WIDTH = 2900;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;

class Box {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;

		this.speed = 10;
		this.width = 50;
		this.height = this.width;

		this.xDirection = 1;
		this.yDirection = 1;

		this.alpha = 1.0;
	}

	draw() {
		CTX.globalAlpha = this.alpha;
		CTX.fillStyle = this.color;
		CTX.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		let top = this.y;
		let bottom = this.y + this.width;
		let left = this.x;
		let right = this.x + this.height;

		if (top < 0) {
			// colliding with top
			this.yDirection = 1;
		} else if (bottom > HEIGHT) {
			// colliding with bottom
			this.yDirection = -1;
		}

		if (left < 0) {
			// colliding with left
			this.xDirection = 1;
		} else if (right > WIDTH) {
			// colliding with right
			this.xDirection = -1;
		}

		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
}

/** @type { Box[] } */
let boxes = [];

let colors = [
	"black",
	"cyan",
	"blue"
];
CTX.globalAlpha = 0.1;

for (let i = 0; i <= 50000; i++) {
	let color = colors[Math.floor(Math.random() * colors.length)];
	let box = new Box(WIDTH / 2, HEIGHT / 2, color);
	box.width = 10;
	box.height = 10;
	box.x = Math.random() * (WIDTH - 100);
	box.y = Math.random() * (HEIGHT - 100);
	box.speed = Math.random() * 1 + 3000000000000;
	boxes.push(box);
}

let currentTimestamp = 0;

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	boxes.forEach((b) => {
		b.draw();
		b.update();
	});

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);