import db from "../config/db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM employees");
  res.json(rows);
};

export const addEmployee = async (req, res) => {
  const { name, email, position, department, salary, hire_date } = req.body;
  await db.execute(
    "INSERT INTO employees(name,email,position,department,salary,hire_date) VALUES(?,?,?,?,?,?)",
    [name, email, position, department, salary, hire_date]
  );
  res.json({ message: "Employee added successfully" });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, position, department, salary, hire_date } = req.body;
  await db.execute(
    "UPDATE employees SET name=?, email=?, position=?, department=?, salary=?, hire_date=? WHERE id=?",
    [name, email, position, department, salary, hire_date, id]
  );
  res.json({ message: "Employee updated successfully" });
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await db.execute("DELETE FROM employees WHERE id=?", [id]);
  res.json({ message: "Employee deleted successfully" });
};
