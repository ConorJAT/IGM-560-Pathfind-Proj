// Import Classes
import Point from './class/point.js';
import Path from './class/path.js';

// Import Search Algorithms
import DijkstraSearch from './searches/dijkstra.js';
import DijkstraColorSearch from './searches/dijkstra-color.js';
import AStarSearch from './searches/a-star.js';
import AStarColorSearch from './searches/a-star-color.js';

// Array of nodes.
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

// Array of default (gray) paths connecting nodes.
const defPaths = [
    new Path(2, points[0], points[1], 'lightgray'),
    new Path(3, points[0], points[4], 'lightgray'),
    new Path(3, points[0], points[5], 'lightgray'),
    new Path(3, points[1], points[2], 'lightgray'),
    new Path(3, points[1], points[5], 'lightgray'),
    new Path(3, points[1], points[6], 'lightgray'),
    new Path(1, points[1], points[7], 'lightgray'),
    new Path(3, points[2], points[3], 'lightgray'),
    new Path(2, points[2], points[7], 'lightgray'),
    new Path(2, points[2], points[8], 'lightgray'),
    new Path(3, points[2], points[9], 'lightgray'),
    new Path(2, points[3], points[9], 'lightgray'),
    new Path(2, points[4], points[5], 'lightgray'),
    new Path(1, points[4], points[10], 'lightgray'),
    new Path(2, points[4], points[11], 'lightgray'),
    new Path(2, points[5], points[6], 'lightgray'),
    new Path(1, points[5], points[10], 'lightgray'),
    new Path(2, points[5], points[12], 'lightgray'),
    new Path(2, points[5], points[13], 'lightgray'),
    new Path(1, points[6], points[7], 'lightgray'),
    new Path(1, points[6], points[8], 'lightgray'),
    new Path(2, points[6], points[13], 'lightgray'),
    new Path(1, points[7], points[8], 'lightgray'),
    new Path(2, points[8], points[9], 'lightgray'),
    new Path(3, points[8], points[13], 'lightgray'),
    new Path(3, points[9], points[14], 'lightgray'),
    new Path(1, points[10], points[11], 'lightgray'),
    new Path(2, points[10], points[12], 'lightgray'),
    new Path(2, points[11], points[12], 'lightgray'),
    new Path(1, points[11], points[15], 'lightgray'),
    new Path(2, points[12], points[13], 'lightgray'),
    new Path(1, points[12], points[15], 'lightgray'),
    new Path(1, points[12], points[16], 'lightgray'),
    new Path(3, points[13], points[14], 'lightgray'),
    new Path(1, points[13], points[16], 'lightgray'),
    new Path(1, points[13], points[17], 'lightgray'),
    new Path(1, points[14], points[18], 'lightgray'),
    new Path(2, points[14], points[19], 'lightgray'),
    new Path(1, points[15], points[16], 'lightgray'),
    new Path(2, points[15], points[20], 'lightgray'),
    new Path(2, points[16], points[17], 'lightgray'),
    new Path(5, points[16], points[19], 'lightgray'),
    new Path(2, points[16], points[20], 'lightgray'),
    new Path(1, points[17], points[18], 'lightgray'),
    new Path(1, points[18], points[19], 'lightgray')
];

// Array of various colored paths that require units to cross.
const coloredPaths = [
    new Path(2, points[0], points[1], 'lightgray'),
    new Path(3, points[0], points[4], 'lightgray'),
    new Path(3, points[0], points[5], 'yellow'),
    new Path(3, points[1], points[2], 'red'),
    new Path(3, points[1], points[5], 'lightgray'),
    new Path(3, points[1], points[6], 'lightgray'),
    new Path(1, points[1], points[7], 'blue'),
    new Path(3, points[2], points[3], 'purple'),
    new Path(2, points[2], points[7], 'yellow'),
    new Path(2, points[2], points[8], 'lightgray'),
    new Path(3, points[2], points[9], 'green'),
    new Path(2, points[3], points[9], 'lightgray'),
    new Path(2, points[4], points[5], 'green'),
    new Path(1, points[4], points[10], 'blue'),
    new Path(2, points[4], points[11], 'purple'),
    new Path(2, points[5], points[6], 'lightgray'),
    new Path(1, points[5], points[10], 'lightgray'),
    new Path(2, points[5], points[12], 'blue'),
    new Path(2, points[5], points[13], 'purple'),
    new Path(1, points[6], points[7], 'red'),
    new Path(1, points[6], points[8], 'purple'),
    new Path(2, points[6], points[13], 'lightgray'),
    new Path(1, points[7], points[8], 'lightgray'),
    new Path(2, points[8], points[9], 'lightgray'),
    new Path(3, points[8], points[13], 'lightgray'),
    new Path(3, points[9], points[14], 'blue'),
    new Path(1, points[10], points[11], 'lightgray'),
    new Path(2, points[10], points[12], 'yellow'),
    new Path(2, points[11], points[12], 'lightgray'),
    new Path(1, points[11], points[15], 'lightgray'),
    new Path(2, points[12], points[13], 'green'),
    new Path(1, points[12], points[15], 'purple'),
    new Path(1, points[12], points[16], 'red'),
    new Path(3, points[13], points[14], 'red'),
    new Path(1, points[13], points[16], 'lightgray'),
    new Path(1, points[13], points[17], 'lightgray'),
    new Path(1, points[14], points[18], 'lightgray'),
    new Path(2, points[14], points[19], 'green'),
    new Path(1, points[15], points[16], 'yellow'),
    new Path(2, points[15], points[20], 'lightgray'),
    new Path(2, points[16], points[17], 'green'),
    new Path(5, points[16], points[19], 'lightgray'),
    new Path(2, points[16], points[20], 'blue'),
    new Path(1, points[17], points[18], 'lightgray'),
    new Path(1, points[18], points[19], 'red')
];

