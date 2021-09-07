import {OrbitControls} from '@react-three/drei';
import React, {useRef} from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import s from './app.module.sass'
import {Stars} from "@react-three/drei";
import * as THREE from 'three'
import vk from './images/vk.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

function Box1() {
    const mesh = useRef(null)
    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.01)
    const linkVK = 'https://vk.com/limitlesscreator'
    const loader = new THREE.TextureLoader().load(vk)
    // const loader = new THREE.TextureLoader().load("https://threejs.org/examples/textures/uv_grid_opengl.jpg")
    return (
        <mesh position={[0, 0, 0]} onClick={() => window.open(linkVK)} ref={mesh}>
            <boxBufferGeometry attach={'geometry'}/>
            <meshLambertMaterial attach={'material'} color={'hotpink'}/>
            <meshBasicMaterial map={loader}/>
        </mesh>
    )
}

function Box2() {
    const mesh = useRef(null)
    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.02)
    const linkInstagram = 'https://www.instagram.com/_tvoy_space_/'
    const loader = new THREE.TextureLoader().load(instagram)
    return (
        <mesh position={[2, 0, 0]} onClick={() => window.open(linkInstagram)} ref={mesh}>
            <boxBufferGeometry attach={'geometry'}/>
            <meshLambertMaterial attach={'material'} color={'hotpink'}/>
            <meshBasicMaterial map={loader}/>
        </mesh>
    )
}

function Box3() {
    const mesh = useRef(null)
    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.025)
    const linkTwitter = 'https://twitter.com/_whoisdaddy'
    const loader = new THREE.TextureLoader().load(twitter)
    return (
        <mesh position={[-2, 0, 0]} onClick={() => window.open(linkTwitter)} ref={mesh}>
            <boxBufferGeometry attach={'geometry'}/>
            <meshLambertMaterial attach={'material'} color={'hotpink'}/>
            <meshBasicMaterial map={loader}/>
        </mesh>
    )
}

function Plane() {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach={'geometry'} args={[100, 100]}/>
            <meshLambertMaterial attach={'material'} color={'purple'}/>
        </mesh>
    )
}

function App() {

    return (

        <Canvas className={s.canvas}>
            <OrbitControls/>
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 15, 10]} angle={0.4}/>
            <Box1/>
            <Box2/>
            <Box3/>
        </Canvas>
    );
}

export default App;
