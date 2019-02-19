import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ContextMenu = styled.div`
  background-color: ${theme.WHITE};
  border-radius: ${theme.BORDERRADIUS_100};
  box-shadow:
    0 10px 38px -10px hsla(208,24%,7%,.35),
    0 10px 20px -15px hsla(208,24%,7%,.2);
  padding-bottom: ${theme.SPACING_100};
  padding-top: ${theme.SPACING_100}
  position: fixed;
  z-index: ${theme.ZINDEX_CONTEXT_MENU};

  ${props => props.top && css`
    top: ${props.top};
  `}
  ${props => props.bottom && css`
    bottom: ${props.bottom};
  `}
  ${props => props.left && css`
    left: ${props.left};
  `}
  ${props => props.right && css`
    right: ${props.right};
  `}
`;

export default ContextMenu;
