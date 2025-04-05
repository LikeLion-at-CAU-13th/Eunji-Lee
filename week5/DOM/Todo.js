import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText) {
        // innerText는 비어있고 className에 row 넣어주기
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');
        // this.completeBtn = new Button('완료', 'complete-btn');
        // this.delBtn = new Button('삭제', 'del-btn');

        // 버튼 이미지로 바꾸기
        this.completeBtn = new Button('', 'complete-btn');
        this.completeBtn.node.innerHTML = '<img src="assets/complete.png" class="complete-btn">';
        this.delBtn = new Button('', 'del-btn');
        this.delBtn.node.innerHTML = '<img src="assets/delete.png" class="del-btn">';
    }

    //만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    //각 요소의 getter 메서드들
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