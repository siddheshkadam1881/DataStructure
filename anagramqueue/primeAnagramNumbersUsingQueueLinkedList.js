
/******************************************************************************

 *
 * @description     : Add the Prime Numbers that are Anagram in the Range of
                      0­ 1000 in a Queue using the Linked List and Print the
                      Anagrams from the Queue.Note no Collection Library can
                      be used...
 *  @file           : primeAnagramNumbersUsingQueueLinkedList.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

function primeAnagramNumbersUsingQueueLinkedList()
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
  document.write("<h3>Prime Anagram numbers between 1 to 1000 (Queue , LinkedList used) </h3> <br>");
  for(var i=0; i<arr1.length; i++)
  {
    for(var j=0; j<arr2.length; j++)
    {
      if(arr1[i] == arr2[j])
      {
        var queue = new Queue();
        var digit = arr1[i];
        queue.enqueue(digit);
        queue.print();
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

// Queue implemented using Linked List
function Queue()
{
  this.head = null;
  this.tail = null;
}

// Insert data into queue
Queue.prototype.enqueue = function (data)
{
  var newNode = new Node(data);
  if(this.head == null)
  {
    this.head = newNode;
    this.tail = newNode;
  }
  else
  {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// Display the queue
Queue.prototype.print = function ()
{
  var current = this.head;
  while(current)
  {
    document.write(current.data);
    document.write(" ")
    current = current.next;
  }
};

primeAnagramNumbersUsingQueueLinkedList();
