<template>
<canvas class="experience"></canvas>
<div class="scrollTarget"></div>
<div class="vignette-radial"></div>
</template>

<script>
import * as THREE from 'three';
import gsap from 'gsap';
import * as $ from 'jquery';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

import { LuminosityHighPassShader } from 'three/examples/jsm/shaders/LuminosityHighPassShader.js';

import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js';

// const camera = new THREE.




export default {
    mounted() {
        /*
  Animated Textures
  by Aaron Sherrill
  Copyright 2019
*/
THREE.SpriteSheetTexture = function(image, framesX, framesY, frameWidth, frameHeight, frameDelay, _endFrame) {
	
	var canvas = document.createElement('canvas');
	canvas.width = frameWidth;
	canvas.height = frameHeight;
	
	var timer, x = y = count = startFrame = 0;
		var endFrame = _endFrame || framesX * framesY;
		var ctx = canvas.getContext('2d');

	$(canvas).css({
			width: frameWidth,
			height: frameHeight
		});
		
		var img = new Image();
		img.crossOrigin = "Anonymous"
		img.onload = function(){
			console.log("spritesheet loaded");
			timer = setInterval(nextFrame, frameDelay);
		}
		img.src = image;
	
		function nextFrame() {
			count++;
			
			if(count >= endFrame ) {
				count = 0;
			};
			
			x = (count % framesX) * frameWidth;
			y = ((count / framesX)|0) * frameHeight;
			
			ctx.clearRect(0, 0, frameWidth, frameHeight);
			ctx.drawImage(img, x, y, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
		}
	
	return new THREE.CanvasTexture(canvas);
}

//
var Mathutils = {
    normalize: function($value, $min, $max) {
        return ($value - $min) / ($max - $min);
    },
    interpolate: function($normValue, $min, $max) {
        return $min + ($max - $min) * $normValue;
    },
    map: function($value, $min1, $max1, $min2, $max2) {
        if ($value < $min1) {
            $value = $min1;
        }
        if ($value > $max1) {
            $value = $max1;
        }
        var res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
        return res;
    }
};
var markers = [];


//Get window size
var ww = window.innerWidth,
  wh = window.innerHeight;

var composer, params = {
    exposure: 1.3,
    bloomStrength: .9,
    bloomThreshold: 0,
    bloomRadius: 0
  };

//Create a WebGL renderer
var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas"),
  antialias: true,
  shadowMapEnabled: true,
  shadowMapType: THREE.PCFSoftShadowMap
});
renderer.setSize(ww, wh);

//Create an empty scene
var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x194794,0,100);

// var clock = new THREE.Clock();

//Create a perpsective camera
var cameraRotationProxyX = 3.14159;
var cameraRotationProxyY = 0;

var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
camera.rotation.y = cameraRotationProxyX;
camera.rotation.z = cameraRotationProxyY;

//camera.position.z = 400;
var c = new THREE.Group();
c.position.z = 400;

c.add(camera);
scene.add(c);


// text 
  THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	THREE.Pass.call( this );

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 0;

	this.clear = true;
	this.clearDepth = false;
	this.needsSwap = false;

};


//set up render pass
var renderScene = new THREE.RenderPass( scene, camera );
var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
			bloomPass.renderToScreen = true;
			bloomPass.threshold = params.bloomThreshold;
			bloomPass.strength = params.bloomStrength;
			bloomPass.radius = params.bloomRadius;
			composer = new THREE.EffectComposer( renderer );
			composer.setSize( window.innerWidth, window.innerHeight );
			composer.addPass( renderScene );
			composer.addPass( bloomPass );


//Array of points
var points = [
	[10, 89, 0],
	[50, 88, 10],
	[76, 139, 20],
	[126, 141, 12],
	[150, 112, 8],
	[157, 73, 0],
	[180, 44, 5],
	[207, 35, 10],
	[232, 36, 0]
];

var p1, p2;

//Convert the array of points into vertices
for (var i = 0; i < points.length; i++) {
  var x = points[i][0];
  var y = points[i][2];
  var z = points[i][1];
  points[i] = new THREE.Vector3(x, y, z);
}
//Create a path from the points
var path = new THREE.CatmullRomCurve3(points);
//path.curveType = 'catmullrom';
path.tension = .5;

//Create a new geometry with a different radius
var geometry = new THREE.TubeGeometry( path, 300, 4, 32, false );

var texture = new THREE.TextureLoader().load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg' , function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 15, 2 );

} );


var mapHeight = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg', function( texture){
 
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 15, 2 );
  
});

var material = new THREE.MeshPhongMaterial({
  side:THREE.BackSide,
  map: texture,
  shininess: 20,
  bumpMap: mapHeight,
  bumpScale: -.03,
  specular: 0x0b2349
});

