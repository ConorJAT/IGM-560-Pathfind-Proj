import Point from './class/point.js';
import Path from './class/path.js';
import DijkstraSearch from './searches/dijkstra.js';

const points = [
    new Point('A', 1000, 680, 'red'),
    new Point('B', 770, 680, 'green'),
    new Point('C', 425, 680, 'white'),
    new Point('D', 80, 680, 'white'),
    new Point('E', 1050, 480, 'white'),
    new Point('F', 885, 480, 'white'),
    new Point('G', 655, 480, 'white'),
    new Point('H', 580, 580, 'white'),
    new Point('I', 475, 530, 'white'),
    new Point('J', 245, 530, 'white'),
    new Point('K', 935, 380, 'white'),
    new Point('L', 1000, 280, 'white'),
    new Point('M', 785, 280, 'white'),
    new Point('N', 580, 300, 'white'),
    new Point('O', 245, 300, 'white'),
    new Point('P', 885, 180, 'white'),
    new Point('Q', 685, 180, 'white'),
    new Point('R', 450, 230, 'white'),
    new Point('S', 300, 210, 'white'),
    new Point('T', 120, 130, 'white'),
    new Point('U', 785, 40, 'white')   
];

const paths = [
    new Path(2, points[0], points[1], 'black'),
    new Path(3, points[0], points[4], 'black'),
    new Path(3, points[0], points[5], 'black'),
    new Path(3, points[1], points[2], 'black'),
    new Path(3, points[1], points[5], 'black'),
    new Path(3, points[1], points[6], 'black'),
    new Path(1, points[1], points[7], 'black'),
    new Path(3, points[2], points[3], 'black'),
    new Path(2, points[2], points[7], 'black'),
    new Path(2, points[2], points[8], 'black'),
    new Path(3, points[2], points[9], 'black'),
    new Path(2, points[3], points[9], 'black'),
    new Path(2, points[4], points[5], 'black'),
    new Path(1, points[4], points[10], 'black'),
    new Path(2, points[4], points[11], 'black'),
    new Path(2, points[5], points[6], 'black'),
    new Path(1, points[5], points[10], 'black'),
    new Path(2, points[5], points[12], 'black'),
    new Path(2, points[5], points[13], 'black'),
    new Path(1, points[6], points[7], 'black'),
    new Path(1, points[6], points[8], 'black'),
    new Path(2, points[6], points[13], 'black'),
    new Path(1, points[7], points[8], 'black'),
    new Path(2, points[8], points[9], 'black'),
    new Path(3, points[8], points[13], 'black'),
    new Path(3, points[9], points[14], 'black'),
    new Path(1, points[10], points[11], 'black'),
    new Path(2, points[10], points[12], 'black'),
    new Path(2, points[11], points[12], 'black'),
    new Path(1, points[11], points[15], 'black'),
    new Path(2, points[12], points[13], 'black'),
    new Path(1, points[12], points[15], 'black'),
    new Path(1, points[12], points[16], 'black'),
    new Path(3, points[13], points[14], 'black'),
    new Path(1, points[13], points[16], 'black'),
    new Path(1, points[13], points[17], 'black'),
    new Path(1, points[14], points[18], 'black'),
    new Path(2, points[14], points[19], 'black'),
    new Path(1, points[15], points[16], 'black'),
    new Path(2, points[15], points[20], 'black'),
    new Path(2, points[16], points[17], 'black'),
    new Path(5, points[16], points[19], 'black'),
    new Path(2, points[16], points[20], 'black'),
    new Path(1, points[17], points[18], 'black'),
    new Path(1, points[18], points[19], 'black')
];

let startNode = points[0]; 
let endNode = points[1];

const init = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
    const chooseStart = document.getElementById('start-node');
    const chooseEnd = document.getElementById('end-node');
    const startBtn = document.getElementById('run-btn');

    chooseStart.addEventListener('change', () => {
        if (endNode.name === chooseStart.value) return;

        points.forEach((point) => { 
            if(point.name === chooseStart.value) {
                startNode = point;
                startNode.color = 'red';
            } else if (point.color !== 'green') {
                point.color = 'white';
            }

            drawGraph(ctx);
        });
    });

    chooseEnd.addEventListener('change', () => {
        if (startNode.name === chooseEnd.value) return;

        points.forEach((point) => { 
            if(point.name === chooseEnd.value) {
                endNode = point;
                endNode.color = 'green';
            } else if (point.color !== 'red') {
                point.color = 'white';
            }

            drawGraph(ctx);
        });
    });

    startBtn.addEventListener('click', () => {
        document.getElementById('warning').innerHTML = '';

        if (startNode.name === endNode.name) {
            document.getElementById('warning').innerHTML = 'Start and end nodes must be different!';
            return;
        }

        DijkstraSearch(startNode, endNode, points, paths);
    });

    drawGraph(ctx);
}

const drawGraph = (ctx) => {
    paths.forEach((path) => { path.draw(ctx); });
    points.forEach((point) => { point.draw(ctx); });
}

init();