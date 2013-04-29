var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here
  var front = 0;
  // Implement the methods below
  var queue = {};

  queue.add = function(value){
    storage[size+front] = value;
    size+=1;
  };

  queue.remove = function(){
    if (size===0) {
      throw new Error('Can\'t remove from empty queue');
    }
    var obj = storage[front];
    delete storage[front];
    size-=1;
    front+=1;
    return obj;
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
