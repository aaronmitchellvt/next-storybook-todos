import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TodoItemProps } from './TodoItem';
import { mockTodoItemProps } from './TodoItem.mocks';
import MockTodoItem from './MockTodoItem'

export default {
  title: 'Components/TodoItem',
  component: MockTodoItem,
  argTypes: {},
} as ComponentMeta<typeof MockTodoItem>;

const Template: ComponentStory<typeof MockTodoItem> = (args) => (
  <MockTodoItem {...args} />
);

export const Done = Template.bind({});
Done.args = {
  ...mockTodoItemProps.Done,
} as TodoItemProps;

export const NotDone = Template.bind({});
NotDone.args = {
  ...mockTodoItemProps.NotDone,
} as TodoItemProps;