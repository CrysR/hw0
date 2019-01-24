function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}
//ref: https://p5js.org/reference/
function draw() {
	background(225);
	textSize(32);
	fill(180);
	let h = hour()%12;
	if (h == 0) {
		h = 12;
	}
	// ref: https://www.w3schools.com/js/js_loop_for.asp
	var i;
	let colorVar = map(hour(), 0, 23, 0, 255);
	for (i = h; i >=2; i--) { 
		fill(color(colorVar, 255, 0));
		ellipse(350, 270, 10*i+350, 10*i+350);
	}
	fill(255);
	ellipse(350, 270, 10+350, 10+350);

	line(350, 450, 350, 90);
	let m = minute();
	colorVar = map(minute(), 0, 59, 0, 255);
	for (i = 0; i <=m; i++) { 
		fill(color(0, 255, colorVar));
		ellipse(300, 125+5*i, 4, 4);
	}
	let s = second();
	colorVar = map(second(), 0, 59, 0, 255);
	for (i = 0; i <=s; i++) {
		fill(color(colorVar, 0, 255));
		ellipse(400, 125+5*i, 4, 4);
	}
}
