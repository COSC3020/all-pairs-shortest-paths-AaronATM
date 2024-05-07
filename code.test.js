// based on test code from my detecting isomorphism exercise

const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph: [], expected: []},
    { graph: [], expected: []},
    { graph: [], expected: []},
];

testset.forEach(({ graph, expected }, index) => {
    let testWorks = (JSON.stringify(allPairsShortestPaths(graph)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with graph:", JSON.stringify(graph), "Expected Result:", expected, "\nGot Result:",allPairsShortestPaths(graph));}
});