const app = document.getElementById('app');
const canvas = document.createElement('canvas');

const canvasConfig = {
	id: 'tutorial',
	width: '150',
	height: '200',
};

for (var key in canvasConfig) {
	canvas.setAttribute(key, canvasConfig[key]);
}

const ctx = canvas.getContext('2d');
app.appendChild(canvas);

// ex 1
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, 150, 100);

// ex 2
// ctx.fillStyle = 'rgb(200, 0, 0)';
// ctx.fillRect(10, 10, 50, 50);
// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
// ctx.fillRect(30, 30, 50, 50);

// ex 3
const drawBox = (ctx) => {
	ctx.fillRect(25, 25, 100, 100);
	ctx.clearRect(45, 45, 60, 60);
	ctx.strokeRect(50, 50, 50, 50);
};

const drawShape = (ctx) => {
	ctx.beginPath();
	ctx.moveTo(75, 50);
	ctx.lineTo(100, 75);
	ctx.lineTo(100, 25);
	ctx.fill();
};

const drawSmile = (ctx) => {
	ctx.beginPath();
	ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
	ctx.moveTo(110, 75);
	ctx.arc(75, 75, 35, 0, Math.PI, false);
	ctx.moveTo(65, 65);
	ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
	ctx.moveTo(95, 65)
	ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
	ctx.stroke();
};

const drawShapes = (ctx) => {
	//filled triangle
	ctx.beginPath();
	ctx.moveTo(25, 25);
	ctx.lineTo(105, 25);
	ctx.lineTo(25, 105);
	ctx.fill();

	//stroked triangle
	ctx.beginPath();
	ctx.moveTo(125, 125);
	ctx.lineTo(125, 45);
	ctx.lineTo(45, 125);
	ctx.closePath();
	ctx.stroke();
};

const drawCurves = (ctx) => {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 3; j++) {
			ctx.beginPath();
			const x = 25 + j * 50;
			const y = 25 + i * 50;
			const radius = 20;
			const startAngle = 0;
			const endAngle = Math.PI + (Math.PI * j) / 2;
			const counterclockwise = i % 2 !== 0;
			ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

			if (i > 1) {
				ctx.fill();
			} else {
				ctx.stroke();
			}
		}
	}
};

const drawBubble = (ctx) => {
	ctx.beginPath();
	ctx.moveTo(75, 25);
	ctx.quadraticCurveTo(25, 25, 25, 62.5);
	ctx.quadraticCurveTo(25, 100, 50, 100);
	ctx.quadraticCurveTo(50, 120, 30, 125);
	ctx.quadraticCurveTo(60, 120, 65, 100);
	ctx.quadraticCurveTo(125, 100, 125, 62.5);
	ctx.quadraticCurveTo(125, 25, 75, 25);
	ctx.stroke();
};

drawBubble(ctx);
