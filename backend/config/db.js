import mysql from "mysql2/promise";


const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "7907faiyaz@tfft",
  database: "employee_em"
});

console.log("MySQL connected successfully");
export default db;