//Create a mesh
var tube = new THREE.Mesh( geometry, material );
//tube.receiveShadows = true;
//Push the mesh into the scene
scene.add( tube );

//inner tube.=========================================

//Create a new geometry with a different radius
var geometry = new THREE.TubeGeometry( path, 150, 3.4, 32, false );
var geo = new THREE.EdgesGeometry( geometry );
//THREE.EdgesGeometry( geometry );

var mat = new THREE.LineBasicMaterial( {
  linewidth: 2,
  opacity: .2,
  transparent: 1
} );

var wireframe = new THREE.LineSegments( geo, mat );


scene.add( wireframe );

  
  



//-------------------------


//Create a point light in our scene
var light = new THREE.PointLight(0xffffff, .35, 4,0);
light.castShadow = true;
scene.add(light);


function updateCameraPercentage(percentage) {
  p1 = path.getPointAt(percentage%1);
  p2 = path.getPointAt((percentage + 0.03)%3);
  p3 = path.getPointAt((percentage + 0.05)% 1);

  c.position.set(p1.x,p1.y,p1.z);
  c.lookAt(p2);
  light.position.set(p2.x, p2.y, p2.z);
}


var cameraTargetPercentage = 0;
var currentCameraPercentage = 0;



gsap.defaultEase = Linear.easeNone;

var tubePerc = {
  percent: 0
}

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scrollTarget",
    start: "top top",
    end: "bottom 100%",
    scrub: 5,
    markers: {color: "white"},
  }
})
tl.to(tubePerc, {
   percent:.80,
   ease: Linear.easeNone,
   duration: 10,
   onUpdate: function() {
     cameraTargetPercentage = tubePerc.percent;
   }
});
tl.to('.experience', {
  opacity: 0
})


function render(){
  //texture.offset.x+=.004
  //texture2.needsUpdate = true;
  currentCameraPercentage = cameraTargetPercentage
  
  camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
  camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;
  
  updateCameraPercentage(currentCameraPercentage);
  
  //animate texture
  
  particleSystem1.rotation.y += 0.00002;
  particleSystem2.rotation.x += 0.00005;
  particleSystem3.rotation.z += 0.00001;
  
  //Render the scene
  //renderer.render(scene, camera);
  composer.render();

  requestAnimationFrame(render);
}
requestAnimationFrame(render);

$('canvas').click(function(){
  console.clear();
  markers.push(p1);
  console.log(JSON.stringify(markers));
});

window.addEventListener( 'resize', function () {
  
  var width = window.innerWidth;
  var height = window.innerHeight;
  
  camera.aspect = width / height;
	camera.updateProjectionMatrix();
  
  renderer.setSize( width, height );
  composer.setSize( width, height );
  
}, false );



var lastPlace = 0;
var newPlace = 0;



//particle system
// create the particle variables
//
var spikeyTexture = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png');


var particleCount = 6800,
    particles1 = new THREE.Geometry(),
    particles2 = new THREE.Geometry(),
    particles3 = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: .5,
      map: spikeyTexture,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500 - 250,
      pY = Math.random() * 50 - 25,
      pZ = Math.random() * 500 - 250,
      particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles1.vertices.push(particle);
}

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500,
      pY = Math.random() * 10 - 5,
      pZ = Math.random() * 500,
      particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles2.vertices.push(particle);
}

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500,
      pY = Math.random() * 10 - 5,
      pZ = Math.random() * 500,
      particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles3.vertices.push(particle);
}

// create the particle system
var particleSystem1 = new THREE.ParticleSystem(
    particles1,
    pMaterial);

var particleSystem2 = new THREE.ParticleSystem(
    particles2,
    pMaterial);

var particleSystem3 = new THREE.ParticleSystem(
    particles3,
    pMaterial);

// add it to the scene
scene.add(particleSystem1);
scene.add(particleSystem2);
scene.add(particleSystem3);


$(document).mousemove(function(evt) {
  cameraRotationProxyX = Mathutils.map(evt.clientX, 0, window.innerWidth, 3.24, 3.04);
  cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -.1, .1);
});

    },
}
</script>

 <style lang="scss" scoped>
    body{
  margin:0;
}
.experience {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100vh;
  z-index: 2;
}

.scrollTarget {
  position: absolute;
  height: 1000vh;
  width: 100px;
  top: 0;
  z-index: 0;
}

.vignette-radial {
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
}

.vignette-radial:after {
  pointer-events: none;
  content: ' ';
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: radial-gradient(circle, transparent 60%, black 150%);
}
 </style>