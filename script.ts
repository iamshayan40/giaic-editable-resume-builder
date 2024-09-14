document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
    const editBtn = document.getElementById('editBtn') as HTMLButtonElement;
    
    const editableElements = document.querySelectorAll('[contenteditable="true"]') as NodeListOf<HTMLElement>;
  
    // Placeholder text for each field
    const placeholders: { [key: string]: string } = {
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
  
    function toggleEditing(isEditing: boolean) {
      editableElements.forEach(element => {
        element.contentEditable = isEditing ? 'true' : 'false';
        if (isEditing) {
          element.style.borderBottom = '1px solid #007bff';
          if (element.innerText === placeholders[element.id]) {
            element.innerText = ''; // Clear placeholder text on edit
          }
        } else {
          element.style.borderBottom = 'none';
          if (!element.innerText.trim()) {
            element.innerText = placeholders[element.id]; // Restore placeholder text if empty
          }
        }
      });
    }
  
    function saveResume() {
      const resumeData: { [key: string]: string } = {};
      
      editableElements.forEach(element => {
        resumeData[element.id] = element.innerText.trim();
      });
  
      console.log('Resume Data Saved:', resumeData);
  
      // After saving, switch to view mode
      toggleEditing(false);
    }
  
    saveBtn.addEventListener('click', () => {
      saveResume();
    });
  
    editBtn.addEventListener('click', () => {
      toggleEditing(true);
    });
  
    // Initialize in view mode
    toggleEditing(false);
  });
  