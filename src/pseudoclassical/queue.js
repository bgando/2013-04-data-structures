//profiled:3961ms
var Queue = function(){
  // Use an object with numeric keys to store values
  // Implement the methods below
  this.storage = {};
  this.storage.size = 0; // Hint: set an initial value here
  this.front = 0;
};

Queue.prototype.add = function(value){
  this.storage[this.size()+this.front] = value;
  this.storage.size+=1;
};

Queue.prototype.remove = function(){
  if (this.size()===0) {
    throw new Error('Can\'t remove from empty queue');
  }
  var obj = this.storage[this.front];
  delete this.storage[this.front];
  this.storage.size-=1;
  this.front+=1;
  return obj;
};

Queue.prototype.size = function(){
  return this.storage.size;
};
