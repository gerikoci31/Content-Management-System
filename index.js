const inquirer = require('inquirer');
const { EventEmitter } = require('events');
const myEmitter = new EventEmitter();

myEmitter.setMaxListeners(15);

inquirer
  .prompt({
    type: 'input',
    name: 'string',
    message: 'What would you like to do?',
  }),
  

inquirer.prompt({
    type: 'input',
    name: 'string',
    message: 'What is the name of the department',
  }),
 

 inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What would you like to do ',
    }),
    
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What is the name of the role ',
    }),
    
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What is the salary of the role ',
    }),
    
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'which Department does the role belong to ',
    }),
    
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What would you like to do',
    }),
    
   inquirer.prompt ({
      type: 'input',
      name: 'string',
      message: 'What is the employees first name ',
    }),
   
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What is the employees last name ',
    }),
    
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What is the employees role',
    }),

    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What is the employees manager',
    }),
   inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'What would you like to do',
    }),
    inquirer.prompt({
      type: 'input',
      name: 'string',
      message: 'Which employees role do you want to update ',
    });

