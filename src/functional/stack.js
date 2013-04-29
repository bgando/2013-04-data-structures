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
    if (size===0) {
      throw new Error('cannot remove from empty stack');
    }
    var obj = storage[size-1];
    delete storage[size-1];
    size-=1;
    return obj;
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
