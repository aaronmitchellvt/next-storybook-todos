import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddTodo, { AddTodoProps } from './AddTodo';
import { mockAddTodoProps } from './AddTodo.mocks';

export default {
  title: 'Components/TodoForm',
  component: AddTodo,
  argTypes: {},
} as ComponentMeta<typeof AddTodo>;

const Template: ComponentStory<typeof AddTodo> = (args) => (
  <AddTodo {...args} />
);

export const Default = Template.bind({});
Default.args = {} as AddTodoProps;

