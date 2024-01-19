import React, { useState } from "react";

export default function TaskList({ todo, handleDelete, editTodo, index, toggleComplete }) {
  const [opacity, setOpacity] = useState(1);

  return (
    <>
      {todo.completed ? (
        <li
          key={todo.id}
          className={`w-[100%] h-[4.5rem] md:h-[3.5rem] flex bg-green-700 opacity-${opacity} items-center place-content-around rounded-lg`}
          onMouseEnter={() => setOpacity(0.8)}
          onMouseLeave={() => setOpacity(1)}
        >
          <div className="w-[95%] px-[1rem]">
            <span className="text-3xl md:text-xl pe-[10px]">{index + 1}.</span>
            <span className="text-3xl md:text-2xl line-through">{todo.text}</span>
          </div>
          <div className="flex place-content-around w-[25%]">
            <button className="text-xl" onClick={() => toggleComplete(todo.id)}>
              <i className="fa-regular fa-circle-check fa-2xl md:fa-lg text-green-500"></i>
            </button>
            <button className=" text-red-600" onClick={() => handleDelete(todo.id)}>
              <i className="fa-solid fa-trash-can fa-2xl md:fa-lg "></i>
            </button>
          </div>
          <div className="text-gray-500">{todo.dueDate}</div>
        </li>
      ) : (
        <li
          key={todo.id}
          className={`w-[100%] dark:bg-neutral-300 h-[4.5rem] md:h-[3.5rem] flex bg-white opacity-${opacity} items-center place-content-around rounded-lg border border-gray-200`}
          onMouseEnter={() => setOpacity(0.8)}
          onMouseLeave={() => setOpacity(1)}
        >
          <div className="w-[95%] px-[1rem]">
            <span className="text-3xl md:text-xl pe-[10px]">{index + 1}.</span>
            <span className="text-3xl md:text-2xl">{todo.text}</span>
          </div>
          <div className="text-gray-500 w-[35%]">{todo.dueDate}</div>
          <div className="flex place-content-around w-[35%] md:w-[35%]">
            <button className="text-xl" onClick={() => toggleComplete(todo.id)}>
              <i className="fa-regular fa-circle-check fa-2xl md:fa-lg text-green-500"></i>
            </button>
            <button onClick={() => editTodo(todo.id)} className="btn">
              <i className="fa-solid fa-pen-to-square text-yellow-400 fa-2xl md:fa-lg"></i>
            </button>
            <button className="" onClick={() => handleDelete(todo.id)}>
              <i className="fa-solid fa-trash-can fa-2xl md:fa-lg text-red-600"></i>
            </button>
          </div>
          
        </li>
      )}
    </>
  );
}




