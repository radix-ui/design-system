import styled, { css } from 'styled-components';
import HoverZone from './HoverZone';

const HoverZoneOpacity = styled.div`
  opacity: 0;
  ${HoverZone}:hover & {
    opacity: 1;
  }
`;

export default HoverZoneOpacity;
