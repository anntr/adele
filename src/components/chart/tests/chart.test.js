import React from 'react';
import Chart from '../chart';

const mockData = { someProperty: 52, anotherProperty: 12, property: 7 };
const mockTitle = 'some summary';

it('should render chart correctly', () => {
  const wrapper = mount(<Chart data={mockData} title={mockTitle} />);
  expect(wrapper).toMatchSnapshot();
});
