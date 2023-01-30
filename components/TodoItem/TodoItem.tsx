import { useMutation, useQueryClient } from "react-query";
import supabase from "../../lib/supabase";

export interface TodoItemProps {
  name: string;
  isDone: boolean;
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ name, isDone, id }) => {
  const queryClient = useQueryClient();

  const handleDeleteTodo = async () => {
    const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id);
    if (error) throw error;
    return data;
  };

  const deleteTodoMutation = useMutation({
    mutationFn: () => handleDeleteTodo(),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  const handleFinishedTodo = async () => {
    const { data, error } = await supabase
    .from("todos")
    .update({ isDone: true })
    .eq("id", id);
    if (error) throw error;
    return data;
  };

  const updateTodoMutation = useMutation({
    mutationFn: () => handleFinishedTodo(),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  //What you see in the browser
  if (isDone) {
    return (
      <div className="bg-green-200 text-black rounded h-16 border-2 border-gray-900 flex flex-row justify-between items-center my-2 w-full">
        <div className="ml-2 p-2 text-xl">{name}</div>
        <button
          className="my-1 p-2 rounded text-black bg-red-400 hover:bg-red-300 border-2 border-black mr-3"
          onClick={() => deleteTodoMutation.mutate()}
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
            onClick={() => updateTodoMutation.mutate()}
          >
            Finished
          </button>
        </div>
      </div>
    );
  }
};

export default TodoItem;
