import { User } from "@supabase/supabase-js";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import supabase from "../../lib/supabase";

export interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = () => {
  const queryClient = useQueryClient();

  //Get user id
  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser()
  });

  //SQL statement
  const addTodo = async (user: User) => {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ name: todo, isDone: false, user: user.id }]);
    if (error) throw error
    return data;
  };

  const addTodoMutation = useMutation({
    mutationFn: () => addTodo(data?.user!),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    }
  })

  //Submit logic
  const [todo, setTodo] = useState<string>();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("submitted");
    addTodoMutation.mutate();
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
        <button 
          className="w-1/5 h-4/5 ml-1 my-1 p-2 rounded text-black bg-orange-400 hover:bg-orange-300 border-2 border-black mr-3"
          disabled={isLoading}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
