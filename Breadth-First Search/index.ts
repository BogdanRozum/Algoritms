interface Graph {
    [key: string]: string[];
}

const graph: Graph = {
    Bohdan: ['alice', 'kate', 'jack'],
    Viktor: ['Stas', 'Dima', 'Roma'],
    Anrew: [],
    Vitaliy: ['Artur', 'Susan', 'Seller'],
};

const personIsSeller = (person: string): boolean => {
    return person === 'Seller';
}

const search = (name: string): string => {
    if (!graph[name]) {
        return "Starting person not found in the graph.";
    }

    let searchQueue: string[] = [...graph[name]];
    const searched: string[] = [];

    while (searchQueue.length > 0) {
        const person = searchQueue.shift();
        if (person && searched.indexOf(person) === -1) {
            if (personIsSeller(person) ) {
                return `${person} is a seller!`;
            }
            searchQueue = searchQueue.concat(graph[person] || [])
            searched.push(person);
        }
    }
    return "Seller not found.";
}

console.log(search('Bohdan'));
console.log(search('Viktor'));
console.log(search('Anrew'));
console.log(search('Vitaliy'));