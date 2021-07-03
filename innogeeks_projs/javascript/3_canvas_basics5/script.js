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
    for(let i=0;i<10;i++)
        particlesArray.push(new particle);
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
});
const particlesArray = [];
function init()
{
    // code
}
function draw()
{   
    ctx.fillStyle = 'blue';
    for(let i=0;i<particlesArray.length;i++)
    {
        particlesArray[i].update();
        particlesArray[i].draw();
        ctx.fill();
        if(particlesArray[i].size<0.1)
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();
