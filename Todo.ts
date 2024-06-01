import inquirer from "inquirer";
let TodoList =[];
let condition= true;
while(condition){
    
let addtask= await inquirer.prompt(
    [{ name:"todolist",
    type:"input",
    message:"what do you want to add ?"},

    {name:"confirm",
    type:"confirm",
    message:"Do yoy want to add more ?",
    default:false }]);
    TodoList.push(addtask.todolist)
    condition=addtask.confirm
console.log(TodoList)

}