const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
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
    let particle_gap = 30;
    for (let x = 0; x < canvas.width; x += particle_gap) {
        for (let y = 0; y < canvas.height; y += particle_gap) {
            particlesArray.push(new particle(x, y));
        }
    }
}
function draw() {
    let opacityVal = 1;
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        for (let j = i + 1; j < particlesArray.length; j++) {
            let dx = particlesArray[i].x - particlesArray[j].x;
            let dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 30) {
                opacityVal = 1 - (distance / 30);
                green_val = opacityVal;
                ctx.strokeStyle = 'rgba(0, 0, 255, ' + opacityVal + ')';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
        particlesArray[i].draw();
    }
}
//////////////////////////////////////////////////
init();
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();