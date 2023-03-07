const inquirer = require('inquirer');
const fs = require('fs');
const Handlebars = require('handlebars');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Employee = require('./lib/employee');

async function promptEmployeeRole() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Choose an employee role:',
      choices: ['Manager', 'Engineer', 'Intern','Finish']
    }
  ]);

  return answers.role;
}

async function promptEmployeeInfo(role) {
  const commonQuestions = [
    {
      type: 'input',
      name: 'name',
      message: `Enter the ${role.toLowerCase()}'s name:`
    },
    {
      type: 'input',
      name: 'id',
      message: `Enter the ${role.toLowerCase()}'s employee ID:`
    },
    {
      type: 'input',
      name: 'email',
      message: `Enter the ${role.toLowerCase()}'s email address:`
    }
  ];

  let specificQuestions = [];

  if (role === 'Manager') {
    specificQuestions = [
      {
        type: 'input',
        name: 'officeNumber',
        message: `Enter the ${role.toLowerCase()}'s office number:`
      }
    ];
  } else if (role === 'Engineer') {
    specificQuestions = [
      {
        type: 'input',
        name: 'github',
        message: `Enter the ${role.toLowerCase()}'s GitHub username:`
      }
    ];
  } else if (role === 'Intern') {
    specificQuestions = [
      {
        type: 'input',
        name: 'school',
        message: `Enter the ${role.toLowerCase()}'s school:`
      }
    ];
  }

  const answers = await inquirer.prompt([...commonQuestions, ...specificQuestions]);

  switch (role) {
    case 'Manager':
      return new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    case 'Engineer':
      return new Engineer(answers.name, answers.id, answers.email, answers.github);
    case 'Intern':
      return new Intern(answers.name, answers.id, answers.email, answers.school);
    default:
      return new Employee(answers.name, answers.id, answers.email);
  }
}

function generateHTML(teamMembers) {
  Handlebars.registerHelper('eq', function(value1, value2) {
    return value1 === value2;
  });

  const source = fs.readFileSync('./templates/team.html', 'utf-8');
  const template = Handlebars.compile(source);

  const data = { teamMembers };
  const html = template(data);

  fs.writeFileSync('./templates/team.html', html);
}

async function startApp() {
  const teamMembers = [];

  const manager = await promptEmployeeInfo('Manager');
  teamMembers.push(manager);

  let done = false;
  while (!done) {
    const role = await promptEmployeeRole();

    if (role === 'Finish') {
      done = true;
    } else {
      const employee = await promptEmployeeInfo(role);
      teamMembers.push(employee);
    }
  }

  generateHTML(teamMembers);
}

startApp();
