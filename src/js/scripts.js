import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import nebula from '../img/nebula.jpg';
import stars from '../img/stars.jpg';
import ludo from '../img/Ludo.jpg';
import snake from '../img/snake.jpg';
import one from '../img/1.png';
import two from '../img/2.png';
import three from '../img/3.png';
import four from '../img/4.png';
import five from '../img/5.png';
import six from '../img/6.png';
import redone from '../img/red1.png';
import redtwo from '../img/red2.png';
import redthree from '../img/red3.png';
import redfour from '../img/red4.png';
import redfive from '../img/red5.png';
import redsix from '../img/red6.png';




import { CanvasTexture } from 'three';
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();


/*********  Camera  **********/
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-10, 30, 30);

orbit.update();



/*********  PlaneGeometry  **********/
var arr = [
    ludo,
    snake
];
var textureToShow = 0;
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xeba6f5,
    side: THREE.DoubleSide,
    map: new THREE.TextureLoader().load(arr[textureToShow]) // texture as a map for material
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;


/*********  Angle Shadow  **********/
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-100, 100, 0);
spotLight.castShadow = true;
spotLight.angle = 0.2;
const sLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(sLightHelper);

/*********  Fog  **********/
scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);



/**************  Back Ground  ****************/
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    nebula,
    nebula,
    stars,
    stars,
    stars,
    stars
]);



/**************  Animated Rotate Dice  ****************/
const textureLoader = new THREE.TextureLoader();
const rotateDiceGeometry = new THREE.BoxGeometry(2, 2, 2);
const rotateDiceMultiMaterial = [
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redone) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redtwo) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redthree) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redfour) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redfive) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(redsix) })
];
const rotateDice1 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice1.castShadow = true;
scene.add(rotateDice1);
rotateDice1.position.set(30, 15, 10);

const rotateDice2 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice2.castShadow = true;
scene.add(rotateDice2);
rotateDice2.position.set(-50, -5, 10);

const rotateDice3 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice3.castShadow = true;
scene.add(rotateDice3);
rotateDice3.position.set(-30, 15, -22);

const rotateDice4 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice4.castShadow = true;
scene.add(rotateDice4);
rotateDice4.position.set(47, 15, -10);

const rotateDice5 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice5.castShadow = true;
scene.add(rotateDice5);
rotateDice5.position.set(-150, 15, 10);
rotateDice5.rotation.z = -0.5 * Math.PI;

const rotateDice6 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice6.castShadow = true;
scene.add(rotateDice6);
rotateDice6.position.set(-15, -22, -10);
rotateDice6.rotation.z = -0.5 * Math.PI;

const rotateDice7 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice7.castShadow = true;
scene.add(rotateDice7);
rotateDice7.position.set(26, 86, 32);
rotateDice7.rotation.y = -0.5 * Math.PI;

const rotateDice8 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice8.castShadow = true;
scene.add(rotateDice8);
rotateDice8.position.set(-52, -67, -22);
rotateDice8.rotation.y = +0.5 * Math.PI;

const rotateDice9 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice9.castShadow = true;
scene.add(rotateDice9);
rotateDice9.position.set(0, -48, 2 - 5);
rotateDice9.rotation.y = +0.5 * Math.PI;

const rotateDice10 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice10.castShadow = true;
scene.add(rotateDice10);
rotateDice10.position.set(10, 10, 70);

const rotateDice11 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice11.castShadow = true;
scene.add(rotateDice11);
rotateDice11.position.set(10, 10, -40);


const rotateDice12 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice12.castShadow = true;
scene.add(rotateDice12);
rotateDice12.position.set(0, 0, 35);

const rotateDice13 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice13.castShadow = true;
scene.add(rotateDice13);
rotateDice13.position.set(30, 80, -35);


const rotateDice14 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice14.castShadow = true;
scene.add(rotateDice14);
rotateDice14.position.set(-18, 30, 16);

const rotateDice15 = new THREE.Mesh(rotateDiceGeometry, rotateDiceMultiMaterial);
rotateDice15.castShadow = true;
scene.add(rotateDice15);
rotateDice15.position.set(30, -20, 30);

const sphere2Geometry = new THREE.SphereGeometry(4);

// const vShader = `
//     void main() {
//         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//     }
// `;

// const fShader = `
//     void main() {
//         gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
//     }
// `;

// const sphere2Material = new THREE.ShaderMaterial({
//     vertexShader: document.getElementById('vertexShader').textContent,
//     fragmentShader: document.getElementById('fragmentShader').textContent
// });
// const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
// scene.add(sphere2);
// sphere2.position.set(-97, 50, 0);


/**************   Dice  ****************/

const diceGeometry = new THREE.BoxGeometry(2, 2, 2);
const diceMultiMaterial = [
    new THREE.MeshStandardMaterial({ map: textureLoader.load(one) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(two) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(three) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(four) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(five) }),
    new THREE.MeshStandardMaterial({ map: textureLoader.load(six) })
];
const dice = new THREE.Mesh(diceGeometry, diceMultiMaterial);
dice.castShadow = true;
scene.add(dice);
dice.position.set(0, 5, 0);



/*******************    Score Board   **************/
const scoreBoardGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const scoreBoardMaterial = new THREE.MeshBasicMaterial({
    color: 0xDA982A,
    side: THREE.DoubleSide,
    //map: new THREE.TextureLoader().load(scoreboard), // texture as a map for material
    wireframe: true
});
const scoreBoard = new THREE.Mesh(scoreBoardGeometry, scoreBoardMaterial);
scoreBoard.castShadow = true;
scene.add(scoreBoard);
scoreBoard.position.set(-20, 10, -10);
scoreBoard.rotation.y = -0.5 * Math.PI;
scoreBoard.geometry.attributes.position.array[0] -= 10 * Math.random();
scoreBoard.geometry.attributes.position.array[1] -= 10 * Math.random();
scoreBoard.geometry.attributes.position.array[2] -= 10 * Math.random();
const lastPointZ = scoreBoard.geometry.attributes.position.array.length - 1;
scoreBoard.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random();




/*******************    Yellow Token   **************/
const yellowToken1geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const yellowToken1material = new THREE.MeshStandardMaterial({
    color: 0xDA982A,
    wireframe: false
});
const yellowToken1torus = new THREE.Mesh(yellowToken1geometry, yellowToken1material);
scene.add(yellowToken1torus);
yellowToken1torus.position.set(8.8, 1, 11.3);
yellowToken1torus.rotation.x = -0.5 * Math.PI;
yellowToken1torus.castShadow = true;

const yellowToken2geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const yellowToken2material = new THREE.MeshStandardMaterial({
    color: 0xDA982A,
    wireframe: false
});
const yellowToken2torus = new THREE.Mesh(yellowToken2geometry, yellowToken2material);
scene.add(yellowToken2torus);
yellowToken2torus.position.set(-2, 1, 12);
yellowToken2torus.rotation.x = -0.5 * Math.PI;
yellowToken2torus.castShadow = true;

const yellowToken3geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const yellowToken3material = new THREE.MeshStandardMaterial({
    color: 0xDA982A,
    wireframe: false
});
const yellowToken3torus = new THREE.Mesh(yellowToken3geometry, yellowToken3material);
scene.add(yellowToken3torus);
yellowToken3torus.position.set(12, 1, 2);
//yellowToken3torus.position.set(10, 1,0);
yellowToken3torus.rotation.x = -0.5 * Math.PI;
yellowToken3torus.castShadow = true;

const yellowToken4geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const yellowToken4material = new THREE.MeshStandardMaterial({
    color: 0xDA982A,
    wireframe: false
});
const yellowToken4torus = new THREE.Mesh(yellowToken4geometry, yellowToken4material);
scene.add(yellowToken4torus);
yellowToken4torus.position.set(14, 1, 0);
yellowToken4torus.rotation.x = -0.5 * Math.PI;
yellowToken4torus.castShadow = true;



/*******************    Red Token   **************/
const redToken1geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const redToken1material = new THREE.MeshStandardMaterial({
    color: 0xC22E1F,
    wireframe: false
});
const redToken1torus = new THREE.Mesh(redToken1geometry, redToken1material);
scene.add(redToken1torus);
redToken1torus.position.set(-2, 1, 0);
redToken1torus.rotation.x = -0.5 * Math.PI;
redToken1torus.castShadow = true;

const redToken2geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const redToken2material = new THREE.MeshStandardMaterial({
    color: 0xC22E1F,
    wireframe: false
});
const redToken2torus = new THREE.Mesh(redToken2geometry, redToken2material);
scene.add(redToken2torus);
redToken2torus.position.set(-12, 1, -2);
redToken2torus.rotation.x = -0.5 * Math.PI;
redToken2torus.castShadow = true;

const redToken3geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const redToken3material = new THREE.MeshStandardMaterial({
    color: 0xC22E1F,
    wireframe: false
});
const redToken3torus = new THREE.Mesh(redToken3geometry, redToken3material);
scene.add(redToken3torus);
redToken3torus.position.set(2, 1, 4);
redToken3torus.rotation.x = -0.5 * Math.PI;
redToken3torus.castShadow = true;

const redToken4geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const redToken4material = new THREE.MeshStandardMaterial({
    color: 0xC22E1F,
    wireframe: false
});
const redToken4torus = new THREE.Mesh(redToken4geometry, redToken4material);
scene.add(redToken4torus);
redToken4torus.position.set(2, 1, -12);
redToken4torus.rotation.x = -0.5 * Math.PI;
redToken4torus.castShadow = true;



/*******************    Green Token   **************/
const greenToken1geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const greenToken1material = new THREE.MeshStandardMaterial({
    color: 0x377454,
    wireframe: false
});
const greenToken1torus = new THREE.Mesh(greenToken1geometry, greenToken1material);
scene.add(greenToken1torus);
greenToken1torus.position.set(-2, 1, 6);
greenToken1torus.rotation.x = -0.5 * Math.PI;
greenToken1torus.castShadow = true;

const greenToken2geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const greenToken2material = new THREE.MeshStandardMaterial({
    color: 0x377454,
    wireframe: false
});
const greenToken2torus = new THREE.Mesh(greenToken2geometry, greenToken2material);
scene.add(greenToken2torus);
greenToken2torus.position.set(0, 1, -6);
greenToken2torus.rotation.x = -0.5 * Math.PI;
greenToken2torus.castShadow = true;

const greenToken3geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const greenToken3material = new THREE.MeshStandardMaterial({
    color: 0x377454,
    wireframe: false
});
const greenToken3torus = new THREE.Mesh(greenToken3geometry, greenToken3material);
scene.add(greenToken3torus);
greenToken3torus.position.set(11.2, 1, -8.8);
greenToken3torus.rotation.x = -0.5 * Math.PI;
greenToken3torus.castShadow = true;

const greenToken4geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const greenToken4material = new THREE.MeshStandardMaterial({
    color: 0x377454,
    wireframe: false
});
const greenToken4torus = new THREE.Mesh(greenToken4geometry, greenToken4material);
scene.add(greenToken4torus);
greenToken4torus.position.set(6.4, 1, -8.8);
greenToken4torus.rotation.x = -0.5 * Math.PI;
greenToken4torus.castShadow = true;




/*******************    Blue Token   **************/
const blueToken1geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const blueToken1material = new THREE.MeshStandardMaterial({
    color: 0x1D5DE6,
    wireframe: false
});
const blueToken1torus = new THREE.Mesh(blueToken1geometry, blueToken1material);
scene.add(blueToken1torus);
blueToken1torus.position.set(-8.8, 1, 11.3);
blueToken1torus.rotation.x = -0.5 * Math.PI;
blueToken1torus.castShadow = true;

const blueToken2geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const blueToken2material = new THREE.MeshStandardMaterial({
    color: 0x1D5DE6,
    wireframe: false
});
const blueToken2torus = new THREE.Mesh(blueToken2geometry, blueToken2material);
scene.add(blueToken2torus);
blueToken2torus.position.set(-10, 1, 2);
blueToken2torus.rotation.x = -0.5 * Math.PI;
blueToken2torus.castShadow = true;

const blueToken3geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const blueToken3material = new THREE.MeshStandardMaterial({
    color: 0x1D5DE6,
    wireframe: false
});
const blueToken3torus = new THREE.Mesh(blueToken3geometry, blueToken3material);
scene.add(blueToken3torus);
blueToken3torus.position.set(-4, 1, -2);
blueToken3torus.rotation.x = -0.5 * Math.PI;
blueToken3torus.castShadow = true;

const blueToken4geometry = new THREE.TorusGeometry(0.4, 0.1861, 8, 14);
const blueToken4material = new THREE.MeshStandardMaterial({
    color: 0x1D5DE6,
    wireframe: false
});
const blueToken4torus = new THREE.Mesh(blueToken4geometry, blueToken4material);
scene.add(blueToken4torus);
blueToken4torus.position.set(10, 1, 2);
blueToken4torus.rotation.x = -0.5 * Math.PI;
blueToken4torus.castShadow = true;





/*******************   Gui   **************/
const gui = new dat.GUI();
const options = {
    angle: 0.2,
    intensity: 1
};
gui.add(options, 'angle', 0, 1);
gui.add(options, 'intensity', 0, 1);




const mousePosition = new THREE.Vector2();
const rayCaster = new THREE.Raycaster();




/*******************   Mouse Click   **************/
window.addEventListener('click', function (e) {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = - (e.clientY / window.innerHeight) * 2 + 1;
    diceClicked = 1;
    yellowClicked = -1;
    greenClicked = -1;
    redClicked = -1;
    blueClicked = -1;
});



var canvas = document.getElementsByTagName("canvas")[0];
canvas.addEventListener("click", function () {
    //textureToShow++;
    if (textureToShow > arr.length - 1) {
        textureToShow = 0;
    }
    textureLoader.load(arr[textureToShow], function (tex) {
        planeMaterial.map = tex;
    });
});

