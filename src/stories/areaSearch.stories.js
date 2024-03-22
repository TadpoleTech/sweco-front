// SearchBar.stories.js

import React from 'react';
import SearchBar from '../components/areaSearch.js'; // Assuming SearchBar component is in the same directory

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  city: 'helsinki',
  subArea: null, 
  onCityChange: () => {},
  onSubAreaChange: () => {}
};

export const WithHelsinkiSelected = Template.bind({});
WithHelsinkiSelected.args = {
  city: 'helsinki',
  subArea: null,
  onCityChange: () => {},
  onSubAreaChange: () => {}
};

export const WithVantaaSelected = Template.bind({});
WithVantaaSelected.args = {
  city: 'vantaa',
  subArea: null,
  onCityChange: () => {},
  onSubAreaChange: () => {}
};

export const WithEspooSelected = Template.bind({});
WithEspooSelected.args = {
  city: 'espoo',
  subArea: null,
  onCityChange: () => {},
  onSubAreaChange: () => {}
};
