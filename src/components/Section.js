import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import BackgroundColor from './../utilities/BackgroundColor';
import NegativeMargin from './../utilities/NegativeMargin';
import Position from './../utilities/Position';
const sectionPropsKeys = ['size1','size2','size3','expanded']
const Section = styled.section`
  ${props => props.size1 && css`
    padding-bottom: ${theme.SPACING_400};
    padding-top: ${theme.SPACING_400};
  `}

  ${props => props.size2 && css`
    padding-bottom: ${theme.SPACING_600};
    padding-top: ${theme.SPACING_600};
  `}

  ${props => props.size3 && css`
    padding-bottom: ${theme.SPACING_900};
    padding-top: ${theme.SPACING_900};
  `}

  ${props => props.expanded && css`
    height: 100vh;
  `}

  ${props => sectionPropsKeys.some(prop => props[`bp1_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${props => props.bp1_size1 && css`
      padding-bottom: ${theme.SPACING_400};
      padding-top: ${theme.SPACING_400};
    `}

    ${props => props.bp1_size2 && css`
      padding-bottom: ${theme.SPACING_600};
      padding-top: ${theme.SPACING_600};
    `}

    ${props => props.bp1_size3 && css`
      padding-bottom: ${theme.SPACING_900};
      padding-top: ${theme.SPACING_900};
    `}

    ${props => props.bp1_expanded && css`
      height: 100vh;
    `}
  }
  `}

  ${props => sectionPropsKeys.some(prop => props[`bp2_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${props => props.bp2_size1 && css`
      padding-bottom: ${theme.SPACING_400};
      padding-top: ${theme.SPACING_400};
    `}

    ${props => props.bp2_size2 && css`
      padding-bottom: ${theme.SPACING_600};
      padding-top: ${theme.SPACING_600};
    `}

    ${props => props.bp2_size3 && css`
      padding-bottom: ${theme.SPACING_900};
      padding-top: ${theme.SPACING_900};
    `}

    ${props => props.bp2_expanded && css`
      height: 100vh;
    `}
  }
  `}

  ${props => sectionPropsKeys.some(prop => props[`bp3_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${props => props.bp3_size1 && css`
      padding-bottom: ${theme.SPACING_400};
      padding-top: ${theme.SPACING_400};
    `}

    ${props => props.bp3_size2 && css`
      padding-bottom: ${theme.SPACING_600};
      padding-top: ${theme.SPACING_600};
    `}

    ${props => props.bp3_size3 && css`
      padding-bottom: ${theme.SPACING_900};
      padding-top: ${theme.SPACING_900};
    `}

    ${props => props.bp3_expanded && css`
      height: 100vh;
    `}
  }
  `}

  ${props => sectionPropsKeys.some(prop => props[`bp4_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${props => props.bp4_size1 && css`
      padding-bottom: ${theme.SPACING_400};
      padding-top: ${theme.SPACING_400};
    `}

    ${props => props.bp4_size2 && css`
      padding-bottom: ${theme.SPACING_600};
      padding-top: ${theme.SPACING_600};
    `}

    ${props => props.bp4_size3 && css`
      padding-bottom: ${theme.SPACING_900};
      padding-top: ${theme.SPACING_900};
    `}

    ${props => props.bp4_expanded && css`
      height: 100vh;
    `}
  }
  `}

  ${BackgroundColor}
  ${NegativeMargin}
  ${Position}
`;

Section.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3'
  ])
}

export default Section;
