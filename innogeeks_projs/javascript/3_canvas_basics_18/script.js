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
const png = new Image();
png.src = 'img15.png';
function init() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    let particle_gap = 30;
    for (let x = 0; x < imageWidth; x++) {
        for (let y = 0; y < imageHeight; y++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 250) {
                let color = 'rgb(' + data.data[(y * 4 * data.width) + (x * 4)] + ',' +
                    data.data[(y * 4 * data.width) + (x * 4) + 1] + ',' +
                    data.data[(y * 4 * data.width) + (x * 4) + 2] + ')';
                particlesArray.push(new particle(x * 4, y * 4, color, 2));
            }
        }
    }
}
window.addEventListener('load', (event) => {
    ctx.drawImage(png, 0, 0);
    console.log('page has been loaded');
    init();
})
function draw() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}
//////////////////////////////////////////////////
init();
function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    draw();
    requestAnimationFrame(animate);
}
animate();