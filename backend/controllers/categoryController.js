import db from "../config/db.js";

export const getCategories = async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM categories");
  res.json(rows);
};

export const addCategory = async (req, res) => {
  const { name, description } = req.body;
  await db.execute(
    "INSERT INTO categories(name, description) VALUES(?, ?)",
    [name, description]
  );
  res.json({ message: "Category added successfully" });
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await db.execute(
    "UPDATE categories SET name=?, description=? WHERE id=?",
    [name, description, id]
  );
  res.json({ message: "Category updated successfully" });
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await db.execute("DELETE FROM categories WHERE id=?", [id]);
  res.json({ message: "Category deleted successfully" });
};