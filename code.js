// used examples from geeks for geeks
// https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/

function convertToAdjList(adjMatrix)
{
    var list = new Array(adjMatrix.length);
    if (adjMatrix.length == 0)
    {
        return [];
    }
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