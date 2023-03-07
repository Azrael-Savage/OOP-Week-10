const Manager = require('../lib/Manager');

test('creates a new manager object with a name, id, email, and office number', () => {
  const manager = new Manager('John Doe', 1, 'jdoe@test.com', 123);

  expect(manager.name).toBe('John Doe');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('jdoe@test.com');
  expect(manager.officeNumber).toBe(123);
});

test('returns the role of the manager', () => {
  const manager = new Manager('John Doe', 1, 'jdoe@test.com', 123);

  expect(manager.getRole()).toBe('Manager');
});
