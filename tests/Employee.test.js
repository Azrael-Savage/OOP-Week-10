const Employee = require('../lib/employee');

test('Creates an employee object with name, id, and email', () => {
  const employee = new Employee('John Doe', 1, 'jdoe@test.com');
  
  expect(employee.name).toEqual('John Doe');
  expect(employee.id).toEqual(1);
  expect(employee.email).toEqual('jdoe@test.com');
});

test('Checks if methods inside Employee class work', () => {
  const employee = new Employee('John Doe', 1, 'jdoe@test.com');

  expect(employee.getName()).toEqual('John Doe');
  expect(employee.getId()).toEqual(1);
  expect(employee.getEmail()).toEqual('jdoe@test.com');
  expect(employee.getRole()).toEqual('Employee');
});
