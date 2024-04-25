// used examples from geeks for geeks
// https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/

function convertToAdjList(adjMatrix) 
{
    var list = new Array(adjMatrix.length);

    for (let i = 0; i < adjMatrix.length; i++) 
    {
        for (let j = 0; j < adjMatrix[i].length; j++) 
        {
            if (adjMatrix[i][j] != 0) 
            {
                if (!list[i]) 
                {
                    list[i] = [];
                }
                list[i].push(j);
            }
        }
    }
    return list;
}


var input = [];
var input2 = [[0, 0, 1], [0, 0, 1], [1, 1, 0]]

var output = convertToAdjList(input);
var output2 = convertToAdjList(input2);
console.log(output);
console.log(output2);