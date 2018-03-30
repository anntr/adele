import React from 'react';
import ChartModalTrigger from '../chart-modal-trigger';

const category = 'company';

it('renders trigger correctly', () => {
  const wrapper = shallow(<ChartModalTrigger category={category} />, { context: { openModal: jest.fn() } });
  expect(wrapper).toMatchSnapshot();
});
