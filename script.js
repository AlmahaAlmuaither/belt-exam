
function addToList() {
    var newTodo = document.getElementById("typing");
    var ol = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newTodo.value));
    ol.appendChild(li);
    newTodo.value = "";
    li.onclick = function() {
        makeItDone(li)
      };
}

function makeItDone (element) {
    if (element.style.textDecoration == "line-through") 
    element.style.textDecoration = "none";
    else
    element.style.textDecoration = "line-through"
}