const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const mouse = {
    x: null,
    y: null,
    radius: 100
};
//////////////////////////////////////////////////
const particlesArray = [];
canvas.addEventListener('click', function (event) {
    console.log(mouse.x, mouse.y);
});
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});
function draw() {
    // ctx.fillStyle = 'white';
    // ctx.font = '30px Verdana';
    // ctx.fillText('Coding', 10, 30);
    // const data = ctx.getImageData(320, 150, 250, 250);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
    }

}
function init() {
    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana';
    ctx.fillText('Coding', 10, 30);
    const data = ctx.getImageData(10, 0, 120, 40);
    for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                let posx = x * 10 + 120;
                let posy = y * 10 + 50;
                particlesArray.push(new particle(posx, posy));
            }
        }
    }
}
//////////////////////////////////////////////////
init();
function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();