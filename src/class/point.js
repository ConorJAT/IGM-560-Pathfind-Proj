const Point = class{
    constructor(name, x, y, color) {
        this.name = name;
        this.visited = false;
        this.distance = 99999;
        this.perm = false;
        this.neighbor = null;

        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx) {
        ctx.save();

        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 1;
        ctx.font = '12pt sans-serif'

        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fillText(this.name, this.x - 5, this.y + 5);
        ctx.closePath();

        ctx.restore();
    }
};

export default Point;