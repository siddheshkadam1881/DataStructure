 

/******************************************************************************

 *
 * @description :This program takes the month and year as command-line arguments
 *               and prints a calendar for that month.
 * 
 *  % java Calendar 7 2005
 *   July 2005
 *   S  M  T  W Th  F  S
 *                  1  2 
 *   3  4  5  6  7  8  9  
 *  10 11 12 13 14 15 16 
 *  17 18 19 20 21 22 23 
 *  24 25 26 27 28 29 30 
 *  31 
 *  @file           : calenderOfMonths.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

function calenderOfTheMonth()
{
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var week = new Week();
  var date = 1;
  var arr = [];
  var startDay = week.dayOfWeek(month, year, date); // starting day of month
  var lastDate = 0;
  var months = ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct", "nov", "dec"];
  document.write("<br>");
  document.write(months[month-1]); // print month
  document.write(" ");
  document.write(year); // print year
  document.write("<br>");
  document.write("<br>");
  week.days(); // print days
  document.write("<br>");
  if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) // set no of days in particular month
    lastDate = 31;
  else if(month== 4 || month==6 || month==9 || month==11)  // set no of days in particular month
    lastDate = 30;
  else if(month==2) // set no of days in particular month
  {
    if(year % 4 == 0) // set no of days in particular month
      lastDate = 29;
    else
      lastDate = 28;
  }
  var startDayTemp = startDay; // storing start day into a temp variable
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
        arr[i][j] = date;  // original date is storing into array
        date++;
      }
      else
      {
        arr[i][j] = 0; // after completing dates of the month 0 will be store into array
      }
    }
   }
   var c = startDayTemp + 9;
   week.display(arr, c);
}

// day of the week
var Week = function()
{
  this.dayOfWeek = function(month, year, day)
  {
    //use Gauss's method for determining the day of the week
    var m;
    var y;
    var d;
    m = (month - 2 + 12) % 12;
    if(month <= 2)
      year--;
    y = 5 * (year % 4) + 4 * (year % 100) + 6 * (year % 400);
    d = (day + (2.6 * m - 0.2) + y) % 7;
    d = parseInt(d);
    return d;
  }

  // Display days of calender
  this.days = function()
  {
    document.write("S");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("M");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("T");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("W");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("T");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("F");
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    document.write("S");
    document.write("<br>");
  }

  // Display the calender
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
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
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
