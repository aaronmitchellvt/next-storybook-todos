import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar';
import { mockNavbarProps } from './Navbar.mocks';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...mockNavbarProps.LoggedIn,
} as NavbarProps;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...mockNavbarProps.LoggedOut,
} as NavbarProps;

export const Loading = Template.bind({});
Loading.args = {
  ...mockNavbarProps.Loading,
} as NavbarProps;