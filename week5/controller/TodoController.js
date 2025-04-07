import Todo from "../DOM/Todo.js"
import CompleteController from "./CompleteController.js"

class TodoController {
    constructor(todoText) {
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
        const img = this.comBtnNode.querySelector('img');
        this.innerText.classList.toggle('done-text');
        this.comBtnNode.classList.toggle('done-btn');
        
        if (this.comBtnNode.classList.contains('done-btn')) {
            img.src = 'assets/return.png';

            const completeList = document.getElementById("complete-list");
            completeList.appendChild(this.newTodo.getRow());
        }
        // else {
        //     img.src = 'assets/complete.png';

        //     const todoList = document.getElementById("to-do-list");
        //     todoList.appendChild(this.newTodo.getRow());
        // }
    }
}

export default TodoController;