// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement); // Initialize controls

backgroung_loader();

let sun = sun_loader();

let mercuryOrbit = mercury_loader();
addOrbitPath(5, 5.05);

let venusOrbit = venus_loader();
addOrbitPath(7, 7.05);

let earthOrbit = earth_loader();
addOrbitPath(10, 10.05);

let marsOrbit = mars_loader();
addOrbitPath(13, 13.05);

let jupiterOrbit = jupiter_loader();
addOrbitPath(16, 16.05);

let saturnOrbit = saturn_loader();
addOrbitPath(20, 20.05);

let uranusOrbit = uranus_loader();
addOrbitPath(24, 24.05);

let neptureOrbit = nepture_loader();
addOrbitPath(28, 28.05);

// Add a point light to simulate sunlight
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 0, 0); // Position the light at the sun
scene.add(pointLight);

// Optionally, add a light helper to visualize the light's position
const lightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(lightHelper);

// Position the camera
camera.position.z = 15;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the sun for some motion effect (optional)
    sun.rotation.y += 0.001;

    // Mercury's orbit: Rotate the mercuryOrbit around the sun
    mercuryOrbit.rotation.y += 0.03; 

    venusOrbit.rotation.y += 0.02; 

    earthOrbit.rotation.y += 0.01;  

    marsOrbit.rotation.y += 0.01;

    jupiterOrbit.rotation.y += 0.005;

    saturnOrbit.rotation.y += 0.004;

    uranusOrbit.rotation.y += 0.003;

    neptureOrbit.rotation.y += 0.002;  // Neptune's orbit: Rotate the neptuneOrbit around the sun

    // Update the controls
    controls.update(); // Only required if controls.enableDamping = true, or if controls.autoRotate = true

    renderer.render(scene, camera);
}

animate();

// Make the canvas responsive
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Background
function backgroung_loader() {
    const textureLoader = new THREE.TextureLoader();
    const bgTexture = textureLoader.load('assets/space.jpg', (texture) => {
        scene.background = texture; // Set the background texture
    });
}

// Sun Load
function sun_loader() {
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load('assets/sun.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });

    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);

    scene.add(sun);
    return sun;
}

// Mercury Load
function mercury_loader() {
    const textureLoader = new THREE.TextureLoader();
    const mercuryTexture = textureLoader.load('assets/mercury.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });

    const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    // Create an Object3D to represent Mercury's orbit
    const mercuryOrbit = new THREE.Object3D();
    mercuryOrbit.add(mercury);
    scene.add(mercuryOrbit);

    // Set Mercury's initial position along its orbit (distance from the sun)
    mercury.position.x = 5;

    return mercuryOrbit;
}

// Venus Load
function venus_loader() {
    const textureLoader = new THREE.TextureLoader();
    const venusTexture = textureLoader.load('assets/venus.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const venusGeometry = new THREE.SphereGeometry(0.7, 32, 32);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const venusOrbit = new THREE.Object3D();
    venusOrbit.add(venus);
    scene.add(venusOrbit);
    venus.position.x = 7;
    return venusOrbit;
}

// Earth Load
function earth_loader() {
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/earth.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    const earthOrbit = new THREE.Object3D();
    earthOrbit.add(earth);
    scene.add(earthOrbit);
    earth.position.x = 10;
    return earthOrbit;
}

// Mars Load
function mars_loader() {
    const textureLoader = new THREE.TextureLoader();
    const marsTexture = textureLoader.load('assets/mars.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const marsGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);

    const marsOrbit = new THREE.Object3D();
    marsOrbit.add(mars);
    scene.add(marsOrbit);
    mars.position.x = 13;
    return marsOrbit;
}

// Jupiter Load
function jupiter_loader() {
    const textureLoader = new THREE.TextureLoader();
    const jupiterTexture = textureLoader.load('assets/jupiter.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const jupiterGeometry = new THREE.SphereGeometry(2, 32, 32);
    const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

    const jupiterOrbit = new THREE.Object3D();
    jupiterOrbit.add(jupiter);
    scene.add(jupiterOrbit);
    jupiter.position.x = 16;
    return jupiterOrbit;
}

// Saturn Load
function saturn_loader() {
    const textureLoader = new THREE.TextureLoader();
    const saturnTexture = textureLoader.load('assets/saturn.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const saturnGeometry = new THREE.SphereGeometry(2, 32, 32);
    const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    const saturnOrbit = new THREE.Object3D();
    saturnOrbit.add(saturn);
    scene.add(saturnOrbit);
    saturn.position.x = 20;
    return saturnOrbit;
}

// Uranus Load
function uranus_loader() {
    const textureLoader = new THREE.TextureLoader();
    const uranusTexture = textureLoader.load('assets/uranus.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const uranusGeometry = new THREE.SphereGeometry(2, 32, 32);
    const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

    const uranusOrbit = new THREE.Object3D();
    uranusOrbit.add(uranus);
    scene.add(uranusOrbit);
    uranus.position.x = 24;
    return uranusOrbit;
}

// Nepture Load
function nepture_loader() {
    const textureLoader = new THREE.TextureLoader();
    const neptureTexture = textureLoader.load('assets/neptune.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const neptureGeometry = new THREE.SphereGeometry(2, 32, 32);
    const neptureMaterial = new THREE.MeshBasicMaterial({ map: neptureTexture });
    const nepture = new THREE.Mesh(neptureGeometry, neptureMaterial);

    const neptureOrbit = new THREE.Object3D();
    neptureOrbit.add(nepture);
    scene.add(neptureOrbit);
    nepture.position.x = 28;
    return neptureOrbit;
}


// Optional: Create a visible orbit for Mercury
function addOrbitPath(x, y) {
    const orbitGeometry = new THREE.RingGeometry(x, y, 64); // Adjust size to match the orbit
    const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff, 
        side: THREE.DoubleSide 
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2; // Rotate the orbit to lie flat
    scene.add(orbit);
}

