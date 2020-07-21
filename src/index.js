document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  document.querySelector('form').addEventListener('submit', function(e) {
    let input = document.getElementById('new-task-description').value;
    let li = document.createElement('li');
    let liText = document.createTextNode(input);
    let xButton = document.createElement('button');
    xButton.appendChild(document.createTextNode("X"));
    xButton.setAttribute("data-description", `${input}`);
    xButton.addEventListener('click', function(e){
      this.parentElement.remove();
    });

    li.appendChild(liText);
    li.appendChild(xButton);
    document.getElementById('tasks').appendChild(li);
    e.preventDefault();


    form.reset();
    });

});
