import React from "react";
import Sketch from "react-p5";

interface Sketch1Props {}

const Sketch1: React.FC<Sketch1Props> = () => {
  let rectX = 0;
  let rectY = 0;
  let isMouseWithinCanvas = false;
  let isMouseDown = false;
  let prevX = 0;
  let prevY = 0;
  let strokeColor: any = 0;
  let rectStrokeColor = 51; // set the stroke color of the rectangle

  // Create an empty array to store the lines that are drawn
  let lines: any[] = [];

  // Define the colors and their positions
  let colors = [
    { name: "black", x: 50, y: 50 },
    { name: "red", x: 50, y: 100 },
    { name: "blue", x: 50, y: 150 },
    { name: "green", x: 50, y: 200 },
    { name: "yellow", x: 50, y: 250 },
    { name: "orange", x: 50, y: 300 },
    { name: "purple", x: 50, y: 350 },
  ];

  const setup = (p5: any, canvasParentRef: any) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5: any) => {
    p5.background(220);
    p5.fill(51, 51, 51); // Set fill color to charcoal grey

    // Check if cursor is within canvas
    if (
      p5.mouseX >= 0 &&
      p5.mouseX <= p5.width &&
      p5.mouseY >= 0 &&
      p5.mouseY <= p5.height
    ) {
      isMouseWithinCanvas = true;
    } else {
      isMouseWithinCanvas = false;
    }

    // Draw color buttons
    for (let i = 0; i < colors.length; i++) {
      let c = p5.color(colors[i].name);
      p5.fill(c);
      p5.noStroke();
      p5.ellipse(colors[i].x, colors[i].y, 30, 30); // increase button size to 30
      if (p5.dist(p5.mouseX, p5.mouseY, colors[i].x, colors[i].y) < 15) {
        // increase button hit area to 15
        strokeColor = c;
      }
    }

    // Draw all the lines that have been drawn so far
    for (let i = 0; i < lines.length; i++) {
      p5.stroke(lines[i][4]);
      p5.strokeWeight(2);
      p5.line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
    }

    // Update position of rectangle based on cursor position
    rectX = p5.mouseX - 5;
    rectY = p5.mouseY;

    // Draw the rectangle with charcoal grey fill and the stroke color set to rectStrokeColor
    p5.fill(51, 51, 51);
    p5.stroke(rectStrokeColor);
    p5.strokeWeight(2);
    p5.rect(rectX, 0, -rectX, p5.height);

    // Check if mouse button is down
    if (isMouseDown) {
      // Set stroke color and weight for the line
      p5.stroke(strokeColor);
      p5.strokeWeight(2);
      // Draw the line from the previous mouse position to the current mouse position
      p5.line(prevX, prevY, p5.mouseX, p5.mouseY);
      // Add the line to the array of lines
      lines.push([prevX, prevY, p5.mouseX, p5.mouseY, strokeColor]);
    }

    // Update the previous mouse position to the current mouse position
    prevX = p5.mouseX;
    prevY = p5.mouseY;
  };

  const mousePressed = (p5: any) => {
    if (isMouseWithinCanvas && p5.mouseButton === p5.LEFT) {
      isMouseDown = true;
    }
  };

  const mouseReleased = (p5: any) => {
    if (p5.mouseButton === p5.LEFT) {
      isMouseDown = false;
    }
  };

  const windowResized = (p5: any) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mousePressed={mousePressed}
      mouseReleased={mouseReleased}
      windowResized={windowResized}
    />
  );
};

export default Sketch1;
