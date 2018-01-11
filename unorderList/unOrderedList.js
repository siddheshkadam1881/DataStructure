/******************************************************************************
 * @description     : Read the Text from a file, split it into words and arrange
                      it as Linked List. Take a user input to search a Word in
                      the List.If the Word is not found then add it to the list,
                      and if it found then remove the word from the List.In the
                      end save the list into a file..
 *  @file           : unOrderedList.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/
  function search() {
  var sentence = document.getElementById("sentence").value;
  var word = document.getElementById("word").value;
  if (sentence == "" || word == "") {
    alert("enter required fields");
    return false;
  }
  var sentenceArray = sentence.split(" ");
  var sentenceArrayLength = sentenceArray.length;
  var linkedlist = new Linkedlist();

  // Element add into linkedlist
  for (var i = 0; i < sentenceArrayLength; i++) {
    linkedlist.insertRear(sentenceArray[i]);
  }

  var check = linkedlist.searchWord(word);
  if (check == 0) {
    linkedlist.insertRear(word);
    document.write("Word not found and added");
    document.write("<br>");
    linkedlist.print();
  } else if (check == 1) {
    document.write("Word found and removed");
    linkedlist.remove(word);
    document.write("<br>");
    linkedlist.print();
  }
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
Linkedlist.prototype.insertRear = function(data) {
  var newNode = new Node(data);
  if (this.head == null)
    this.head = newNode;
  else {
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
};

// Search word in linked list
Linkedlist.prototype.searchWord = function(word) {
  if (this.head == null)
    return -1;
  else {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.data == word)
        return 1;
      else
        currentNode = currentNode.next;
    }
    return 0;
  }
};

// Remove element from linked list
Linkedlist.prototype.remove = function(word) {
  var currentNode = this.head;
  var previousNode = null;
  if (currentNode.data == word) {
    this.head = currentNode.next;
  } else {
    while (currentNode) {
      if (currentNode.data == word) {
        previousNode.next = currentNode.next;
        currentNode = previousNode.next;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }
};

// Display linked list
Linkedlist.prototype.print = function() {
  var currentNode = this.head;
  while (currentNode) {
    document.write(currentNode.data);
    document.write("&nbsp;");
    currentNode = currentNode.next;
  }
};
