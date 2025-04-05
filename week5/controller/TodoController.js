import Todo from "../DOM/Todo.js"

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
        todoList.removeChild(this.newTodo.getRow()); //할 일 한 줄을 통째로 삭제
    }

    doneTodo() {
        this.innerText.classList.toggle('done-text'); //할 일 텍스트
        this.comBtnNode.classList.toggle('done-btn'); //완료 버튼

        // if (this.comBtnNode.innerText === '미완') {
        //     this.comBtnNode.innerText = '완료';
        // } else {
        //     this.comBtnNode.innerText = '미완';
        // }

        const img = this.comBtnNode.querySelector('img');
        if (this.comBtnNode.classList.contains('done-btn')) {
            img.src = 'assets/complete.png';
        } else {
            img.src = 'assets/done.png';
        }
    }
}

export default TodoController;