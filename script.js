//SELECT ELEMENTS
const inputField = document.getElementById("input-task")
const addButton = document.getElementById('add-btn')
const taskList = document.getElementById('list')


 // This is the array that will hold the todo list items
let todoItems = [];
let id = 1;

//Function to collect user input when the button is clicked
addButton.addEventListener("click", function () {
 
  const userInput = inputField.value
  if(userInput) {
    todoItems.push({
      name: userInput,
      id: id
    })

    id++;

    let html = "";
    todoItems.forEach((element) => {
       html += `<li class="task" id="${element.id}">
                      <img src="./img/circle.svg" alt="" class="circle" >
                      <span class="text">${element.name}</span>
                      <div class="bin"  onclick="deleteFunc()" role="button"><img src="./img/trash.svg" alt="" onclick="deletefunc(${element.id})" class="bin-img"></div> 
                    </li>`;
        
          taskList.innerHTML = html;
        //test if forEach works
        // console.log(element)
      });
    
   
  }
    //test if userinput is pushing to the array
  console.log(todoItems)
  inputField.value = '';

} );

let deletebtn = document.querySelector(".bin");

deletebtn.addEventListener("click", deleteFunc);

const deleteFunc = (e) => {
  const deleteTask = todoItems.filter((e) => e.id === id)
}
  // console.log(this.parentElement)
  // this.parentElement.remove();
   //remove the parent of button from its grand parent
  //  this.parentNode.style.display = "none";}















