import React, {useEffect} from 'react';
import Layout from "../components/layout";
import * as THREE from 'three';

const Contacts = () => {
    useEffect(()=>{
        const canvas = document.querySelector('.canvas');
        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);

        scene.background='#04082a';
        camera.position.z = 10;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        const radius = 5;
        const widthSegments = 40;
        const heightSegments = 42;
        const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

        const particlesGeometry = new THREE.BufferGeometry;
        const particlesCnt = 4000;

        const posArray = new Float32Array(particlesCnt * 3);

        for(let i = 0; i < particlesCnt *3; i++){
            posArray[i] = (Math.random() - 0.5) * (Math.random() * 15)
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

        const material = new THREE.PointsMaterial({
            color: '0xffffff',
            size: 0.005,
        });

        const ParticlesMaterial = new THREE.PointsMaterial({
            color: 'blue',
            size: 0.005,
        });

        const sphere = new THREE.Points(geometry,material)
        const particlesMesh = new THREE.Points(particlesGeometry, ParticlesMaterial);

        scene.add(sphere, particlesMesh);


        document.addEventListener('mousemove', animateParticles);
        let mouseX = 0;
        let mouseY = 0;

        function animateParticles (event){
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        function render(time) {
            // const elapsedTime = clock.getElapsedTime();
            time *= 0.0001;  // convert time to seconds

            sphere.rotation.y = time;

            particlesMesh.rotation.y = -1 * (time * 0.0008);
            if(mouseX > 0){
                particlesMesh.rotation.y = -mouseY * (time * 0.0008)
                particlesMesh.rotation.x = -mouseX * (time * 0.0008)
            }



            renderer.render(scene, camera);

            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
        // const pointLight = new THREE.PointLight(0xffffff, 0.1);
        // pointLight.position.x = 2;
        // pointLight.position.y = 3;
        // pointLight.position.z = 4;
        // scene.add(pointLight);

        renderer.render(scene, camera);

    }, [])
    return (
        <>
            <canvas className='canvas'/>
            <Layout>
                <div>
                    content lorem ipsum
                </div>
                <div>
                    content lorem ipsum
                </div>
                <div>
                    content lorem ipsum
                </div>
                <div>
                    content lorem ipsum
                </div>

            </Layout>
        </>
    );
};

export default Contacts;