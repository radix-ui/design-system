import styled, { css } from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(255,255,255,.85);
  height: 100%;
  left: -9999px;
  opacity: 0;
  position: fixed;
  left: 0;
  pointer-events: none;
  top: 0;
  transition-duration: 80ms;
  transition-property: opacity;
  transition-timing-function: linear;
  width: 100%;
  z-index: 7;

  ${p => p.active && css`
    opacity: 1;
    pointer-events: auto;
  `}

  ${p => p.absolute && css`
    position: absolute;
  `}
`;

export default Overlay;
