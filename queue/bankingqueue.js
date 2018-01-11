var numberofppl=[];
var bankamount=1000000;
function bankingCashCounter()
{
 var numberofppl=document.getElementById("text").value;
 for(var i=0;i<numberofppl;i++)
    {
     pplarray[i]=i;
     }
      checkbankingCashCounter(bankamount,numberofppl)
}
checkbankingCashCounter(bankamount,numberofppl)
{
   var queue = new Queue();
   {
     while(amount>0 &&numberofperson>0)
    {
     for(var i=0;i<numberofppl.length;i++)
      {
       if(numberofppl[i]>0)
        {
          queue.enqueue((numberofppl[i]));   
         }
      }
    }
  }

}

var Queue = function() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
}

// Adds a value to the end of the chain
Queue.prototype.enqueue = function(value)
 {
    // Check to see if value is defined
    if (value) {
        this.storage[this.count] = value;
        this.count++;
    }
}

// Removes a value from the beginning of the chain
Queue.prototype.dequeue = function() 
{
    // Check to see if queue is empty
    if (this.count - this.lowestCount === 0) 
       {
        return undefined;
       }

    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
}

// Returns the length of the queue
Queue.prototype.size = function() 
{
    return this.count - this.lowestCount;
}
bankingCashCounter();




