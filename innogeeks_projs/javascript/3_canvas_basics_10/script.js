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
    y: null
};
//////////////////////////////////////////////////
const particlesArray = [];
// let hue = 1;
canvas.addEventListener('click', function(event)
{
    for(let i=0;i<5;i++)
        particlesArray.push(new particle);
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0;i<1;i++)
        particlesArray.push(new particle);
});
function init()
{
    // code
}
function draw()
{   
    for(let i=0;i<particlesArray.length;i++)
    {
        particlesArray[i].update();
        ctx.fillStyle = particlesArray[i].color;
        particlesArray[i].draw();
        ctx.fill();
        for(let j=i;j<particlesArray.length;j++)
        {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if(dist<80)
            {
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            } 
        }
        if(particlesArray[i].size<0.2) 
        {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}
//////////////////////////////////////////////////
init();
function animate()
{
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();
