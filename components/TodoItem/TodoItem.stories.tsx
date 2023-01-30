import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoItem, { TodoItemProps } from './TodoItem';
import { mockTodoItemProps } from './TodoItem.mocks';

export default {
  title: 'Components/Todo item',
  component: TodoItem,
  argTypes: {},
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

export const Done = Template.bind({});
Done.args = {
  ...mockTodoItemProps.Done,
} as TodoItemProps;

export const NotDone = Template.bind({});
NotDone.args = {
  ...mockTodoItemProps.NotDone,
} as TodoItemProps;