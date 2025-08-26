const tbody = document.querySelector("#categoryTable tbody");

async function fetchCategories() {
    const res = await fetch("http://localhost:5000/api/categories");
    const categories = await res.json();
    tbody.innerHTML = "";
    categories.forEach(cat => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cat.id}</td>
            <td>${cat.name}</td>
            <td>${cat.description || ''}</td>
            <td>
                <button class="edit" onclick="editCategory(${cat.id})">Edit</button>
                <button class="delete" onclick="deleteCategory(${cat.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function deleteCategory(id) {
    if (confirm("Are you sure you want to delete this category?")) {
        await fetch(`http://localhost:5000/api/categories/${id}`, { method: "DELETE" });
        fetchCategories();
    }
}

function editCategory(id) {
    // You can implement edit functionality similar to employees
    alert("Edit functionality to be implemented");
}

fetchCategories();