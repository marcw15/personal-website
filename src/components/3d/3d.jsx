/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Version: npx gltfjsx@6.2.16
*/
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

export function Model(props) {
  const { nodes, materials } = useGLTF('/3d.glb');

  // Function to create a ref with specific settings for pulsation animation
  const createMeshRef = (params) => {
    const meshRef = useRef();

    // Function to handle the pulsation animation for the specific mesh
    const pulseAnimation = (time) => {
      const scaleValue = 1 + Math.sin((time / params.duration) * Math.PI * 2) * params.scale;
      meshRef.current.scale.set(scaleValue, scaleValue, scaleValue);
    };

    // Use the useFrame hook to update the animation on each frame for the specific mesh
    useFrame(({ clock }) => {
      pulseAnimation(clock.elapsedTime);
    });

    // Use useEffect to add a delay to the pulsation animation for the specific mesh
    useEffect(() => {
      const delayTimeout = setTimeout(() => {
        // Start pulsation animation after the delay
        meshRef.current.scale.set(1, 1, 1); // Reset scale before starting animation
      }, params.delay * 1000);

      // Clear the timeout on component unmount
      return () => clearTimeout(delayTimeout);
    }, [params.delay]);

    return meshRef;
  };


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.texture} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.texture} position={[-4.636, 0, 4.709]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.texture} position={[4.193, 0.17, -4.147]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.texture} position={[-2.284, 2.155, -2.278]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.texture} position={[-2.211, -0.138, -2.205]} />
      <mesh geometry={nodes.Cube001.geometry} ref={createMeshRef({ scale: .1, duration: 5, delay: 0 })} material={materials.texture} position={[-3.635, 1.953, 0.06]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.texture} position={[-0.703, 0.699, -2.872]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.texture} position={[-0.519, 3.026, -3.056]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.texture} position={[-5.695, 3.276, 1.317]} />
      <mesh geometry={nodes.Cube009.geometry} ref={createMeshRef({ scale: .2, duration: 7, delay: 0 })} material={materials.texture} position={[-0.984, 3.714, -5.094]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials.texture} position={[-4.843, 4.18, -1.532]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials.texture} position={[-3.991, 5.012, -3.225]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials.texture} position={[1.033, 1.285, -6.054]} />
      <mesh geometry={nodes.cables.geometry}  material={materials.texture} position={[-1.261, -0.961, 1.021]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.texture} position={[-4.636, 0, 4.709]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials.texture} position={[-4.636, 0, 4.709]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials.texture} position={[2.262, -0.774, 0.005]} />
      <mesh geometry={nodes.Cube015.geometry} material={materials.texture} position={[-5.708, -0.683, 4.219]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials.texture} position={[4.198, -0.683, -5.216]} />
      <mesh geometry={nodes.pin_01.geometry} material={materials.texture} position={[3.535, -0.773, -0.101]} />
      <mesh geometry={nodes.save_00.geometry} material={materials.texture} position={[4.169, -0.773, -1.087]} />
      <mesh geometry={nodes.open_mail_00.geometry} material={materials.texture} position={[4.227, -0.756, -2.452]} />
      <mesh geometry={nodes.message_cloud_00.geometry} material={materials.texture} position={[1.029, -0.755, -0.016]} />
      <mesh geometry={nodes.open_mail_01.geometry} material={materials.texture} position={[0.015, -0.756, 0.049]} />
      <mesh geometry={nodes.save_01.geometry} material={materials.texture} position={[-0.034, -0.773, 1.502]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.texture} position={[-0.245, -0.774, 4.058]} />
      <mesh geometry={nodes.message_cloud_01.geometry} material={materials.texture} position={[-1.748, -0.755, 4.194]} />
      <mesh geometry={nodes.open_mail_02.geometry} material={materials.texture} position={[-3.293, -0.756, 4.236]} />
      <mesh geometry={nodes.message_cloud_02.geometry} material={materials.texture} position={[4.136, -0.755, -3.777]} />
      <mesh geometry={nodes.save_02.geometry} material={materials.texture} position={[-4.677, -0.773, 4.244]} />
      <mesh geometry={nodes.pin_02.geometry} material={materials.texture} position={[-0.058, -0.773, 2.872]} />
    </group>
  )
}

useGLTF.preload('/3d.glb')
