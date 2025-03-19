var graph = {
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
var costs = {
    "a": 6,
    "b": 2,
    "fin": Infinity
};
var parents = {
    "a": 'start',
    "b": 'start',
    "fin": null
};
var processed = [];
function findLowestCostNode(costs) {
    var lowestCost = Infinity;
    var lowestCostNode = null;
    for (var node_1 in costs) {
        var cost = costs[node_1];
        if (cost < lowestCost && processed.indexOf(node_1) === -1) {
            lowestCost = cost;
            lowestCostNode = node_1;
        }
    }
    return lowestCostNode;
}
var node = findLowestCostNode(costs);
while (node !== null) {
    var cost = costs[node];
    var neighbors = graph[node];
    for (var n in neighbors) {
        var newCost = cost + neighbors[n];
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
