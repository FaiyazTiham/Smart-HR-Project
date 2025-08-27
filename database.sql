CREATE DATABASE employee_em;
USE employee_em;
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  position VARCHAR(50),
  department VARCHAR(50),
  salary DECIMAL(10,2),
  hire_date DATE
);
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO admins (username, password, email) 
VALUES ('sani', 'sani123', 'sani@gmail.com');
USE employee_em;
SELECT * FROM admins;
