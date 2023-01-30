import { TodoItemProps } from "./TodoItem";

const TodoItem: React.FC<TodoItemProps> = ({ name, isDone, importanceLevel }) => {

  const importanceColors = ["bg-green-200", "bg-yellow-500", "bg-red-500"];
  const itemColor = importanceColors[importanceLevel - 1];

  //What you see in the browser
  if (isDone) {
    return (
      <div className={`${itemColor} text-black rounded h-16 border-2 border-gray-900 flex flex-row justify-between items-center my-2 w-full`}>
        <div className="ml-2 p-2 text-xl">{name}</div>
        <button
          className="my-1 p-2 rounded text-black bg-orange-400 hover:bg-orange-300 border-2 border-black mr-3"
          // onClick={() => deleteTodoMutation.mutate()}

        >
          Remove
        </button>
      </div>
    );
  } else {
    //if todo is not done, allow user to mark as done or delete
    return (
      <div className={`${itemColor} text-black rounded h-16 border-2 border-gray-900 flex flex-row justify-between items-center my-2 w-full`}>
        <div className="ml-2 p-2 text-xl">{name}</div>
        <div className="flex flex-row">
          <button 
            className="my-1 p-2 rounded bg-purple-200 hover:bg-purple-100 text-black border-2 border-black mx-2"
            // onClick={() => updateTodoMutation.mutate()}
          >
            Finished
          </button>
        </div>
      </div>
    );
  }
};

export default TodoItem;
