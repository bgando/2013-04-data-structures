var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    stack[size] = value;
    size+=1;

  };

  stack.remove = function(){
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
