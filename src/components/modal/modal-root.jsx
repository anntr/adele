import React from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import { modalProvider } from '../../hocs/modal/modal-provider';

const ModalRoot = modalProvider(({
  component: Component, closeModal, isVisible, children,
}) => (
  <div>
    {children}
    {isVisible &&
    <Modal onClose={closeModal}>
      <Component />
    </Modal>}
  </div>
));

ModalRoot.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.func,
};

ModalRoot.defaultProps = {
  component: undefined,
};

export { ModalRoot as default };
