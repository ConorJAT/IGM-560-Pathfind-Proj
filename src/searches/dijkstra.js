const DijkstraSearch = async (startNode, endNode, nodeList, pathList) => {
    // Set start node's distance to 0.
    startNode.distance = 0;

    // Set current node as the start node.
    let currentNode = startNode;

    // While there are any unvisited nodes and while the current node is not null...
    while (anyUnivisted(nodeList) && currentNode !== null) {
        // If the current node is the end node, break.
        if (currentNode === endNode) break;
        
        // Get all neighbors of the current node.
        let neighbors = getNeighbors(currentNode, pathList);

        // For each neighbor node...
        neighbors.forEach(neighbor => {
            // Calculate the distance via the current node + the path weight.
            let distance = currentNode.distance + neighbor.weight;

            // Find the neighbor node.
            if (currentNode === neighbor.point1) {
                // If the distance is less than the neighbor's distance...
                if (distance < neighbor.point2.distance) {
                    // Set the neighbor's new distance.
                    neighbor.point2.distance = distance;
 
                    // Set the current node as the neighbor's "neighbor".
                    neighbor.point2.neighbor = currentNode;
                } 
            } else if (currentNode === neighbor.point2) {
                if (distance < neighbor.point1.distance) {
                    neighbor.point1.distance = distance;

                    neighbor.point1.neighbor = currentNode;
                }
            }
        });

        // Set the current node as visited.
        currentNode.visited = true; 

        // Get the next unvisited node with the lowest distance.
        currentNode = getNextUnvisted(nodeList);
    }

    // Log out entire path information.
    console.log(nodeList);

    // Log out the shortest path from start to finish.
    printShortest(endNode);
};

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
const getNextUnvisted = (nodeList) => {
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

// Logs out the shortest path from start to end.
const printShortest = (endNode) => { 
    let current = endNode;
    let string = '';

    while (current !== null) {
        if (current.neighbor) string += `${current.name} <= `;
        else string += `${current.name}`;
        current = current.neighbor;
    }

    console.log(`Shortest Path: ${string}`);
}

export default DijkstraSearch;