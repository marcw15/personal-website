/*
auto generate gltfs to jsx with https://github.com/pmndrs/gltfjsx
npx gltfjsx@6.2.16 FactoryAnimation.gltf
auto generate without animation hook
*/

import React, { useRef, useLayoutEffect } from 'react'; // Import useLayoutEffect here
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/FactoryAnimation-transformed.glb')
    const { actions, names } = useAnimations(animations, group);

    useLayoutEffect(() => {
        names.forEach((animation) => {
            actions?.[animation]?.play();
        });
    }, [actions, names]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.texture} />
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.texture} position={[-3.635, 1.953, 0.06]} />
        <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials.texture} position={[-0.519, 3.026, -3.056]} />
        <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.texture} position={[-5.695, 3.276, 1.317]} />
        <mesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.texture} position={[-0.984, 3.714, -5.094]} />
        <mesh name="Cube010" geometry={nodes.Cube010.geometry} material={materials.texture} position={[-4.843, 4.18, -1.532]} />
        <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials.texture} position={[1.033, 1.285, -6.054]} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.texture} position={[-0.245, -0.774, 4.058]} scale={1.108} />
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials.texture} position={[2.262, -0.774, 0.005]} scale={1.108} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.texture} position={[-5.689, -0.755, 4.175]} scale={1.108} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.texture} position={[-2.502, 2.155, -2.496]} rotation={[1.527, -0.043, -0.786]} scale={2.989} />
        <mesh name="message_cloud_01" geometry={nodes.message_cloud_01.geometry} material={materials.texture} position={[-1.748, -0.755, 4.194]} scale={1.108} />
        <mesh name="message_cloud_01001" geometry={nodes.message_cloud_01001.geometry} material={materials.texture} position={[1.029, -0.755, -0.016]} scale={1.108} />
        <mesh name="message_cloud_01002" geometry={nodes.message_cloud_01002.geometry} material={materials.texture} position={[4.136, -0.755, -3.777]} scale={1.108} />
        <mesh name="message_cloud_01003" geometry={nodes.message_cloud_01003.geometry} material={materials.texture} position={[-5.689, -0.755, 4.327]} scale={1.108} />
        <mesh name="message_cloud_01004" geometry={nodes.message_cloud_01004.geometry} material={materials.texture} position={[-2.502, 2.155, -2.496]} rotation={[1.544, -0.027, -0.786]} scale={2.989} />
        <mesh name="open_mail_02" geometry={nodes.open_mail_02.geometry} material={materials.texture} position={[-3.293, -0.756, 4.236]} scale={1.108} />
        <mesh name="open_mail_02001" geometry={nodes.open_mail_02001.geometry} material={materials.texture} position={[0.015, -0.756, 0.049]} scale={1.108} />
        <mesh name="open_mail_02002" geometry={nodes.open_mail_02002.geometry} material={materials.texture} position={[4.227, -0.756, -2.452]} scale={1.108} />
        <mesh name="open_mail_02003" geometry={nodes.open_mail_02003.geometry} material={materials.texture} position={[-5.689, -0.755, 4.327]} scale={1.108} />
        <mesh name="open_mail_02004" geometry={nodes.open_mail_02004.geometry} material={materials.texture} position={[-2.112, 2.155, -2.107]} rotation={[0.955, -Math.PI / 6, -0.955]} scale={2.989} />
        <mesh name="save_02" geometry={nodes.save_02.geometry} material={materials.texture} position={[-4.677, -0.773, 4.244]} scale={1.108} />
        <mesh name="save_02001" geometry={nodes.save_02001.geometry} material={materials.texture} position={[-0.034, -0.773, 1.502]} scale={1.108} />
        <mesh name="save_02002" geometry={nodes.save_02002.geometry} material={materials.texture} position={[4.169, -0.773, -1.087]} scale={1.108} />
        <mesh name="save_02003" geometry={nodes.save_02003.geometry} material={materials.texture} position={[-5.689, -0.755, 4.175]} scale={1.108} />
        <mesh name="save_02004" geometry={nodes.save_02004.geometry} material={materials.texture} position={[-2.502, 2.155, -2.496]} rotation={[-0.955, -Math.PI / 6, -2.186]} scale={2.989} />
        <mesh name="pin_02" geometry={nodes.pin_02.geometry} material={materials.texture} position={[-0.058, -0.773, 2.872]} scale={0.824} />
        <mesh name="pin_02001" geometry={nodes.pin_02001.geometry} material={materials.texture} position={[3.535, -0.773, -0.101]} scale={0.824} />
        <mesh name="pin_02002" geometry={nodes.pin_02002.geometry} material={materials.texture} position={[-5.689, -0.755, 4.175]} scale={0.824} />
        <mesh name="pin_02003" geometry={nodes.pin_02003.geometry} material={materials.texture} position={[-2.502, 2.155, -2.496]} rotation={[-1.035, -0.472, -2.224]} scale={2.224} />
      </group>
    </group>
  )
}

useGLTF.preload('/FactoryAnimation-transformed.glb')
