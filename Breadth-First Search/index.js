var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var graph = {
    Bohdan: ['alice', 'kate', 'jack'],
    Viktor: ['Stas', 'Dima', 'Roma'],
    Anrew: [],
    Vitaliy: ['Artur', 'Susan', 'Seller'],
};
var personIsSeller = function (person) {
    return person === 'Seller';
};
var search = function (name) {
    if (!graph[name]) {
        return "Starting person not found in the graph.";
    }
    var searchQueue = __spreadArray([], graph[name], true);
    var searched = [];
    while (searchQueue.length > 0) {
        var person = searchQueue.shift();
        if (person) {
            if (personIsSeller(person) && searched.indexOf(person) === -1) {
                return "".concat(person, " is a seller!");
            }
            searchQueue = searchQueue.concat(graph[person] || []);
            searched.push(person);
        }
    }
    return "Seller not found.";
};
console.log(search('Bohdan'));
console.log(search('Viktor'));
console.log(search('Anrew'));
console.log(search('Vitaliy'));
