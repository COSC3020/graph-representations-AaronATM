[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

Runtime complexity of convertToAdjList: $O(n^2)$

Runtime complexity of converToAdjMatrix: $O(n^2)$

Where n is the number of nodes.

Reasoning:
The runtime complexity of both conversions is $O(n^2)$ because in order to convert properly, each function needs to iterate through both dimensions with each dimension being $O(n)$ time complexity. In both cases they are dependent on the number of vertices in the graph.
