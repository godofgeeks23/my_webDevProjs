class particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedx = Math.random() * 3 - 1;
        this.speedy = Math.random() * 3 - 1;
        this.color = 'rgb(255, 255, 255)';
    }
    update() {
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.size > 0.05)
            this.size -= 0.1;
        if ((this.x + this.size > canvas.width) || (this.x - this.size < 0))
            this.speedx *= -1;
        if ((this.y + this.size > canvas.height) || (this.y - this.size < 0))
            this.speedy *= -1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }
}
// end of class