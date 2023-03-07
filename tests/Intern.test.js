const Intern = require('../lib/intern.js');

test('creates an Intern object with name, id, email, and school properties', () => {
  const intern = new Intern('John Doe', 1, 'jdoe@test.com', 'University of Test');

  expect(intern.name).toEqual('John Doe');
  expect(intern.id).toEqual(1);
  expect(intern.email).toEqual('jdoe@test.com');
  expect(intern.school).toEqual('University of Test');
});

test('returns the school of the Intern', () => {
  const intern = new Intern('John Doe', 1, 'jdoe@test.com', 'University of Test');

  expect(intern.getSchool()).toEqual('University of Test');
});

test('returns the role of the Intern as "Intern"', () => {
  const intern = new Intern('John Doe', 1, 'jdoe@test.com', 'University of Test');

  expect(intern.getRole()).toEqual('Intern');
});
