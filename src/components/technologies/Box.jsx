import { useDrag } from '@use-gesture/react'
import { useSpring } from 'framer-motion';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';


export default function Box({ texture, isMobile = false, ...props }) {
    const [colorMap, metalMap] = useLoader(TextureLoader, [texture, '/metalTexture.webp']);
    const [isDragging, setIsDragging] = useState(false);
    const meshRef = useRef();
    const [active, setActive] = useState(false);

    const rotationX = useSpring(0);
    const rotationY = useSpring(0);

    const bind = useDrag(({ down, movement: [mx, my], velocity }) => {
        if (down) {
            setIsDragging(true);

            rotationX.set(my * 0.01);
            rotationY.set(mx * 0.01);
        } else {
            rotationX.set(Math.random() * Math.PI * 0.01);
            rotationY.set(Math.random() * Math.PI * 0.01);

        }
        if (isDragging)
            setTimeout(() => {
                setIsDragging(false);
            }, 500);
    });



    const randomSpeedX = Math.random() * 0.2;
    const randomSpeedY = Math.random() * 0.2;

    useFrame((_, delta) => {
        if (meshRef.current && isDragging) {
            meshRef.current.rotation.x = rotationX.get();
            meshRef.current.rotation.y = rotationY.get();
        } else if (!isMobile) {
            meshRef.current.rotation.y += delta * randomSpeedY;
            meshRef.current.rotation.x += delta * randomSpeedX;
        } else {
            meshRef.current.rotation.y += delta * randomSpeedY * 0.1;
            meshRef.current.rotation.x += delta * 0.4;
        }
    });

    const scale = isMobile ? 0.45 : 1;

    return (
        <mesh
            {...props}
            {...bind()}
            ref={meshRef}
            scale={active ? scale + 0.09 : scale}
            onClick={() => setActive(!active)}
        >
            <boxGeometry args={[1.3, 1.3, 1.3]} />
            <meshStandardMaterial roughness={0.1} metalness={1.5} map={colorMap} />
        </mesh>
    );
}