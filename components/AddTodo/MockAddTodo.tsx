import React, { useState } from "react";

export interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = () => {
  //Submit logic
  const [todo, setTodo] = useState<string>();
  const [importanceLevel, setImportanceLevel] = useState<number>(1);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("submitted");
    setTodo("");
  };

  return (
    <div className="w-full md:w-3/5 bg-gray-700 mt-3 border-2 border-green-300 rounded">
      <form
        className="bg-gray-700 text-black rounded h-16 flex flex-row justify-between items-center my-2 w-full"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter a todo"
          value={todo}
          className="ml-3 p-2 h-4/5 rounded w-4/5 mr-1"
        />

        <select 
          value={importanceLevel} 
          onChange={(e) => setImportanceLevel(Number(e.target.value))} 
          className="h-12 mx-2 rounded">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <button className="w-1/5 h-4/5 ml-1 my-1 p-2 rounded text-black bg-orange-400 hover:bg-orange-300 border-2 border-black mr-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
