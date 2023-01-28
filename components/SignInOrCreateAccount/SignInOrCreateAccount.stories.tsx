import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignInOrCreateAccount from './SignInOrCreateAccount';

export default {
  title: 'Components/SignInOrCreateAccount',
  component: SignInOrCreateAccount,
  argTypes: {},
} as ComponentMeta<typeof SignInOrCreateAccount>;

const Template: ComponentStory<typeof SignInOrCreateAccount> = (args) => (
  <SignInOrCreateAccount {...args} />
);

export const Default = Template.bind({});
Default.args = {};
