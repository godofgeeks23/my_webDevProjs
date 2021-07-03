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
    ctx.font = '22px Verdana';
    ctx.fillText('CODE', 10, 30);
    const data = ctx.getImageData(10, 0, 90, 40); 
    for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                let posx = x * 12 + 250;
                let posy = y * 12 - 0;
                particlesArray.push(new particle(posx, posy));
            }
        }
    }
}
function draw() {
    let opacityVal = 1;
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        for(let j = i+1;j<particlesArray.length;j++)
        {
            let dx = particlesArray[i].x - particlesArray[j].x;
            let dy = particlesArray[i].y - particlesArray[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 30) {
                opacityVal = 1 - (distance/30);
                green_val = opacityVal;
                ctx.strokeStyle = 'rgba(255, 255, 255, '+opacityVal+')';
                ctx.lineWidth = 2;
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