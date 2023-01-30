import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddTodo, { AddTodoProps } from './AddTodo';
import { mockAddTodoProps } from './AddTodo.mocks';
import MockAddTodo from './MockAddTodo';

export default {
  title: 'Components/TodoForm',
  component: MockAddTodo,
  argTypes: {},
} as ComponentMeta<typeof MockAddTodo>;

const Template: ComponentStory<typeof MockAddTodo> = (args) => (
  <MockAddTodo {...args} />
);

export const Default = Template.bind({});
Default.args = {} as AddTodoProps;

