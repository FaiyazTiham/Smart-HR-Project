import db from "../config/db.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const [rows] = await db.execute(
      "SELECT * FROM admins WHERE username = ?",
      [username]
    );
    
    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const admin = rows[0];
    
    // In a real application, you should use bcrypt to compare hashed passwords
    // For simplicity, we're doing a direct comparison (not secure for production)
    if (password !== admin.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    res.json({ 
      message: "Login successful", 
      admin: { id: admin.id, username: admin.username, email: admin.email } 
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, username, email, created_at FROM admins"
    );
    res.json(rows);
  } catch (error) {
    console.error("Get admins error:", error);
    res.status(500).json({ message: "Server error" });
  }
};