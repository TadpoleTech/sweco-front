// Menu.stories.js

import React from 'react';
import Menu from '../components/menu'; // Assuming Menu component is in the same directory

export default {
  title: 'Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  updateMenu: () => {} // Provide a mock function for updateMenu
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  updateMenu: () => {} // Provide a mock function for updateMenu
};
