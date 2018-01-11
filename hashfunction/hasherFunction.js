/******************************************************************************
 * @description     : Create a Slot of 10 to store Chain of Numbers that belong
                      to each Slot to efficiently search a number from a given
                      set of number
 *  @file           : hashingFunction.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/
function LinkedList()
{
  this.head = null;
}

// create node
function Node(data)
{
  this.data = data;
  this.next = null;
}

// insert data into LinkedList
LinkedList.prototype.insertRear = function (data)
{
  var newNode = new Node(data);
  if(this.head == null)
    this.head = newNode;
  else
  {
    var currentNode = this.head;
    while(currentNode.next)
    {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
};

// search a particular number into LinkedList
LinkedList.prototype.searchNumber = function (number) {
  if(this.head == null)
    return -1;
  else {
    var currentNode = this.head;
    while(currentNode) {
      if(currentNode.data == number)
        return 1;
      else
        currentNode = currentNode.next;
    }
    return 0;
  }
};

// remove a particular number into LinkedList
LinkedList.prototype.remove = function (number) {
  var currentNode = this.head;
  var previousNode = null;
  if(currentNode.data == number) {
    this.head = currentNode.next;
  }
  else {
    while(currentNode) {
      if(currentNode.data == number) {
        previousNode.next = currentNode.next;
        currentNode = previousNode.next;
      }
      else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
};


function hashingFunction() {
  var hashingObjectArr = {};
  var numberArr = [];
  var j=0;
   for(var i=0; i<10; i++)
  {
   numberArr[i]=prompt("Please enter your number "+ (j+1));
    j++;
  }

  for(var i=0; i<numberArr.length; i++)
  {
    var ll = new LinkedList();
    hashingObjectArr[i] = ll;
  }
  var ll1 = new LinkedList();

  // storing numbers into linked list of hashmap
  for(var i=0; i<numberArr.length; i++)
  {
    var key = numberArr[i] % numberArr.length;
    ll1 = hashingObjectArr[key];
    ll1.insertRear(numberArr[i]);
  }
  var searchNumber = prompt("enter number to search","");
  var searchNumberKey = searchNumber % numberArr.length;
  ll1 = hashingObjectArr[searchNumberKey];
  var hasNumber = ll1.searchNumber(searchNumber);
  if(hasNumber == 0 || hasNumber == -1)
    ll1.insertRear(searchNumber);
  else if(hasNumber == 1)
    ll1.remove(searchNumber);

  document.write(JSON.stringify(hashingObjectArr));
}

hashingFunction();
