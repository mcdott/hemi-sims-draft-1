import p5 from "p5";

const drawHemiLeft = (p: p5) => {
  let rectX = 0;
  let rectY = 0;
  let isMouseWithinCanvas = false;
  let isMouseDown = false;
  let prevX = 0;
  let prevY = 0;
  let strokeColor: p5.Color;
  let rectStrokeColor = 51; // set the stroke color of the rectangle

  interface Line {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    color: p5.Color;
  }

  // Create an empty array to store the lines that are drawn
  let lines: Line[] = [];

  // Define the colors and their positions
  let colors: { name: string; x: number; y: number }[];

  const getColorButtons = (canvasHeight: number) => [
    { name: "black", x: 50, y: canvasHeight * 0.1 },
    { name: "red", x: 50, y: canvasHeight * 0.2 },
    { name: "blue", x: 50, y: canvasHeight * 0.3 },
    { name: "green", x: 50, y: canvasHeight * 0.4 },
    { name: "yellow", x: 50, y: canvasHeight * 0.5 },
    { name: "orange", x: 50, y: canvasHeight * 0.6 },
    { name: "purple", x: 50, y: canvasHeight * 0.7 },
  ];

  // Make the canvas responsive

  p.windowResized = () => {
    let canvasWidth = Math.min(p.windowWidth, p.windowHeight);
    let canvasHeight = canvasWidth;
    if (p.windowWidth >= 768) {
      canvasWidth *= 2;
    }
    p.resizeCanvas(canvasWidth, canvasHeight);

    colors = getColorButtons(canvasHeight);
  };

  p.setup = () => {
    let canvasWidth = Math.min(p.windowWidth, p.windowHeight);
    let canvasHeight = canvasWidth;
    if (p.windowWidth >= 768) {
      canvasWidth *= 2;
    }
    p.createCanvas(canvasWidth, canvasHeight);
    colors = getColorButtons(canvasHeight);
  };

  p.draw = () => {
    p.background(220);
    p.fill(51, 51, 51);

    // Check if cursor is within canvas
    if (
      p.mouseX >= 0 &&
      p.mouseX <= p.width &&
      p.mouseY >= 0 &&
      p.mouseY <= p.height
    ) {
      isMouseWithinCanvas = true;
    } else {
      isMouseWithinCanvas = false;
    }

    // Draw color buttons
    for (let i = 0; i < colors.length; i++) {
      let c = p.color(colors[i].name);
      p.fill(c);
      p.noStroke();
      p.ellipse(colors[i].x, colors[i].y, 30, 30);
      if (p.dist(p.mouseX, p.mouseY, colors[i].x, colors[i].y) < 15) {
        strokeColor = c;
      }
    }

    // Draw all the lines that have been drawn so far
    for (let i = 0; i < lines.length; i++) {
      p.stroke(lines[i].color);
      p.strokeWeight(2);
      p.line(lines[i].startX, lines[i].startY, lines[i].endX, lines[i].endY);
    }

    // Update position of rectangle based on cursor position
    rectX = p.mouseX - 5;
    rectY = p.mouseY;

    // Draw the rectangle with charcoal grey fill and the stroke color set to rectStrokeColor
    p.fill(51, 51, 51);
    p.stroke(rectStrokeColor);
    p.strokeWeight(2);
    p.rect(rectX, 0, -rectX, p.height);

    // Check if mouse button is down
    if (isMouseDown) {
      p.stroke(strokeColor);
      p.strokeWeight(2);
      p.line(prevX, prevY, p.mouseX, p.mouseY);
      lines.push({
        startX: prevX,
        startY: prevY,
        endX: p.mouseX,
        endY: p.mouseY,
        color: strokeColor,
      });
    }

    prevX = p.mouseX;
    prevY = p.mouseY;
  };

  p.mousePressed = () => {
    if (isMouseWithinCanvas && p.mouseButton === p.LEFT) {
      isMouseDown = true;
    }
  };

  p.mouseReleased = () => {
    if (p.mouseButton === p.LEFT) {
      isMouseDown = false;
    }
  };
};

export default drawHemiLeft;
