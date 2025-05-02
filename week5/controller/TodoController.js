import Todo from "../DOM/Todo.js"
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todoText) {
        //this.todoText = todoText;
        this.newTodo = new Todo(todoText);

        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerText = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })
    }

    addTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.appendChild(this.newTodo.addRow());

        const input = document.querySelector('input');
        input.value='';
    }

    delTodo() {
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }

    doneTodo() {
        this.delTodo();

        const completeController = new CompleteController(this.todoText);
        completeController.addCompleteTodo();
    }
}

export default TodoController;