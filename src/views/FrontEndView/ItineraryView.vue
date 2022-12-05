<template>
    <innerpageHeader></innerpageHeader>
    <div class="about">
      <h1>行程</h1>
    </div>

    <section class="section bannersec">
        <div class="container ">
            <div class="banner1">
                <div class="word_wrap">
                    <p class="text">準備來場頭暈目眩的穿越吧</p>
                </div>
                <div class="globe_wrap" id="globe_container">
                    <canvas class="canvas_globe"></canvas>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="btnwrap">
                <itin-crsl-btn msg="經典行程"/>
            </div>
            <div class="clsCrslWrap">
                <itinClsCrsl/>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="btnwrap">
                <itin-crsl-btn msg="期間限定"/>
            </div>
            <div class="clsCrslWrap">
                <itin-prd-crsl/>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <itinerary-filter/>
            <itin-card-info/>
        </div>
    </section>
</template>
<script type="module">
    import * as THREE from 'three';
    import gsap from 'gsap';
    import * as $ from 'jquery';
    import imgA from '@/assets/image/itineraryglobe.jpg';
    import itinCrslBtn from '@/components/itinerary/itinCrslBtn.vue';
    import itinClsCrsl from '@/components/itinerary/itinClsCrsl.vue';
    import itinPrdCrsl from '@/components/itinerary/itinPrdCrsl.vue';
    import itineraryFilter from "@/components/itinerary/filter/itineraryFilter.vue";
    import itinCardInfo from "@/components/itinerary/card/itinCardInfo.vue";
    import innerpageHeader from "@/components/innerpageHeader.vue";


    export default{
        name: 'itiniraryView',
        components:{
            itinCrslBtn,
            itinClsCrsl,
            itinPrdCrsl,
            itineraryFilter,
            itinCardInfo,
            innerpageHeader,
        },
        mounted() {
            this.initThree()
        },
        methods: {
            initThree(){
                const globe_container = document.querySelector('#globe_container');
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(
                    75,
                    globe_container.offsetWidth / globe_container.offsetHeight,
                    // window.innerWidth / window.innerHeight,
                    0.1,
                    1000
                )
                
                const renderer = new THREE.WebGLRenderer(
                    {
                    antialias: true,
                    canvas: document.querySelector('.canvas_globe')
                });
                
                // console.log(globe_container);
                renderer.setSize(globe_container.offsetWidth , globe_container.offsetHeight)
                // renderer.setSize(window.innerWidth , window.innerHeight)
                renderer.setPixelRatio(window.devicePixelRatio)
                // document.body.appendChild(renderer.domElement)
                
                //create a sphere
                const vShader =`
                    varying vec2 vertexUV;
                    varying vec3 vertexNormal;
                    void main(){
                        vertexUV =uv;
                        vertexNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }`;
                const fShader = `
                    uniform sampler2D globeTexture;
                    varying vec2 vertexUV;
                    varying vec3 vertexNormal;
                    void main(){
                        float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
                        vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);
                        gl_FragColor = vec4(atmosphere + texture2D(globeTexture,vertexUV).xyz, 1.0);
                    }`
                const sphere = new THREE.Mesh(
                    new THREE.SphereGeometry(5, 50, 50), 
                    new THREE.ShaderMaterial({
                        vertexShader:vShader,
                        fragmentShader:fShader,
                        uniforms:{
                            globeTexture:{
                                value: new THREE.TextureLoader().load(imgA)
                                // @assets\image\itineraryglobe.jpg
                                // map: new THREE.TextureLoader().load('./src/assets/image/itineraryglobe.jpg')
                            }
                        }
                    })
                )
                
                //create atmosphere
                const atmospherevShader =`
                    varying vec3 vertexNormal;
                    void main(){
                        vertexNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }`;
                const atmospherefShader = `
                    varying vec3 vertexNormal;
                    void main(){
                        float intensity = pow(0.6 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
                        gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
                        }`
                const atmosphere = new THREE.Mesh(
                    new THREE.SphereGeometry(5, 50, 50), 
                    new THREE.ShaderMaterial({
                        vertexShader:atmospherevShader,
                        fragmentShader:atmospherefShader,
                        blending: THREE.AdditiveBlending,
                        side: THREE.BackSide
                    })
                )
                
                atmosphere.scale.set(1.2, 1.2, 1.2);
                
                scene.add(atmosphere)
                
                const group = new THREE.Group();
                group.add(sphere);
                scene.add(group)
                
                const starGeometry = new THREE.BufferGeometry();
                const starMaterial = new THREE.PointsMaterial({
                    color:0xFFFFFF
                })
                
                const starVertices = []
                for(let i = 0; i <10000; i++){
                    const x = (Math.random() - 0.5) * 2000
                    const y = (Math.random() - 0.5) * 2000
                    const z = -Math.random() * 1000
                    starVertices.push(x, y, z)
                }
                
                starGeometry.setAttribute('position',new THREE.Float32BufferAttribute(starVertices, 3))
                const stars = new THREE.Points(starGeometry, starMaterial)
                scene.add(stars);
                
                
                camera.position.z = 15
                
                const mouse = {
                    x: 0,
                    y: 0
                }
                
                function animate() {
                    requestAnimationFrame(animate)
                    renderer.render(scene, camera)
                    sphere.rotation.Y += 0.06
                    sphere.rotation.x += 0.07
                    sphere.rotation.z += 0.1
                    group.rotation.y = mouse.x * 0.5
                    gsap.to(group.rotation, {
                        x: -mouse.y * 60,
                        y: mouse.x * 60,
                        duration:1
                    })
                }
                animate()
                
                $(function () {
                    $(window).resize(function(){
                        resizeBanner()
                    })

        function resizeBanner() {
          $(".banner1").css({
            height: "90vh",
          });
          $("#globe_container").css({
            width: "70%",
            height: "90vh",
          });
          $(".canvas_globe").css({
            width: "100%",
            height: "90vh",
          });
          camera.aspect =
            globe_container.offsetWidth / globe_container.offsetHeight; //使用者可見整個場景物件改變大小
          camera.updateProjectionMatrix(); //更新投影矩陣
        }
      });

      window.addEventListener("mousemove", function (e) {
        mouse.x = (e.clientX / innerWidth) * 2 - 1;
        mouse.y = (e.clientY / innerHeight) * 2 - 1;

        console.log(mouse);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/app.scss";
.section {
    width: 100%;
    // height: 90vh;
    margin: 100px 0;
}
.bannersec{
    height: 90vh;
    outline:  1px solid red;
    margin-top: 30px;
}
.container {
    width: map-get($container, each(d_container));
    // height: 100%;
}
.banner1 {
    display: flex;
    height: 90vh;
}
.globe_wrap {
    width: 70%;
}
.word_wrap {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text {
    color: #fff;
    font-size: 28px;
    text-align: center;
}
.btnwrap{
    margin: 0 auto ;
    width: fit-content;
}
.clsCrslWrap{
    overflow: hidden;
}

</style>
