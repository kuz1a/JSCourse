const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const todo = document.querySelector('#todo')
const completed = document.querySelector('#completed')
const todoData = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
// const todoData = [];
const render = function() {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    todoData.forEach(function(item,i){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
        <span class="text-todo">${item.text}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>
        `

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li) 
        }
        li.querySelector('.todo-complete').addEventListener('click', function() {
    
            item.completed = !item.completed;
           
            render()
            addToStorage();
        })
        const btnTodoRemove = li.querySelector('.todo-remove').addEventListener('click', function(event){
            li.remove();
            todoData.splice(i, 1);
            render();
            addToStorage()
        })
        
    })
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault();

    if (headerInput.value.length > 0) {
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        todoData.push(newToDo)
        headerInput.value = ''
        
        render()
        addToStorage();
    } else {
        return
    }

    
})
const addToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoData));
};

render();
