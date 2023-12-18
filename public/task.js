document.addEventListener("DOMContentLoaded", () => {

    let a=0;
    function addNewCol() {
        console.log("buttonclicked")
        const task_dash = document.getElementById("task-main");
        const newBoxTask = document.createElement('div');
        const TaskDate = document.getElementById('TaskendDate').value;
        // Input date in the format "2023-09-28"


        // Split the input date into parts using "-" as the separator
        let dateParts = TaskDate.split("-");

        let formattedDate = `${dateParts[2].substring(0)}/${dateParts[1]}/${dateParts[0].substring(2)}`;

        console.log(formattedDate); // Output: "28/09/23"




        const taskDescription = document.getElementById('inputTaskDescription').value;
        // const TaskStatus=document.getElementById('inputStatus').value;
        const taskTitle=document.getElementById('inputTaskTitle').value;
        const taskid=document.getElementById('inputTaskId').value;
        const taskTag=document.getElementById('inputTaskTags').value;
        const taskstart=document.getElementById('TaskstartDate').value;
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



        const Assignedto=document.getElementById('inputAssignedTo').value;
        console.log("newdivcreated")
        newBoxTask.className = 'col-lg-12 card mb-1 py-1 px-3 rounded-2 t';
        a=a+1;
        
        newBoxTask.innerHTML = `
        <div class="row g-3">
          <div class="col-lg-1 px-0">
          ${task_status}
          </div>
          <div class="col-lg-8 px-3">
            <span><button type="button" class="btn btn-light py-0 my-0 " data-bs-toggle="modal" data-bs-target="#exampleModal${a}">${taskDescription}
          </button>
</span>
          </div>
          <div class="col-lg-1 border border-1 rounded-1 border-dark px-0 ps-1">${formattedDate}</div>
          <div class="col-lg-2">
            <span class="badge mx-0 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-pill">
            <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/fat.png" alt="">${Assignedto}
            </span>
          </div>
        </div>
        <div class="modal fade" id="exampleModal${a}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content" style="background-color: black; color: white;">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel"><h2>Task Details</h2></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                          <div class="task-info">
                          
                          <div class="row">
                              <div class="col-md-6">
                                  <h5>Task Title:</h5>
                                  <p>${taskTitle}</p>
                              </div>
                              <div class="col-md-6">
                                  <h5>Task Id:</h5>
                                  <p>${taskid}</p>
                              </div>
                              <div class="col-12">
                                  <h5>Task Description:</h5>
                                  <p>${taskDescription}</p>
                              </div>
                              <div class="col-md-4">
                                  <h5>Assigned to:</h5>
                                  <p>${Assignedto}</p>
                              </div>
                              <div class="col-md-3">
                                  <h5>Status:</h5>
                                  <p>${task_status}</p>
                              </div>
                              <div class="col-md-5">
                                  <h5>Tags or Categories:</h5>
                                  <p>${taskTag}</p>
                              </div>
                              <div class="col-md-4">
                                  <h5>Start Date:</h5>
                                  <p>${taskstart}</p>
                              </div>
                              <div class="col-md-4">
                                  <h5>End Date:</h5>
                                  <p>${TaskDate}</p>
                              </div>

                          </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
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