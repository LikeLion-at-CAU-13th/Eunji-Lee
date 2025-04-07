import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(completeText) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(completeText, 'text-box');

        this.returnBtn = new Button('', 'return-btn');
        this.returnBtn.node.innerHTML = '<img src="assets/return.png" class="return-btn">';
        this.delBtn = new Button('', 'del-btn');
        this.delBtn.node.innerHTML = '<img src="assets/delete.png" class="del-btn">';
    }

    addRow() {
        [this.innerText, this.returnBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    getRow() {
        return this.row;
    }
    getReturnBtn() {
        return this.returnBtn.node;
    }
    getDelBtn() {
        return this.delBtn.node;
    }
    getInnerText() {
        return this.innerText.node;
    }
}

export default Complete;