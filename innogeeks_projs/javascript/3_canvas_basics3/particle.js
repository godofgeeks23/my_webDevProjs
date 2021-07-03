class particle
{
    constructor()
    {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.size = Math.random()*10+1;
        this.speedx = Math.random()*3-1.5;
        this.speedy = Math.random()*3-1.5;
    }
    update()
    {
        this.x+=this.speedx;
        this.y+=this.speedy;
    }
    draw()
    {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 25, 0, Math.PI*2);
        ctx.fill();
    }
}