const Engineer = require('../lib/engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('John Doe', 1, 'jdoe@test.com', 'johndoe');

  expect(engineer.name).toBe('John Doe');
  expect(engineer.id).toEqual(1);
  expect(engineer.email).toEqual('jdoe@test.com');
  expect(engineer.github).toEqual('johndoe');
});

test('gets engineer github value', () => {
  const engineer = new Engineer('John Doe', 1, 'jdoe@test.com', 'johndoe');

  expect(engineer.getGithub()).toEqual('johndoe');
});

test('gets engineer role', () => {
  const engineer = new Engineer('John Doe', 1, 'jdoe@test.com', 'johndoe');

  expect(engineer.getRole()).toEqual('Engineer');
});
