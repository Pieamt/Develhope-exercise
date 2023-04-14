const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setData(item,name){
  let userString = JSON.stringify(item);
  localStorage.setItem(name, userString);
  }


function getData(value){
  let userParse = JSON.parse(localStorage.getItem(value));
  console.log(userParse);
  }
setData(user, 'user')
getData(user)