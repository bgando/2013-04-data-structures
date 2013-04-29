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
      stack.add(4);
      stack.add(5);
      stack.add(6);
      expect(stack).toEqual({
        0:4,
        1:5,
        2:6
        });
    });
  });

  describe('size()', function() {
    it('should return size', function() {
      stack.add(3);
      stack.add(2);
      expect(stack.size()).toEqual(2);
    });
  });

  // Hey! Add more tests here to test the functionality of stack
});
