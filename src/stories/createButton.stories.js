import React from 'react';
import CreateButton from '../components/createButton'; // Adjusted import statement

export default {
  title: 'CreateButton',
  component: CreateButton,
};

const Template = (args) => <CreateButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => { console.log('Button clicked'); } // Provide a mock onClick function
};
