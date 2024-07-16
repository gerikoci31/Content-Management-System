# Content-Management-System
Content Management system
const inquirer = require('inquirer'); const pool = require('./db');

async function main() {

const { choice } = await inquirer.prompt({ name: 'choice', type: 'list', message: 'What would you like to do?', choices: [ 'View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit' ], });

switch (choice) { case 'View all departments': await viewDepartments(); break; case 'View all roles': await viewRoles(); break; case 'View all employees': await viewEmployees(); break; case 'Add a department': await addDepartment(); break; case 'Add a role': await addRole(); break; case 'Add an employee': await addEmployee(); break; case 'Update an employee role': await updateEmployeeRole(); break; case 'Quit': console.log('Goodbye!'); pool.end(); return; }

main(); }

async function viewDepartments() { const res = await pool.query('SELECT * FROM department'); console.table(res.rows); }

async function viewRoles() { const res = await pool.query('SELECT * FROM role'); console.table(res.rows); }

async function viewEmployees() { const res = await pool.query('SELECT * FROM employee'); console.table(res.rows); }

async function addDepartment() { const { name } = await inquirer.prompt({ name: 'name', type: 'input', message: 'Enter the department name:', });

await pool.query('INSERT INTO department (name) VALUES ($1)', [name]); console.log(Department "${name}" added successfully!); }

async function addRole() {

const departmentChoices = await pool.query('SELECT * FROM department');

const questions = [ { name: 'title', type: 'input', message: 'Enter the role title:', }, { name: 'salary', type: 'input', message: 'Enter the role salary:', }, { name: 'department_id', type: 'list', message: 'Select the department for the role:', choices: departmentChoices.rows.map(dept => ({ name: dept.name, value: dept.id, })), }, ];

const { title, salary, department_id } = await inquirer.prompt(questions);

await pool.query( 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id] ); console.log(Role "${title}" added successfully!); }

async function addEmployee() { // Fetch roles and employees for employee creation const roleChoices = await pool.query('SELECT * FROM role'); const managerChoices = await pool.query('SELECT * FROM employee');

const questions = [ { name: 'first_name', type: 'input', message: 'Enter the employee's first name:', }, { name: 'last_name', type: 'input', message: 'Enter the employee's last name:', }, { name: 'role_id', type: 'list', message: 'Select the employee's role:', choices: roleChoices.rows.map(role => ({ name: role.title, value: role.id, })), }, { name: 'manager_id', type: 'list', message: 'Select the employee's manager (optional):', choices: [{ name: 'None', value: null }].concat(managerChoices.rows.map(manager => ({ name: ${manager.first_name} ${manager.last_name}, value: manager.id, }))), }, ];

const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(questions);

await pool.query( 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id] ); console.log(Employee "${first_name} ${last_name}" added successfully!); }

async function updateEmployeeRole() { const employees = await pool.query('SELECT * FROM employee'); const roles = await pool.query('SELECT * FROM role');

const employeeChoices = employees.rows.map(emp => ({ name: ${emp.first_name} ${emp.last_name}, value: emp.id, }));

const roleChoices = roles.rows.map(role => ({ name: role.title, value: role.id, }));

const questions = [ { name: 'employee_id', type: 'list', message: 'Select the employee to update:', choices: employeeChoices, }, { name: 'role_id', type: 'list', message: 'Select the new role for the employee:', choices: roleChoices, }, ];

const { employee_id, role_id } = await inquirer.prompt(questions);

await pool.query( 'UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id] ); console.log(Employee role updated successfully!); }

// Start the application main();

##Video url https://drive.google.com/file/d/1hMoFKDojYB6lAoIznK6_kFwWBhU79_ne/view

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
MIT