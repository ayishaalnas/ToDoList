const taskcontainer = document.getElementById("taskcontainer");
const taskinput = document.getElementById("taskinput");
function addtask()
{
    if(taskinput.value.trim() === "" )
    {
        alert("enter a task");
        return;
    }
    // label & checkbox
    const task = document.createElement("div");
    task.classList.add("task");
    const left = document.createElement("div");
    left.classList.add("left");
    const checkbox = document.createElement("input");
    checkbox.type ="checkbox";
    const label = document.createElement("label");
    label.textContent = taskinput.value;
    
    checkbox.addEventListener("change",() =>{
        label.classList.toggle("changes");
    })
    left.appendChild(checkbox);
    left.appendChild(label);
    // edit and delete
    const actions = document.createElement("div");
    actions.classList.add("actions");
    const edit = document.createElement("i");
    edit.classList.add("fa-solid", "fa-pen");
    edit.addEventListener("click",() => {
        label.contentEditable = true;
        label.focus();
    });
    const dlt = document.createElement("i");
    dlt.classList.add("fa-solid", "fa-trash");
    dlt.addEventListener("click",() => {
        task.remove();
    });
    actions.appendChild(edit);
    actions.appendChild(dlt);
    
    task.appendChild(left);
    task.appendChild(actions);

    taskcontainer.appendChild(task);
    taskinput.value = "";
}
