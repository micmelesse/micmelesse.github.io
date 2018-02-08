var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var renderer = new THREE.WebGLRenderer();
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0xff0000
});
renderer.setSize( window.innerWidth, window.innerHeight )
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

document.body.appendChild(renderer.domElement);
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}
animate();
