import { helloWorld } from './initial.js';
test('given two values 2 and 3, when you add them together, then you get 5 ', () => {
    expect(helloWorld()).toBe('Hello!');
});
