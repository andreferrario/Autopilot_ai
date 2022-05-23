class Road {
    constructor(x,width, laneCount=3){
        this.x = x;
        this.width = width;
        this.lineeCount = laneCount

        this.left = x-width/2;
        this.right = x+width/2;


        const infinito = 1000000;
        this.top = -infinito;
        this.bottom = infinito;


        const topLeft = {x:this.left, y:this.top};
        const topRight = {x:this.right, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const bottomRight = {x:this.right, y:this.bottom};

        this.border=[
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ]
    }


    getLaneCenter(laneIndex){
        const lineWidth = this.width/this.lineeCount;
        return this.left+ lineWidth/2 +
         Math.min(laneIndex, this.lineeCount-1)*lineWidth;
    }


    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'white';

        for(let i=1; i<=this.lineeCount-1; i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.lineeCount
            )
           
            ctx.setLineDash([20,20]);
         
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        this.border.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
    }
}



