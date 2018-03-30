import React from 'react';
import { withModal, modalProvider } from '../modal-provider';

const MockComponent = () => <div />;
const MockModalContainer = modalProvider(MockComponent);
const MockContent = () => <div />;

it('should extend component by modal content component and visibility props', () => {
  const wrapper = mount(<MockModalContainer />);
  expect(wrapper.find(MockComponent).props()).toMatchObject({ component: undefined, isVisible: false });
});

it('should provide handler for opening modal', () => {
  const wrapper = mount(<MockModalContainer />);
  const element = wrapper.find(MockComponent);

  element.props().openModal(MockContent);
  wrapper.update();

  expect(wrapper.find(MockComponent).props()).toMatchObject({ component: MockContent, isVisible: true });
});

it('should provide handler for closing modal', () => {
  const wrapper = mount(<MockModalContainer />);
  const element = wrapper.find(MockComponent);

  element.props().closeModal();

  expect(wrapper.find(MockComponent).props()).toMatchObject({ isVisible: false });
});
