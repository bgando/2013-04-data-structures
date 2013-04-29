var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size=0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    storage[size] = value;
    size+=1;

  };

  stack.remove = function(){
    size-=1;
    var obj = storage[size];
    delete storage[size];
    return obj;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
