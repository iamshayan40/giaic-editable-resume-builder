document.addEventListener('DOMContentLoaded', function () {
    var saveBtn = document.getElementById('saveBtn');
    var editBtn = document.getElementById('editBtn');
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    // Placeholder text for each field
    var placeholders = {
        name: "Your Name",
        age: "Enter Age",
        gender: "Enter Gender",
        religion: "Enter Religion",
        address: "Enter Address",
        email: "Enter Email",
        phone: "Enter Phone",
        education: "Enter Education",
        skills: "Enter Skills",
        experience: "Enter Experience",
        courses: "Enter Courses"
    };
    function toggleEditing(isEditing) {
        editableElements.forEach(function (element) {
            element.contentEditable = isEditing ? 'true' : 'false';
            if (isEditing) {
                element.style.borderBottom = '1px solid #007bff';
                if (element.innerText === placeholders[element.id]) {
                    element.innerText = ''; // Clear placeholder text on edit
                }
            }
            else {
                element.style.borderBottom = 'none';
                if (!element.innerText.trim()) {
                    element.innerText = placeholders[element.id]; // Restore placeholder text if empty
                }
            }
        });
    }
    function saveResume() {
        var resumeData = {};
        editableElements.forEach(function (element) {
            resumeData[element.id] = element.innerText.trim();
        });
        console.log('Resume Data Saved:', resumeData);
        // After saving, switch to view mode
        toggleEditing(false);
    }
    saveBtn.addEventListener('click', function () {
        saveResume();
    });
    editBtn.addEventListener('click', function () {
        toggleEditing(true);
    });
    // Initialize in view mode
    toggleEditing(false);
});
