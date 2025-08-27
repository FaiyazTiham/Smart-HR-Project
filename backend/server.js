import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import authRoutes from "./routes/authRoutes.js";  // Add this line

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);  // Add this line

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});