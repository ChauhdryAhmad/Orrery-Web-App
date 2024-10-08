// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.9, 1000);
camera.position.set(0, 15, 15);
camera.rotation.x = THREE.Math.degToRad(15);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement); // Initialize controls



backgroung_loader();

let sun = sun_loader();

let mercuryOrbit = mercury_loader();
addOrbitPath(5, 5.2, 0x9700ff);

let venusOrbit = venus_loader();
addOrbitPath(9, 9.2, 0xffb600);

let earthOrbit = earth_loader();
addOrbitPath(14, 14.3, 0x00ecff);

let marsOrbit = mars_loader();
addOrbitPath(21, 21.3, 0xff8300);

let jupiterOrbit = jupiter_loader();
addOrbitPath(51, 51.4, 0xa75600);

let saturnOrbit = saturn_loader();
addOrbitPath(70, 70.4, 0xfefa00);

let uranusOrbit = uranus_loader();
addOrbitPath(92, 92.5, 0x00fec0);

let neptureOrbit = nepture_loader();
addOrbitPath(115, 115.5, 0x009afe);

let blackhole = blackhole_loader();



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
    mercuryOrbit.mercuryOrbit.rotation.y += 0.00713954; 

    venusOrbit.venusOrbit.rotation.y += 0.0027925268; 

    earthOrbit.earthOrbit.rotation.y += 0.0017214206;  

    marsOrbit.marsOrbit.rotation.y += 0.0017214206;

    jupiterOrbit.jupiterOrbit.rotation.y += 0.0001450077;

    saturnOrbit.saturnOrbit.rotation.y += 0.0000583993;

    uranusOrbit.uranusOrbit.rotation.y += 0.0000204751;

    neptureOrbit.neptureOrbit.rotation.y += 0.0000104389;  // Neptune's orbit: Rotate the neptuneOrbit around the sun



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

    const mercuryGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
    const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

    // Create an Object3D to represent Mercury's orbit
    const mercuryOrbit = new THREE.Object3D();
    mercuryOrbit.add(mercury);
    scene.add(mercuryOrbit);

    // Set Mercury's initial position along its orbit (distance from the sun)
    mercury.position.x = 5;

    return {mercuryOrbit, mercury};
}

