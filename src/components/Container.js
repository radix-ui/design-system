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
    ${props => props.bp1size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp1size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp1size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp1size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_200}) {
    ${props => props.bp2size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp2size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp2size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp2size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_300}) {
    ${props => props.bp3size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp3size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp3size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp3size4 && css`
      max-width: 25rem;
    `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_400}) {
    ${props => props.bp4size1 && css`
      max-width: 100%;
    `}
    ${props => props.bp4size2 && css`
      max-width: 65rem;
    `}
    ${props => props.bp4size3 && css`
      max-width: 45rem;
    `}
    ${props => props.bp4size4 && css`
      max-width: 25rem;
    `}
  }
`;

export default Container;
