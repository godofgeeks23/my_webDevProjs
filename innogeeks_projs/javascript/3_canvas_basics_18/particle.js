class particle {
    constructor(x, y, color, size) {
        this.x = x + canvas.width/2 - png.width*2;
        this.y = y + canvas.height/2 - png.height*2;
        this.size = size;
        this.color = color;
        this.baseX = x + canvas.width/2 - png.width*2;
        this.baseY = y + canvas.height/2 - png.height*2;
        this.density = (Math.random() * 30) + 1;
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt((dx * dx) + (dy * dy));
        let forceDirX = dx / dist;
        let forceDirY = dy / dist;
        let maxDist = mouse.radius;
        let force = (maxDist - dist) / maxDist;
        let dirX = forceDirX * force * this.density;
        let dirY = forceDirY * force * this.density;
        if (dist < mouse.radius) {
            this.x -= dirX;
            this.y -= dirY;
        }
        else {
            if (this.x != this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 10;
            }
            if (this.y != this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 10;
            }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}