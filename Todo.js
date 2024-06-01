"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var TodoList = [];
var condition = true;
while (condition) {
    var addtask = await inquirer_1.default.prompt([{ name: "todolist",
            type: "input",
            message: "what do you want to add ?" },
        { name: "confirm",
            type: "confirm",
            message: "Do yoy want to add more ?",
            default: false }]);
    TodoList.push(addtask.todolist);
    condition = addtask.confirm;
    console.log(TodoList);
}
