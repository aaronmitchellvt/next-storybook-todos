import { useQuery } from "react-query";
import AddTodo from "../components/AddTodo/AddTodo";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import TodoItem from "../components/TodoItem/TodoItem";
import TodosList from "../components/TodosList/TodosList";
import supabase from "../lib/supabase";
import { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
  const fetchTodos = async () => {
    const { data } = await supabase.from("todos").select("*");
    return data;
  };
  const { data, isLoading, isError } = useQuery("todos", () => fetchTodos());
  const makeTodoList = () => {
    if (!isLoading && !isError && data) {
      const todos = data?.map((todo) => {
        return <TodoItem name={todo.name} isDone={todo.isDone} />;
      });
      return todos
    }
    return [];
  };
  const todos = makeTodoList();

  return (
    <div className="text-2xl flex flex-col items-center px-2 md:px-0">
      <AddTodo />
      <TodosList todos={todos} />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
