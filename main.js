document.addEventListener("DOMContentLoaded", function () {



    document.querySelector("#submit").disabled = true;
    document.querySelector("#itemName").onkeyup = function () {
        if (document.querySelector("#itemName").value.length > 6) {
            document.querySelector("#submit").disabled = false;

        } else {
            document.querySelector("#submit").disabled = true
        }
    }
    document.querySelector("form").onsubmit = function () {
        // Get form values
        var itemName = document.getElementById('itemName').value;




        // Create table row
        var row = document.createElement('tr');

        // Create table cells
        var cellName = document.createElement('td');
        cellName.textContent = itemName;



        var cellActions = document.createElement('td');

        // Create buttons for edit, remove, and save

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            // Get values from the row
            var itemName = row.cells[0].textContent;
            // Set form values
            document.getElementById('itemName').value = itemName;
            // Remove the row from the table
            row.remove();
        };

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            // Remove the row from the table
            row.remove();
        };

        var saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.onclick = function () {
            // Remove the row from the table
            editButton.remove();
        };




        cellActions.appendChild(editButton);
        cellActions.appendChild(removeButton);
        cellActions.appendChild(saveButton);
        // Append cells to the row
        row.appendChild(cellName);
        row.appendChild(cellActions);

        // Append the row to the table
        document.getElementById('orderTable').getElementsByTagName('tbody')[0].appendChild(row);

        // Clear form fields
        document.getElementById('itemName').value = '';
        return false
    }
})


