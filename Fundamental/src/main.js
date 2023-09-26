import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// /**
//  * Objects
//  */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xea580c });
// const mesh = new THREE.Mesh(geometry, material);

// mesh.position.set(0.7, -0.6, 1);

// scene.add(mesh);

// /**
//  * Sizes
//  */
const sizes = {
  width: 800,
  height: 600,
};

// /**
//  * Camera
//  */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// // SCLAE
// mesh.scale.set(2, 0.5, 0.5);

// // ROATATION
// mesh.rotation.x = Math.PI * 0.5;
// mesh.rotation.y = Math.PI * 0.5;
// mesh.rotation.z = Math.PI;
// // mesh.rotation.set(0.25, 0.25, 0.25);

// GROUP

const group = new THREE.Group();

scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xd97706 })
);

cube1.position.x = 0;

group.add(cube1);

// // AXES HELPER
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  renderer.render(scene, camera);
  group.rotation.x += 0.01;
  group.rotation.y += 0.05;

  window.requestAnimationFrame(tick);
};

tick();
