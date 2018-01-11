
/******************************************************************************

 *
 * @description     : Number of Binary Search Tree Solve the Problem in the
                      following link  https: //www.hackerrank.com/challenges
                      /number­of­binary­search­tree
 *  @file           : primeAnagramNumbersUsingStackLinkedList.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

function NumberOfBinarySearchTree() {
  var numOfNode = parseInt(document.getElementById("numOfNode").value);
  var checkNumberOfBinarySearchTree = catalan(numOfNode);
  document.getElementById("demo").innerHTML = "Number of binary search tree: "
                                              + checkNumberOfBinarySearchTree;
}

// Return the number of binary search tree depend on nodes
function catalan(numOfNode) {
  var catalan = [];

  // Initialize first two values in table
  catalan[0] = catalan[1] = 1;

  // Fill entries in catalan[] using recursive formula
  for (var i = 2; i <= numOfNode; i++) {
    catalan[i] = 0;
    for (var j = 0; j < i; j++)
      catalan[i] += catalan[j] * catalan[i - j - 1];
  }

  // Return last entry
  return catalan[numOfNode];
}
