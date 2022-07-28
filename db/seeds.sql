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
VALUES ("Dwight", "Schrute", 1, 13), 
("Jim", "Halpert", 2, 1), 
("Stanley", "Hudson", 2, 1), 
("Phyllis", "Lapin", 2, 1),
("Andy", "Bernard", 2, 1), 
("Oscar", "Gutierrez", 3, 13), 
("Angela", "Martin", 4, 6), 
("Kevin", "Malone", 4, 6),
("Creed", "Bratton", 5, 13), 
("Meredith", "Palmer", 6, 13),  
("Pam", "Beasley", 7, 13),
("Toby", "Flenderson", 8, NULL),
("Michael", "Scott", 9, NULL);