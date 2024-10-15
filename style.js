////////////// chap 49-52 //////////////////////

  // 1. Create a signup form and display form data in your web
  // page on submission.

  function displayFormData() {
    event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value; 
        var displayString = "<strong>Name:</strong> " + name + "<br>" +
                            "<strong>Email:</strong> " + email + "<br>" +
                            "<strong>Password:</strong> " + password; 
        document.getElementById("displayData").innerHTML = displayString;
            
        document.getElementById("signupForm").reset();
        return false;
    }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

function expandLoris() {
  var expandedParagraph = `
  Slow lorises are a group of several species of trepsirrhine 
  primates which make up the genus Nycticebus. They have a round head, 
  narrow snout, large eyes, and a variety of distinctive coloration 
  patterns that are species-dependent. The hands and feet of slow 
  lorises have several adaptations that give them a pincer-like 
  grip and enable them to grasp branches for long periods of time. 
  Slow lorises have a toxic bite, a rare trait among mammals.`;

  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


    var currentEditRow = null; 

    // Function to add a new student
    function addStudent() {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var grade = document.getElementById("grade").value;

        var table = document.getElementById("studentTable");
        var newRow = table.insertRow();

        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = age;
        newRow.insertCell(2).innerText = grade;

        var actionsCell = newRow.insertCell(3);
        actionsCell.innerHTML = `<button onclick="editStudent(this)">Edit</button> 
                                 <button onclick="deleteStudent(this)">Delete</button>`;

        // Clear the form
        document.getElementById("studentForm").reset();
    }

    // Function to delete a student (entire row)
    function deleteStudent(button) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row); // Removes the row
    }

    // Function to show the edit form with the selected row data
    function editStudent(button) {
        currentEditRow = button.parentNode.parentNode;
        var name = currentEditRow.cells[0].innerText;
        var age = currentEditRow.cells[1].innerText;
        var grade = currentEditRow.cells[2].innerText;

        // Populate the edit form with the current row data
        document.getElementById("editName").value = name;
        document.getElementById("editAge").value = age;
        document.getElementById("editGrade").value = grade;

        // Show the edit form
        document.getElementById("editForm").style.display = "block";
    }

     // Function to update the student details
    function updateStudent() {
        if (currentEditRow) {
            currentEditRow.cells[0].innerText = document.getElementById("editName").value;
            currentEditRow.cells[1].innerText = document.getElementById("editAge").value;
            currentEditRow.cells[2].innerText = document.getElementById("editGrade").value;

            // Hide the edit form after updating
            document.getElementById("editForm").style.display = "none";
        }
    }

    // Function to cancel the editing process
    function cancelEdit() {
        // Hide the edit form without making any changes
        document.getElementById("editForm").style.display = "none";
        currentEditRow = null; // Reset the current edit row
    }
