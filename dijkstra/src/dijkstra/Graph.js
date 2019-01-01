export default class Graph {
    constructor() {
        this.noOfVertices = 10;
        this.AdjList = new Map();
        this.vertexes = [];
    }
    generateGraph = () => {
        // const targets = [];
        for (var i = 0; i <= this.noOfVertices; i++) {
            this.vertexes.push({
                id: i,
                x: window.innerWidth / 2 - 300 + (50 * i),
                y: window.innerHeight / 2 - 300 + (50 * i),
                isDragging: false
            });
        }
        return this.vertexes;
    }
    printAdjList = () => {
        for (var [key, value] of this.AdjList.entries()) {
            console.log('key: ', key.id);
            for (var val of value) {
                console.log('value: ', val)
            }
        }
    }
    addVertex = (v) => {
        const vertex = {
            id: v,
            x: Math.random() * window.innerWidth / 2 + 301,
            y: Math.random() * window.innerHeight / 2 + 101,
            isDragging: false
        }

        this.vertexes.push(vertex);
        this.AdjList.set(vertex, []);
    }
    addEdge = (v, w) => {
        this.AdjList.get(this.vertexes[v]).push(this.vertexes[w]);
    }
    printGraph = () => {
        var get_keys = this.AdjList.keys();

        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc += " -> " + j.id;

            console.log(i.id + conc);
        }
    }

}
