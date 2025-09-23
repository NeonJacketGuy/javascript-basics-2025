//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore
const canvas = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore 
const CTX = canvas.getContext("2d");

const HEIGHT = 600;
const WIDTH = 800;

canvas.height = HEIGHT;
canvas.width = WIDTH


CTX.fillStyle = "orange";
CTX.fillRect(0, 0, WIDTH, HEIGHT);

CTX.fillStyle = "blue";
CTX.fillRect(0, 0, 10, 50);

CTX.fillStyle = "green";
CTX.arc(WIDTH / 2, HEIGHT / 2, 100, 0, 2 * Math.PI,);
CTX.fill();

