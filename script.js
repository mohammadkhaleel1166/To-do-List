const inputBox = document.getElementById("inputfield");
const list_items = document.getElementById("list-items");

function addTask() {
  if (inputBox.value === '') {
    alert("You must enter something to add!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.onclick = function() {
      li.classList.toggle("checked");
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
      list_items.removeChild(li);
    };

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    list_items.appendChild(li);

    inputBox.value = '';
  }
}
