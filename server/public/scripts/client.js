$(document).ready(onReady);
console.log('JS Ready!');

function onReady() {
    console.log('JQ Ready');

    getTasks();
    
    // Listener for submit button
    $('#submit-btn').on('click', handleSubmit);
    // Listener for delete button
    $('#taskList').on('click', '#delete-btn', deleteTask);
    // Listener for complete button


}

// handleSubmit
function handleSubmit() {
    console.log('Submit button clicked');
    let task = {};
    task.task = $('#task-input').val();
    task.dueDate = $('#dueDate-input').val();
    task.completed = 'N';

    addTask(task);

    $('#task-input').val('');
    $('#dueDate-input').val('');

}

// Add a task
function addTask(taskToAdd) {
    $.ajax({
        type: 'POST',
        url: 'tasks',
        data: taskToAdd
    }).then((response) => {
        console.log('Task added')
        getTasks();
    }).catch((error) => {
        console.log('Error posting new task', error);
        alert('Unable to add new task. Please try again later.')
    })
}

// Refresh tasks
function getTasks() {
    console.log('in getTasks');
    $.ajax({
        type: 'GET',
        url: '/tasks'
      }).then((response) => {
        console.log( 'In getTasks, response is: ', response);
        renderTasks(response);
      }).catch((error) => {
        console.log('Error getting tasks', error);
      });
}

// Update a task to completed

// Delete a task
function deleteTask() {
    console.log('In deleteTask');
    const taskId = $(this).parent().parent().data('id');

    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`
    }).then((response) => {
        console.log('Task deleted!');
        getTasks();
    }).catch((error) => {
        console.log('Error deleting task', error);
        alert('Error deleting task!');
        res.sendStatus(500);
      });
}

// Render taskList
function renderTasks(tasks) {
    console.log('in renderTasks');
    $('#taskList').empty();
  
    for(let i = 0; i < tasks.length; i+= 1) {
        $('#taskList').append(`
            <tr data-id=${tasks[i].id}>
                <td>${tasks[i].task}</td>
                <td>${tasks[i].dueDate}</td>
                <td>${tasks[i].completed}</td>
                <td><button id="delete-btn">DELETE</button></td>
            </tr>

        `)
    //   let newRow = $(`
    //   <tr>
    //     <td>${tasks[i].task}</td>
    //     <td>${tasks[i].dueDate}</td>
    //     <td><button>${tasks[i].completed}</button></td>
    //     <td><button class="delete-btn">DELETE</button></td>
    //   </tr>
    // `);
  
    //   newRow.data('id', tasks[i].id);
  
    //   $('#taskList').append(newRow);
    }
  }