// Object that holds counts for various color units.
const colorSources = {
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    purple: 0,
};

// Default start/end nodes are the first and second nodes.
let startNode = points[0]; 
let endNode = points[1];

const init = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    
    const chooseStart = document.getElementById('start-node');
    const chooseEnd = document.getElementById('end-node');
    const colorToggle = document.getElementById('toggle')
    const colorCounts = document.querySelectorAll('input[type="number"]');
    const startBtn = document.getElementById('run-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Set up select UI for start node.
    chooseStart.addEventListener('change', () => {
        if (endNode.name === chooseStart.value) return;

        points.forEach((point) => { 
            if(point.name === chooseStart.value) {
                startNode = point;
                startNode.color = 'red';
            } else if (point.color !== 'green') {
                point.color = 'white';
            }

            drawGraph(ctx, colorToggle.checked);
        });
    });

    // Set up select UI for end node.
    chooseEnd.addEventListener('change', () => {
        if (startNode.name === chooseEnd.value) return;

        points.forEach((point) => { 
            if(point.name === chooseEnd.value) {
                endNode = point;
                endNode.color = 'green';
            } else if (point.color !== 'red') {
                point.color = 'white';
            }

            drawGraph(ctx, colorToggle.checked);
        });
    });

    // Set up button to begin algorithmic search.
    startBtn.addEventListener('click', () => {
        // Reset all points.
        resetPoints(colorCounts);

        // Get radio buttons from HTML.
        const sortOptions = document.querySelectorAll('input[name="sort-type"]');

        // If first option is checked, perform Dijkstra's Search.
        if (sortOptions[0].checked) { 
            if (colorToggle.checked) { DijkstraColorSearch(startNode, endNode, points, coloredPaths, colorSources); }
            else { DijkstraSearch(startNode, endNode, points, defPaths); }
        } 
        // If second option is checked, perform A* Search.
        else if (sortOptions[1].checked) { 
            if (colorToggle.checked) { AStarColorSearch(startNode, endNode, points, coloredPaths, colorSources); }
            else { AStarSearch(startNode, endNode, points, defPaths);  }
        }

        // Redraw graph.
        drawGraph(ctx, colorToggle.checked);

        // Swap button states for start and reset.
        startBtn.setAttribute('disabled', 'true');
        resetBtn.removeAttribute('disabled');
    });

    // Set up button to reset the graph and data.
    resetBtn.addEventListener('click', () => {
        points.forEach(point => {
            if (point === startNode) { point.color = 'red'; }
            else if (point === endNode) { point.color = 'green'; }
            else {point.color = 'white'; }

            resetPoints(colorCounts);

            drawGraph(ctx, colorToggle.checked);

            startBtn.removeAttribute('disabled');
            resetBtn.setAttribute('disabled', 'true');
        });
    });

    // Set up increment/decrement UI to add and subtract color units.
    colorCounts.forEach(input => {
        input.addEventListener('change', () => {
            colorSources[input.name] = parseInt(input.value);
            console.log(colorSources);
        });
    });

    // Redraw graph if the color toggle is clicked.
    colorToggle.addEventListener('change', () => { drawGraph(ctx, colorToggle.checked); });

    // Initial draw.
    drawGraph(ctx, colorToggle.checked);
};

const drawGraph = (ctx, isColored) => {
    if (isColored) { coloredPaths.forEach((path) => { path.draw(ctx); }); }
    else { defPaths.forEach((path) => { path.draw(ctx); }); }
    points.forEach((point) => { point.draw(ctx); });
};

const resetPoints = (colorCounts) => {
    points.forEach(point => {
        point.visited = false;
        point.distance = 99999;
        point.estDistance = 99999;
        point.neighbor = null;
    });

    colorCounts.forEach(input => {
        colorSources[input.name] = parseInt(input.value);
    });
};

init();