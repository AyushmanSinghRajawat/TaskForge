// JavaScript to add a new box
document.addEventListener("DOMContentLoaded", () => {
    let u=0;
    function addNewDiv() {
        const container = document.getElementById("maindash");
        const newBox = document.createElement('div');
        const projectName = document.getElementById('inputProjectName').value;
        const projectDescription = document.getElementById('inputProjectDescription').value;
        const projectkey = document.getElementById('inputProjectKey').value;
        const projectmanager = document.getElementById('inputProjectManager').value;
        const projectpriority = document.getElementById('priority').value;
        const projecttags = document.getElementById('inputProjectTags').value;
        const projectstartdate = document.getElementById('ProjectstartDate').value;
        const projectenddate = document.getElementById('ProjectendDate').value;


        newBox.className = 'col-lg-4 mb-4';
        u=u+1;
        newBox.innerHTML = `
        <div class="card">
            <div class="card-body ps-4 pe-0 my-1 me-0">
            <h5 class="card-title"><a href="/task-dash" class="text-decoration-none">${projectName}</a></h5>
            <p class="card-text">${projectDescription}</p>
            </div>
            <hr class="py-0 my-0">
            <button type="button" class="btn btn-light mx-0 my-1 px-0 py-0 btn-sm"  width="1em" height="1em" data-bs-toggle="modal" data-bs-target="#exampleModal${u}">
            <i class="bi bi-info-circle"></i></button>
        </div>
        


        
        <div class="modal fade" id="exampleModal${u}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="background-color: black; color: white;">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><h2>Project Details</h2></h1>
                        <button type="button" class="close btn btn-outline-danger px-2 py-0 rounded-0" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="project-info mx-2">
                            <div class="row">
                                <div class="col-md-6 ps-2 ">
                                    <h5>Project Title:</h5>
                                    <p>${projectName}</p>
                                </div>
                                <div class="col-md-6 ps-2 ">
                                    <h5>Project Key:</h5>
                                    <p>${projectkey}</p>
                                </div>
                                <div class="col-12 ps-2 ">
                                    <h5>Project Description:</h5>
                                    <p>${projectDescription}</p>
                                </div>
                                <div class="col-md-4 ps-2">
                                    <h5>Project Manager:</h5>
                                    <p>${projectmanager}</p>
                                </div>
                                <div class="col-md-3 ps-2">
                                    <h5>Priority:</h5>
                                    <p>${projectpriority}</p>
                                </div>
                                <div class="col-md-5 ps-2">
                                    <h5>Tags or Categories:</h5>
                                    <p>${projecttags}</p>
                                </div>
                                <div class="col-md-4 ps-2">
                                    <h5>Start Date:</h5>
                                    <p>${projectstartdate}</p>
                                </div>
                                <div class="col-md-4 ps-2">
                                    <h5>End Date:</h5>
                                    <p>${projectenddate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
        container.insertAdjacentElement('beforeend', newBox);

        // Clear the modal inputs
        document.getElementById('inputProjectName').value = '';
        document.getElementById('inputProjectDescription').value = '';
    }

    document.getElementById('addBoxBtn').addEventListener('click', addNewDiv);
});