
/******************************************************************************

 *
 * @description     : Read a List of Numbers from a file and arrange it
                      ascending Order in a Linked List. Take user input for
                      a number,if found then pop the number out of the list
                      else insert the number in appropriate position.
 *  @file           : orderListOperationLinkedList.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

// Program starts from here
function search()
{
  var fileText = document.getElementById("file");
  var searchNumber = parseInt(document.getElementById("num").value);
  var file = fileText.files[0];
  var reader = new FileReader();
  reader.onload = function(e)
  {
     var number = reader.result;
     var numberArr = number.split(" ").map(Number);
     numberArr.sort(); // sorting element in acsending order
     var linkedlist = new Linkedlist();
     for(var i=0; i<numberArr.length; i++)
       linkedlist.insertRear(numberArr[i]);
     var check = linkedlist.searchNumber(searchNumber);
     if(check == 0) {
        linkedlist.insertRear(searchNumber);
        document.write("Number not found and added");
        document.write("<br>");
        linkedlist.print();
       }
      else if(check == 1) {
         document.write("Number found and removed");
         linkedlist.remove(searchNumber);
         document.write("<br>");
         linkedlist.print();
       }
  }
  reader.readAsText(file);
}

// Create linked list
function Linkedlist() {
  this.head = null;
  this.length = 0;
}

// Create node
function Node(data) {
  this.data = data;
  this.next = null;
}

// Add data into linked list
Linkedlist.prototype.insertRear = function (data) {
  var newNode = new Node(data);
  if(this.head == null)
    this.head = newNode;
  else {
    var currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
};

// Search word in linked list
Linkedlist.prototype.searchNumber = function (number) {
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

// Remove element from linked list
Linkedlist.prototype.remove = function (number) {
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

// Display linked list
Linkedlist.prototype.print = function () {
  var currentNode = this.head;
  while(currentNode) {
    document.write(currentNode.data);
    document.write("&nbsp;");
    currentNode = currentNode.next;
  }
};
