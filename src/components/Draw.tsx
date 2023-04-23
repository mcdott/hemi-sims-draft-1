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
        // Find the canvas element within canvasRef.current and remove it
        const canvasElement = canvasRef.current?.querySelector("canvas");
        if (canvasElement) {
          canvasElement.remove();
        }
      };
    }
  }, []);

  return (
    <div className='draw-container'>
      <div className='canvas-wrapper' ref={canvasRef}></div>
    </div>
  );
};

export default Draw;
