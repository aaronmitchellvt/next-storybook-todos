import MockTodoItem from '../TodoItem/MockTodoItem';
import { TodoListProps} from './TodosList';

const AllDone: TodoListProps = {
  todos: [
    <MockTodoItem name="Taxes" isDone={true} id={1} />,
    <MockTodoItem name="Walk the dogs" isDone={true} id={2} />,
    <MockTodoItem name="Get milk" isDone={true} id={3} />,
    <MockTodoItem name="Watch NBA" isDone={true} id={4} />,
    <MockTodoItem name="Cook dinner" isDone={true} id={5} />,
  ]
}

const NotDone: TodoListProps = {
  todos: [
    <MockTodoItem name="Taxes" isDone={false} id={1} />,
    <MockTodoItem name="Walk the dogs" isDone={false} id={2} />,
    <MockTodoItem name="Get milk" isDone={false} id={3} />,
    <MockTodoItem name="Watch NBA" isDone={false} id={4} />,
    <MockTodoItem name="Cook dinner" isDone={false} id={5} />,
  ]
};

const SomeDone: TodoListProps = {
  todos: [
    <MockTodoItem name="Taxes" isDone={false} id={1} />,
    <MockTodoItem name="Walk the dogs" isDone={true} id={2} />,
    <MockTodoItem name="Get milk" isDone={false} id={3} />,
    <MockTodoItem name="Watch NBA" isDone={true} id={4} />,
    <MockTodoItem name="Cook dinner" isDone={true} id={5} />,
  ]
};

const NoTodos: TodoListProps = {
  todos: []
};

export const mockTodoListProps = {
  AllDone,
  NotDone,
  SomeDone,
  NoTodos
};