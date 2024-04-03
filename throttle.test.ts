import throttle from '../throttle'

describe('Todo', () => {
  it('should not execute a function call if it happens within a time interval', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    throttled('b')
    setTimeout(()=>expect(value).toBe('a'), 3000);
  });

  it('should execute the function call if the waiting period has expired', () => {
    let value:string
    value =''
    const throttled = throttle((param:string)=> value += param, 2000);
    throttled('a')
    setTimeout(()=> throttled('b'), 2100)
    setTimeout(()=>expect(value).toBe('ab'), 4000);
  });

});



/*import Todo from '../lib';

describe('Todo', () => {
  it('should create a new todo with the correct description', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.description).toBe('Buy groceries');
  });

  it('should create a new todo with the completed property set to false', () => {
    const todo = new Todo('Buy groceries');
    expect(todo.completed).toBe(false);
  });

  it('should toggle the completed property of the todo', () => {
    const todo = new Todo('Buy groceries');
    todo.toggle();
    expect(todo.completed).toBe(true);
    todo.toggle();
    expect(todo.completed).toBe(false);
  });
});*/
