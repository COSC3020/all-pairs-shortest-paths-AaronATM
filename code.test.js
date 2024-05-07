// based on test code from my detecting isomorphism exercise
// test cases from:
// https://www.programiz.com/dsa/floyd-warshall-algorithm
// https://www.tutorialspoint.com/data_structures_algorithms/floyd_warshall_algorithm.htm

const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph: [
        [0, 5, Infinity, 10],
        [Infinity, 0, 3, Infinity],
        [Infinity, Infinity, 0, 1],
        [Infinity, Infinity, Infinity, 0],
      ], expected: [
        [0, 5, 8, 9],
        [Infinity, 0, 3, 4],
        [Infinity, Infinity, 0, 1],
        [Infinity, Infinity, Infinity, 0]
    ]},
    { graph: [
        [0, 3, Infinity, 5],
        [2, 0, Infinity, 4],
        [Infinity, 1, 0, Infinity],
        [Infinity, Infinity, 2, 0]
    ], expected: [
        [0, 3, 7, 5],
        [2, 0, 6, 4],
        [3, 1, 0, 5],
        [5, 3, 2, 0]
    ]},
    { graph: [
        [0, 5, Infinity, 6, Infinity],
        [Infinity, 0, 1, Infinity, 7],
        [3, Infinity, 0, 4, Infinity],
        [Infinity, Infinity, 2, 0, 3],
        [2, Infinity, Infinity, 5, 0]
    ], expected: [
        [0, 5, 6, 6, 9],
        [4, 0, 1, 5, 7],
        [3, 8, 0, 4, 7],
        [5, 10, 2, 0, 3],
        [2, 7, 7, 5, 0]
    ]},
];

testset.forEach(({ graph, expected }, index) => {
    let testWorks = (JSON.stringify(allPairsShortestPaths(graph)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with graph:", JSON.stringify(graph), "Expected Result:", expected, "\nGot Result:",allPairsShortestPaths(graph));}
});