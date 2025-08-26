const tbody = document.querySelector("#employeeTable tbody");

async function fetchEmployees() {
    const res = await fetch("http://localhost:5000/api/employees");
    const employees = await res.json();
    tbody.innerHTML = "";
    employees.forEach(emp => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.position}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>${emp.hire_date ? new Date(emp.hire_date).toLocaleDateString() : ''}</td>
            <td>
                <button class="edit" onclick="editEmployee(${emp.id})">Edit</button>
                <button class="delete" onclick="deleteEmployee(${emp.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
        await fetch(`http://localhost:5000/api/employees/${id}`, { method: "DELETE" });
        fetchEmployees();
    }
}

function editEmployee(id) {
    window.location.href = `edit.html?id=${id}`;
}

fetchEmployees();
