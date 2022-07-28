INSERT INTO department (name)
VALUES ("Sales"), 
("Accounting"), 
("Quality Control"), 
("Supplier Relations"),
("Front Office Staff"),
("Human Resources"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Salesperson", 100000, 1), 
("Salesperson", 80000, 1), 
("Lead Accountant", 140000, 2), 
("Accountant", 120000, 2), 
("Quality Control Lead", 70000, 3), 
("Supplier Relation Lead", 100000, 4), 
("Secretary", 50000, 5), 
("HR Representative", 70000, 6),
("Regional Manager", 150000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 9, NULL), 
("Dwight", "Schrute", 1, 1), 
("Jim", "Halpert", 2, 2), 
("Pam", "Beasley", 7, 1), 
("Stanley", "Hudson", 2, 2), 
("Phyllis", "Lapin", 2, 2), 
("Angela", "Martin", 4, 8), 
("Oscar", "Gutierrez", 3, 1),
("Kevin", "Malone", 4, 8), 
("Creed", "Bratton", 5, 1), 
("Meredith", "Palmer", 6, 1), 
("Andy", "Bernard", 2, 2), 
("Toby", "Flenderson", 8, NULL);
