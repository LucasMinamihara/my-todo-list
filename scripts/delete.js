let stop;
let eachDeleteValueId;
let eachFinishValueId;
let taskRemove;
let finishRemove;
let finishFinished;
let arrayNumAllTask;
let arrayNumAllFinish;

function remove() {
  arrayNumAllTask = Array.from(numAllTask);
  arrayNumAllFinish = Array.from(numAllFinish);
  numAllDelete.forEach((eachDelete) => {
    stop = false;
    // Delete each element from dom view
    eachDelete.addEventListener("click", function () {
      if (!stop) {
        eachDeleteValueId = eachDelete.id;
        taskRemove = arrayNumAllTask.filter(
          (eachTask) => eachTask.id == eachDeleteValueId
        );
        // Filter same id on finish button
        finishRemove = arrayNumAllFinish.filter(
          (eachFinish) => eachFinish.id == eachDeleteValueId
        );
        removeThisTask(taskRemove);
        removeThisRemove(eachDelete);
        removeThisFinish(finishRemove);
        stop = true;
        return;
      }
    });
    // Finish each task from view
  });
  console.log(stop);
}

function removeThisTask(taskRemove) {
  // Remove Task from DOM
  console.log(taskRemove[0]);
  taskRemove[0].remove();
  return;
}
function removeThisFinish(finishRemove) {
  // Remove element finish from DOM
  console.log(finishRemove[0]);
  finishRemove[0].remove();
  return;
}
function removeThisRemove(removeRemove) {
  // Remove remove from DOM
  removeRemove.remove();
  return;
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function finish task to underline finished task
function finishTask() {
  arrayNumAllTask = Array.from(numAllTask);
  arrayNumAllFinish = Array.from(numAllFinish);
  numAllFinish.forEach((eachFinish) => {
    stop = false;
    eachFinish.addEventListener("click", function () {
      if (!stop) {
        eachFinishValueId = eachFinish.id;
        console.log(eachFinishValueId);
        finishFinished = arrayNumAllTask.filter(
          (eachTask) => eachTask.id == eachFinishValueId
        );
        console.log(finishFinished);
        finishedTask(finishFinished);
        stop = true;
        return;
      }
    });
  });
}
function finishedTask(finishFinished) {
  finishFinished[0].classList.add("finishedTask");
}
