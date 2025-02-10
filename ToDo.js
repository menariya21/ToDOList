

let text = document.querySelector("#todo");
 let btn = document.querySelector(".btn");
 let taskList = document.querySelector(".task-list");



   btn.addEventListener("click",function(){
            let addTask = text.value.trim(); // Get input value

            if(addTask === ""){
                  alert("plz enter a task"); // Prevent empty tasks
                  return
            }


            let li = document.createElement("li");// Create new list item
            li.textContent= addTask;


            let deleteBtn = document.createElement("button");// Create delete button
               deleteBtn.textContent= "delete";
               deleteBtn.classList.add("delete-btn");


               li.appendChild(deleteBtn);  // Add delete button to task
               taskList.appendChild(li);  // Add task to list

               text.value = ""; // Clear input field


                // Delete Task When Clicked
               deleteBtn.addEventListener("click",function(){
                    li.remove();
               })


   })