import styled from 'styled-components';
import { chartModalButton } from '../../style_tokens/tokens';

const StyledIconButton = styled.button`
  background: none;
  border: 0;
  padding: 4px;
  margin: 0 6px 0 auto;
  cursor: pointer;
    
  &:focus > span > svg,
  &:hover > span > svg {
    fill: ${chartModalButton.colorActive}
  }
  
  & > span > svg {
    vertical-align: middle;
  }
`;

export { StyledIconButton as default };
