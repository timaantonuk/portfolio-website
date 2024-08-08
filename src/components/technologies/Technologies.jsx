// import React, { useRef, useState, useEffect } from 'react'
// import { Canvas, useFrame, useLoader } from '@react-three/fiber'
// import { TextureLoader } from "three/src/loaders/TextureLoader";
//
// const horizontalSpacing = 2.61 * 1.7;
// const verticalSpacing = 1.9;
//
// function Technologies() {
//
//
//   return (
//       <Canvas camera={{ fov: 75 }}>
//         <ambientLight intensity={1.4} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={2} intensity={1} />
//         <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
//         <Box texture='/technologies/html.jpg' position={[-horizontalSpacing, verticalSpacing, 0]} />
//         <Box texture='/technologies/css.jpg' position={[-horizontalSpacing / 3, verticalSpacing, 0]} />
//         <Box texture='/technologies/sass.jpg' position={[horizontalSpacing / 3, verticalSpacing, 0]} />
//         <Box texture='/technologies/js.jpg' position={[horizontalSpacing, verticalSpacing, 0]} />
//
//         <Box texture='/technologies/react.jpg' position={[-horizontalSpacing, -verticalSpacing, 0]} />
//         <Box texture='/technologies/redux.jpg' position={[-horizontalSpacing / 3, -verticalSpacing, 0]} />
//         <Box texture='/technologies/typescript.jpg' position={[horizontalSpacing / 3, -verticalSpacing, 0]} />
//         <Box texture='/technologies/nextjs.jpg' position={[horizontalSpacing, -verticalSpacing, 0]} />
//       </Canvas>
//   )
// }
//
// function Box(props) {
//   const [colorMap] = useLoader(TextureLoader, [props.texture]);
//
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 738);
//
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 738);
//     };
//
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//
//   const meshRef = useRef()
//
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//
//   const randomSpeedX = Math.random() * 0.2;
//   const randomSpeedY = Math.random() * 0.2;
//
//   useFrame((state, delta) => {
//     meshRef.current.rotation.y += delta * randomSpeedY;
//     meshRef.current.rotation.x += delta * randomSpeedX;
//   });
//
//   return (
//
//       <mesh
//           {...props}
//           ref={meshRef}
//           scale={1}
//           onClick={(event) => setActive(!active)}
//           onPointerOver={(event) => setHover(true)}
//           onPointerOut={(event) => setHover(false)}>
//         <boxGeometry args={[1.3, 1.3, 1.3]} />
//         <meshStandardMaterial map={colorMap} color={'#ffffff'} />
//       </mesh>
//   )
// }
//
// export default Technologies
//
//
//
//
//

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";



function Technologies() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  const horizontalSpacing = isMobile ? 2.61 * 0.46  : 2.61 * 1.7;
  const verticalSpacing = isMobile ? 1.3 : 1.9;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <Canvas camera={{ fov: 75 }}>
        <ambientLight intensity={1.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={2} intensity={1} />
        <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
        <Box isMobile={isMobile} texture='/technologies/html.jpg' position={[-horizontalSpacing, verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/css.jpg' position={[-horizontalSpacing / 3, verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/sass.jpg' position={[horizontalSpacing / 3, verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/js.jpg' position={[horizontalSpacing, verticalSpacing, 0]} />

        <Box isMobile={isMobile} texture='/technologies/react.jpg' position={[-horizontalSpacing, -verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/redux.jpg' position={[-horizontalSpacing / 3, -verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/typescript.jpg' position={[horizontalSpacing / 3, -verticalSpacing, 0]} />
        <Box isMobile={isMobile} texture='/technologies/nextjs.jpg' position={[horizontalSpacing, -verticalSpacing, 0]} />
      </Canvas>
  );
}

function Box(props) {
  const [colorMap] = useLoader(TextureLoader, [props.texture]);

  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const randomSpeedX = Math.random() * 0.2;
  const randomSpeedY = Math.random() * 0.2;

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * randomSpeedY;
    meshRef.current.rotation.x += delta * randomSpeedX;
  });

  // Уменьшение масштаба куба при мобильной версии
  const scale = props.isMobile ? 0.4 : 1;

  return (
      <mesh
          {...props}
          ref={meshRef}
          scale={scale}
          onClick={() => setActive(!active)}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial map={colorMap} color={'#ffffff'} />
      </mesh>
  );
}

export default Technologies;

