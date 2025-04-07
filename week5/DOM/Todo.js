import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');
        
        this.completeBtn = new Button('', 'complete-btn');
        this.completeBtn.node.innerHTML = '<img src="assets/complete.png" class="complete-btn">';
        this.delBtn = new Button('', 'del-btn');
        this.delBtn.node.innerHTML = '<img src="assets/delete.png" class ="del-btn">';
    }

    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    getRow() {
        return this.row;
    }
    getCompleteBtn() {
        return this.completeBtn.node;
    }
    getDelBtn() {
        return this.delBtn.node;
    }
    getInnerText() {
        return this.innerText.node;
    }
}

export default Todo;