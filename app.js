const { prompt } = require("inquirer");
const titleart = require("asciiart-logo");
// const db = require("./db");
// require("console.table");

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
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        // Depending on the user's choice, run the associated function.
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                //function();
                break;
            case "ADD_EMPLOYEE":
                //function();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                //function();
                break;
            case "VIEW_ROLES":
                //function();
                break;
            case "ADD_ROLE":
                //function();
                break;
            case "VIEW_DEPARTMENTS":
                //function();
                break;
            case "ADD_DEPARTMENT":
                //function();
                break;
            case "QUIT":
                //function();
                break;
        }
    })
}