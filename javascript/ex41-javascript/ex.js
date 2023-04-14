async function recoveryEl() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
    const el = await response.json();

    const title = document.createElement('h2');
    title.innerText = el.title;
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    if (el.completed == true) {
        checkbox.checked = true;
    }
    
    document.querySelector('#container').appendChild(title);
    document.querySelector('#container').appendChild(checkbox);

}

recoveryEl()