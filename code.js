// used code from geeks for geeks
// https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/#

// input is weighted, directed adjacency matrix
function allPairsShortestPaths(graph) 
{
    var dist = Array.from(Array(graph.length), () => new Array(graph.length).fill(0));

    for (var i = 0; i < graph.length; i++)
    {
        for (var j = 0; j < graph.length; j++)
        {
            dist[i][j] = graph[i][j];
        }
    }

    for (var i = 0; i < graph.length; i++)
    {
        for (var j = 0; j < graph.length; j++)
        {
            for (var k = 0; k < graph.length; k++)
            {
                if (dist[j][i] + dist[i][k] < dist[j][k])
                {
                    dist[j][k] = dist[j][i] + dist[i][k];
                }
            }
        }
    }

    return dist;
}