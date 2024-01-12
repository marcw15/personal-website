import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './3d';
export default function ThreeDModel() {
    return (
       <Canvas
          camera={{ position: [4, 0, 10.25], fov: 40 }}
          style={{
             width: '100%',
             height: '100%',
          }}
       >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
             <Model position={[0.025, -0.9, 0]} />
          </Suspense>
          <OrbitControls />
       </Canvas>
    );
 }