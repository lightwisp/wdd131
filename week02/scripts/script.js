const input = document.querySelector("#favchap")
const button =document.querySelector("botton")
const list = document.querySelector("ul")
const li = document.createElement("li")
const deleteButton = document.createElement("button")

li.textContent = input.value;
button.textContent = "❌";
li.append(deleteButton);
list.append(li);

function copyInput(){
    const inputElement = document.getElementById(input)
    const outputElement = document.getElementById(li)
    outputElement.textContent = inputElement.value
}

button.addEventListener("click", copyInput)