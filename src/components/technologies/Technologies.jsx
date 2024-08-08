import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';


function Technologies() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  const horizontalSpacing = isMobile ? 2 * 0.23 : 2.61 * 1.7;
  const verticalSpacing = isMobile ? 1.1 : 1.9;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const mobileVersion = (
    <>
      <Box isMobile={true} texture='/technologies/html.jpg' position={[-horizontalSpacing, verticalSpacing * (1.5 + .15), 0]} />
      <Box isMobile={true} texture='/technologies/css.jpg' position={[horizontalSpacing, verticalSpacing * (1.5 + .15), 0]} />

      <Box isMobile={true} texture='/technologies/sass.jpg' position={[-horizontalSpacing, verticalSpacing * 0.65, 0]} />
      <Box isMobile={true} texture='/technologies/js.jpg' position={[horizontalSpacing, verticalSpacing * 0.65, 0]} />

      <Box isMobile={true} texture='/technologies/react.jpg' position={[-horizontalSpacing, -verticalSpacing * 0.65, 0]} />
      <Box isMobile={true} texture='/technologies/redux.jpg' position={[horizontalSpacing, -verticalSpacing * 0.65, 0]} />

      <Box isMobile={true} texture='/technologies/typescript.jpg' position={[-horizontalSpacing, -verticalSpacing * (1.5 + .15), 0]} />
      <Box isMobile={true} texture='/technologies/nextjs.jpg' position={[horizontalSpacing, -verticalSpacing * (1.5 + .15), 0]} />
    </>
  );

  return (
    <Suspense>
      <Canvas camera={{ fov: isMobile ? 55 : 75 }}>
        <Environment
          files="/hdri-env.hdr"
        />
        <EffectComposer>
          <Bloom luminanceThreshold={0.3} luminanceSmoothing={1.2} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <ambientLight intensity={1.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={2} intensity={1} />
        <pointLight position={[-10, -10, -10]} decay={2} intensity={1} />
        {isMobile ? mobileVersion : <>
          <Box isMobile={isMobile} texture='/technologies/html.jpg' position={[-horizontalSpacing, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/css.jpg' position={[-horizontalSpacing / 3, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/sass.jpg' position={[horizontalSpacing / 3, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/js.jpg' position={[horizontalSpacing, verticalSpacing, 0]} />

          <Box isMobile={isMobile} texture='/technologies/react.jpg' position={[-horizontalSpacing, -verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/redux.jpg' position={[-horizontalSpacing / 3, -verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/typescript.jpg' position={[horizontalSpacing / 3, -verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/nextjs.jpg' position={[horizontalSpacing, -verticalSpacing, 0]} />
        </>
        }
      </Canvas>
    </Suspense>
  );
}

function Box({ texture, isMobile = false, ...props }) {
  const [colorMap, metalMap] = useLoader(TextureLoader, [texture, '/metalTexture.webp']);
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [initialRotation, setInitialRotation] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [rotationVelocity, setRotationVelocity] = useState({ x: 0, y: 0 });
  const [inertiaActive, setInertiaActive] = useState(false);

  const randomSpeedX = Math.random() * 0.2;
  const randomSpeedY = Math.random() * 0.2;

  useFrame((state, delta) => {
    if (isDragging) {
      setInertiaActive(false);
    } else if (inertiaActive) {
      meshRef.current.rotation.y += rotationVelocity.y * delta;
      meshRef.current.rotation.x += rotationVelocity.x * delta;

      setRotationVelocity((vel) => ({
        x: vel.x * 0.95,
        y: vel.y * 0.95
      }));

      if (Math.abs(rotationVelocity.x) < 0.001 && Math.abs(rotationVelocity.y) < 0.001) {
        setInertiaActive(false);
      }
    } else {
      if (!isMobile) {
        meshRef.current.rotation.y += delta * randomSpeedY;
        meshRef.current.rotation.x += delta * randomSpeedX;
      } else {
        meshRef.current.rotation.y += delta * randomSpeedY * 0.1;
        meshRef.current.rotation.x += delta * 0.4;
      }
    }
  });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setInitialRotation({ x: meshRef.current.rotation.x, y: meshRef.current.rotation.y });
    setRotationVelocity({ x: 0, y: 0 });
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      meshRef.current.rotation.y = initialRotation.y + deltaX * 0.01;
      meshRef.current.rotation.x = initialRotation.x + deltaY * 0.01;
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    setRotationVelocity({ x: deltaY * 0.01, y: deltaX * 0.01 });
    setInertiaActive(true);
  };

  const scale = isMobile ? 0.45 : 1;

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? scale + .3 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial roughness={0.1} metalness={1.8} metalnessMap={metalMap} map={colorMap} />
    </mesh>
  );
}

export default Technologies;

