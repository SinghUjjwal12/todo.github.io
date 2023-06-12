const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(inputBox);

function addTask(){
    if(inputBox.value=== ''){
        alert("You must write somthing!");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value = ""
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);