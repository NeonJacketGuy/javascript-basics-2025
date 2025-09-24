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


CTX.fillStyle = "black";
CTX.fillRect(0, 0, WIDTH, HEIGHT);

CTX.fillStyle = "blue";
CTX.fillRect(0, 0, 200, 600);

CTX.fillStyle = "blue";
CTX.fillRect(600, 0, 200, 600);

CTX.fillStyle = "red";
CTX.arc(WIDTH / 2, HEIGHT / 2, 100, 0, 2 * Math.PI,);
CTX.fill();

let currentTimestamp = 0;
let x = 0;
let y = 0;

function drawLoop(timestamp) {
    //CTX.clearRect(0, 0, WIDTH, HEIGHT)
    let elapsedTime = timestamp - currentTimestamp;
    currentTimestamp = timestamp;
    
    CTX.fillStyle = "green";
    CTX.fillRect(x, y, 10, 10);

    x++;
    y++;

    //console.log(elapsedTime);
    requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);