// Venus Load
function venus_loader() {
    const textureLoader = new THREE.TextureLoader();
    const venusTexture = textureLoader.load('assets/venus.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const venusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    const venusOrbit = new THREE.Object3D();
    venusOrbit.add(venus);
    scene.add(venusOrbit);
    venus.position.x = -9;
    return {venusOrbit, venus};
}

// Earth Load
function earth_loader() {
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/earth.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const earthGeometry = new THREE.SphereGeometry(1.3, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    const earthOrbit = new THREE.Object3D();
    earthOrbit.add(earth);
    scene.add(earthOrbit);
    earth.position.x = 14;
    return {earthOrbit, earth};
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
    mars.position.x = -21;
    return {marsOrbit, mars};
}

// Jupiter Load
function jupiter_loader() {
    const textureLoader = new THREE.TextureLoader();
    const jupiterTexture = textureLoader.load('assets/jupiter.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const jupiterGeometry = new THREE.SphereGeometry(7, 32, 32);
    const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
    const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

    const jupiterOrbit = new THREE.Object3D();
    jupiterOrbit.add(jupiter);
    scene.add(jupiterOrbit);
    jupiter.position.x = 51;
    return {jupiterOrbit, jupiter};
}

// Saturn Load
function saturn_loader() {
    const textureLoader = new THREE.TextureLoader();
    const saturnTexture = textureLoader.load('assets/saturn.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const saturnGeometry = new THREE.SphereGeometry(5, 32, 32);
    const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

    const saturnOrbit = new THREE.Object3D();
    saturnOrbit.add(saturn);
    scene.add(saturnOrbit);
    saturn.position.x = -70;
    return {saturnOrbit, saturn};
}

// Uranus Load
function uranus_loader() {
    const textureLoader = new THREE.TextureLoader();
    const uranusTexture = textureLoader.load('assets/uranus.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const uranusGeometry = new THREE.SphereGeometry(4.5, 32, 32);
    const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });
    const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);

    const uranusOrbit = new THREE.Object3D();
    uranusOrbit.add(uranus);
    scene.add(uranusOrbit);
    uranus.position.x = 92;
    return {uranusOrbit, uranus};
}

// Nepture Load
function nepture_loader() {
    const textureLoader = new THREE.TextureLoader();
    const neptureTexture = textureLoader.load('assets/neptune.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const neptureGeometry = new THREE.SphereGeometry(4.2, 32, 32);
    const neptureMaterial = new THREE.MeshBasicMaterial({ map: neptureTexture });
    const nepture = new THREE.Mesh(neptureGeometry, neptureMaterial);

    const neptureOrbit = new THREE.Object3D();
    neptureOrbit.add(nepture);
    scene.add(neptureOrbit);
    nepture.position.x = -115;
    
    return {neptureOrbit, nepture};
}

function addOrbitPath(x, y, color) {
    const orbitGeometry = new THREE.RingGeometry(x, y, 100); // Adjust size to match the orbit
    const orbitMaterial = new THREE.MeshBasicMaterial({
        color: color, 
        side: THREE.DoubleSide 
    });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2; // Rotate the orbit to lie flat
    scene.add(orbit);
}

function blackhole_loader() {
    const textureLoader = new THREE.TextureLoader();
    const blackholeTexture = textureLoader.load('assets/blackhole.jpg', (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.getMaxAnisotropy();
    });
    const blackholeGeometry = new THREE.SphereGeometry(7.2, 32, 32);
    const blackholeMaterial = new THREE.MeshBasicMaterial({ map: blackholeTexture });
    const blackhole = new THREE.Mesh(blackholeGeometry, blackholeMaterial);

    // const blackholeOrbit = new THREE.Object3D();
    // blackholeOrbit.add(blackhole);
    scene.add(blackhole);
    blackhole.position.x = -100;
    blackhole.position.y = 110;
    
    return blackhole;
}


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Add an event listener for mouse clicks
window.addEventListener('click', onMouseClick, false);

// Function to handle the mouse click
function onMouseClick(event) {
    // Convert mouse coordinates to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the current camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections between the ray and the black hole
    const blackhole_intersect = raycaster.intersectObject(blackhole);

    if (blackhole_intersect.length > 0) {
        window.location.href = 'blackhole.html';
    }

    const mercury = raycaster.intersectObject(mercuryOrbit.mercury);

    if (mercury.length > 0) {
        
        window.location.href = 'solar-system/mercury.html';
    }

    const venus = raycaster.intersectObject(venusOrbit.venus);

    if (venus.length > 0) {
        window.location.href = 'solar-system/venus.html';
    }

    const earth = raycaster.intersectObject(earthOrbit.earth);

    if (earth.length > 0) {
        window.location.href = 'solar-system/earth.html';
    }

    const mars = raycaster.intersectObject(marsOrbit.mars);

    if (mars.length > 0) {
        window.location.href = 'solar-system/mars.html';
    }

    const jupiter = raycaster.intersectObject(jupiterOrbit.jupiter);

    if (jupiter.length > 0) {
        window.location.href = 'solar-system/jupiter.html';
    }

    const saturn = raycaster.intersectObject(saturnOrbit.saturn);

    if (saturn.length > 0) {
        window.location.href = 'solar-system/saturn.html';
    }

    const uranus = raycaster.intersectObject(uranusOrbit.uranus);

    if (uranus.length > 0) {
        window.location.href = 'solar-system/uranus.html';
    }

    const nepture = raycaster.intersectObject(neptureOrbit.nepture);

    if (nepture.length > 0) {
        window.location.href = 'solar-system/neptune.html';
    }

    const sun_in = raycaster.intersectObject(sun);

    if (sun_in.length > 0) {
        window.location.href = 'solar-system/sun.html';
    }

}