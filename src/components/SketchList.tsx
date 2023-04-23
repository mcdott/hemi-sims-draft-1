import React, { useRef } from "react";
import useResizeObserver from "use-resize-observer";
import Sketch1 from "./Sketch1";

const Sketch: React.FC<{
  position: "left" | "right";
  sketchId: string;
  title: string;
  children: React.ReactNode;
}> = ({ position, sketchId, title, children }) => (
  <div
    className={`flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-8 ${
      position === "right" ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className='w-full md:w-2/3'>
      <div
        id={sketchId}
        className='w-full h-96 rounded-lg shadow-md mb-6 md:mb-0'
      >
        {children}
      </div>
    </div>
    <div className='w-full md:w-1/3'>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <p className='text-gray-700'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
);

const SketchList = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const { width, height } = useResizeObserver({ ref: sketchRef });

  return (
    <div className='container mx-auto px-4 py-12'>
      <Sketch position='left' sketchId='sketch1' title='Draw & Doodle'>
        <div ref={sketchRef}>
          {width && height && <Sketch1 width={width} height={height} />}
        </div>
      </Sketch>
      {/* ... (rest of the Sketch components) */}
    </div>
  );
};

// const SketchList = () => {
//   return (
//     <div className='container mx-auto px-4 py-12'>
//       <Sketch position='left' sketchId='sketch1' title='Draw & Doodle'>
//         <Sketch1 />
//       </Sketch>
//       {/* ... (rest of the Sketch components) */}
//     </div>
//   );
// };

// const SketchList = () => {
//   return (
//     <div className='container mx-auto px-4 py-12'>
//       <Sketch position='left' sketchId='sketch1' title='Draw & Doodle' />
//       <Sketch position='right' sketchId='sketch2' title='Play' />
//       <Sketch position='left' sketchId='sketch3' title='Read' />
//     </div>
//   );
// };

export default SketchList;
