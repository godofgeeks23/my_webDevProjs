class particle
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random()*30)+1;
        this.color = 'white';
        // this.speedx = Math.random()*5-1;
        // this.speedy = Math.random()*5-1;
    }
    update()
    {
        // this.x+=this.speedx;
        // this.y+=this.speedy;
        // if(this.size>0.2)
        //     this.size-=0.2;
        // if((this.x+this.size>canvas.width)||(this.x-this.size<0))
        //     this.speedx*=-1;
        // if((this.y+this.size>canvas.height)||(this.y-this.size<0))
        //     this.speedy*=-1;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt((dx*dx)+(dy*dy));
        if(dist <100)
        {
            this.size = 50;
        }
        else
        {
            this.size = 3;
        }
    }
    draw()
    {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fill();
    }
}