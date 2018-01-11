/*
  Create the Week Object having a list of WeekDay objects each storing the day
  (i.e S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored
  in a Queue implemented using Linked List. Further maintain also a Week Object
  in a Queue to finally display the Calendar
*/



var Week = function()
{

  // Return day of the month
  this.dayOfWeek = function(month, year, day) //
  {
    //use Gauss's method for determining the day of the week
    var m;
    var y;
    var d;

    m = (month - 2 + 12) % 12;
    if(month <= 2)
    {
      year--;
    }
    y = 5 * (year % 4) + 4 * (year % 100) + 6 * (year % 400);
    d = (day + (2.6 * m - 0.2) + y) % 7;

    d = parseInt(d);
    return d;
  }

  // Insert calender days into queue
  this.days = function()
  {
    var queue = new Queue();
    queue.enqueue('S');
    queue.enqueue('M');
    queue.enqueue('T');
    queue.enqueue('W');
    queue.enqueue('T');
    queue.enqueue('F');
    queue.enqueue('S');
    queue.print();
  }

  // Display the dates of calender
  this.display = function(arr, c)
  {
    var count = 0;
    var b = c - 9;

    for(var i=0; i<=5; i++)
    {
      for(var j=0; j<=6; j++)
      {
        if(count < c) // maintain space date to 9
        {
          if(count < b) // maintain space before start day
          {
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            count++;
          }
          else
          {
            document.write("&nbsp;0");
            document.write(arr[i][j]);
            document.write("&nbsp;");
            count++;
          }
        }
        else
        {
          if(arr[i][j] == 0)
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
          else
          {
            document.write("&nbsp;");
            document.write(arr[i][j]);
            document.write("&nbsp;");
          }
        }
      }
      document.write("<br>");
    }
  }
}

// Linked list
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

// Insert calender days into queue
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

// Display the calender days
Queue.prototype.print = function ()
{
  var current = this.head;
  while(current)
  {
    document.write("&nbsp;");
    document.write(current.data);
    document.write("&nbsp;&nbsp;")
    current = current.next;
  }
};

// Program starts from this function
function weekDays()
{
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var week = new Week();
  var d = 1;
  var startDay = week.dayOfWeek(month, year, d); // starting day of month
  var arr = [];
  var date = 1;
  var lastDate = 0;
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"];
  document.write("<br>");
  document.write(months[month-1]);
  document.write(" ");
  document.write(year);
  document.write("<br>");
  document.write("<br>");
  week.days(); // print days
  document.write("<br>");
  if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
    lastDate = 31;
  else if(month== 4 || month==6 || month==9 || month==11)
    lastDate = 30;
  else if(month==2)
  {
    if(year % 4 == 0)
      lastDate = 29;
    else
      lastDate = 28;
  }
  var startDayTemp = startDay;
  for(var i=0; i<=5; i++)
  {
    arr[i] = [];
    for(var j=0; j<7; j++)
    {
      if(startDay > 0) // store 0 before starting day
      {
        arr[i][j] = 0;
        startDay = startDay - 1;
      }
      else if(date <= lastDate)
      {
        arr[i][j] = date;
        date++;
      }
      else
      {
        arr[i][j] = 0;
      }
    }
  }
  var c = startDayTemp + 9;
  week.display(arr, c);
}
