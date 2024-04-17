import * as Utils from './../utils/search-utils.js';

const DijkstraSearch = (startNode, endNode, nodeList, pathList) => {
    // Start time tracking.
    const startTime = Date.now() / 1000000000.0;

    // Set start node's distance to 0.
    startNode.distance = 0;

    // Set current node as the start node.
    let currentNode = startNode;

    // While there are any unvisited nodes and while the current node is not null...
    while (Utils.anyUnivisted(nodeList) && currentNode !== null) {
        // If the current node is the end node, break.
        if (currentNode === endNode) break;
        
        // Get all neighbors of the current node.
        let neighbors = Utils.getNeighbors(currentNode, pathList);

        // For each neighbor node...
        neighbors.forEach(neighbor => {
            // Calculate the distance via the current node + the path weight.
            let distance = currentNode.distance + neighbor.weight;

            // Find the neighbor node.
            let neighborNode;
            if (currentNode === neighbor.point1) { neighborNode = neighbor.point2; }
            else { neighborNode = neighbor.point1; }

            // If the distance is less than the neighbor's distance...
            if (distance < neighborNode.distance) {
                // Set the neighbor's new distance.
                neighborNode.distance = distance;

                // Set the current node as the neighbor's "neighbor".
                neighborNode.neighbor = currentNode;
            }
        });

        // Set the current node as visited.
        currentNode.visited = true; 

        // Get the next unvisited node with the lowest distance.
        currentNode = Utils.getNextUnvistedDijkstra(nodeList);
    }

    // "Stop" the timer.
    const totalTime = Date.now() / 1000000000.0 - startTime;

    // Log out entire path information.
    console.log(nodeList);

    // Log out the shortest path from start to finish.
    Utils.printShortest(endNode);

    // Log out total time.
    console.log(`Time Elapseed: ${totalTime} s`);
};

export default DijkstraSearch;