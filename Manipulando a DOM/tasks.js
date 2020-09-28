const list = document.getElementById("list");
const input = document.getElementById("txt");
const add = document.getElementById("btn");

let tasks = [
    "Make a coffee",
    "Read a book",
    "Make CRM"
];

const removeTask = function (pos) {
    tasks.splice(pos, 1);

    render();
}

const addTask = function () {
    tasks.push(input.value);
    
    input.value = "";
    render();
}

const render = function () {
    list.innerHTML = "";

    for (task of tasks){
        let li = document.createElement("li");
        let link = document.createElement("a");
        
        let textLi = document.createTextNode(task);
        let textLink = document.createTextNode("Exclude"); 
        
        var position = task.indexOf();

        link.setAttribute("onclick", "removeTask(" + position + ")")
        link.setAttribute("href", "#");
        link.appendChild(textLink);
        
        li.appendChild(textLi);
        li.appendChild(link);
        list.appendChild(li);
    }
}

render()
add.onclick = addTask;
