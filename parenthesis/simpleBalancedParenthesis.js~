
/******************************************************************************

 *
 * @description     : Take an Arithmetic Expression such as where parentheses
                      are used to order the performance of operations.Ensure
                      parentheses must appear in a balanced fashion.
 *  @file           : simpleBalancedParenthesis.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *
 ******************************************************************************/

// Program starts from here
function simpleBalancedParenthesis()
{
  var arithmeticExpression=document.getElementById("expression").value;
  var arithmeticExpressionArray=arithmeticExpression.split("");
  var arithmeticExpressionArrayLength = arithmeticExpressionArray.length;
  checksimpleBalancedParenthesis(arithmeticExpressionArray,arithmeticExpressionArrayLength);
}

// Check parenthesis is right or not
function checksimpleBalancedParenthesis(array,length)
{
  var stack = new Stack();
  for(var i=0;i<length;i++)
  {
    if(array[i] == "(")
    {
      stack.push(array[i]);
    }
    else if(array[i] == ")")
    {
      stack.pop();
    }
  }
  var size = stack.size();
  if(size == 0)
    document.write("Balanced");
  else if(size > 0  || size < 0)
    document.write("Unbalanced");
}

//creates a Stack
var Stack = function()
{
  this.count = 0;
  this.storage = {};

  // Adds value onto the end of the Stack
  this.push = function(value)
  {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes and returns the value at the end of the stack
  this.pop = function()
  {
    if(this.count == 0)
      return this.count--;
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.size = function()
  {
    return this.count;
  }
}
