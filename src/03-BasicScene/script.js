// import React from 'react';
import s from '../style.sass'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'hsl(800, 80%, 50%)'})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'red'})
)
cube2.position.x = -2
cube3.position.x = 2

// cube1.position.z = -1
// cube2.position.z = -1
// cube3.position.z = -1

group.add(cube1,cube2,cube3)
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

// Axes helper
const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)
scene.add(axesHelper)


//Sized
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 1
scene.add(camera)
// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position))
// console.log(mesh.position.normalize())
// console.log(mesh.position.length())

// // Purple cube
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({color: 'hsl(270, 50%, 50%)'})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
//
//
// // Scale
// mesh.scale.set(2,0.5,0.5)
//
// // Rotation
// mesh.rotation.set(Math.PI * 0.25,Math.PI * 0.25,0)
//
// //Position
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// mesh.position.set(0.7, -0.6, 1)



//Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    // canvas: canvas
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
