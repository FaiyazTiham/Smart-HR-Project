const form = document.getElementById("editForm");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function fetchEmployee() {
    const res = await fetch(`http://localhost:5000/api/employees`);
    const employees = await res.json();
    const emp = employees.find(e => e.id == id);
    if (emp) {
        form.name.value = emp.name;
        form.email.value = emp.email;
        form.position.value = emp.position;
        form.department.value = emp.department;
        form.salary.value = emp.salary;
        form.hire_date.value = emp.hire_date ? emp.hire_date.split("T")[0] : '';
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    await fetch(`http://localhost:5000/api/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    alert("Employee updated successfully!");
    window.location.href = "index.html";
});

fetchEmployee();
