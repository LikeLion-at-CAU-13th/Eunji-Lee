import Complete from "../DOM/Complete.js"

class CompleteController {
    constructor(completeText) {
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

    delTodo() {
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.completeTodo.getRow());
    }
}

export default CompleteController;