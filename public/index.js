// JavaScript to add a new box
document.addEventListener("DOMContentLoaded", () => {
    function addNewDiv() {
        const container = document.getElementById("maindash");
        const newBox = document.createElement('div');
        const projectName = document.getElementById('inputProjectName').value;
        const projectDescription = document.getElementById('inputProjectDescription').value;

        newBox.className = 'col-lg-4 mb-4';
        newBox.innerHTML = `
        <div class="card">
            <div class="card-body py-4">
            <h5 class="card-title"><a href="/task-dash" class="text-decoration-none">${projectName}</a></h5>
            <p class="card-text">${projectDescription}</p>
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