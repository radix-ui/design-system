import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Container = styled.div`
  padding-left: ${theme.SPACING_500};
  padding-right: ${theme.SPACING_500};
  margin-left: auto;
  margin-right: auto;

  ${props => props.size1 && css`
    max-width: 100%;
  `}
  ${props => props.size2 && css`
    max-width: 65rem;
  `}
  ${props => props.size3 && css`
    max-width: 45rem;
  `}
  ${props => props.size4 && css`
    max-width: 25rem;
  `}

  @media screen and (min-width: ${theme.BREAKPOINT_100}) {
    ${props => props.bp1_size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp1_size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp1_size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp1_size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_200}) {
    ${props => props.bp2_size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp2_size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp2_size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp2_size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_300}) {
    ${props => props.bp3_size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp3_size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp3_size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp3_size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_400}) {
    ${props => props.bp4_size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp4_size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp4_size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp4_size4 && css`
      max-width: 25rem;
    `}
  }
`;

export default Container;
