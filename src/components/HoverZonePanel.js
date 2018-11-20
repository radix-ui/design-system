import styled, { css } from 'styled-components';
import HoverZone from './HoverZone';
import Padding from './../utilities/Padding';
import Position from './../utilities/Position';
import Height from './../utilities/Height';
import Width from './../utilities/Width';

const HoverZonePanel = styled.div`
  opacity: 0;
  pointer-events: none;

  ${HoverZone}:hover & {
    opacity: 1;
  }

  ${p => p.forceShow && css`
    opacity: 1;
  `}

  ${Height}
  ${Padding}
  ${Position}
  ${Width}
`;

export default HoverZonePanel;
