const Path = class{
    constructor(weight, point1, point2, color) {
        this.weight = weight
        this.taken = false;
        this.point1 = point1;
        this.point2 = point2;
        this.color = color; 
    }

    draw(ctx) {
        if (this.point1 && this.point2) {
            ctx.save();

            ctx.lineWidth = 3;
            ctx.strokeStyle = this.color;
            ctx.fillStyle = 'red';
            ctx.font = '16pt sans-serif';

            ctx.beginPath();
            ctx.moveTo(this.point1.x, this.point1.y);
            ctx.lineTo(this.point2.x, this.point2.y);
            ctx.stroke();
            ctx.fillText(this.weight, (this.point2.x + this.point1.x)/2, (this.point2.y + this.point1.y)/2)
            ctx.closePath();

            ctx.restore();
        }
        
    }
};

export default Path;