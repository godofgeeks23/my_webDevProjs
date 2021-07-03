const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
});
const mouse = {
    x: null,
    y: null
};
canvas.addEventListener('click', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    draw();
});
canvas.addEventListener('mousemove', function(event)
{
    mouse.x = event.x;
    mouse.y = event.y;
    draw();
});
function draw()
{
    // ctx.strokeStyle = 'white';
    ctx.fillStyle = 'red';
    // ctx.lineWidth = 15;
    // ctx.fillRect(10, 10, 50, 50);
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke();
}
// draw();
