import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodosList, { TodoListProps } from './TodosList';
import { mockTodoListProps } from './TodosList.mock';

export default {
  title: 'Components/TodosList',
  component: TodosList,
  argTypes: {},
} as ComponentMeta<typeof TodosList>;

const Template: ComponentStory<typeof TodosList> = (args) => (
  <TodosList{...args} />
);

export const AllDone = Template.bind({});
AllDone.args = {
  ...mockTodoListProps.AllDone,
} as TodoListProps;

export const NotDone = Template.bind({});
NotDone.args = {
  ...mockTodoListProps.NotDone,
} as TodoListProps;

export const SomeDone = Template.bind({});
SomeDone.args = {
  ...mockTodoListProps.SomeDone,
} as TodoListProps;

export const NoTodos = Template.bind({});
NoTodos.args = {
  ...mockTodoListProps.NoTodos,
} as TodoListProps;