const user = {
  id: 1,
  name: "John",
  age: 25,
};


function setData(item,name){
  let userString = JSON.stringify(item);
  localStorage.setItem(name, userString);
  }

  setData(user, "user");