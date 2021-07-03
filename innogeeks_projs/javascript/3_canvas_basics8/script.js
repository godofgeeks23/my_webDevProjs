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
const particlesArray = [];
function init()
{
    // code
}
function draw()
{   
    ctx.fillStyle = 'red';
    for(let i=0;i<particlesArray.length;i++)
    {
        particlesArray[i].update();
        particlesArray[i].draw();
        ctx.fill();
        if(particlesArray[i].size<0.3)
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();
