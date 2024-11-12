// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;



import { Html, useProgress } from '@react-three/drei'
import { progress } from 'framer-motion'
import React from 'react'


const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className="canvas_load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(1)}%</p>
    </Html>
  )
}

export default Loader
