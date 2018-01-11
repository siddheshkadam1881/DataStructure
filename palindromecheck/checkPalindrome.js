/******************************************************************************

 *
 * @description     : A palindrome is a string that reads the same forward and
                      backward, for example, radar, toot, and madam.We would like
                      to construct an algorithm to input a string of characters
                      and check whether it is a palindrome.

 *  @file           : checkPalindrome.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

// Program starts from this function
function checkPalindrome()
{
  var string = document.getElementById("string").value;
  var length = string.length;
  var newString = [];
  var queue = new Queue(); // Object creation of Queue function
  for(var i=0; i<length; i++) // Storing string elements into queue
  {
    queue.addRear(string[i]);
  }
  for(var i=0; i<length; i++) // Storing queue elements into new string backward process
  {
    newString += queue.dequeue();
  }
  if(string == newString)
  {
    document.write("Palindrome");
  }
  else
  {
    document.write("Not palindrome");
  }
}

// Create Queue
var Queue = function()
{
  this.collection = {};
  this.count = -1;

  // Insert element in the queue
  this.addRear = function(value)
  {
    this.count++;
    this.collection[this.count] = value;
  };

  // Remove element from the queue and return the element
  this.dequeue = function()
  {
    var result = this.collection[this.count];
    delete this.collection[this.count];
    this.count--;
    return result;
  };
};
