<template></template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import universe from "@/assets/image/about/universe.jpg";
export default {
    name: "experience",
    mounted() {
        this.itinThree();
    },
    methods: {
        itinThree() {
            const renderer = new THREE.WebGLRenderer();

            // renderer.shadowMap.enabled = true;

            renderer.setSize(window.innerWidth, window.innerHeight);

            document.body.appendChild(renderer.domElement);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );

            const orbit = new OrbitControls(camera, renderer.domElement);

            camera.position.set(10, 30, 30);
            orbit.update();

            scene.fog = new THREE.FogExp2(0xffffff, 0.01);

            const cubeTextureLoader = new THREE.CubeTextureLoader();
            scene.background = cubeTextureLoader.load([
                universe,
                universe,
                universe,
                universe,
                universe,
                universe,
            ]);

            const mousePosition = new THREE.Vector2();

            window.addEventListener("mousemove", function (e) {
                mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
                mousePosition.Y = (e.clientY / window.innerHeight) * 2 + 1;
            });

            function animate() {
                renderer.render(scene, camera);
            }

            renderer.setAnimationLoop(animate);
        },
    },
};
</script>

<style lang="scss" scoped></style>
