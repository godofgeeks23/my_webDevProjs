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
canvas.addEventListener('click', function(event)
{
    // code
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
});
//////////////////////////////////////////////////
const particlesArray = [];
function init()
{
    for(let i=0;i<100;i++)
        particlesArray.push(new particle);
}
function draw()
{   
    ctx.fillStyle = 'blue';
    for(let i=0;i<particlesArray.length;i++)
    {
        particlesArray[i].update();
        particlesArray[i].draw();
        ctx.fill();
    }
}
//////////////////////////////////////////////////
init();
function animate()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();
