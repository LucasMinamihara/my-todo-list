"use strict";
let addNewTask = true;
// Taking input Task
// Keyboard Event
const containerTask = document.querySelector(".containerTasks");

document.addEventListener("keydown", (e) => {
  let keyName = e.key;
  if (keyName == "Enter") {
    let inputTask = document.querySelector(".inputTasks");
    let inputTaskValue = inputTask.value;
    if (addNewTask) {
      if (inputTaskValue.length != 0) {
        let numAllTask = document.querySelectorAll(".newTask");
        let taskContent = `<div class="newTask">${inputTaskValue}</div><span class="deleteTask btn">Remove</span><span class="finishTask btn">Finished</span>`;
        containerTask.insertAdjacentHTML("afterbegin", taskContent);
        inputTask.value = "";
        if (numAllTask.length == 5) {
          addNewTask = false;
          return;
        }
      }
    } else {
      inputTask.value = "";
      alert("you exceeded number os tasks");
    }
  }
});
