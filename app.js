const taskInput = document.querySelector('#task');
const form  = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');

//Load gloabal eventListener
loadEventListeners();

function loadEventListeners() {
    
    //ADD TASKS
    form.addEventListener('submit', addTask);
    //DELETE TASKS
    taskList.addEventListener('click', removeTask);
    //FILTER TASKS
    filter.addEventListener('keyup', filterTasks);

} 

//CREATE DOM ELEMENT FOR THE TASKS
function createDOMElement(t) {
    const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(t));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
}

//ADD TASK TO UL
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please enter a task');
        return;
    } 
        createDOMElement(taskInput.value);
        taskInput.value = '';
    
    e.preventDefault();
}

//FILTER TASKS
function filterTasks() {
    const filterInput = filter.value.toLowerCase();
     document.querySelectorAll('.collection-item').forEach(function(ele){
        if(ele.firstChild.textContent.toLowerCase().indexOf(filterInput) !== -1) {
            ele.style.display = 'block';
        } else {
            ele.style.display = 'none';
        }
   })
}

// REMOVE TASK FROM UL
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure to delete?')) {
            e.target.parentElement.parentElement.remove();
        }
        
    }
}

