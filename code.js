// worked with Jacob Johnson
// also looked at stack overflow
// https://stackoverflow.com/questions/55111120/how-to-convert-adjacency-matrix-to-adjacency-list-in-javascript

function convertToAdjList(adjMatrix)
{
    var list = [];

    for (var i = 0; i < adjMatrix.length; i++) 
    {
        var array = [];
        for (var j = 0; j < adjMatrix.length; j++) 
        {
            if (adjMatrix[i][j] == 1) 
            {
            array.push(j);
            }
        }

    list[i] = array
  }
   return list;
}

/*
My first iteration of the code from geeks for geeks that did not pass the jsverify tests
https://www.geeksforgeeks.org/convert-adjacency-matrix-to-adjacency-list-representation-of-graph/

The reason that this code did not pass the tests is because it was passing an unitialized, empty array as null 
directly to the final array instead of initializing each array before pushing them to the final array 

function convertToAdjList(adjMatrix)
{
    var adjList = new Array(a.length);

    for (let i = 0; i < adjMatrix.length; i++) 
    {
        for (let j = 0; j < adjMatrix[i].length; j++) 
        {
            if (a[i][j] != 0) 
            {
                if (!adjList[i]) 
                {
                    adjList[i] = [];
                }
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}
*/