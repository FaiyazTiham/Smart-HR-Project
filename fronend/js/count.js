// Fetch employee count
        async function fetchEmployeeCount() {
            try {
                const res = await fetch("http://localhost:5000/api/employees");
                const employees = await res.json();
                document.getElementById('employeeCount').textContent = employees.length;
            } catch (error) {
                console.error("Error fetching employees:", error);
                document.getElementById('employeeCount').textContent = "Error";
            }
        }

        // Fetch category count
        async function fetchCategoryCount() {
            try {
                const res = await fetch("http://localhost:5000/api/categories");
                const categories = await res.json();
                document.getElementById('categoryCount').textContent = categories.length;
            } catch (error) {
                console.error("Error fetching categories:", error);
                document.getElementById('categoryCount').textContent = "Error";
            }
        }

        // Fetch both counts when page loads
        window.addEventListener('DOMContentLoaded', () => {
            fetchEmployeeCount();
            fetchCategoryCount();
        });