import React from 'react';
import ModalRoot from '../modal-root';
import Modal from '../modal';

const mockFunc = jest.fn();
const MockChild = () => <div />;
const MockModalContent = () => <div />;

it('renders modal root correctly', () => {
  const wrapper = shallow(<ModalRoot closeModal={mockFunc} isVisible={false}><MockChild /></ModalRoot>);
  expect(wrapper).toMatchSnapshot();
});

it('renders modal when it should be visible', () => {
  const wrapper = shallow(<ModalRoot closeModal={mockFunc} isVisible component={MockModalContent}><MockChild /></ModalRoot>);
  expect(wrapper).toMatchSnapshot();
});