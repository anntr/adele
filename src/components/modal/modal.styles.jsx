import styled from 'styled-components';
import { modalControls, modal } from '../../style_tokens/tokens';

const fixedPositioning = `
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 100000
`;

const StyledModal = styled.div`
  font-family: ${modal.typography.fontFamily};
  padding: 30px; 
  background-color: ${modal.background};
  width: 60vw;
  height: 60vh;
  margin: auto;
  ${fixedPositioning}
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  background-color: ${modal.shadow};
  opacity: 0.5;
  ${fixedPositioning}
`;

const StyledModalCloseButton = styled.button`
  border: none;
  outline: none;
  background: ${modalControls.background};
  width: 32px;
  height: 32px;
  border-radius: 32px;
  cursor: pointer;
  float: right; 
`;

export { StyledModal, StyledModalBackdrop, StyledModalCloseButton };
