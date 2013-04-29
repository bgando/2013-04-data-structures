describe("queue", function() {
  var queue;

  // Before each test runs, create a new Queue
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
    queue.add('foo');
    queue.add('bar');

  });

  // Any queue implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).to.be.a('function');
    expect(queue.remove).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should increase size when it\'s added', function(){
      queue.add(0);
      expect(queue.size()).to.equal(3);
      queue.add(1);
      expect(queue.size()).to.equal(4);
    });
  });
  describe('#size()', function() {
    it('should increase size', function() {
      expect(queue.size()).to.equal(2);
    });
  });
  describe('#remove()', function() {
    it('should remove front of queue', function() {
      expect(queue.remove()).to.equal('foo');
      expect(queue.size()).to.equal(1);
      expect(queue.remove()).to.equal('bar');
    });
    it('should throw error if queue is empty', function() {
      queue.remove();
      queue.remove();
      expect(queue.remove).to.Throw(Error);
    });
  });

/*
  describe('profiling', function(){
    it('is going to profile now', function () {
      var queues = [];
      for (var i=0; i<5000; i++) {
        var queue;
        if (runner.is('src/functional') || runner.is('src/functional-shared')) {
          queue = makeQueue();
        } else if (runner.is('src/prototypal')) {
          queue = Queue();
        } else if (runner.is('src/pseudoclassical')) {
          queue = new Queue();
        }
        for (var j=0; j<5000; j++) {
          queue.add(j);
          queue.add('hi');
          queue.remove();
        }
        queues.push(queue);
      }
    });
  });
*/
  // Hey! Add more tests here to test the functionality of queue
});

