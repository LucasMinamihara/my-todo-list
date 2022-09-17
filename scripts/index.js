"use strict";
let addNewTask = true;
// all tasks (add eventlistener) and remove or finish then
let numAllTask;
let numAllDelete;
let numAllFinish;
// Taking input Task
// Keyboard Event
const containerTask = document.querySelector(".containerTasks");

document.addEventListener("keydown", (e) => {
  let keyName = e.key;
  if (keyName == "Enter") {
    let inputTask = document.querySelector(".inputTasks");
    let inputTaskValue = inputTask.value;
    // I can add task till my exceded number of task is not reach
    if (addNewTask) {
      if (inputTaskValue.length != 0) {
        let taskContent = `<div class="newTask">${inputTaskValue}</div><span class="deleteTask btn">Remove</span><span class="finishTask btn">Finished</span>`;
        containerTask.insertAdjacentHTML("afterbegin", taskContent);
        numAllTask = document.querySelectorAll(".newTask");
        numAllDelete = document.querySelectorAll(".deleteTask");
        numAllFinish = document.querySelectorAll(".finishTask");
        inputTask.value = "";
        document.querySelector(".deleteTask").addEventListener("click", remove);
        puttingID(numAllTask, numAllDelete, numAllFinish);
        // Stop add new task if numAllTask is = 6
        if (numAllTask.length == 6) {
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
// Function to remove or finish task
function puttingID(numAllTask, numAllDelete, numAllFinish) {
  // Identifying tasks by id
  for (let c = 0; c < numAllTask.length; c++) {
    numAllTask[c].id = c;
    numAllDelete[c].id = c;
    numAllFinish[c].id = c;
  }
}
