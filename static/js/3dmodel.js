var canvas = document.getElementById("canvas");
//SCÉNA
var height = 500; //NEAR
var width = 500; //FAR
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(95, height / width, 0.1, 1000); //KAMERA
//POZADÍ
var renderer = new THREE.WebGLRenderer({ canvas: canvas }, { antialias: true }); //ANTIALIAZING
renderer.setClearColor("#ffffff");
renderer.setSize(width, height);
scene.background = new THREE.Color(0xffffff); //0xaaaaaa BARVA
//SVĚTLA
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.intensity = 0.2;
scene.add(directionalLight);
directionalLight.position.set(1, 1, 1);
var directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.intensity = 0.2;
scene.add(directionalLight2);
directionalLight2.position.set(-1, -1, -1);
//SOUŘADNICE KAMERA
var controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.x = 13;
camera.position.z = 14;
camera.position.y = 6;
controls.update();

//#########################PRVNÍ ANIMACE#########################
//PROMĚNNÉ
//scene.remove.apply(scene, scene.children);
function removeEntity(object) {
    //var selectedObject = scene.getObjectByName(object.name);
    scene.remove(object);
    //animate();
}

var m,
    mixer,
    loader = new THREE.FBXLoader();
var model1;
var model2;

//NAČTE SE MODEL

loader.load("/static/models/PC1.fbx", function(model) {
    model1 = model;
    model1.position.set(0, -10, 0);
});

function animationOne() {
    m = model1;
    scene.add(model1);
    mixer = new THREE.AnimationMixer(model1);
    startAnim("Cylinder|CylinderAction");
    //FRAMES
    function animate() {
        //This is gone create loop that makes the renderer draw the scene everytime the screen is refreshed for typical monitor 60 frames per secund
        requestAnimationFrame(animate);
        controls.update();
        if (mixer) {
            mixer.update(0.01);
        }
        renderer.render(scene, camera);
    }
    animate();

    function anim1() {
        startAnim("Cube.003|Cube.003Action.001", true, 1);
        startAnim("Cylinder.001|Cylinder.001Action");
    }
    anim1();

    function startAnim(name, clamp = false, repetitions) {
        var clips = model1.animations;
        var clip = THREE.AnimationClip.findByName(clips, name);
        var action = mixer.clipAction(clip);
        action.clampWhenFinished = clamp;
        if (repetitions !== undefined) action.repetitions = repetitions;
        action.play();
    }
}
/*
//#########################DRUHÁ ANIMACE(HARDWARE_ROZLOŽENÍ-POVEDENÁ)#########################
//LOKÁLNÍ PROMĚNNÉ
//scene.remove.apply(scene, scene.children);
var m;
var mixer;
var loader = new THREE.FBXLoader();
//NAČTE SE MODEL
loader.load("/static/models/PC2.fbx", function(model) {
    scene.add(model);
    m = model;
    m.position.set(0, -10, 0);
    mixer = new THREE.AnimationMixer(m);
    //startAnim("Cylinder|CylinderAction");
    startAnim("Cube|CubeAction");
    startAnim("Plane|PlaneAction");
});
//FRAMES
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    if (mixer) {
        mixer.update(0.01);
    }
    renderer.render(scene, camera);
}
animate();

function anim1() {
    startAnim("Cube.142|Cube.142Action.001");
    startAnim("Cube.099|Cube.099Action.001");
    startAnim("Plane.162|Plane.162Action.001");
    startAnim("Plane.160|Plane.160Action.001");
    startAnim("Plane.161|Plane.161Action.001");
    startAnim("Plane.124|Plane.124Action.001");
    startAnim("Plane.164|Plane.164Action.001");
    startAnim("Cube.137|Cube.137Action.002");
    startAnim("Cube.138|Cube.138Action.001");
    startAnim("Cube.140|Cube.140Action.001");
}

function startAnim(name, clamp = false, repetitions) {
    var clips = m.animations;
    var clip = THREE.AnimationClip.findByName(clips, name);
    var action = mixer.clipAction(clip);
    action.clampWhenFinished = clamp;
    if (repetitions !== undefined) action.repetitions = repetitions;
    action.play();
}
*/

loader.load("/static/models/PC3.fbx", function(model) {
    model2 = model;
    model2.position.set(0, -10, 0);
});

function animationTwo() {
    m = model2;
    scene.add(model2);
    mixer = new THREE.AnimationMixer(model2);

    function startAnim(name, clamp = false, repetitions) {
        var clips = model2.animations;
        var clip = THREE.AnimationClip.findByName(clips, name);
        var action = mixer.clipAction(clip);
        action.clampWhenFinished = clamp;
        if (repetitions !== undefined) action.repetitions = repetitions;
        action.play();
    }
    //startAnim("Cylinder|CylinderAction");
    //#########################TŘETÍ ANIMACE(MYŠ)#########################
    //LOKÁLNÍ PROMĚNNÉ
    //scene.remove.apply(scene, scene.children);

    //NAČTE SE MODEL

    //FRAMES
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        if (mixer) {
            mixer.update(0.01);
        }
        renderer.render(scene, camera);
    }
    animate();
    //ANIMACE MYŠI
    function anim3() {
        startAnim("Cylinder.002|Cylinder.002Action.002");
    }
    anim3();
    //CLIP
}