import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer, { FooterProps } from './Footer';
import { mockFooterProps } from './Footer.mocks';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
Default.args = {};
