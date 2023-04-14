async function recoveryList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const list = await response.json()

    list.forEach(element => {
        const todoList = document.createElement('li');
        todoList.innerText = element.title;
        document.querySelector('ul').appendChild(todoList);
    });
}

recoveryList()