import React , {useRef, useEffect} from "react";
import './Canvas.css'


const Canvas = () => {
const canvasRef = useRef(null);
const contextRef = useRef(null);


useEffect(() => {
  const canvas = canvasRef.current;
  var hue = 0;
  const particlesArray = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  contextRef.current = ctx;

  window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
})
const mouse = {
    x:undefined,
    y:undefined,
}


function what() 
{canvas.addEventListener('mousemove', function(e){
  mouse.x = e.x;
  mouse.y= e.y;
  for(let i=0;i<10;i++){
  particlesArray.push(new Particle())}
// drawCircle()
})}

what();

// function drawing(){ 
//     for(let i=0;i<250;i++){
//         ctx.fillStyle = 'ghostwhite';
//         ctx.beginPath();
//         ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height, 1.5,0,Math.PI*2);
//         ctx.fill();
//     }
// }

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()* canvas.width;
        // this.y=Math.random()*canvas.height;
        this.size = Math.random()*35 + 1;
        this.Speedx = Math.random()*10 - 5;
        this.SpeedY = Math.random()*10 - 5 ;
        this.color = 'hsl('+ hue + ', 100%, 50%)'; 
    }
    
    updation(){
        this.x+=this.Speedx;
        this.y+=this.SpeedY;
        if(this.size>0.2) this.size -=0.1;
    }
    
    draw(){
        ctx.fillStyle = this.color;
        ctx.shadowColor = 'white'; 
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

// this is to initalize the particles we want to create but we want to do that with mouse movement
// function init(){
    //     for (let i=0; i<100; i++){
        //         particlesArray.push(new Particle());
        //     }
        // }
        
        // init();
        // console.log(particlesArray)
        
        function handle(){
            for(let i=0; i<particlesArray.length; i++){
                particlesArray[i].updation();
                particlesArray[i].draw();
                if(particlesArray[i].size<=0.3){
                    particlesArray.splice(i, 1);
                    i--;
        }
    }
    
}


function animate() {
    //rectangle method which clears the canvas from position (xstart,ystart,xend,yend)
    ctx.clearRect(0, 0, canvas.width,canvas.height); 
    // ctx.fillStyle = 'rgba(0 ,0 ,0, 0.1 )';
    // ctx.fillRect(0, 0, canvas.width,canvas.height)
    handle();
    requestAnimationFrame(animate);
    hue++;
    // drawing();
}
animate();



},[])








return (
  <>
<canvas
ref = {canvasRef} className="canva"/>
</>
)}

export default Canvas;