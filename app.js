const { prompt } = require("inquirer");
const titleart = require("asciiart-logo");
const db = require("./db/connection");

init();

function init() {
    // Create the titleart block on init
    const artText = titleart({ name: "Employee Tracker" }).render();
    console.log(artText);

    mainMenu();
}

function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add An Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update An Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add A Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add A Department",
                    value: "ADD_DEPARTMENT"
                }
            ]
        }
    ]).then(res => {
        // Depending on the user's choice, run the associated function.
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                //function();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                //function();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                //function();
                break;
        }
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee', (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res)
        mainMenu(); // Return to main menu after rendering table
    })
};

function viewRoles() {
    db.query('SELECT role.title AS Title, role.salary AS Salary FROM role', (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res)
        mainMenu();
    })
};

function viewDepartments() {
    db.query('SELECT * FROM department', (err, res) => {
        if (err) {
            throw err;
        }
        console.table(res)
        mainMenu();
    })
};

function addEmployee() {
    prompt([
        {
            type: "input",
            name: "first",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role",
            message: "What is the employee's role id?"
        },
        {
            type: "input",
            name: "manager",
            message: "What is the employee's manager's id?"
        }
    ]).then(answers => {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
        VALUES (${answers.first}, ${answers.last}, ${answers.role}, ${answers.manager})`, (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res)
            mainMenu();
        })
    })
};