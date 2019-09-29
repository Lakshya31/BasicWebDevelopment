ul = document.getElementById("TodoList")
input = document.getElementById("inputbox")
AddItem = document.getElementById("AddItem")

var AddItemtoList = function(){
    if (input.value.length > 0){
        li = document.createElement("li");
        value = document.createTextNode(input.value)
        li.appendChild(value)
        ul.appendChild(li)
    }
}

AddItem.addEventListener("click",AddItemtoList())
input.addEventListener("keypress", function(){
    if (event.keyCode === 13){
        AddItemtoList()
    }
})

