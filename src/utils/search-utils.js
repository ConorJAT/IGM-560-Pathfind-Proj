// -- HELPER FUNCTIONS --
// Checks to see if there are any unvisited nodes.
const anyUnivisted = (nodeList) => {
    let value = false;
    
    nodeList.forEach(node => {
        if (!node.visited) { value = true; }
    });

    return value;
};

// Retrieves all neighbors of the current node.
const getNeighbors = (currentNode, pathList) => {
    let result = [];

    pathList.forEach(path => {
        if (path.point1 === currentNode || path.point2 === currentNode) { result.push(path); }
    });

    return result;
};

// Retrieves the next unvisted node with the lowest distance.
const getNextUnvistedDijkstra = (nodeList) => {
    let result = null;
    let lowestCost = 99999;
    
    nodeList.forEach(node => {
        if (!node.visited && node.distance < lowestCost) { 
            result = node;
            lowestCost = node.distance;
        }
    });

    return result;
};

// Retrieves the next unvisted node with the lowest estimated distance.
const getNextUnvistedAstar = (nodeList) => {
    let result = null;
    let lowestCost = 99999;

    nodeList.forEach(node => {
        if (!node.visited && node.estDistance < lowestCost) { 
            result = node;
            lowestCost = node.estDistance;
        }
    });

    return result;
};

// Logs out the shortest path from start to end.
const printShortest = (endNode) => { 
    let current = endNode;
    let string = '';

    while (current !== null) {
        current.color = 'blue';

        if (current.neighbor) string += `${current.name} <= `;
        else string += `${current.name}`;

        current = current.neighbor;
    }

    console.log(`Shortest Path: ${string}`);
}

export {anyUnivisted, getNeighbors, getNextUnvistedDijkstra, getNextUnvistedAstar, printShortest};