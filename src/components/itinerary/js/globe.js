import * as THREE from "three";
import gsap from "gsap";
import $ from "jquery";
import imgA from "@/assets/image/itineraryglobe.jpg";
let scene, camera, renderer, sphere, group, globe_container;
export const sceneInit = () => {
    globe_container = document.querySelector("#globe_container");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      globe_container.offsetWidth / globe_container.offsetHeight,
      // window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector(".canvas_globe"), 
      alpha: true,
    });

    // console.log(globe_container);
    renderer.setSize(
      globe_container.offsetWidth,
      globe_container.offsetHeight
    );
    // renderer.setSize(window.innerWidth , window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio);
    // document.body.appendChild(renderer.domElement)

    //create a sphere
    const vShader = `
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
                  }`;
    sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: vShader,
        fragmentShader: fShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(imgA),
            // @assets\image\itineraryglobe.jpg
            // map: new THREE.TextureLoader().load('./src/assets/image/itineraryglobe.jpg')
          },
        },
      })
    );

    //create atmosphere
    const atmospherevShader = `
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
                      }`;
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmospherevShader,
        fragmentShader: atmospherefShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );

    atmosphere.scale.set(1.2, 1.2, 1.2);

    scene.add(atmosphere);

    group = new THREE.Group();
    group.add(sphere);
    scene.add(group);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 1000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 15;

    

}
    const mouse = {
      x: 0,
      y: 0,
    };  
      export function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.006;
        group.rotation.y = mouse.x * 0.5;
        gsap.to(group.rotation, {
          x: -mouse.y * 0.6,
          y: mouse.x * 0.6,
          duration: 1,
        });
      }

      
        
        window.addEventListener('resize', ()=>{
            resizeBanner();
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
        };

      window.addEventListener("mousemove", function (e) {
        mouse.x = (e.clientX / innerWidth) * 2 - 1;
        mouse.y = (e.clientY / innerHeight) * 2 - 1;

        // console.log(mouse);
      });
