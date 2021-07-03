const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const mouse = {
    x: null,
    y: null,
    radius: 150
};
//////////////////////////////////////////////////
const particlesArray = [];
canvas.addEventListener('click', function(event)
{
    // code here
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    // for(let i=0;i<5;i++)
    //     particlesArray.push(new particle);
});
function init()
{
    for(let i = 0; i<200;i++)
    {
        let x = Math.random()*canvas.width;
        let y = Math.random()*canvas.height;
        particlesArray.push(new particle(x, y));
    }
    
}
function draw()
{   
    // for(let i=0;i<particlesArray.length;i++)
    // {
    //     particlesArray[i].update();
    //     ctx.fillStyle = particlesArray[i].color;
    //     particlesArray[i].draw();
    //     ctx.fill();
    //     for(let j=i;j<particlesArray.length;j++)
    //     {
    //         const dx = particlesArray[i].x - particlesArray[j].x;
    //         const dy = particlesArray[i].y - particlesArray[j].y;
    //         const dist = Math.sqrt(dx*dx + dy*dy);
    //         if(dist<100)
    //         {
    //             ctx.beginPath();
    //             ctx.strokeStyle = particlesArray[i].color;
    //             ctx.lineWidth = 0.5;
    //             ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
    //             ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
    //             ctx.stroke();
    //         }
    //     }
    //     if(particlesArray[i].size<0.2) 
    //     {
    //         particlesArray.splice(i, 1);
    //         i--;
    //     }
    // }
    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana';
    ctx.fillText('A', 50, 60);
    // ctx.strokeStyle = 'white';
    // ctx.strokeRect(0, 0, 100, 100);
    const data = ctx.getImageData(0, 0, 100, 100);
    for(let i = 0; i<particlesArray.length;i++)
    {
        particlesArray[i].draw();
        particlesArray[i].update();
    }

}
//////////////////////////////////////////////////
init();
function animate()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0, 0, 0)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();