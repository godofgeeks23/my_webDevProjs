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
let hue = 1;
canvas.addEventListener('click', function(event)
{
    // code
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i=0;i<10;i++)
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
        if(particlesArray[i].size<0.3)
        {
            particlesArray.splice(i, 1);
            i--;
        }
    }
    hue++;
}
//////////////////////////////////////////////////
init();
function animate()
{
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();
