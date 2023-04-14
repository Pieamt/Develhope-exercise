const title = document.querySelector("#todo-title");
const completed = document.querySelector("#todo-completed");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) =>{
    event.preventDefault();
    const titolo = title.value;
    const completato = completed.checked;
    obj = {
        title : titolo,
        checked: completato,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(obj)
        })
        const data = await response.json();
        console.log(data);
})