let indPos = 0;
posX = [-10.000000000000002, -19.051160686941966, -28.429348332466162, -30.598629758829755, -31.86187895862838, -31.183991547046638, -27.791665188899955, -20.592894422061313, -11.90698438582039, -4.554297239413643, -0.06925270000505371, 7.750231590823496, 19.033455902547317, 26.92577869884159, 31.417076414983242, 33.039599678355216, 33.50045667477535, 33.092572640839094, 31.76051174245611, 29.23656558659271, 25.953645455117012, 21.21416090092755, 17.371927675373946, 10.832630045015206, 7.0552007473922105, 2.481056962119866, 0.3068045708883599, -4.063531904463021, -7.350173154595415];

posZ = [30, 25.239914351683467, 13.280023832351567, 5.734746448924863, 0.4696829078795076, -9.436124021350052, -19.11189906958784, -26.993969973683768, -32.495038706632926, -34.30688260924928, -33.72890232356346, -32.59490284557354, -28.381606597638665, -21.042587248680906, -11.638750447504377, -3.9601369557269956, -0.4598341725998859, 5.231986324100841, 9.928186458216828, 15.89094790101192, 21.187309145190216, 25.637062043068486, 28.648035012289323, 31.22046477774486, 32.75238162969685, 33.41165539679265, 33.502242178078, 33.48330827916954, 33.146938700781924];



rotX = [-0.7853981633974482, -0.8713569483156842, -1.157190470975591, -1.384998989526247, -1.5550058525176802, -1.8858101643444882, -2.176260190534209, -2.3498986880418546, -2.457450117318237, -2.483868190286252, -2.455606984103355, -2.4339344201304325, -2.380038577801992, -2.2317560257870763, -1.966213620847565, -1.7105346215841981, -1.5872859015996235, -1.3853178280346925, -1.2317833626310706, -1.0569567376365785, -0.9210254022170897, -0.8321716188510597, -0.7718802936573622, -0.7385508860559522, -0.7052781369291938, -0.6954574868606985, -0.6941258722655193, -0.6895700784483324, -0.689615991185963];


rotZ = [-0.2255134058981312, -0.4791185374460269, -0.9784377857812545, -1.309169650938318, -1.5491955616240325, -1.9982095062906045, -2.397233825488228, -2.695357717490233, -2.9223962098465934, -3.061057939072385, -3.1402920753939068, 2.990645816907965, 2.74710103239235, 2.470307635826187, 2.0957181155805493, 1.7542748116423166, 1.5922503258234861, 1.3285018989739406, 1.1200673210556231, 0.8712674237549834, 0.6646642962453156, 0.49085335927678636, 0.3700386426754822, 0.22251272716163611, 0.1369351694403774, 0.04746651844193786, 0.005858115869268616, -0.07672272979123906, -0.13817692494746633];

console.log(posX.length, "  dd  ", posZ.length, "  ", rotX.length, "  ", rotZ.length);


document.onkeydown = function (e) {
    if (e.keyCode == 39) //RightArrow
    {
        camera.position.x += 5;
    }
    if (e.keyCode == 37) //LeftArrow
    {
        camera.position.x -= 5;
    }
    if (e.keyCode == 38) //TopArrow
    {
        camera.position.y += 5;
    }
    if (e.keyCode == 40)//DownArrow
    {
        camera.position.y -= 5;
    }
    if (e.keyCode == 88)//X
    {
        camera.position.z += 5;
    }
    if (e.keyCode == 90)//Z 
    {
        camera.position.z -= 5;
    }


    if (e.keyCode == 65) //A
    {
        console.log("y  ", camera.lookAt(scene.position));
        camera.position.x = posX[indPos];
        camera.position.z = posZ[indPos];
        camera.rotation.x = rotX[indPos];
        camera.rotation.z = rotZ[indPos];
        indPos--;
        if (indPos <= 0) {
            indPos = 28;
        }

    }
   

}





let yellowClicked = -1;
let yellowTokenCount1 = -1, yellowTokenCount2 = 13, yellowTokenCount3 = 0, yellowTokenCount4 = 50, y1Selected = 0, y2Selected = 0, y3Selected = 0, y4Selected = 0;
let yellowToken11torus, yellowToken22torus, yellowToken33torus, yellowToken44torus;
yellowToken1torus.name = 'yellowToken1';
yellowToken2torus.name = 'yellowToken2';
yellowToken3torus.name = 'yellowToken3';
yellowToken4torus.name = 'yellowToken4';


let greenClicked = -1;
let greenTokenCount1 = 29, greenTokenCount2 = 54, greenTokenCount3 = -1, greenTokenCount4 = -1, g1Selected = 0, g2Selected = 0, g3Selected = 0, g4Selected = 0;
let greenToken11torus, greenToken22torus, greenToken33torus, greenToken44torus;
greenToken1torus.name = 'greenToken1';
greenToken2torus.name = 'greenToken2';
greenToken3torus.name = 'greenToken3';
greenToken4torus.name = 'greenToken4';

let redClicked = -1;
let redTokenCount1 = 56, redTokenCount2 = 0, redTokenCount3 = 31, redTokenCount4 = 13, r1Selected = 0, r2Selected = 0, r3Selected = 0, r4Selected = 0;
let redToken11torus, redToken22torus, redToken33torus, redToken44torus;
redToken1torus.name = 'redToken1';
redToken2torus.name = 'redToken2';
redToken3torus.name = 'redToken3';
redToken4torus.name = 'redToken4';


let blueClicked = -1;
let blueTokenCount1 = -1, blueTokenCount2 = 8, blueTokenCount3 = 17, blueTokenCount4 = 40, b1Selected = 0, b2Selected = 0, b3Selected = 0, b4Selected = 0;
let blueToken11torus, blueToken22torus, blueToken33torus, blueToken44torus;
blueToken1torus.name = 'blueToken1';
blueToken2torus.name = 'blueToken2';
blueToken3torus.name = 'blueToken3';
blueToken4torus.name = 'blueToken4';



const diceValue = [1, 6, 5, 2, 4, 3, 1, 5, 6, 2, 4, 3];
const chooseColor = [1, 2, 3, 4];
let name = '', count = -1, noDice = 1;
dice.name = 'DiceName';
let diceRolled = 0, diceRolledIndex = 0, diceIndex = -1, diceClicked = 0, colorIndex = 0;



