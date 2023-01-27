import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodosList, { TodosListProps } from './TodosList';
// import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'Components/TodosList',
  component: TodosList,
  argTypes: {},
} as ComponentMeta<typeof TodosList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodosList> = (args) => (
  <TodosList{...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as TodosListProps;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockBaseTemplateProps.alt,
} as TodosListProps;