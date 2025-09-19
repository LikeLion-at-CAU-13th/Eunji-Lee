import Complete from "../DOM/Complete.js"
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(completeText) {
        this.completeText = completeText;
        this.completeTodo = new Complete(completeText);

        this.returnBtnNode = this.completeTodo.getReturnBtn();
        this.delBtnNode = this.completeTodo.getDelBtn();
        this.innerText = this.completeTodo.getInnerText();
        this.innerText.classList.add('done-text');

        this.returnBtnNode.addEventListener('click', () => {
            this.returnTodo();
        })
        this.delBtnNode.addEventListener('click', () => {
            this.delCompleteTodo();
        })
    }

    addCompleteTodo() {
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.completeTodo.addRow());
    }

    delCompleteTodo() {
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.completeTodo.getRow());
    }

    returnTodo() {
        this.delCompleteTodo();

        const todoController = new TodoController(this.completeText);
        todoController.addTodo();
    }
}

export default CompleteController;