function animate(time) {

    spotLight.angle = options.angle;
    spotLight.intensity = options.intensity;
    sLightHelper.update();

    rayCaster.setFromCamera(mousePosition, camera);
    const intersects = rayCaster.intersectObjects(scene.children);

    /***************** Yellow  ******************/
    if (yellowClicked == 1) {
        yellowClicked = 0;

        if (y1Selected == 1) {
            const yellowToken11geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const yellowToken11material = new THREE.MeshStandardMaterial({
                color: 0xDA982A,
                wireframe: false
            });
            yellowToken11torus = new THREE.Mesh(yellowToken11geometry, yellowToken11material);
            scene.add(yellowToken11torus);
            yellowToken11torus.position.set(yellowToken1torus.position.x, yellowToken1torus.position.y, yellowToken1torus.position.z);
            yellowToken11torus.rotation.x = -0.5 * Math.PI;
            yellowToken11torus.castShadow = true;
            yellowToken11torus.name = 'yellowToken11';
        }
        if (y2Selected == 1) {
            const yellowToken22geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const yellowToken22material = new THREE.MeshStandardMaterial({
                color: 0xDA982A,
                wireframe: false
            });
            yellowToken22torus = new THREE.Mesh(yellowToken22geometry, yellowToken22material);
            scene.add(yellowToken22torus);
            yellowToken22torus.position.set(yellowToken2torus.position.x, yellowToken2torus.position.y, yellowToken2torus.position.z);
            yellowToken22torus.rotation.x = -0.5 * Math.PI;
            yellowToken22torus.castShadow = true;
            yellowToken22torus.name = 'yellowToken22';
        }
        if (y3Selected == 1) {
            const yellowToken33geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const yellowToken33material = new THREE.MeshStandardMaterial({
                color: 0xDA982A,
                wireframe: false
            });
            yellowToken33torus = new THREE.Mesh(yellowToken33geometry, yellowToken33material);
            scene.add(yellowToken33torus);
            yellowToken33torus.position.set(yellowToken3torus.position.x, yellowToken3torus.position.y, yellowToken3torus.position.z);
            yellowToken33torus.rotation.x = -0.5 * Math.PI;
            yellowToken33torus.castShadow = true;
            yellowToken33torus.name = 'yellowToken33';
        }
        if (y4Selected == 1) {
            const yellowToken44geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const yellowToken44material = new THREE.MeshStandardMaterial({
                color: 0xDA982A,
                wireframe: false
            });
            yellowToken44torus = new THREE.Mesh(yellowToken44geometry, yellowToken44material);
            scene.add(yellowToken44torus);
            yellowToken44torus.position.set(yellowToken4torus.position.x, yellowToken4torus.position.y, yellowToken4torus.position.z);
            yellowToken44torus.rotation.x = -0.5 * Math.PI;
            yellowToken44torus.castShadow = true;
            yellowToken44torus.name = 'yellowToken44';
        }
    }

    /***************** Green  ******************/
    if (greenClicked == 1) {
        greenClicked = 0;

        if (g1Selected == 1) {
            const greenToken11geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const greenToken11material = new THREE.MeshStandardMaterial({
                color: 0x377454,
                wireframe: false
            });
            greenToken11torus = new THREE.Mesh(greenToken11geometry, greenToken11material);
            scene.add(greenToken11torus);
            greenToken11torus.position.set(greenToken1torus.position.x, greenToken1torus.position.y, greenToken1torus.position.z);
            greenToken11torus.rotation.x = -0.5 * Math.PI;
            greenToken11torus.castShadow = true;
            greenToken11torus.name = 'greenToken11';
        }
        if (g2Selected == 1) {
            const greenToken22geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const greenToken22material = new THREE.MeshStandardMaterial({
                color: 0x377454,
                wireframe: false
            });
            greenToken22torus = new THREE.Mesh(greenToken22geometry, greenToken22material);
            scene.add(greenToken22torus);
            greenToken22torus.position.set(greenToken2torus.position.x, greenToken2torus.position.y, greenToken2torus.position.z);
            greenToken22torus.rotation.x = -0.5 * Math.PI;
            greenToken22torus.castShadow = true;
            greenToken22torus.name = 'greenToken22';
        }
        if (g3Selected == 1) {
            const greenToken33geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const greenToken33material = new THREE.MeshStandardMaterial({
                color: 0x377454,
                wireframe: false
            });
            greenToken33torus = new THREE.Mesh(greenToken33geometry, greenToken33material);
            scene.add(greenToken33torus);
            greenToken33torus.position.set(greenToken3torus.position.x, greenToken3torus.position.y, greenToken3torus.position.z);
            greenToken33torus.rotation.x = -0.5 * Math.PI;
            greenToken33torus.castShadow = true;
            greenToken33torus.name = 'greenToken33';
        }
        if (g4Selected == 1) {
            const greenToken44geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const greenToken44material = new THREE.MeshStandardMaterial({
                color: 0x377454,
                wireframe: false
            });
            greenToken44torus = new THREE.Mesh(greenToken44geometry, greenToken44material);
            scene.add(greenToken44torus);
            greenToken44torus.position.set(greenToken4torus.position.x, greenToken4torus.position.y, greenToken4torus.position.z);
            greenToken44torus.rotation.x = -0.5 * Math.PI;
            greenToken44torus.castShadow = true;
            greenToken44torus.name = 'greenToken44';
        }
    }


    /***************** Red  ******************/
    if (redClicked == 1) {
        redClicked = 0;

        if (r1Selected == 1) {
            const redToken11geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const redToken11material = new THREE.MeshStandardMaterial({
                color: 0xC22E1F,
                wireframe: false
            });
            redToken11torus = new THREE.Mesh(redToken11geometry, redToken11material);
            scene.add(redToken11torus);
            redToken11torus.position.set(redToken1torus.position.x, redToken1torus.position.y, redToken1torus.position.z);
            redToken11torus.rotation.x = -0.5 * Math.PI;
            redToken11torus.castShadow = true;
            redToken11torus.name = 'redToken11';
        }
        if (r2Selected == 1) {
            const redToken22geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const redToken22material = new THREE.MeshStandardMaterial({
                color: 0xC22E1F,
                wireframe: false
            });
            redToken22torus = new THREE.Mesh(redToken22geometry, redToken22material);
            scene.add(redToken22torus);
            redToken22torus.position.set(redToken2torus.position.x, redToken2torus.position.y, redToken2torus.position.z);
            redToken22torus.rotation.x = -0.5 * Math.PI;
            redToken22torus.castShadow = true;
            redToken22torus.name = 'redToken22';
        }
        if (r3Selected == 1) {
            const redToken33geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const redToken33material = new THREE.MeshStandardMaterial({
                color: 0xC22E1F,
                wireframe: false
            });
            redToken33torus = new THREE.Mesh(redToken33geometry, redToken33material);
            scene.add(redToken33torus);
            redToken33torus.position.set(redToken3torus.position.x, redToken3torus.position.y, redToken3torus.position.z);
            redToken33torus.rotation.x = -0.5 * Math.PI;
            redToken33torus.castShadow = true;
            redToken33torus.name = 'redToken33';
        }
        if (r4Selected == 1) {
            const redToken44geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const redToken44material = new THREE.MeshStandardMaterial({
                color: 0xC22E1F,
                wireframe: false
            });
            redToken44torus = new THREE.Mesh(redToken44geometry, redToken44material);
            scene.add(redToken44torus);
            redToken44torus.position.set(redToken4torus.position.x, redToken4torus.position.y, redToken4torus.position.z);
            redToken44torus.rotation.x = -0.5 * Math.PI;
            redToken44torus.castShadow = true;
            redToken44torus.name = 'redToken44';
        }
    }


    /***************** Blue  ******************/
    if (blueClicked == 1) {
        blueClicked = 0;

        if (b1Selected == 1) {
            const blueToken11geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const blueToken11material = new THREE.MeshStandardMaterial({
                color: 0x1D5DE6,
                wireframe: false
            });
            blueToken11torus = new THREE.Mesh(blueToken11geometry, blueToken11material);
            scene.add(blueToken11torus);
            blueToken11torus.position.set(blueToken1torus.position.x, blueToken1torus.position.y, blueToken1torus.position.z);
            blueToken11torus.rotation.x = -0.5 * Math.PI;
            blueToken11torus.castShadow = true;
            blueToken11torus.name = 'blueToken11';
        }
        if (b2Selected == 1) {
            const blueToken22geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const blueToken22material = new THREE.MeshStandardMaterial({
                color: 0x1D5DE6,
                wireframe: false
            });
            blueToken22torus = new THREE.Mesh(blueToken22geometry, blueToken22material);
            scene.add(blueToken22torus);
            blueToken22torus.position.set(blueToken2torus.position.x, blueToken2torus.position.y, blueToken2torus.position.z);
            blueToken22torus.rotation.x = -0.5 * Math.PI;
            blueToken22torus.castShadow = true;
            blueToken22torus.name = 'blueToken22';
        }
        if (b3Selected == 1) {
            const blueToken33geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const blueToken33material = new THREE.MeshStandardMaterial({
                color: 0x1D5DE6,
                wireframe: false
            });
            blueToken33torus = new THREE.Mesh(blueToken33geometry, blueToken33material);
            scene.add(blueToken33torus);
            blueToken33torus.position.set(blueToken3torus.position.x, blueToken3torus.position.y, blueToken3torus.position.z);
            blueToken33torus.rotation.x = -0.5 * Math.PI;
            blueToken33torus.castShadow = true;
            blueToken33torus.name = 'blueToken33';
        }
        if (b4Selected == 1) {
            const blueToken44geometry = new THREE.TorusGeometry(0.4, 0.2861, 8, 14);
            const blueToken44material = new THREE.MeshStandardMaterial({
                color: 0x1D5DE6,
                wireframe: false
            });
            blueToken44torus = new THREE.Mesh(blueToken44geometry, blueToken44material);
            scene.add(blueToken44torus);
            blueToken44torus.position.set(blueToken4torus.position.x, blueToken4torus.position.y, blueToken4torus.position.z);
            blueToken44torus.rotation.x = -0.5 * Math.PI;
            blueToken44torus.castShadow = true;
            blueToken44torus.name = 'blueToken44';
        }
    }
    console.log("get ", camera.position.x, "  ", camera.position.z, " ",
        camera.rotation.x, " ", camera.rotation.z);
    if (chooseColor[colorIndex] == 1) {
        scoreBoard.material.color.set(0xDA982A);
    }
    if (chooseColor[colorIndex] == 2) {
        scoreBoard.material.color.set(0x377454);
    }
    if (chooseColor[colorIndex] == 3) {
        scoreBoard.material.color.set(0xC22E1F);
    }
    if (chooseColor[colorIndex] == 4) {
        scoreBoard.material.color.set(0x1D5DE6);
    }
    for (let i = 0; i < intersects.length; i++) {

        if (intersects[i].object.name === 'DiceName' && diceClicked == 1 && noDice == 1) {
            console.log("deccc  ", colorIndex, "  ", chooseColor[colorIndex]);
            removeToken();


            count = 0;
            if (diceRolledIndex == 0) {
                intersects[i].object.rotation.x += Math.PI / 90;
                intersects[i].object.rotation.y += Math.PI / 90;
            }
            // else if (diceRolledIndex == 1) {
            //     intersects[i].object.rotation.x += Math.PI / 90;
            //     intersects[i].object.rotation.z += Math.PI / 90;
            // } 
            else {
                intersects[i].object.rotation.y += Math.PI / 90;
                intersects[i].object.rotation.z += Math.PI / 90;
            }

            diceRolled++;

            if (diceRolled == 135 && diceRolledIndex == 1) {
                diceClicked = 0;
                diceRolled = 0;
                diceRolledIndex++;
                diceIndex++;

                if (chooseColor[colorIndex] == 1) {
                    console.log("heyy Inn1");
                    if (yellowClicked == -1) {
                        yellowClicked = 1;
                        if ((yellowTokenCount1 + diceValue[diceIndex] <= 56 && yellowTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount1 == -1))
                            y1Selected = 1;
                        if ((yellowTokenCount2 + diceValue[diceIndex] <= 56 && yellowTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount2 == -1))
                            y2Selected = 1;
                        if ((yellowTokenCount3 + diceValue[diceIndex] <= 56 && yellowTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount3 == -1))
                            y3Selected = 1;
                        if ((yellowTokenCount4 + diceValue[diceIndex] <= 56 && yellowTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount4 == -1))
                            y4Selected = 1;
                    }

                    // console.log("Heyy  ",yellowTokenCount1,"  ",yellowTokenCount2,"  ",yellowTokenCount3,"  ",yellowTokenCount4,"  ",diceValue[diceIndex]);
                    if (y4Selected + y3Selected + y2Selected + y1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }



                if (chooseColor[colorIndex] == 2) {
                    if (greenClicked == -1) {
                        greenClicked = 1;
                        if ((greenTokenCount1 + diceValue[diceIndex] <= 56 && greenTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount1 == -1))
                            g1Selected = 1;
                        if ((greenTokenCount2 + diceValue[diceIndex] <= 56 && greenTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount2 == -1))
                            g2Selected = 1;
                        if ((greenTokenCount3 + diceValue[diceIndex] <= 56 && greenTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount3 == -1))
                            g3Selected = 1;
                        if ((greenTokenCount4 + diceValue[diceIndex] <= 56 && greenTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount4 == -1))
                            g4Selected = 1;
                    }

                    console.log("Heyy G1 ", greenTokenCount1, "  ", greenTokenCount2, "  ", greenTokenCount3, "  ", greenTokenCount4, "  ", diceValue[diceIndex], "  ", g1Selected, g2Selected, g3Selected, g4Selected);
                    if (g4Selected + g3Selected + g2Selected + g1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 3) {
                    if (redClicked == -1) {
                        redClicked = 1;
                        console.log("SUmm1 ", redTokenCount1 + diceValue[diceIndex], " SUmm2 ", redTokenCount2 + diceValue[diceIndex], " SUmm3 ", redTokenCount3 + diceValue[diceIndex], " SUmm4 ", redTokenCount4 + diceValue[diceIndex]);
                        if ((redTokenCount1 + diceValue[diceIndex] <= 56 && redTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount1 == -1))
                            r1Selected = 1;
                        if ((redTokenCount2 + diceValue[diceIndex] <= 56 && redTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount2 == -1))
                            r2Selected = 1;
                        if ((redTokenCount3 + diceValue[diceIndex] <= 56 && redTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount3 == -1))
                            r3Selected = 1;
                        if ((redTokenCount4 + diceValue[diceIndex] <= 56 && redTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount4 == -1))
                            r4Selected = 1;
                    }

                    console.log("Heyy R1 ", redTokenCount1, "  ", redTokenCount2, "  ", redTokenCount3, "  ", redTokenCount4, "  ", diceValue[diceIndex], "  ", r1Selected, r2Selected, r3Selected, r4Selected);
                    if (r4Selected + r3Selected + r2Selected + r1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }


                if (chooseColor[colorIndex] == 4) {
                    if (blueClicked == -1) {
                        blueClicked = 1;
                        console.log("SUmm1 ", blueTokenCount1 + diceValue[diceIndex], " SUmm2 ", blueTokenCount2 + diceValue[diceIndex], " SUmm3 ", blueTokenCount3 + diceValue[diceIndex], " SUmm4 ", blueTokenCount4 + diceValue[diceIndex]);
                        if ((blueTokenCount1 + diceValue[diceIndex] <= 56 && blueTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount1 == -1))
                            b1Selected = 1;
                        if ((blueTokenCount2 + diceValue[diceIndex] <= 56 && blueTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount2 == -1))
                            b2Selected = 1;
                        if ((blueTokenCount3 + diceValue[diceIndex] <= 56 && blueTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount3 == -1))
                            b3Selected = 1;
                        if ((blueTokenCount4 + diceValue[diceIndex] <= 56 && blueTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount4 == -1))
                            b4Selected = 1;
                    }

                    console.log("Heyy B1 ", blueTokenCount1, "  ", blueTokenCount2, "  ", blueTokenCount3, "  ", blueTokenCount4, "  ", diceValue[diceIndex], "  ", b1Selected, b2Selected, b3Selected, b4Selected);
                    if (b4Selected + b3Selected + b2Selected + b1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

            }
            if (diceRolled == 90 && diceRolledIndex == 2) {
                diceClicked = 0;
                diceRolled = 0;
                diceRolledIndex = 0;
                diceIndex++;
                if (chooseColor[colorIndex] == 1) {
                    console.log("heyy Inn2");
                    if (yellowClicked == -1) {
                        yellowClicked = 1;
                        if ((yellowTokenCount1 + diceValue[diceIndex] <= 56 && yellowTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount1 == -1))
                            y1Selected = 1;
                        if ((yellowTokenCount2 + diceValue[diceIndex] <= 56 && yellowTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount2 == -1))
                            y2Selected = 1;
                        if ((yellowTokenCount3 + diceValue[diceIndex] <= 56 && yellowTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount3 == -1))
                            y3Selected = 1;
                        if ((yellowTokenCount4 + diceValue[diceIndex] <= 56 && yellowTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount4 == -1))
                            y4Selected = 1;
                    }
                    if (y4Selected + y3Selected + y2Selected + y1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }


                if (chooseColor[colorIndex] == 2) {
                    if (greenClicked == -1) {
                        greenClicked = 1;
                        if ((greenTokenCount1 + diceValue[diceIndex] <= 56 && greenTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount1 == -1))
                            g1Selected = 1;
                        if ((greenTokenCount2 + diceValue[diceIndex] <= 56 && greenTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount2 == -1))
                            g2Selected = 1;
                        if ((greenTokenCount3 + diceValue[diceIndex] <= 56 && greenTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount3 == -1))
                            g3Selected = 1;
                        if ((greenTokenCount4 + diceValue[diceIndex] <= 56 && greenTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount4 == -1))
                            g4Selected = 1;
                    }

                    console.log("Heyy G2 ", greenTokenCount1, "  ", greenTokenCount2, "  ", greenTokenCount3, "  ", greenTokenCount4, "  ", diceValue[diceIndex], "  ", g1Selected, g2Selected, g3Selected, g4Selected);
                    if (g4Selected + g3Selected + g2Selected + g1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 3) {
                    if (redClicked == -1) {
                        redClicked = 1;
                        if ((redTokenCount1 + diceValue[diceIndex] <= 56 && redTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount1 == -1))
                            r1Selected = 1;
                        if ((redTokenCount2 + diceValue[diceIndex] <= 56 && redTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount2 == -1))
                            r2Selected = 1;
                        if ((redTokenCount3 + diceValue[diceIndex] <= 56 && redTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount3 == -1))
                            r3Selected = 1;
                        if ((redTokenCount4 + diceValue[diceIndex] <= 56 && redTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount4 == -1))
                            r4Selected = 1;
                    }

                    console.log("Heyy R2 ", redTokenCount1, "  ", redTokenCount2, "  ", redTokenCount3, "  ", redTokenCount4, "  ", diceValue[diceIndex], "  ", r1Selected, r2Selected, r3Selected, r4Selected);
                    if (r4Selected + r3Selected + r2Selected + r1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 4) {
                    if (blueClicked == -1) {
                        blueClicked = 1;
                        console.log("SUmm1 ", blueTokenCount1 + diceValue[diceIndex], " SUmm2 ", blueTokenCount2 + diceValue[diceIndex], " SUmm3 ", blueTokenCount3 + diceValue[diceIndex], " SUmm4 ", blueTokenCount4 + diceValue[diceIndex]);
                        if ((blueTokenCount1 + diceValue[diceIndex] <= 56 && blueTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount1 == -1))
                            b1Selected = 1;
                        if ((blueTokenCount2 + diceValue[diceIndex] <= 56 && blueTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount2 == -1))
                            b2Selected = 1;
                        if ((blueTokenCount3 + diceValue[diceIndex] <= 56 && blueTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount3 == -1))
                            b3Selected = 1;
                        if ((blueTokenCount4 + diceValue[diceIndex] <= 56 && blueTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount4 == -1))
                            b4Selected = 1;
                    }

                    console.log("Heyy B2 ", blueTokenCount1, "  ", blueTokenCount2, "  ", blueTokenCount3, "  ", blueTokenCount4, "  ", diceValue[diceIndex], "  ", b1Selected, b2Selected, b3Selected, b4Selected);
                    if (b4Selected + b3Selected + b2Selected + b1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

            }
            if (diceRolled == 45 && diceRolledIndex == 0) {
                diceClicked = 0;
                diceRolled = 0;
                diceRolledIndex++;
                diceIndex++;
                if (chooseColor[colorIndex] == 1) {
                    console.log("heyy Inn3");
                    if (yellowClicked == -1) {
                        yellowClicked = 1;
                        if ((yellowTokenCount1 + diceValue[diceIndex] <= 56 && yellowTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount1 == -1))
                            y1Selected = 1;
                        if ((yellowTokenCount2 + diceValue[diceIndex] <= 56 && yellowTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount2 == -1))
                            y2Selected = 1;
                        if ((yellowTokenCount3 + diceValue[diceIndex] <= 56 && yellowTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount3 == -1))
                            y3Selected = 1;
                        if ((yellowTokenCount4 + diceValue[diceIndex] <= 56 && yellowTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && yellowTokenCount4 == -1))
                            y4Selected = 1;
                    }
                    if (y4Selected + y3Selected + y2Selected + y1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 2) {
                    if (greenClicked == -1) {
                        greenClicked = 1;
                        if ((greenTokenCount1 + diceValue[diceIndex] <= 56 && greenTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount1 == -1))
                            g1Selected = 1;
                        if ((greenTokenCount2 + diceValue[diceIndex] <= 56 && greenTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount2 == -1))
                            g2Selected = 1;
                        if ((greenTokenCount3 + diceValue[diceIndex] <= 56 && greenTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount3 == -1))
                            g3Selected = 1;
                        if ((greenTokenCount4 + diceValue[diceIndex] <= 56 && greenTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && greenTokenCount4 == -1))
                            g4Selected = 1;
                    }

                    console.log("Heyy G3 ", greenTokenCount1, "  ", greenTokenCount2, "  ", greenTokenCount3, "  ", greenTokenCount4, "  ", diceValue[diceIndex], "  ", g1Selected, g2Selected, g3Selected, g4Selected);
                    if (g4Selected + g3Selected + g2Selected + g1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 3) {
                    if (redClicked == -1) {
                        redClicked = 1;
                        if ((redTokenCount1 + diceValue[diceIndex] <= 56 && redTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount1 == -1))
                            r1Selected = 1;
                        if ((redTokenCount2 + diceValue[diceIndex] <= 56 && redTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount2 == -1))
                            r2Selected = 1;
                        if ((redTokenCount3 + diceValue[diceIndex] <= 56 && redTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount3 == -1))
                            r3Selected = 1;
                        if ((redTokenCount4 + diceValue[diceIndex] <= 56 && redTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && redTokenCount4 == -1))
                            r4Selected = 1;
                    }

                    console.log("Heyy R3 ", redTokenCount1, "  ", redTokenCount2, "  ", redTokenCount3, "  ", redTokenCount4, "  ", diceValue[diceIndex], "  ", r1Selected, r2Selected, r3Selected, r4Selected);
                    if (r4Selected + r3Selected + r2Selected + r1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }

                if (chooseColor[colorIndex] == 4) {
                    if (blueClicked == -1) {
                        blueClicked = 1;
                        console.log("SUmm1 ", blueTokenCount1 + diceValue[diceIndex], " SUmm2 ", blueTokenCount2 + diceValue[diceIndex], " SUmm3 ", blueTokenCount3 + diceValue[diceIndex], " SUmm4 ", blueTokenCount4 + diceValue[diceIndex]);
                        if ((blueTokenCount1 + diceValue[diceIndex] <= 56 && blueTokenCount1 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount1 == -1))
                            b1Selected = 1;
                        if ((blueTokenCount2 + diceValue[diceIndex] <= 56 && blueTokenCount2 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount2 == -1))
                            b2Selected = 1;
                        if ((blueTokenCount3 + diceValue[diceIndex] <= 56 && blueTokenCount3 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount3 == -1))
                            b3Selected = 1;
                        if ((blueTokenCount4 + diceValue[diceIndex] <= 56 && blueTokenCount4 >= 0) || (diceValue[diceIndex] == 6 && blueTokenCount4 == -1))
                            b4Selected = 1;
                    }

                    console.log("Heyy B3", blueTokenCount1, "  ", blueTokenCount2, "  ", blueTokenCount3, "  ", blueTokenCount4, "  ", diceValue[diceIndex], "  ", b1Selected, b2Selected, b3Selected, b4Selected);
                    if (b4Selected + b3Selected + b2Selected + b1Selected == 0) {
                        noDice = 1;
                        colorIndex++;
                    } else {
                        noDice = 0;
                    }
                }
            }
            if (diceIndex >= 12)
                diceIndex = 0;

            if (colorIndex >= 4) {
                colorIndex = 0;
            }

        }

        if (intersects[i].object.name === 'yellowToken11') {
            name = 'yellowToken11';
        }
        if (intersects[i].object.name === 'yellowToken22') {
            name = 'yellowToken22';
        }
        if (intersects[i].object.name === 'yellowToken33') {
            name = 'yellowToken33';
        }
        if (intersects[i].object.name === 'yellowToken44') {
            name = 'yellowToken44';
        }

        if (intersects[i].object.name === 'greenToken11') {
            name = 'greenToken11';
        }
        if (intersects[i].object.name === 'greenToken22') {
            name = 'greenToken22';
        }
        if (intersects[i].object.name === 'greenToken33') {
            name = 'greenToken33';
        }
        if (intersects[i].object.name === 'greenToken44') {
            name = 'greenToken44';
        }

        if (intersects[i].object.name === 'redToken11') {
            name = 'redToken11';
        }
        if (intersects[i].object.name === 'redToken22') {
            name = 'redToken22';
        }
        if (intersects[i].object.name === 'redToken33') {
            name = 'redToken33';
        }
        if (intersects[i].object.name === 'redToken44') {
            name = 'redToken44';
        }

        if (intersects[i].object.name === 'blueToken11') {
            name = 'blueToken11';
        }
        if (intersects[i].object.name === 'blueToken22') {
            name = 'blueToken22';
        }
        if (intersects[i].object.name === 'blueToken33') {
            name = 'blueToken33';
        }
        if (intersects[i].object.name === 'blueToken44') {
            name = 'blueToken44';
        }

        if (intersects[i].object.name === 'yellowToken1' && name == 'yellowToken11') {
            if (y1Selected == 1) {
                scene.remove(yellowToken11torus);
                y1Selected = 0;
            }
            if (y2Selected == 1) {
                scene.remove(yellowToken22torus);
                y2Selected = 0;
            }
            if (y3Selected == 1) {
                scene.remove(yellowToken33torus);
                y3Selected = 0;
            }
            if (y4Selected == 1) {
                scene.remove(yellowToken44torus);
                y4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(yellowTokenCount4, " ddd1 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, "  ", name);

                if (yellowTokenCount1 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } yellowTokenCount1++;
                yellow(intersects[i]);
                noDice = 0;

            } if (count == diceValue[diceIndex]) {
                noDice = 1;
                if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }

                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(yellowToken1torus.position.x == 12 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == 2) && !(yellowToken1torus.position.x == -12 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == -2) && !(yellowToken1torus.position.x == -2 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == 12) && !(yellowToken1torus.position.x == 2 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == -12) &&
                    !(yellowToken1torus.position.x == -10 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == 2) && !(yellowToken1torus.position.x == 10 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == -2) && !(yellowToken1torus.position.x == 2 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == 10) && !(yellowToken1torus.position.x == -2 && yellowToken1torus.position.y == 1 && yellowToken1torus.position.z == -10)
                ) {
                    if ((yellowToken1torus.position.x == blueToken1torus.position.x && yellowToken1torus.position.y == blueToken1torus.position.y && yellowToken1torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((yellowToken1torus.position.x == blueToken2torus.position.x && yellowToken1torus.position.y == blueToken2torus.position.y && yellowToken1torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((yellowToken1torus.position.x == blueToken3torus.position.x && yellowToken1torus.position.y == blueToken3torus.position.y && yellowToken1torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((yellowToken1torus.position.x == blueToken4torus.position.x && yellowToken1torus.position.y == blueToken4torus.position.y && yellowToken1torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((yellowToken1torus.position.x == greenToken1torus.position.x && yellowToken1torus.position.y == greenToken1torus.position.y && yellowToken1torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((yellowToken1torus.position.x == greenToken2torus.position.x && yellowToken1torus.position.y == greenToken2torus.position.y && yellowToken1torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((yellowToken1torus.position.x == greenToken3torus.position.x && yellowToken1torus.position.y == greenToken3torus.position.y && yellowToken1torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((yellowToken1torus.position.x == greenToken4torus.position.x && yellowToken1torus.position.y == greenToken4torus.position.y && yellowToken1torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((yellowToken1torus.position.x == redToken1torus.position.x && yellowToken1torus.position.y == redToken1torus.position.y && yellowToken1torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((yellowToken1torus.position.x == redToken2torus.position.x && yellowToken1torus.position.y == redToken2torus.position.y && yellowToken1torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((yellowToken1torus.position.x == redToken3torus.position.x && yellowToken1torus.position.y == redToken3torus.position.y && yellowToken1torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((yellowToken1torus.position.x == redToken4torus.position.x && yellowToken1torus.position.y == redToken4torus.position.y && yellowToken1torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }




            } console.log(yellowTokenCount4, "  ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'yellowToken2' && name == 'yellowToken22') {
            if (y1Selected == 1) {
                scene.remove(yellowToken11torus);
                y1Selected = 0;
            }
            if (y2Selected == 1) {
                scene.remove(yellowToken22torus);
                y2Selected = 0;
            }
            if (y3Selected == 1) {
                scene.remove(yellowToken33torus);
                y3Selected = 0;
            }
            if (y4Selected == 1) {
                scene.remove(yellowToken44torus);
                y4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(yellowTokenCount4, " ddd1 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, "  ", name);

                if (yellowTokenCount2 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } yellowTokenCount2++;
                yellow(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1;
                if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }


                if (!(yellowToken2torus.position.x == 12 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == 2) && !(yellowToken2torus.position.x == -12 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == -2) && !(yellowToken2torus.position.x == -2 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == 12) && !(yellowToken2torus.position.x == 2 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == -12) &&
                    !(yellowToken2torus.position.x == -10 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == 2) && !(yellowToken2torus.position.x == 10 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == -2) && !(yellowToken2torus.position.x == 2 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == 10) && !(yellowToken2torus.position.x == -2 && yellowToken2torus.position.y == 1 && yellowToken2torus.position.z == -10)
                ) {

                    if ((yellowToken2torus.position.x == blueToken1torus.position.x && yellowToken2torus.position.y == blueToken1torus.position.y && yellowToken2torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((yellowToken2torus.position.x == blueToken2torus.position.x && yellowToken2torus.position.y == blueToken2torus.position.y && yellowToken2torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((yellowToken2torus.position.x == blueToken3torus.position.x && yellowToken2torus.position.y == blueToken3torus.position.y && yellowToken2torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((yellowToken2torus.position.x == blueToken4torus.position.x && yellowToken2torus.position.y == blueToken4torus.position.y && yellowToken2torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }

                    if ((yellowToken2torus.position.x == greenToken1torus.position.x && yellowToken2torus.position.y == greenToken1torus.position.y && yellowToken2torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((yellowToken2torus.position.x == greenToken2torus.position.x && yellowToken2torus.position.y == greenToken2torus.position.y && yellowToken2torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((yellowToken2torus.position.x == greenToken3torus.position.x && yellowToken2torus.position.y == greenToken3torus.position.y && yellowToken2torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((yellowToken2torus.position.x == greenToken4torus.position.x && yellowToken2torus.position.y == greenToken4torus.position.y && yellowToken2torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((yellowToken2torus.position.x == redToken1torus.position.x && yellowToken2torus.position.y == redToken1torus.position.y && yellowToken2torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((yellowToken2torus.position.x == redToken2torus.position.x && yellowToken2torus.position.y == redToken2torus.position.y && yellowToken2torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((yellowToken2torus.position.x == redToken3torus.position.x && yellowToken2torus.position.y == redToken3torus.position.y && yellowToken2torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((yellowToken2torus.position.x == redToken4torus.position.x && yellowToken2torus.position.y == redToken4torus.position.y && yellowToken2torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }


                }

            }
            console.log(yellowTokenCount4, " ddd2 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'yellowToken3' && name == 'yellowToken33') {
            if (y1Selected == 1) {
                scene.remove(yellowToken11torus);
                y1Selected = 0;
            }
            if (y2Selected == 1) {
                scene.remove(yellowToken22torus);
                y2Selected = 0;
            }
            if (y3Selected == 1) {
                scene.remove(yellowToken33torus);
                y3Selected = 0;
            }
            if (y4Selected == 1) {
                scene.remove(yellowToken44torus);
                y4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(yellowTokenCount4, " ddd1 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, "  ", name);
                if (yellowTokenCount3 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } yellowTokenCount3++;
                yellow(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(yellowToken3torus.position.x == 12 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == 2) && !(yellowToken3torus.position.x == -12 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == -2) && !(yellowToken3torus.position.x == -2 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == 12) && !(yellowToken3torus.position.x == 2 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == -12) &&
                    !(yellowToken3torus.position.x == -10 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == 2) && !(yellowToken3torus.position.x == 10 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == -2) && !(yellowToken3torus.position.x == 2 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == 10) && !(yellowToken3torus.position.x == -2 && yellowToken3torus.position.y == 1 && yellowToken3torus.position.z == -10)
                ) {

                    if ((yellowToken3torus.position.x == blueToken1torus.position.x && yellowToken3torus.position.y == blueToken1torus.position.y && yellowToken3torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((yellowToken3torus.position.x == blueToken2torus.position.x && yellowToken3torus.position.y == blueToken2torus.position.y && yellowToken3torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((yellowToken3torus.position.x == blueToken3torus.position.x && yellowToken3torus.position.y == blueToken3torus.position.y && yellowToken3torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((yellowToken3torus.position.x == blueToken4torus.position.x && yellowToken3torus.position.y == blueToken4torus.position.y && yellowToken3torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }

                    if ((yellowToken3torus.position.x == greenToken1torus.position.x && yellowToken3torus.position.y == greenToken1torus.position.y && yellowToken3torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((yellowToken3torus.position.x == greenToken2torus.position.x && yellowToken3torus.position.y == greenToken2torus.position.y && yellowToken3torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((yellowToken3torus.position.x == greenToken3torus.position.x && yellowToken3torus.position.y == greenToken3torus.position.y && yellowToken3torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((yellowToken3torus.position.x == greenToken4torus.position.x && yellowToken3torus.position.y == greenToken4torus.position.y && yellowToken3torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((yellowToken3torus.position.x == redToken1torus.position.x && yellowToken3torus.position.y == redToken1torus.position.y && yellowToken3torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((yellowToken3torus.position.x == redToken2torus.position.x && yellowToken3torus.position.y == redToken2torus.position.y && yellowToken3torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((yellowToken3torus.position.x == redToken3torus.position.x && yellowToken3torus.position.y == redToken3torus.position.y && yellowToken3torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((yellowToken3torus.position.x == redToken4torus.position.x && yellowToken3torus.position.y == redToken4torus.position.y && yellowToken3torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }


                }

                console.log(blueToken4torus.position.x, "  ", blueToken4torus.position.y, " ddas ", blueToken4torus.position.z);
            } console.log(yellowTokenCount4, " ddd2 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'yellowToken4' && name == 'yellowToken44') {
            if (y1Selected == 1) {
                scene.remove(yellowToken11torus);
                y1Selected = 0;
            }
            if (y2Selected == 1) {
                scene.remove(yellowToken22torus);
                y2Selected = 0;
            }
            if (y3Selected == 1) {
                scene.remove(yellowToken33torus);
                y3Selected = 0;
            }
            if (y4Selected == 1) {
                scene.remove(yellowToken44torus);
                y4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++;
                console.log(yellowTokenCount4, " ddd1 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, "  ", name);
                if (yellowTokenCount4 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } yellowTokenCount4++;
                yellow(intersects[i]);
                noDice = 0;
            }
            if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(yellowToken4torus.position.x == 12 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == 2) && !(yellowToken4torus.position.x == -12 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == -2) && !(yellowToken4torus.position.x == -2 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == 12) && !(yellowToken4torus.position.x == 2 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == -12) &&
                    !(yellowToken4torus.position.x == -10 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == 2) && !(yellowToken4torus.position.x == 10 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == -2) && !(yellowToken4torus.position.x == 2 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == 10) && !(yellowToken4torus.position.x == -2 && yellowToken4torus.position.y == 1 && yellowToken4torus.position.z == -10)
                ) {
                    if ((yellowToken4torus.position.x == blueToken1torus.position.x && yellowToken4torus.position.y == blueToken1torus.position.y && yellowToken4torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((yellowToken4torus.position.x == blueToken2torus.position.x && yellowToken4torus.position.y == blueToken2torus.position.y && yellowToken4torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((yellowToken4torus.position.x == blueToken3torus.position.x && yellowToken4torus.position.y == blueToken3torus.position.y && yellowToken4torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((yellowToken4torus.position.x == blueToken4torus.position.x && yellowToken4torus.position.y == blueToken4torus.position.y && yellowToken4torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((yellowToken4torus.position.x == greenToken1torus.position.x && yellowToken4torus.position.y == greenToken1torus.position.y && yellowToken4torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((yellowToken4torus.position.x == greenToken2torus.position.x && yellowToken4torus.position.y == greenToken2torus.position.y && yellowToken4torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((yellowToken4torus.position.x == greenToken3torus.position.x && yellowToken4torus.position.y == greenToken3torus.position.y && yellowToken4torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((yellowToken4torus.position.x == greenToken4torus.position.x && yellowToken4torus.position.y == greenToken4torus.position.y && yellowToken4torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((yellowToken4torus.position.x == redToken1torus.position.x && yellowToken4torus.position.y == redToken1torus.position.y && yellowToken4torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((yellowToken4torus.position.x == redToken2torus.position.x && yellowToken4torus.position.y == redToken2torus.position.y && yellowToken4torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((yellowToken4torus.position.x == redToken3torus.position.x && yellowToken4torus.position.y == redToken3torus.position.y && yellowToken4torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((yellowToken4torus.position.x == redToken4torus.position.x && yellowToken4torus.position.y == redToken4torus.position.y && yellowToken4torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }


                }

            } console.log(yellowTokenCount4, " ddd2 ", yellowTokenCount3, "  ", yellowTokenCount2, "  ", yellowTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }








        if (intersects[i].object.name === 'greenToken1' && name == 'greenToken11') {
            if (g1Selected == 1) {
                scene.remove(greenToken11torus);
                g1Selected = 0;
            }
            if (g2Selected == 1) {
                scene.remove(greenToken22torus);
                g2Selected = 0;
            }
            if (g3Selected == 1) {
                scene.remove(greenToken33torus);
                g3Selected = 0;
            }
            if (g4Selected == 1) {
                scene.remove(greenToken44torus);
                g4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(greenTokenCount4, " ddd1 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, "  ", name);

                if (greenTokenCount1 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } greenTokenCount1++;
                green(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(greenToken1torus.position.x == 12 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == 2) && !(greenToken1torus.position.x == -12 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == -2) && !(greenToken1torus.position.x == -2 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == 12) && !(greenToken1torus.position.x == 2 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == -12) &&
                    !(greenToken1torus.position.x == -10 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == 2) && !(greenToken1torus.position.x == 10 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == -2) && !(greenToken1torus.position.x == 2 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == 10) && !(greenToken1torus.position.x == -2 && greenToken1torus.position.y == 1 && greenToken1torus.position.z == -10)
                ) {
                    if ((greenToken1torus.position.x == blueToken1torus.position.x && greenToken1torus.position.y == blueToken1torus.position.y && greenToken1torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((greenToken1torus.position.x == blueToken2torus.position.x && greenToken1torus.position.y == blueToken2torus.position.y && greenToken1torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((greenToken1torus.position.x == blueToken3torus.position.x && greenToken1torus.position.y == blueToken3torus.position.y && greenToken1torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((greenToken1torus.position.x == blueToken4torus.position.x && greenToken1torus.position.y == blueToken4torus.position.y && greenToken1torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((greenToken1torus.position.x == yellowToken1torus.position.x && greenToken1torus.position.y == yellowToken1torus.position.y && greenToken1torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((greenToken1torus.position.x == yellowToken2torus.position.x && greenToken1torus.position.y == yellowToken2torus.position.y && greenToken1torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((greenToken1torus.position.x == yellowToken3torus.position.x && greenToken1torus.position.y == yellowToken3torus.position.y && greenToken1torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((greenToken1torus.position.x == yellowToken4torus.position.x && greenToken1torus.position.y == yellowToken4torus.position.y && greenToken1torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((greenToken1torus.position.x == redToken1torus.position.x && greenToken1torus.position.y == redToken1torus.position.y && greenToken1torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((greenToken1torus.position.x == redToken2torus.position.x && greenToken1torus.position.y == redToken2torus.position.y && greenToken1torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((greenToken1torus.position.x == redToken3torus.position.x && greenToken1torus.position.y == redToken3torus.position.y && greenToken1torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((greenToken1torus.position.x == redToken4torus.position.x && greenToken1torus.position.y == redToken4torus.position.y && greenToken1torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }

            } console.log(greenTokenCount4, "  ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'greenToken2' && name == 'greenToken22') {
            if (g1Selected == 1) {
                scene.remove(greenToken11torus);
                g1Selected = 0;
            }
            if (g2Selected == 1) {
                scene.remove(greenToken22torus);
                g2Selected = 0;
            }
            if (g3Selected == 1) {
                scene.remove(greenToken33torus);
                g3Selected = 0;
            }
            if (g4Selected == 1) {
                scene.remove(greenToken44torus);
                g4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(greenTokenCount4, " ddd1 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, "  ", name);

                if (greenTokenCount2 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } greenTokenCount2++;
                green(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }
                if (!(greenToken2torus.position.x == 12 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == 2) && !(greenToken2torus.position.x == -12 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == -2) && !(greenToken2torus.position.x == -2 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == 12) && !(greenToken2torus.position.x == 2 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == -12) &&
                    !(greenToken2torus.position.x == -10 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == 2) && !(greenToken2torus.position.x == 10 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == -2) && !(greenToken2torus.position.x == 2 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == 10) && !(greenToken2torus.position.x == -2 && greenToken2torus.position.y == 1 && greenToken2torus.position.z == -10)
                ) {


                    if ((greenToken2torus.position.x == blueToken1torus.position.x && greenToken2torus.position.y == blueToken1torus.position.y && greenToken2torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((greenToken2torus.position.x == blueToken2torus.position.x && greenToken2torus.position.y == blueToken2torus.position.y && greenToken2torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((greenToken2torus.position.x == blueToken3torus.position.x && greenToken2torus.position.y == blueToken3torus.position.y && greenToken2torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((greenToken2torus.position.x == blueToken4torus.position.x && greenToken2torus.position.y == blueToken4torus.position.y && greenToken2torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((greenToken2torus.position.x == yellowToken1torus.position.x && greenToken2torus.position.y == yellowToken1torus.position.y && greenToken2torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((greenToken2torus.position.x == yellowToken2torus.position.x && greenToken2torus.position.y == yellowToken2torus.position.y && greenToken2torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((greenToken2torus.position.x == yellowToken3torus.position.x && greenToken2torus.position.y == yellowToken3torus.position.y && greenToken2torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((greenToken2torus.position.x == yellowToken4torus.position.x && greenToken2torus.position.y == yellowToken4torus.position.y && greenToken2torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((greenToken2torus.position.x == redToken1torus.position.x && greenToken2torus.position.y == redToken1torus.position.y && greenToken2torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((greenToken2torus.position.x == redToken2torus.position.x && greenToken2torus.position.y == redToken2torus.position.y && greenToken2torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((greenToken2torus.position.x == redToken3torus.position.x && greenToken2torus.position.y == redToken3torus.position.y && greenToken2torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((greenToken2torus.position.x == redToken4torus.position.x && greenToken2torus.position.y == redToken4torus.position.y && greenToken2torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }

            }
            console.log(greenTokenCount4, " ddd2 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'greenToken3' && name == 'greenToken33') {
            if (g1Selected == 1) {
                scene.remove(greenToken11torus);
                g1Selected = 0;
            }
            if (g2Selected == 1) {
                scene.remove(greenToken22torus);
                g2Selected = 0;
            }
            if (g3Selected == 1) {
                scene.remove(greenToken33torus);
                g3Selected = 0;
            }
            if (g4Selected == 1) {
                scene.remove(greenToken44torus);
                g4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(greenTokenCount4, " ddd1 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, "  ", name);
                if (greenTokenCount3 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } greenTokenCount3++;
                green(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(greenToken3torus.position.x == 12 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == 2) && !(greenToken3torus.position.x == -12 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == -2) && !(greenToken3torus.position.x == -2 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == 12) && !(greenToken3torus.position.x == 2 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == -12) &&
                    !(greenToken3torus.position.x == -10 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == 2) && !(greenToken3torus.position.x == 10 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == -2) && !(greenToken3torus.position.x == 2 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == 10) && !(greenToken3torus.position.x == -2 && greenToken3torus.position.y == 1 && greenToken3torus.position.z == -10)
                ) {
                    if ((greenToken3torus.position.x == blueToken1torus.position.x && greenToken3torus.position.y == blueToken1torus.position.y && greenToken3torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((greenToken3torus.position.x == blueToken2torus.position.x && greenToken3torus.position.y == blueToken2torus.position.y && greenToken3torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((greenToken3torus.position.x == blueToken3torus.position.x && greenToken3torus.position.y == blueToken3torus.position.y && greenToken3torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((greenToken3torus.position.x == blueToken4torus.position.x && greenToken3torus.position.y == blueToken4torus.position.y && greenToken3torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((greenToken3torus.position.x == yellowToken1torus.position.x && greenToken3torus.position.y == yellowToken1torus.position.y && greenToken3torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((greenToken3torus.position.x == yellowToken2torus.position.x && greenToken3torus.position.y == yellowToken2torus.position.y && greenToken3torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((greenToken3torus.position.x == yellowToken3torus.position.x && greenToken3torus.position.y == yellowToken3torus.position.y && greenToken3torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((greenToken3torus.position.x == yellowToken4torus.position.x && greenToken3torus.position.y == yellowToken4torus.position.y && greenToken3torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((greenToken3torus.position.x == redToken1torus.position.x && greenToken3torus.position.y == redToken1torus.position.y && greenToken3torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((greenToken3torus.position.x == redToken2torus.position.x && greenToken3torus.position.y == redToken2torus.position.y && greenToken3torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((greenToken3torus.position.x == redToken3torus.position.x && greenToken3torus.position.y == redToken3torus.position.y && greenToken3torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((greenToken3torus.position.x == redToken4torus.position.x && greenToken3torus.position.y == redToken4torus.position.y && greenToken3torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }


            } console.log(greenTokenCount4, " ddd2 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'greenToken4' && name == 'greenToken44') {
            if (g1Selected == 1) {
                scene.remove(greenToken11torus);
                g1Selected = 0;
            }
            if (g2Selected == 1) {
                scene.remove(greenToken22torus);
                g2Selected = 0;
            }
            if (g3Selected == 1) {
                scene.remove(greenToken33torus);
                g3Selected = 0;
            }
            if (g4Selected == 1) {
                scene.remove(greenToken44torus);
                g4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++;
                console.log(greenTokenCount4, " ddd1 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, "  ", name);
                if (greenTokenCount4 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } greenTokenCount4++;
                green(intersects[i]);
                noDice = 0;
            }
            if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(greenToken4torus.position.x == 12 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == 2) && !(greenToken4torus.position.x == -12 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == -2) && !(greenToken4torus.position.x == -2 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == 12) && !(greenToken4torus.position.x == 2 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == -12) &&
                    !(greenToken4torus.position.x == -10 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == 2) && !(greenToken4torus.position.x == 10 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == -2) && !(greenToken4torus.position.x == 2 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == 10) && !(greenToken4torus.position.x == -2 && greenToken4torus.position.y == 1 && greenToken4torus.position.z == -10)
                ) {

                    if ((greenToken4torus.position.x == blueToken1torus.position.x && greenToken4torus.position.y == blueToken1torus.position.y && greenToken4torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((greenToken4torus.position.x == blueToken2torus.position.x && greenToken4torus.position.y == blueToken2torus.position.y && greenToken4torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((greenToken4torus.position.x == blueToken3torus.position.x && greenToken4torus.position.y == blueToken3torus.position.y && greenToken4torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((greenToken4torus.position.x == blueToken4torus.position.x && greenToken4torus.position.y == blueToken4torus.position.y && greenToken4torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }


                    if ((greenToken4torus.position.x == yellowToken1torus.position.x && greenToken4torus.position.y == yellowToken1torus.position.y && greenToken4torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((greenToken4torus.position.x == yellowToken2torus.position.x && greenToken4torus.position.y == yellowToken2torus.position.y && greenToken4torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((greenToken4torus.position.x == yellowToken3torus.position.x && greenToken4torus.position.y == yellowToken3torus.position.y && greenToken4torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((greenToken4torus.position.x == yellowToken4torus.position.x && greenToken4torus.position.y == yellowToken4torus.position.y && greenToken4torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((greenToken4torus.position.x == redToken1torus.position.x && greenToken4torus.position.y == redToken1torus.position.y && greenToken4torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((greenToken4torus.position.x == redToken2torus.position.x && greenToken4torus.position.y == redToken2torus.position.y && greenToken4torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((greenToken4torus.position.x == redToken3torus.position.x && greenToken4torus.position.y == redToken3torus.position.y && greenToken4torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((greenToken4torus.position.x == redToken4torus.position.x && greenToken4torus.position.y == redToken4torus.position.y && greenToken4torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }



            } console.log(greenTokenCount4, " ddd2 ", greenTokenCount3, "  ", greenTokenCount2, "  ", greenTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }



        if (intersects[i].object.name === 'blueToken1' && name == 'blueToken11') {
            if (b1Selected == 1) {
                scene.remove(blueToken11torus);
                b1Selected = 0;
            }
            if (b2Selected == 1) {
                scene.remove(blueToken22torus);
                b2Selected = 0;
            }
            if (b3Selected == 1) {
                scene.remove(blueToken33torus);
                b3Selected = 0;
            }
            if (b4Selected == 1) {
                scene.remove(blueToken44torus);
                b4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(blueTokenCount4, " ddd1 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, "  ", name);

                if (blueTokenCount1 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } blueTokenCount1++;
                blue(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(blueToken1torus.position.x == 12 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == 2) && !(blueToken1torus.position.x == -12 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == -2) && !(blueToken1torus.position.x == -2 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == 12) && !(blueToken1torus.position.x == 2 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == -12) &&
                    !(blueToken1torus.position.x == -10 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == 2) && !(blueToken1torus.position.x == 10 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == -2) && !(blueToken1torus.position.x == 2 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == 10) && !(blueToken1torus.position.x == -2 && blueToken1torus.position.y == 1 && blueToken1torus.position.z == -10)
                ) {
                    if ((blueToken1torus.position.x == greenToken1torus.position.x && blueToken1torus.position.y == greenToken1torus.position.y && blueToken1torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((blueToken1torus.position.x == greenToken2torus.position.x && blueToken1torus.position.y == greenToken2torus.position.y && blueToken1torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((blueToken1torus.position.x == greenToken3torus.position.x && blueToken1torus.position.y == greenToken3torus.position.y && blueToken1torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((blueToken1torus.position.x == greenToken4torus.position.x && blueToken1torus.position.y == greenToken4torus.position.y && blueToken1torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((blueToken1torus.position.x == yellowToken1torus.position.x && blueToken1torus.position.y == yellowToken1torus.position.y && blueToken1torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((blueToken1torus.position.x == yellowToken2torus.position.x && blueToken1torus.position.y == yellowToken2torus.position.y && blueToken1torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((blueToken1torus.position.x == yellowToken3torus.position.x && blueToken1torus.position.y == yellowToken3torus.position.y && blueToken1torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((blueToken1torus.position.x == yellowToken4torus.position.x && blueToken1torus.position.y == yellowToken4torus.position.y && blueToken1torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((blueToken1torus.position.x == redToken1torus.position.x && blueToken1torus.position.y == redToken1torus.position.y && blueToken1torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((blueToken1torus.position.x == redToken2torus.position.x && blueToken1torus.position.y == redToken2torus.position.y && blueToken1torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((blueToken1torus.position.x == redToken3torus.position.x && blueToken1torus.position.y == redToken3torus.position.y && blueToken1torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((blueToken1torus.position.x == redToken4torus.position.x && blueToken1torus.position.y == redToken4torus.position.y && blueToken1torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }

            } console.log(blueTokenCount4, "  ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'blueToken2' && name == 'blueToken22') {
            if (b1Selected == 1) {
                scene.remove(blueToken11torus);
                b1Selected = 0;
            }
            if (b2Selected == 1) {
                scene.remove(blueToken22torus);
                b2Selected = 0;
            }
            if (b3Selected == 1) {
                scene.remove(blueToken33torus);
                b3Selected = 0;
            }
            if (b4Selected == 1) {
                scene.remove(blueToken44torus);
                b4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(blueTokenCount4, " ddd1 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, "  ", name);

                if (blueTokenCount2 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } blueTokenCount2++;
                blue(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(blueToken2torus.position.x == 12 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == 2) && !(blueToken2torus.position.x == -12 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == -2) && !(blueToken2torus.position.x == -2 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == 12) && !(blueToken2torus.position.x == 2 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == -12) &&
                    !(blueToken2torus.position.x == -10 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == 2) && !(blueToken2torus.position.x == 10 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == -2) && !(blueToken2torus.position.x == 2 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == 10) && !(blueToken2torus.position.x == -2 && blueToken2torus.position.y == 1 && blueToken2torus.position.z == -10)
                ) {
                    if ((blueToken2torus.position.x == greenToken1torus.position.x && blueToken2torus.position.y == greenToken1torus.position.y && blueToken2torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((blueToken2torus.position.x == greenToken2torus.position.x && blueToken2torus.position.y == greenToken2torus.position.y && blueToken2torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((blueToken2torus.position.x == greenToken3torus.position.x && blueToken2torus.position.y == greenToken3torus.position.y && blueToken2torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((blueToken2torus.position.x == greenToken4torus.position.x && blueToken2torus.position.y == greenToken4torus.position.y && blueToken2torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((blueToken2torus.position.x == yellowToken1torus.position.x && blueToken2torus.position.y == yellowToken1torus.position.y && blueToken2torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((blueToken2torus.position.x == yellowToken2torus.position.x && blueToken2torus.position.y == yellowToken2torus.position.y && blueToken2torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((blueToken2torus.position.x == yellowToken3torus.position.x && blueToken2torus.position.y == yellowToken3torus.position.y && blueToken2torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((blueToken2torus.position.x == yellowToken4torus.position.x && blueToken2torus.position.y == yellowToken4torus.position.y && blueToken2torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((blueToken2torus.position.x == redToken1torus.position.x && blueToken2torus.position.y == redToken1torus.position.y && blueToken2torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((blueToken2torus.position.x == redToken2torus.position.x && blueToken2torus.position.y == redToken2torus.position.y && blueToken2torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((blueToken2torus.position.x == redToken3torus.position.x && blueToken2torus.position.y == redToken3torus.position.y && blueToken2torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((blueToken2torus.position.x == redToken4torus.position.x && blueToken2torus.position.y == redToken4torus.position.y && blueToken2torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }

            }
            console.log(blueTokenCount4, " ddd2 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'blueToken3' && name == 'blueToken33') {
            if (b1Selected == 1) {
                scene.remove(blueToken11torus);
                b1Selected = 0;
            }
            if (b2Selected == 1) {
                scene.remove(blueToken22torus);
                b2Selected = 0;
            }
            if (b3Selected == 1) {
                scene.remove(blueToken33torus);
                b3Selected = 0;
            }
            if (b4Selected == 1) {
                scene.remove(blueToken44torus);
                b4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(blueTokenCount4, " ddd1 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, "  ", name);
                if (blueTokenCount3 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } blueTokenCount3++;
                blue(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(blueToken3torus.position.x == 12 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == 2) && !(blueToken3torus.position.x == -12 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == -2) && !(blueToken3torus.position.x == -2 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == 12) && !(blueToken3torus.position.x == 2 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == -12) &&
                    !(blueToken3torus.position.x == -10 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == 2) && !(blueToken3torus.position.x == 10 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == -2) && !(blueToken3torus.position.x == 2 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == 10) && !(blueToken3torus.position.x == -2 && blueToken3torus.position.y == 1 && blueToken3torus.position.z == -10)
                ) {
                    if ((blueToken3torus.position.x == greenToken1torus.position.x && blueToken3torus.position.y == greenToken1torus.position.y && blueToken3torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((blueToken3torus.position.x == greenToken2torus.position.x && blueToken3torus.position.y == greenToken2torus.position.y && blueToken3torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((blueToken3torus.position.x == greenToken3torus.position.x && blueToken3torus.position.y == greenToken3torus.position.y && blueToken3torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((blueToken3torus.position.x == greenToken4torus.position.x && blueToken3torus.position.y == greenToken4torus.position.y && blueToken3torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((blueToken3torus.position.x == yellowToken1torus.position.x && blueToken3torus.position.y == yellowToken1torus.position.y && blueToken3torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((blueToken3torus.position.x == yellowToken2torus.position.x && blueToken3torus.position.y == yellowToken2torus.position.y && blueToken3torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((blueToken3torus.position.x == yellowToken3torus.position.x && blueToken3torus.position.y == yellowToken3torus.position.y && blueToken3torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((blueToken3torus.position.x == yellowToken4torus.position.x && blueToken3torus.position.y == yellowToken4torus.position.y && blueToken3torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((blueToken3torus.position.x == redToken1torus.position.x && blueToken3torus.position.y == redToken1torus.position.y && blueToken3torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((blueToken3torus.position.x == redToken2torus.position.x && blueToken3torus.position.y == redToken2torus.position.y && blueToken3torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((blueToken3torus.position.x == redToken3torus.position.x && blueToken3torus.position.y == redToken3torus.position.y && blueToken3torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((blueToken3torus.position.x == redToken4torus.position.x && blueToken3torus.position.y == redToken4torus.position.y && blueToken3torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }

                }

            } console.log(blueTokenCount4, " ddd2 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'blueToken4' && name == 'blueToken44') {
            if (b1Selected == 1) {
                scene.remove(blueToken11torus);
                b1Selected = 0;
            }
            if (b2Selected == 1) {
                scene.remove(blueToken22torus);
                b2Selected = 0;
            }
            if (b3Selected == 1) {
                scene.remove(blueToken33torus);
                b3Selected = 0;
            }
            if (b4Selected == 1) {
                scene.remove(blueToken44torus);
                b4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++;
                console.log(blueTokenCount4, " ddd1 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, "  ", name);
                if (blueTokenCount4 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } blueTokenCount4++;
                blue(intersects[i]);
                noDice = 0;
            }
            if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }
                if (!(blueToken4torus.position.x == 12 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == 2) && !(blueToken4torus.position.x == -12 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == -2) && !(blueToken4torus.position.x == -2 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == 12) && !(blueToken4torus.position.x == 2 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == -12) &&
                    !(blueToken4torus.position.x == -10 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == 2) && !(blueToken4torus.position.x == 10 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == -2) && !(blueToken4torus.position.x == 2 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == 10) && !(blueToken4torus.position.x == -2 && blueToken4torus.position.y == 1 && blueToken4torus.position.z == -10)
                ) {

                    if ((blueToken4torus.position.x == greenToken1torus.position.x && blueToken4torus.position.y == greenToken1torus.position.y && blueToken4torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((blueToken4torus.position.x == greenToken2torus.position.x && blueToken4torus.position.y == greenToken2torus.position.y && blueToken4torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((blueToken4torus.position.x == greenToken3torus.position.x && blueToken4torus.position.y == greenToken3torus.position.y && blueToken4torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((blueToken4torus.position.x == greenToken4torus.position.x && blueToken4torus.position.y == greenToken4torus.position.y && blueToken4torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((blueToken4torus.position.x == yellowToken1torus.position.x && blueToken4torus.position.y == yellowToken1torus.position.y && blueToken4torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((blueToken4torus.position.x == yellowToken2torus.position.x && blueToken4torus.position.y == yellowToken2torus.position.y && blueToken4torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((blueToken4torus.position.x == yellowToken3torus.position.x && blueToken4torus.position.y == yellowToken3torus.position.y && blueToken4torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((blueToken4torus.position.x == yellowToken4torus.position.x && blueToken4torus.position.y == yellowToken4torus.position.y && blueToken4torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((blueToken4torus.position.x == redToken1torus.position.x && blueToken4torus.position.y == redToken1torus.position.y && blueToken4torus.position.z == redToken1torus.position.z)) {
                        redToken1torus.position.set(-8.8, 1, -11.3);
                        redTokenCount1 = -1;
                    }
                    if ((blueToken4torus.position.x == redToken2torus.position.x && blueToken4torus.position.y == redToken2torus.position.y && blueToken4torus.position.z == redToken2torus.position.z)) {
                        redToken2torus.position.set(-8.8, 1, -6.5);
                        redTokenCount2 = -1;
                    }
                    if ((blueToken4torus.position.x == redToken3torus.position.x && blueToken4torus.position.y == redToken3torus.position.y && blueToken4torus.position.z == redToken3torus.position.z)) {
                        redToken3torus.position.set(-11.2, 1, -8.8);
                        redTokenCount3 = -1;
                    }
                    if ((blueToken4torus.position.x == redToken4torus.position.x && blueToken4torus.position.y == redToken4torus.position.y && blueToken4torus.position.z == redToken4torus.position.z)) {
                        redToken4torus.position.set(-6.4, 1, -8.8);
                        redTokenCount4 = -1;
                    }
                }



            } console.log(blueTokenCount4, " ddd2 ", blueTokenCount3, "  ", blueTokenCount2, "  ", blueTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }






        if (intersects[i].object.name === 'redToken1' && name == 'redToken11') {
            if (r1Selected == 1) {
                scene.remove(redToken11torus);
                r1Selected = 0;
            }
            if (r2Selected == 1) {
                scene.remove(redToken22torus);
                r2Selected = 0;
            }
            if (r3Selected == 1) {
                scene.remove(redToken33torus);
                r3Selected = 0;
            }
            if (r4Selected == 1) {
                scene.remove(redToken44torus);
                r4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(redTokenCount4, " ddd1 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, "  ", name);

                if (redTokenCount1 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } redTokenCount1++;
                red(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }
                if (!(redToken1torus.position.x == 12 && redToken1torus.position.y == 1 && redToken1torus.position.z == 2) && !(redToken1torus.position.x == -12 && redToken1torus.position.y == 1 && redToken1torus.position.z == -2) && !(redToken1torus.position.x == -2 && redToken1torus.position.y == 1 && redToken1torus.position.z == 12) && !(redToken1torus.position.x == 2 && redToken1torus.position.y == 1 && redToken1torus.position.z == -12) &&
                    !(redToken1torus.position.x == -10 && redToken1torus.position.y == 1 && redToken1torus.position.z == 2) && !(redToken1torus.position.x == 10 && redToken1torus.position.y == 1 && redToken1torus.position.z == -2) && !(redToken1torus.position.x == 2 && redToken1torus.position.y == 1 && redToken1torus.position.z == 10) && !(redToken1torus.position.x == -2 && redToken1torus.position.y == 1 && redToken1torus.position.z == -10)
                ) {
                    if ((redToken1torus.position.x == greenToken1torus.position.x && redToken1torus.position.y == greenToken1torus.position.y && redToken1torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((redToken1torus.position.x == greenToken2torus.position.x && redToken1torus.position.y == greenToken2torus.position.y && redToken1torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((redToken1torus.position.x == greenToken3torus.position.x && redToken1torus.position.y == greenToken3torus.position.y && redToken1torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((redToken1torus.position.x == greenToken4torus.position.x && redToken1torus.position.y == greenToken4torus.position.y && redToken1torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((redToken1torus.position.x == yellowToken1torus.position.x && redToken1torus.position.y == yellowToken1torus.position.y && redToken1torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((redToken1torus.position.x == yellowToken2torus.position.x && redToken1torus.position.y == yellowToken2torus.position.y && redToken1torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((redToken1torus.position.x == yellowToken3torus.position.x && redToken1torus.position.y == yellowToken3torus.position.y && redToken1torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((redToken1torus.position.x == yellowToken4torus.position.x && redToken1torus.position.y == yellowToken4torus.position.y && redToken1torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((redToken1torus.position.x == blueToken1torus.position.x && redToken1torus.position.y == blueToken1torus.position.y && redToken1torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((redToken1torus.position.x == blueToken2torus.position.x && redToken1torus.position.y == blueToken2torus.position.y && redToken1torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((redToken1torus.position.x == blueToken3torus.position.x && redToken1torus.position.y == blueToken3torus.position.y && redToken1torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((redToken1torus.position.x == blueToken4torus.position.x && redToken1torus.position.y == blueToken4torus.position.y && redToken1torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }
                }



            } console.log(redTokenCount4, "  ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'redToken2' && name == 'redToken22') {
            if (r1Selected == 1) {
                scene.remove(redToken11torus);
                r1Selected = 0;
            }
            if (r2Selected == 1) {
                scene.remove(redToken22torus);
                r2Selected = 0;
            }
            if (r3Selected == 1) {
                scene.remove(redToken33torus);
                r3Selected = 0;
            }
            if (r4Selected == 1) {
                scene.remove(redToken44torus);
                r4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(redTokenCount4, " ddd1 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, "  ", name);

                if (redTokenCount2 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } redTokenCount2++;
                red(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }
                if (!(redToken2torus.position.x == 12 && redToken2torus.position.y == 1 && redToken2torus.position.z == 2) && !(redToken2torus.position.x == -12 && redToken2torus.position.y == 1 && redToken2torus.position.z == -2) && !(redToken2torus.position.x == -2 && redToken2torus.position.y == 1 && redToken2torus.position.z == 12) && !(redToken2torus.position.x == 2 && redToken2torus.position.y == 1 && redToken2torus.position.z == -12) &&
                    !(redToken2torus.position.x == -10 && redToken2torus.position.y == 1 && redToken2torus.position.z == 2) && !(redToken2torus.position.x == 10 && redToken2torus.position.y == 1 && redToken2torus.position.z == -2) && !(redToken2torus.position.x == 2 && redToken2torus.position.y == 1 && redToken2torus.position.z == 10) && !(redToken2torus.position.x == -2 && redToken2torus.position.y == 1 && redToken2torus.position.z == -10)
                ) {
                    if ((redToken2torus.position.x == greenToken1torus.position.x && redToken2torus.position.y == greenToken1torus.position.y && redToken2torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((redToken2torus.position.x == greenToken2torus.position.x && redToken2torus.position.y == greenToken2torus.position.y && redToken2torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((redToken2torus.position.x == greenToken3torus.position.x && redToken2torus.position.y == greenToken3torus.position.y && redToken2torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((redToken2torus.position.x == greenToken4torus.position.x && redToken2torus.position.y == greenToken4torus.position.y && redToken2torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((redToken2torus.position.x == yellowToken1torus.position.x && redToken2torus.position.y == yellowToken1torus.position.y && redToken2torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((redToken2torus.position.x == yellowToken2torus.position.x && redToken2torus.position.y == yellowToken2torus.position.y && redToken2torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((redToken2torus.position.x == yellowToken3torus.position.x && redToken2torus.position.y == yellowToken3torus.position.y && redToken2torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((redToken2torus.position.x == yellowToken4torus.position.x && redToken2torus.position.y == yellowToken4torus.position.y && redToken2torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((redToken2torus.position.x == blueToken1torus.position.x && redToken2torus.position.y == blueToken1torus.position.y && redToken2torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((redToken2torus.position.x == blueToken2torus.position.x && redToken2torus.position.y == blueToken2torus.position.y && redToken2torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((redToken2torus.position.x == blueToken3torus.position.x && redToken2torus.position.y == blueToken3torus.position.y && redToken2torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((redToken2torus.position.x == blueToken4torus.position.x && redToken2torus.position.y == blueToken4torus.position.y && redToken2torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }
                }

            }
            console.log(redTokenCount4, " ddd2 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'redToken3' && name == 'redToken33') {
            if (r1Selected == 1) {
                scene.remove(redToken11torus);
                r1Selected = 0;
            }
            if (r2Selected == 1) {
                scene.remove(redToken22torus);
                r2Selected = 0;
            }
            if (r3Selected == 1) {
                scene.remove(redToken33torus);
                r3Selected = 0;
            }
            if (r4Selected == 1) {
                scene.remove(redToken44torus);
                r4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++; console.log(redTokenCount4, " ddd1 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, "  ", name);
                if (redTokenCount3 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } redTokenCount3++;
                red(intersects[i]);
                noDice = 0;
            } if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }

                if (!(redToken3torus.position.x == 12 && redToken3torus.position.y == 1 && redToken3torus.position.z == 2) && !(redToken3torus.position.x == -12 && redToken3torus.position.y == 1 && redToken3torus.position.z == -2) && !(redToken3torus.position.x == -2 && redToken3torus.position.y == 1 && redToken3torus.position.z == 12) && !(redToken3torus.position.x == 2 && redToken3torus.position.y == 1 && redToken3torus.position.z == -12) &&
                    !(redToken3torus.position.x == -10 && redToken3torus.position.y == 1 && redToken3torus.position.z == 2) && !(redToken3torus.position.x == 10 && redToken3torus.position.y == 1 && redToken3torus.position.z == -2) && !(redToken3torus.position.x == 2 && redToken3torus.position.y == 1 && redToken3torus.position.z == 10) && !(redToken3torus.position.x == -2 && redToken3torus.position.y == 1 && redToken3torus.position.z == -10)
                ) {
                    if ((redToken3torus.position.x == greenToken1torus.position.x && redToken3torus.position.y == greenToken1torus.position.y && redToken3torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((redToken3torus.position.x == greenToken2torus.position.x && redToken3torus.position.y == greenToken2torus.position.y && redToken3torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((redToken3torus.position.x == greenToken3torus.position.x && redToken3torus.position.y == greenToken3torus.position.y && redToken3torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((redToken3torus.position.x == greenToken4torus.position.x && redToken3torus.position.y == greenToken4torus.position.y && redToken3torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((redToken3torus.position.x == yellowToken1torus.position.x && redToken3torus.position.y == yellowToken1torus.position.y && redToken3torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((redToken3torus.position.x == yellowToken2torus.position.x && redToken3torus.position.y == yellowToken2torus.position.y && redToken3torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((redToken3torus.position.x == yellowToken3torus.position.x && redToken3torus.position.y == yellowToken3torus.position.y && redToken3torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((redToken3torus.position.x == yellowToken4torus.position.x && redToken3torus.position.y == yellowToken4torus.position.y && redToken3torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((redToken3torus.position.x == blueToken1torus.position.x && redToken3torus.position.y == blueToken1torus.position.y && redToken3torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(-8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((redToken3torus.position.x == blueToken2torus.position.x && redToken3torus.position.y == blueToken2torus.position.y && redToken3torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((redToken3torus.position.x == blueToken3torus.position.x && redToken3torus.position.y == blueToken3torus.position.y && redToken3torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((redToken3torus.position.x == blueToken4torus.position.x && redToken3torus.position.y == blueToken4torus.position.y && redToken3torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }
                }


            } console.log(redTokenCount4, " ddd2 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }

        if (intersects[i].object.name === 'redToken4' && name == 'redToken44') {
            if (r1Selected == 1) {
                scene.remove(redToken11torus);
                r1Selected = 0;
            }
            if (r2Selected == 1) {
                scene.remove(redToken22torus);
                r2Selected = 0;
            }
            if (r3Selected == 1) {
                scene.remove(redToken33torus);
                r3Selected = 0;
            }
            if (r4Selected == 1) {
                scene.remove(redToken44torus);
                r4Selected = 0;
            }
            if (count < diceValue[diceIndex]) {
                count++;
                console.log(redTokenCount4, " ddd1 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, "  ", name);
                if (redTokenCount4 == -1 && diceValue[diceIndex] == 6) {
                    count = diceValue[diceIndex];
                } redTokenCount4++;
                red(intersects[i]);
                noDice = 0;
            }
            if (count == diceValue[diceIndex]) {
                noDice = 1; if (diceValue[diceIndex] != 6) {
                    colorIndex++;
                }
                if (colorIndex >= 4) {
                    colorIndex = 0;
                }
                if (!(redToken4torus.position.x == 12 && redToken4torus.position.y == 1 && redToken4torus.position.z == 2) && !(redToken4torus.position.x == -12 && redToken4torus.position.y == 1 && redToken4torus.position.z == -2) && !(redToken4torus.position.x == -2 && redToken4torus.position.y == 1 && redToken4torus.position.z == 12) && !(redToken4torus.position.x == 2 && redToken4torus.position.y == 1 && redToken4torus.position.z == -12) &&
                    !(redToken4torus.position.x == -10 && redToken4torus.position.y == 1 && redToken4torus.position.z == 2) && !(redToken4torus.position.x == 10 && redToken4torus.position.y == 1 && redToken4torus.position.z == -2) && !(redToken4torus.position.x == 2 && redToken4torus.position.y == 1 && redToken4torus.position.z == 10) && !(redToken4torus.position.x == -2 && redToken4torus.position.y == 1 && redToken4torus.position.z == -10)
                ) {

                    if ((redToken4torus.position.x == greenToken1torus.position.x && redToken4torus.position.y == greenToken1torus.position.y && redToken4torus.position.z == greenToken1torus.position.z)) {
                        greenToken1torus.position.set(8.8, 1, -11.3);
                        greenTokenCount1 = -1;
                    }
                    if ((redToken4torus.position.x == greenToken2torus.position.x && redToken4torus.position.y == greenToken2torus.position.y && redToken4torus.position.z == greenToken2torus.position.z)) {
                        greenToken2torus.position.set(8.8, 1, -6.5);
                        greenTokenCount2 = -1;
                    }
                    if ((redToken4torus.position.x == greenToken3torus.position.x && redToken4torus.position.y == greenToken3torus.position.y && redToken4torus.position.z == greenToken3torus.position.z)) {
                        greenToken3torus.position.set(11.2, 1, -8.8);
                        greenTokenCount3 = -1;
                    }
                    if ((redToken4torus.position.x == greenToken4torus.position.x && redToken4torus.position.y == greenToken4torus.position.y && redToken4torus.position.z == greenToken4torus.position.z)) {
                        greenToken4torus.position.set(6.4, 1, -8.8);
                        greenTokenCount4 = -1;
                    }


                    if ((redToken4torus.position.x == yellowToken1torus.position.x && redToken4torus.position.y == yellowToken1torus.position.y && redToken4torus.position.z == yellowToken1torus.position.z)) {
                        yellowToken1torus.position.set(8.8, 1, 11.3);
                        yellowTokenCount1 = -1;
                    }
                    if ((redToken4torus.position.x == yellowToken2torus.position.x && redToken4torus.position.y == yellowToken2torus.position.y && redToken4torus.position.z == yellowToken2torus.position.z)) {
                        yellowToken2torus.position.set(8.8, 1, 6.5);
                        yellowTokenCount2 = -1;
                    }
                    if ((redToken4torus.position.x == yellowToken3torus.position.x && redToken4torus.position.y == yellowToken3torus.position.y && redToken4torus.position.z == yellowToken3torus.position.z)) {
                        yellowToken3torus.position.set(11.2, 1, 8.8);
                        yellowTokenCount3 = -1;
                    }
                    if ((redToken4torus.position.x == yellowToken4torus.position.x && redToken4torus.position.y == yellowToken4torus.position.y && redToken4torus.position.z == yellowToken4torus.position.z)) {
                        yellowToken4torus.position.set(6.4, 1, 8.8);
                        yellowTokenCount4 = -1;
                    }


                    if ((redToken4torus.position.x == blueToken1torus.position.x && redToken4torus.position.y == blueToken1torus.position.y && redToken4torus.position.z == blueToken1torus.position.z)) {
                        blueToken1torus.position.set(8.8, 1, 11.3);
                        blueTokenCount1 = -1;
                    }
                    if ((redToken4torus.position.x == blueToken2torus.position.x && redToken4torus.position.y == blueToken2torus.position.y && redToken4torus.position.z == blueToken2torus.position.z)) {
                        blueToken2torus.position.set(-8.8, 1, 6.5);
                        blueTokenCount2 = -1;
                    }
                    if ((redToken4torus.position.x == blueToken3torus.position.x && redToken4torus.position.y == blueToken3torus.position.y && redToken4torus.position.z == blueToken3torus.position.z)) {
                        blueToken3torus.position.set(-11.2, 1, 8.8);
                        blueTokenCount3 = -1;
                    }
                    if ((redToken4torus.position.x == blueToken4torus.position.x && redToken4torus.position.y == blueToken4torus.position.y && redToken4torus.position.z == blueToken4torus.position.z)) {
                        blueToken4torus.position.set(-6.4, 1, 8.8);
                        blueTokenCount4 = -1;
                    }

                }


            } console.log(redTokenCount4, " ddd2 ", redTokenCount3, "  ", redTokenCount2, "  ", redTokenCount1, " a ", name, " b ", noDice, " c ", count, " d ", diceValue[diceIndex]);
        }
    }

    scoreBoard.geometry.attributes.position.array[0] = 10 * Math.random();
    scoreBoard.geometry.attributes.position.array[1] = 10 * Math.random();
    scoreBoard.geometry.attributes.position.array[2] = 10 * Math.random();
    scoreBoard.geometry.attributes.position.array[lastPointZ] = 10 * Math.random();
    scoreBoard.geometry.attributes.position.needsUpdate = true;

    rotateDice1.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice2.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice3.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice4.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice5.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice6.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice7.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice8.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice9.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice10.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice11.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice12.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice13.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice14.rotation.set(time / 1000, time / 1000, time / 1000);
    rotateDice15.rotation.set(time / 1000, time / 1000, time / 1000);


    renderer.render(scene, camera);
    //console.log(window.innerHeight);
}
renderer.setAnimationLoop(animate);




window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});



function yellow(intersects) {
    rayCaster.setFromCamera(mousePosition, camera);
    let x = intersects.object.position.x;
    let y = intersects.object.position.y;
    let z = intersects.object.position.z;

    /*************  Right ************/
    if (z == 2 && x > 0) {
        if (x > 4) {
            intersects.object.position.x -= 2;
        }
        if (x == 4) {
            intersects.object.position.z += 2;
            intersects.object.position.x -= 2;
        }
        console.log("in1");
    }
    if (z == -2 && x > 0) {
        if (x < 14) {
            intersects.object.position.x += 2;
        }
        if (x == 14) {
            intersects.object.position.z += 2;
        }
        console.log("in2");
    }
    //Vai Careful
    if (z == 0 && x > 2 && x != 14) {
        intersects.object.position.x -= 2;
    }
    //Vai Careful
    if (z == 0 && x == 14) {
        intersects.object.position.x -= 2;
    }

    /*************  Down ************/
    if (x == 2 && z > 0) {
        if (z < 14) {
            intersects.object.position.z += 2;
        }
        if (z == 14) {
            intersects.object.position.x -= 2;
        }
        console.log("in3");
    }
    if (x == -2 && z > 0) {
        if (z > 4) {
            intersects.object.position.z -= 2;
        }
        if (z == 4) {
            intersects.object.position.x -= 2;
            intersects.object.position.z -= 2;
        }
        console.log("in4");
    }
    if (z == 14 && x == 0) {
        intersects.object.position.x -= 2;
    }

    /*************  Left ************/
    if (z == 2 && x < 0) {
        if (x > -14) {
            intersects.object.position.x -= 2;
        }
        if (x == -14) {
            intersects.object.position.z -= 2;
        }
        console.log("in5");
    }
    if (z == -2 && x < 0) {
        if (x < -4) {
            intersects.object.position.x += 2;
        }
        if (x == -4) {
            intersects.object.position.z -= 2;
            intersects.object.position.x += 2;
        }
        console.log("in6");
    }
    if (z == 0 && x == -14) {
        intersects.object.position.z -= 2;
    }

    /*************  Top ************/
    if (x == -2 && z < 0) {
        if (z > -14) {
            intersects.object.position.z -= 2;
        }
        if (z == -14) {
            intersects.object.position.x += 2;
        }
        console.log("in7");
    }
    if (x == 2 && z < 0) {
        if (z < -4) {
            intersects.object.position.z += 2;
        }
        if (z == -4) {
            intersects.object.position.x += 2;
            intersects.object.position.z += 2;
        }
        console.log("in8");
    }
    if (z == -14 && x == 0) {
        intersects.object.position.x += 2;
    }


    //vai Careful
    if ((z >= 4 && x >= 4) && (z <= 14 && x >= 4) && (z >= 4 && x <= 14) && (z <= 14 && x <= 14)) {
        intersects.object.position.x = 12;
        intersects.object.position.z = 2;
    }

    console.log(intersects.object.position.x, " ", intersects.object.position.y, " ", intersects.object.position.z);
    console.log("clicked  ", yellowClicked);
}





function green(intersects) {
    rayCaster.setFromCamera(mousePosition, camera);
    let x = intersects.object.position.x;
    let y = intersects.object.position.y;
    let z = intersects.object.position.z;

    /*************  Right ************/
    if (z == 2 && x > 0) {
        if (x > 4) {
            intersects.object.position.x -= 2;
        }
        if (x == 4) {
            intersects.object.position.z += 2;
            intersects.object.position.x -= 2;
        }
        console.log("in1");
    }
    if (z == -2 && x > 0) {
        if (x < 14) {
            intersects.object.position.x += 2;
        }
        if (x == 14) {
            intersects.object.position.z += 2;
        }
        console.log("in2");
    }
    if (z == 0 && x == 14) {
        intersects.object.position.z += 2;
        console.log("in12");
    }

    /*************  Down ************/
    if (x == 2 && z > 0) {
        if (z < 14) {
            intersects.object.position.z += 2;
        }
        if (z == 14) {
            intersects.object.position.x -= 2;
        }
        console.log("in3");
    }
    if (x == -2 && z > 0) {
        if (z > 4) {
            intersects.object.position.z -= 2;
        }
        if (z == 4) {
            intersects.object.position.x -= 2;
            intersects.object.position.z -= 2;
        }
        console.log("in4");
    }
    if (z == 14 && x == 0) {
        intersects.object.position.x -= 2;
        console.log("in34");
    }

    /*************  Left ************/
    if (z == 2 && x < 0) {
        if (x > -14) {
            intersects.object.position.x -= 2;
        }
        if (x == -14) {
            intersects.object.position.z -= 2;
        }
        console.log("in5");
    }
    if (z == -2 && x < 0) {
        if (x < -4) {
            intersects.object.position.x += 2;
        }
        if (x == -4) {
            intersects.object.position.z -= 2;
            intersects.object.position.x += 2;
        }
        console.log("in6");
    }
    if (z == 0 && x == -14) {
        intersects.object.position.z -= 2;
        console.log("in56");
    }

    /*************  Top ************/
    if (x == -2 && z < 0) {
        if (z > -14) {
            intersects.object.position.z -= 2;
        }
        if (z == -14) {
            intersects.object.position.x += 2;
        }
        console.log("in7");
    }
    if (x == 2 && z < 0) {
        if (z < -4) {
            intersects.object.position.z += 2;
        }
        if (z == -4) {
            intersects.object.position.x += 2;
            intersects.object.position.z += 2;
        }
        console.log("in8");
    }

    //Vai Careful
    if (x == 0 && z < -2 && z != -14) {
        intersects.object.position.z += 2;
        console.log("in78");
    }
    //Vai Careful
    if (x == 0 && z == -14) {
        intersects.object.position.z += 2;
        console.log("in90");
    }


    //vai Careful
    if ((x >= 4 && z <= -4) && (z >= -14 && x <= 14) && (x >= 4 && z >= -14) && (z >= -14 && x <= 14)) {
        intersects.object.position.x = 2;
        intersects.object.position.z = -12;
        console.log("in1212");
    }

    console.log(intersects.object.position.x, " ", intersects.object.position.y, " ", intersects.object.position.z);
    console.log("clicked  ", greenClicked);
}




function red(intersects) {
    rayCaster.setFromCamera(mousePosition, camera);
    let x = intersects.object.position.x;
    let y = intersects.object.position.y;
    let z = intersects.object.position.z;

    /*************  Right ************/
    if (z == 2 && x > 0) {
        if (x > 4) {
            intersects.object.position.x -= 2;
        }
        if (x == 4) {
            intersects.object.position.z += 2;
            intersects.object.position.x -= 2;
        }
        console.log("in1");
    }
    if (z == -2 && x > 0) {
        if (x < 14) {
            intersects.object.position.x += 2;
        }
        if (x == 14) {
            intersects.object.position.z += 2;
        }
        console.log("in2");
    }
    if (z == 0 && x == 14) {
        intersects.object.position.z += 2;
        console.log("in12");
    }

    /*************  Down ************/
    if (x == 2 && z > 0) {
        if (z < 14) {
            intersects.object.position.z += 2;
        }
        if (z == 14) {
            intersects.object.position.x -= 2;
        }
        console.log("in3");
    }
    if (x == -2 && z > 0) {
        if (z > 4) {
            intersects.object.position.z -= 2;
        }
        if (z == 4) {
            intersects.object.position.x -= 2;
            intersects.object.position.z -= 2;
        }
        console.log("in4");
    }
    if (z == 14 && x == 0) {
        intersects.object.position.x -= 2;
        console.log("in34");
    }

    /*************  Left ************/
    if (z == 2 && x < 0) {
        if (x > -14) {
            intersects.object.position.x -= 2;
        }
        if (x == -14) {
            intersects.object.position.z -= 2;
        }
        console.log("in5");
    }
    if (z == -2 && x < 0) {
        if (x < -4) {
            intersects.object.position.x += 2;
        }
        if (x == -4) {
            intersects.object.position.z -= 2;
            intersects.object.position.x += 2;
        }
        console.log("in6");
    }
    //Vai Careful
    if (z == 0 && x < -2 && x != -14) {
        intersects.object.position.x += 2;
        console.log("in78");
    }
    //Vai Careful
    if (z == 0 && x == -14) {
        intersects.object.position.x += 2;
        console.log("in90");
    }

    /*************  Top ************/
    if (x == -2 && z < 0) {
        if (z > -14) {
            intersects.object.position.z -= 2;
        }
        if (z == -14) {
            intersects.object.position.x += 2;
        }
        console.log("in7");
    }
    if (x == 2 && z < 0) {
        if (z < -4) {
            intersects.object.position.z += 2;
        }
        if (z == -4) {
            intersects.object.position.x += 2;
            intersects.object.position.z += 2;
        }
        console.log("in8");
    }
    if (z == -14 && x == 0) {
        intersects.object.position.x += 2;
    }





    //vai Careful
    if ((x <= -4 && z <= -4) && (z >= -14 && x >= -14) && (x <= -4 && z >= -14) && (z >= -14 && x >= -14)) {
        intersects.object.position.x = -12;
        intersects.object.position.z = -2;
        console.log("in1212");
    }

    console.log(intersects.object.position.x, " ", intersects.object.position.y, " ", intersects.object.position.z);
    console.log("clicked  ", redClicked);
}



function blue(intersects) {
    rayCaster.setFromCamera(mousePosition, camera);
    let x = intersects.object.position.x;
    let y = intersects.object.position.y;
    let z = intersects.object.position.z;

    /*************  Right ************/
    if (z == 2 && x > 0) {
        if (x > 4) {
            intersects.object.position.x -= 2;
        }
        if (x == 4) {
            intersects.object.position.z += 2;
            intersects.object.position.x -= 2;
        }
        console.log("in1");
    }
    if (z == -2 && x > 0) {
        if (x < 14) {
            intersects.object.position.x += 2;
        }
        if (x == 14) {
            intersects.object.position.z += 2;
        }
        console.log("in2");
    }
    if (z == 0 && x == 14) {
        intersects.object.position.z += 2;
        console.log("in12");
    }

    /*************  Down ************/
    if (x == 2 && z > 0) {
        if (z < 14) {
            intersects.object.position.z += 2;
        }
        if (z == 14) {
            intersects.object.position.x -= 2;
        }
        console.log("in3");
    }
    if (x == -2 && z > 0) {
        if (z > 4) {
            intersects.object.position.z -= 2;
        }
        if (z == 4) {
            intersects.object.position.x -= 2;
            intersects.object.position.z -= 2;
        }
        console.log("in4");
    }
    //Vai Careful
    if (x == 0 && z > 2 && z != 14) {
        intersects.object.position.z -= 2;
        console.log("in78");
    }
    //Vai Careful
    if (x == 0 && z == 14) {
        intersects.object.position.z -= 2;
        console.log("in90");
    }

    /*************  Left ************/
    if (z == 2 && x < 0) {
        if (x > -14) {
            intersects.object.position.x -= 2;
        }
        if (x == -14) {
            intersects.object.position.z -= 2;
        }
        console.log("in5");
    }
    if (z == -2 && x < 0) {
        if (x < -4) {
            intersects.object.position.x += 2;
        }
        if (x == -4) {
            intersects.object.position.z -= 2;
            intersects.object.position.x += 2;
        }
        console.log("in6");
    }
    if (z == 0 && x == -14) {
        intersects.object.position.z -= 2;
        console.log("in56");
    }


    /*************  Top ************/
    if (x == -2 && z < 0) {
        if (z > -14) {
            intersects.object.position.z -= 2;
        }
        if (z == -14) {
            intersects.object.position.x += 2;
        }
        console.log("in7");
    }
    if (x == 2 && z < 0) {
        if (z < -4) {
            intersects.object.position.z += 2;
        }
        if (z == -4) {
            intersects.object.position.x += 2;
            intersects.object.position.z += 2;
        }
        console.log("in8");
    }
    if (z == -14 && x == 0) {
        intersects.object.position.x += 2;
    }


    //vai Careful
    if ((x <= -4 && z >= 4) && (z <= 14 && x >= -14) && (x <= -4 && z <= 14) && (z >= 4 && x >= -14)) {
        intersects.object.position.x = -2;
        intersects.object.position.z = 12;
        console.log("in1212");
    }

    console.log(intersects.object.position.x, " ", intersects.object.position.y, " ", intersects.object.position.z);
    console.log("clicked  ", blueClicked);
}


function removeToken() {
    scene.remove(yellowToken11torus);
    scene.remove(yellowToken22torus);
    scene.remove(yellowToken33torus);
    scene.remove(yellowToken44torus);
    scene.remove(greenToken11torus);
    scene.remove(greenToken22torus);
    scene.remove(greenToken33torus);
    scene.remove(greenToken44torus);
    scene.remove(redToken11torus);
    scene.remove(redToken22torus);
    scene.remove(redToken33torus);
    scene.remove(redToken44torus);
    scene.remove(blueToken11torus);
    scene.remove(blueToken22torus);
    scene.remove(blueToken33torus);
    scene.remove(blueToken44torus);
}