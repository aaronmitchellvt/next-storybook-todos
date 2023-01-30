import { TodoItemProps } from "./TodoItem";

const TodoItem: React.FC<TodoItemProps> = ({ name, isDone }) => {

  //What you see in the browser
  if (isDone) {
    return (
      <div className="bg-green-200 text-black rounded h-16 border-2 border-gray-900 flex flex-row justify-between items-center my-2 w-full">
        <div className="ml-2 p-2 text-xl">{name}</div>
        <button
          className="my-1 p-2 rounded text-black bg-red-400 hover:bg-red-300 border-2 border-black mr-3"
        >
          Remove
        </button>
      </div>
    );
  } else {
    //if todo is not done, allow user to mark as done or delete
    return (
      <div className="bg-pink-700 text-white rounded h-16 border-2 border-gray-900 flex flex-row justify-between items-center my-2 w-full">
        <div className="ml-2 p-2 text-xl">{name}</div>
        <div className="flex flex-row">
          <button 
            className="my-1 p-2 rounded bg-green-200 hover:bg-green-100 text-black border-2 border-black mx-2"
          >
            Finished
          </button>
        </div>
      </div>
    );
  }
};

export default TodoItem;
