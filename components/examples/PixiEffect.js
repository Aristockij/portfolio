import React, {useEffect} from 'react';

const PixiEffect = () => {
    useEffect(()=>{
        // window.addEventListener('load', function (){
            const canvas = document.getElementById('canvas1');
            const docwidth = document.querySelector('.main-content');

            const ctx = canvas.getContext('2d');
            canvas.width = docwidth.clientWidth;
            canvas.height = window.innerHeight;

            const image1 = document.getElementById('image1')

            class Particle {
                constructor(effect) {
                    this.effect = effect;
                    this.x = Math.random() * this.effect.width;
                    this.y = Math.random() * this.effect.height;
                    this.size = 5;
                    this.vx = Math.random() * 2 - 1;
                    this.vy = Math.random() * 2 - 1;
                }
                draw(context){
                    context.fillRect(this.x, this.y, this.size, this.size);
                }
                update(){
                    this.x += this.vx;
                    this.y += this.vy;
                }
            }
            class Effect {
                constructor(width, height) {
                    this.width = width;
                    this.height = height;
                    this.particlesArray = [];
                    this.image = document.getElementById('image1');
                    this.centerX = this.width * 0.5;
                    this.centerY = this.height * 0.5;
                    this.x = this.centerX - this.image.width * 0.5;
                    this.y = this.centerY - this.image.height * 0.5;
                }
                init(){
                    for(let i = 0; i<100; i++){
                        this.particlesArray.push(new Particle(this))

                    }
                }
                draw(context){
                    this.particlesArray.forEach(particle => particle.draw(context));
                    context.drawImage(this.image, this.x, this.y);
                }
                update(){
                    this.particlesArray.forEach(particle => particle.update());
                }
            }
            const effect = new Effect(canvas.width, canvas.height);
            effect.init();
        // effect.draw(ctx);
        // effect.update();

            // const particle1 = new Particle();
            // particle1.draw();

            function animate(){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                effect.draw(ctx);
                effect.update();
                window.requestAnimationFrame(animate);
            }
            animate();

            // ctx.fillRect(120, 150, 100, 200)
            // ctx.drawImage(image1, 100, 100);

        // })
    }, [])
    return (
        <div>
            <canvas id='canvas1'/>
            <img id='image1' className='img-for-canvas' src="data:image/png;base64,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" alt=""/>
            <div className='controls'>
                <button id='warpBtn'>
                    warp
                </button>
            </div>
        </div>
    );
};

export default PixiEffect;