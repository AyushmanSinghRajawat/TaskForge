document.addEventListener("DOMContentLoaded", () => {


    function addNewCol() {
        console.log("buttonclicked")
        const task_dash = document.getElementById("task-main");
        const newBoxTask = document.createElement('div');
        const TaskDate = document.getElementById('TaskendDate').value;
        // Input date in the format "2023-09-28"


        // Split the input date into parts using "-" as the separator
        let dateParts = TaskDate.split("-");

        // // Rearrange the parts to form the desired format "28/09/23"
        // let formattedDate = `${dateParts[2].substring(2)}/${dateParts[1]}/${dateParts[0].substring(2)}`;
        let formattedDate = `${dateParts[2].substring(0)}/${dateParts[1]}/${dateParts[0].substring(2)}`;

        console.log(formattedDate); // Output: "28/09/23"




        const taskDescription = document.getElementById('inputTaskDescription').value;
        // const TaskStatus=document.getElementById('inputStatus').value;

        // Get the value of TaskStatus
        const TaskStatus = document.getElementById('inputStatus').value;

        // Initialize task_status as an empty string
        let task_status = '';

        // Use a conditional statement to set task_status based on TaskStatus
        if (TaskStatus === 'To Do') {
        task_status = '<span class="mb-0 px-4 badge bg-info-subtle border border-4 border-info-subtle text-info-emphasis rounded-pill">To Do</span>';
        } else if (TaskStatus === 'In Progress') {
        task_status = '<span class="mb-0 badge bg-warning-subtle border border-4 border-warning-subtle text-warning-emphasis rounded-pill">In Progress</span>';
        } else if (TaskStatus === 'Completed') {
        task_status = '<span class="mb-0 badge bg-success-subtle border border-4 border-success-subtle text-success-emphasis rounded-pill">Completed</span>';
        }

// Now, task_status will contain the appropriate HTML based on the selected value of TaskStatus


        const Assignedto=document.getElementById('inputAssignedTo').value;
        console.log("newdivcreated")
        newBoxTask.className = 'col-lg-12 card mb-1 py-1 px-3 rounded-2 t';
        
        newBoxTask.innerHTML = `
        <div class="row g-3">
          <div class="col-lg-1 px-0">
          ${task_status}
          </div>
          <div class="col-lg-8 px-3">
            <span>${taskDescription}</span>
          </div>
          <div class="col-lg-1 border border-1 rounded-1 border-dark px-0 ps-1">${formattedDate}</div>
          <div class="col-lg-2">
            <span class="badge mx-0 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-pill">
            <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/fat.png" alt="">${Assignedto}
            </span>
          </div>
        </div>
        `;
        console.log("innerhtmladded");
        task_dash.insertAdjacentElement('beforeend', newBoxTask);
        console.log("addednewdiv")
    
        // // Clear the modal inputs
        document.getElementById('inputTaskTitle').value='';
        document.getElementById('TaskstartDate').value='';
        document.getElementById('inputTaskTags').value='';
        document.getElementById('inputTaskId').value='';
        document.getElementById('inputTaskDescription').value = '';
        document.getElementById('TaskendDate').value = '';
        document.getElementById('inputStatus').value = '';
        document.getElementById('inputAssignedTo').value = '';
      }
      document.getElementById('addcolBtn').addEventListener('click', addNewCol);

})