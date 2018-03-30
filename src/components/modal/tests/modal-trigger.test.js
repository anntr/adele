import React from 'react';
import ModalTrigger from '../modal-trigger';

const MockChild = () => <div />;
const MockContent = () => <div />;
const openModalMock = jest.fn();
const mockContext = { context: { openModal: openModalMock } };

it('renders trigger correctly', () => {
  const wrapper = mount(<ModalTrigger>{() => <MockChild />}</ModalTrigger>, mockContext);

  expect(wrapper).toMatchSnapshot();
});

it('passes content via openModal handler to children', () => {
  const wrapper = mount(
    <ModalTrigger content={() => <MockContent />}>
      {openModal => <MockChild openModal={openModal} />}
    </ModalTrigger>,
    mockContext,
  );

  wrapper.find(MockChild).prop('openModal')();

  expect(openModalMock).toBeCalledWith(wrapper.prop('content'));
});
