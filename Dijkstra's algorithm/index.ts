
const graph: { [key: string]: { [key: string]: number } } = {
    "start": {
        "a": 6,
        "b": 2
    },
    "a": {
        "fin": 1
    },
    "b": {
        "a": 3,
        "fin": 5
    },
    "fin": {}
};


const costs: { [key: string]: number } = {
    "a": 6,
    "b": 2,
    "fin": Infinity
};


const parents: { [key: string]: string | null } = {
    "a": 'start',
    "b": 'start',
    "fin": null
};

let processed: string[] = [];

function findLowestCostNode(costs: { [key: string]: number }): string | null {
    let lowestCost = Infinity;
    let lowestCostNode: string | null = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

let node = findLowestCostNode(costs);
while (node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];
    for (let n in neighbors) {
        let newCost = cost + neighbors[n];
        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log("Costs", costs);
console.log("Parents", parents);
