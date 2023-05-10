import React, {useState} from "react";

export default function TodoList() {
  const [name, setName] = useState('');
  const [items, setItems] = useState(["Go to Market", "Do sport", "Go to work", "Sleep"]);
  const handleAdd = () => {
      setItems([...items, name]);
  };
  return (
      <div>
          <input onChange={(e) => setName(e.target.value)}/>
          <button onClick={handleAdd}>add</button>
          {items.map((item, index) => {return <li index={index}>{item}</li>})}
      </div>
  );
}