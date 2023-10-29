document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const tableBody = document.querySelector("#myTable tbody");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const address = document.getElementById("address").value;
        const pincode = document.getElementById("pincode").value;
        const gender = document.getElementById("gender").value;
        const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        const selectedFood = [];
        foodCheckboxes.forEach(checkbox => selectedFood.push(checkbox.value));
        const state = document.getElementById("state").value;
        const country = document.getElementById("country").value;

        // Create a new table row
        const newRow = tableBody.insertRow();

        // Create table cells and populate data
        const cells = [
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
            newRow.insertCell(),
        ];

        cells[0].textContent = firstName;
        cells[1].textContent = lastName;
        cells[2].textContent = address;
        cells[3].textContent = pincode;
        cells[4].textContent = gender;
        cells[5].textContent = selectedFood.join(', ');
        cells[6].textContent = state;
        cells[7].textContent = country;

        // Clear form fields
        form.reset();
    });
});
