"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setInput(e.target.value);
   
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handleClick=(index:number)=>{

    const newTodoList=[...todo];
newTodoList.splice(--index,1);
setTodo(newTodoList);

  }

  return (
    <div className="container">
      <h1 className="text-center font-bold text-[45px] mb-5 ">Todo List</h1>
      <form
        onSubmit={handleSubmit}
        className=" border p-1 flex justify-between pl-3 rounded-md"
      >
        <input
          value={input}
          onChange={handleChange}
          className=" outline-none w-[70%]"
          type="text"
          placeholder="Create your todo"
        />
        <button className=" px-[25px] py-2 bg-[#0000ff] font-medium rounded-md text-[20px] text-white ">
          ADD
        </button>
      </form>
      <h2 className="font-bold text-[25px] mt-4 mb-2 text-center ">Your Todos</h2>
      <div className="p-2 min-h-[100px] max-h-[300px] overflow-auto">
        <ul>
          {todo.map((item, index) => (
            <li className="flex justify-between items-center p-2 m-2 rounded bg-[#add8e676]" key={index}>{++index}.{item} 
            <img  onClick={()=>handleClick(index)} className="w-8 cursor-pointer rounded p-1 bg-white" src="del-icon.png" alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
