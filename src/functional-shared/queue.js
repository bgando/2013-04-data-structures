var makeQueue = function(){
  // Use an object with numeric keys to store values
  // Implement the methods below
  var queue = {};
  queue.storage = {};
  queue.storage.size = 0; // Hint: set an initial value here
  queue.front = 0;
  _.extend(queue, queueMethods);
  return queue;
};


var queueMethods = {};

queueMethods.add = function(value){
  this.storage[this.size()+this.front] = value;
  this.storage.size+=1;
};

queueMethods.remove = function(){
  if (this.size()===0) {
    throw new Error('Can\'t remove from empty queue');
  }
  var obj = this.storage[this.front];
  delete this.storage[this.front];
  this.storage.size-=1;
  this.front+=1;
  return obj;
};

queueMethods.size = function(){
  return this.storage.size;
};
