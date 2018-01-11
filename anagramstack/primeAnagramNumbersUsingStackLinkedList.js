
/******************************************************************************

 *
 * @description     : Add the Prime Numbers that are Anagram in the Range of
                      0­ 1000 in a Queue using the Linked List and Print the
                      Anagrams from the stack.Note no Collection Library can
                      be used...
 *  @file           : primeAnagramNumbersUsingStackLinkedList.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/
// Program starts from here
function primeAnagramNumbersUsingStackLinkedList()
{
  var arr1 = [];
  var arr2 = [];
  var n = 0; // arr index
  for(var i=1; i<1000; i++)
  {
    var temp = true;
    for(var j=2; j<i; j++) // check prime
    {
      if(i%j == 0)
      {
        temp = false;
        break;
      }
    }
    if(temp == true) // if number is prime
    {
      if(i < 11) // if number is less than 11 then reverse & anagram is not possible
        continue;
      arr1[n] = i; // store all prime numbers in array

      var m = i;
      var reverse = 0;
      var remainder;
      while(m > 0) // reverse number
      {
        remainder = m % 10;
        reverse = reverse * 10 + remainder;
        m = m / 10;
        m = parseInt(m);
      }
      arr2[n] = reverse; // store reverse numbers into array
      n++;
    }
  }
  document.write("<h3>Prime Anagram numbers between 1 to 1000 (Stack , LinkedList used) </h3> <br>");
  for(var i=0; i<arr1.length; i++)
  {
    for(var j=0; j<arr2.length; j++)
    {
      if(arr1[i] == arr2[j])
      {
        var stack = new Stack();
        var digit = arr1[i];
        stack.push(digit);
        stack.print();
      }
    }
  }
}

// Linked List
function Node(data)
{
  this.data = data;
  this.next = null;
}

// Stack implemented using Linked List
function Stack()
{
  this.top = null;
}

// Insert element into Stack
Stack.prototype.push = function (data)
{
  var newNode = new Node(data);
  newNode.next = this.top;
  this.top = newNode;
};

// Display the Stack
Stack.prototype.print = function ()
{
  var current = this.top;
  while (current)
  {
    document.write(current.data);
    document.write(" ");
    current = current.next;
  }
};

primeAnagramNumbersUsingStackLinkedList();
