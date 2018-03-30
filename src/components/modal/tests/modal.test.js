import React from 'react';
import { StyledModalCloseButton, StyledModalBackdrop } from '../modal.styles';
import Modal from '../modal';

const MockChild = () => <div />;
const mockFunc = jest.fn();

afterEach(() => mockFunc.mockClear());

it('renders modal correctly', () => {
  const wrapper = mount(<Modal onClose={mockFunc}><MockChild /></Modal>);

  expect(wrapper).toMatchSnapshot();
});

it('close button calls callback', () => {
  const wrapper = shallow(<Modal onClose={mockFunc}><MockChild /></Modal>);

  wrapper.find(StyledModalCloseButton).simulate('click');

  expect(mockFunc).toBeCalled();
});

it('can be closed by clicking outside of modal', () => {
  const wrapper = shallow(<Modal onClose={mockFunc}><MockChild /></Modal>);

  wrapper.find(StyledModalBackdrop).simulate('click');

  expect(mockFunc).toBeCalled();
});
