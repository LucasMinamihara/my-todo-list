let stop = false;
let eachDeleteValueId;
let taskRemove;
let finishRemove;
let arrayNumAllTask;
let arrayNumAllFinish;

function remove() {
  arrayNumAllTask = Array.from(numAllTask);
  arrayNumAllFinish = Array.from(numAllFinish);
  numAllDelete.forEach((eachDelete) => {
    stop = false;
    eachDelete.addEventListener("click", function () {
      if (!stop) {
        eachDeleteValueId = eachDelete.id;
        taskRemove = arrayNumAllTask.filter(
          (eachTask) => eachTask.id == eachDeleteValueId
        );
        removeThisTask(taskRemove);
        finishRemove = arrayNumAllFinish.filter(
          (eachFinish) => eachFinish.id == eachDeleteValueId
        );
        removeThisFinish(finishRemove);
        stop = true;
        return;
      }
    });
  });
}

function removeThisTask(taskRemove) {
  // how to remove nodelist from html
  console.log(Array.from(taskRemove));
}
function removeThisFinish(finishRemove) {
  // how to remove nodelist from html
  console.log(Array.from(finishRemove));
}
