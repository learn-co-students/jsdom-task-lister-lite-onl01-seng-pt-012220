document.addEventListener("DOMContentLoaded", () => {


  document.querySelector('form').addEventListener('submit', function(e) {
    let input = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML += `<li>${input} </li>`;
    e.preventDefault();

    var form = document.getElementById("create-task-form");
    form.reset();
    });

});
