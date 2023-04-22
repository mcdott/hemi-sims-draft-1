import React, { useEffect, useRef } from "react";
import p5 from "p5";
import drawHemiLeft from "../assets/draw-hemi-left";

interface DrawProps {}

const Draw: React.FC<DrawProps> = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const sketchInstance = new p5(
        (sketch: p5) => drawHemiLeft(sketch),
        canvasRef.current
      );

      return () => {
        sketchInstance.remove();
      };
    }
  }, []);

  return (
    <div className='draw-container'>
      <div className='canvas-wrapper' ref={canvasRef}></div>
      <div className='text-wrapper'>
        <h1>Draw & Doodle</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Draw;
