import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Text3D, Stars, Sparkles, Center } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import Box from './Box';


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

      <Center>
        <Text3D font='/font.json' size={0.3}
          curveSegments={12}
          height={.8}

        >
          My tech stack
          <meshNormalMaterial roughness={0.1} />
        </Text3D>
      </Center>

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
          environmentIntensity={0.5}
          files="/hdri-env.hdr"
        />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={4} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1} />
        </EffectComposer>

        <ambientLight intensity={0.5} />



        <Stars
          radius={100}
          depth={100}
          count={4000}
          factor={4}
          saturation={0}
          fade
          speed={0.2}
        />
        <Sparkles
          count={300}
          size={3}
          speed={0.3}
          opacity={1}
          scale={45}
          color="#fff3b0"
        />

        {isMobile ? mobileVersion : <>
          <Box isMobile={isMobile} texture='/technologies/html.jpg' position={[-horizontalSpacing, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/css.jpg' position={[-horizontalSpacing / 3, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/sass.jpg' position={[horizontalSpacing / 3, verticalSpacing, 0]} />
          <Box isMobile={isMobile} texture='/technologies/js.jpg' position={[horizontalSpacing, verticalSpacing, 0]} />

          <Center>
            <Text3D font='/font.json' size={1.1}
              height={1}
              curveSegments={12}
            >
              My tech stack
              <meshNormalMaterial roughness={0.1} />
            </Text3D>
          </Center>

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



export default Technologies;

