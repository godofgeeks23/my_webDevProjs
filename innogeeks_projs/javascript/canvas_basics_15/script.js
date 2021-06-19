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
function init() {
    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana';
    ctx.fillText('Code', 10, 30);
    const data = ctx.getImageData(10, 0, 90, 40); 
    for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                let posx = x * 10 + 250;
                let posy = y * 10 + 100;
                particlesArray.push(new particle(posx, posy));
            }
        }
    }
}
function draw() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
        connect();
    }
}
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = 0; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 10) {
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
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