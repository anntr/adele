import React from 'react';
import PropTypes from 'prop-types';

import { StyledModal, StyledModalBackdrop, StyledModalCloseButton } from './modal.styles';
import Icon from '../icon/icon';
import close from '../../icons/close.svg';
import { modalControls } from '../../style_tokens/tokens';

const Modal = ({ children, onClose }) => (
  <div>
    <StyledModalBackdrop onClick={onClose} />
    <StyledModal>
      <StyledModalCloseButton onClick={onClose}>
        <Icon i={close} size="xs" color={modalControls.color} />
      </StyledModalCloseButton>
      {children}
    </StyledModal>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal as default };
