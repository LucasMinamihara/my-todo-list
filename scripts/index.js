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
    if (inputTaskValue.length != 0) {
      let taskContent = `<div class="newTask">${inputTaskValue}</div><span class="deleteTask btn">Remove</span><span class="finishTask btn">Finished</span>`;
      containerTask.insertAdjacentHTML("beforeend", taskContent);
      takingQueryValues();
      inputTask.value = "";
      puttingID(numAllTask, numAllDelete, numAllFinish);
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

function takingQueryValues() {
  numAllTask = document.querySelectorAll(".newTask");
  numAllDelete = document.querySelectorAll(".deleteTask");
  numAllFinish = document.querySelectorAll(".finishTask");
  // Adding click in each QuerySekected, remove and finish
  document.querySelectorAll(".deleteTask").forEach((eachDelete) => {
    eachDelete.addEventListener("click", remove);
  });
  document.querySelectorAll(".finishTask").forEach((eachFinish) => {
    eachFinish.addEventListener("click", finishTask);
  });
}
