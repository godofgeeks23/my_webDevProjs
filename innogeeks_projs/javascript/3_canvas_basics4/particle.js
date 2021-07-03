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
        if((this.x+this.size>canvas.width)||(this.x-this.size<0))
            this.speedx*=-1;
        if((this.y+this.size>canvas.height)||(this.y-this.size<0))
            this.speedy*=-1;
    }
    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    }
} 