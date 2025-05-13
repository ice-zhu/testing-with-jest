const stack = require('../src/stack');

/** Tests that will not work */
test('Peek on a stack that should return the top value.', () => {
    stack.push(1);
    expect(stack.peek()).toBeUndefined();
});

test('Pop an empty stack', () => {
    stack.pop();
    expect(stack.peek()).toBeDefined(); // Returns a defined value
});

test('Peek after popping the last element', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBeDefined(); // Returns a defined value
});
