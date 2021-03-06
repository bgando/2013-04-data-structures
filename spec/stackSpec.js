describe("stack", function() {
  var stack;

  // Before each test runs, create a new Stack
  beforeEach(function() {
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      stack = makeStack();
    } else if (runner.is('src/prototypal')) {
      stack = Stack();
    } else if (runner.is('src/pseudoclassical')) {
      stack = new Stack();
    }
    stack.add(4);
    stack.add(5);
    stack.add(6);
  });

  // Any stack implementation should have the following methods
  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).to.be.a('function');
    expect(stack.remove).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  // Organize your tests with nested describe() statements
  // Use '#methodName()' to denote tests that focus on a certain method
  describe('#add()', function() {
    it('should add to stack', function() {
      expect(stack.size()).to.equal(3);
      stack.add(5);
      expect(stack.size()).to.equal(4);
    });
  });

  describe('size()', function() {
    it('should return size', function() {
      expect(stack.size()).to.equal(3);
    });
  });

  describe('remove()', function() {
    it('should remove from stack and return object', function() {
      expect(stack.remove()).to.equal(6);
      expect(stack.size()).to.equal(2);
    });

    it('should throw error if stack is empty already', function() {
      stack.remove();
      stack.remove();
      stack.remove();
      expect(stack.remove).to.Throw(Error);
    });
  });

/*
  describe('profiling', function(){
    it('is going to profile now', function () {
      var stacks = [];
      for (var i=0; i<10000; i++) {
        var stack;
        if (runner.is('src/functional') || runner.is('src/functional-shared')) {
          stack = makeStack();
        } else if (runner.is('src/prototypal')) {
          stack = Stack();
        } else if (runner.is('src/pseudoclassical')) {
          stack = new Stack();
        }
        for (var j=0; j<10000; j++) {
          stack.add(j);
          stack.add('hi');
          stack.remove();
        }
        stacks.push(stack);
      }
    });
  }); */

  // Hey! Add more tests here to test the functionality of stack
});
