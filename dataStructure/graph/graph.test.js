const { Graph } = require("./graph");

describe("Graph Test", () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
        graph.insert(1, 2);
        graph.insert(1, 3);
        graph.insert(6, 3, true);
        graph.insert(8, 6);
        graph.insert(8, 16);
        graph.insert(8, 19, true);
    });

    test("Inserting", () => {
        expect(graph.getValues()).toEqual({
            1: [2, 3],
            16: [],
            2: [],
            19: [8],
            3: [6],
            6: [3],
            8: [6, 16, 19],
        });
    });

    test("Has Edge", () => {
        expect(graph.hasEdge(1, 2)).toBe(true);
        expect(graph.hasEdge(111, 2)).toBe(false);
        expect(graph.hasEdge(8, 2)).toBe(false);
    });
    test("Remove Edge", () => {
        graph.removeEdge(1, 2);
        expect(graph.getValues()).toEqual({
            1: [3],
            16: [],
            2: [],
            19: [8],
            3: [6],
            6: [3],
            8: [6, 16, 19],
        });

        graph.removeEdge(8, 16);
        graph.removeEdge(19, 8);

        expect(graph.getValues()).toEqual({
            1: [3],
            16: [],
            2: [],
            19: [],
            3: [6],
            6: [3],
            8: [6, 19],
        });

        graph.removeEdge(3, 6, true);
        expect(graph.getValues()).toEqual({
            1: [3],
            16: [],
            2: [],
            19: [],
            3: [],
            6: [],
            8: [6, 19],
        });
    });
    test("Remove Vertex", () => {
        graph.removeVertex(1);
        expect(graph.getValues()).toEqual({
            16: [],
            2: [],
            19: [8],
            3: [6],
            6: [3],
            8: [6, 16, 19],
        });

        graph.removeVertex(3);
        expect(graph.getValues()).toEqual({
            16: [],
            2: [],
            19: [8],
            6: [],
            8: [6, 16, 19],
        });

        graph.removeVertex(6);
        expect(graph.getValues()).toEqual({
            16: [],
            2: [],
            19: [8],
            8: [16, 19],
        });
    });
    test("Traversal", () => {
        graph.insert(2, 9);
        graph.insert(9, 16);

        expect(graph.traverseDFS()).toEqual([1, 2, 9, 16, 3, 6, 8, 19]);
        expect(graph.traverseBFS()).toEqual([1, 2, 3, 9, 6, 16, 8, 19]);
    });
});
