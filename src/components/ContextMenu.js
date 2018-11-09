import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ContextMenu = styled.nav`
  background-color: ${theme.WHITE}
  box-shadow: 0 40px 80px hsla(208, 34%, 10%, 0.045), 0 15px 35px hsla(208, 44%, 10%, 0.045),
    0 3px 10px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  position: fixed;

  ${props => props.top && css`
    top: ${props.top}
  `}
  ${props => props.bottom && css`
    bottom: ${props.bottom}
  `}
  ${props => props.left && css`
    left: ${props.left}
  `}
  ${props => props.right && css`
    right: ${props.right}
  `}
`;


export default ContextMenu;
