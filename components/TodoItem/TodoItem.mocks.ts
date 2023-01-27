import { TodoItemProps } from './TodoItem';

const Done: TodoItemProps = {
  name: 'Walk the dog',
  isDone: true
};

const NotDone: TodoItemProps = {
  name: 'Taxes',
  isDone: false
};

export const mockTodoItemProps = {
  Done,
  NotDone
};