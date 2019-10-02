var ul = document.getElementById("TodoList");
var input = document.getElementById("inputbox");
var AddItem = document.getElementById("AddItem");
var List = document.getElementsByClassName("ToDoItem");
var Save = document.getElementById("SaveList");


var AddItemtoList = function(){
    li = document.createElement("li");
    li.classList.add("ToDoItem");
    li.addEventListener("click",ClickDelete);
    value = document.createTextNode(input.value);
    li.appendChild(value);
    ul.appendChild(li);
};

var ClickAdd = function(){
    if (input.value.length > 0){
        AddItemtoList();
        input.value = "";
    }
    
};

var EnterAdd= function(){
    if (event.keyCode === 13 && input.value.length > 0){
        AddItemtoList();
        input.value = "";
    }
    
};

var ClickDelete = function(event){
    li = event.path[0]
    ul.removeChild(li)
}

function DownloadList() {

    var List = document.getElementsByClassName("ToDoItem");
    var filename = "ToDoList.txt"
    var text = ""

    for (i=0; i<List.length; i++)
    {
        text = text + List[i].textContent
        text = text + "\n"
    }

    console.log(text)

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

AddItem.addEventListener("click",ClickAdd);
input.addEventListener("keypress", EnterAdd);
Save.addEventListener("click",DownloadList);

for(i=0; i<List.length; i++){
    List[i].addEventListener("click",ClickDelete);
}
