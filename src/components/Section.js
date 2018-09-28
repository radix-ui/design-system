import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

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

  ${p => p.white && css` background-color: white; `}
  ${p => p.black && css` background-color: black; `}

  ${p => p.gray100 && css` background-color: ${theme.GRAY_100}; `}
  ${p => p.gray200 && css` background-color: ${theme.GRAY_200}; `}
  ${p => p.gray300 && css` background-color: ${theme.GRAY_300}; `}
  ${p => p.gray400 && css` background-color: ${theme.GRAY_400}; `}
  ${p => p.gray500 && css` background-color: ${theme.GRAY_500}; `}
  ${p => p.gray600 && css` background-color: ${theme.GRAY_600}; `}
  ${p => p.gray700 && css` background-color: ${theme.GRAY_700}; `}
  ${p => p.gray800 && css` background-color: ${theme.GRAY_800}; `}
  ${p => p.gray900 && css` background-color: ${theme.GRAY_900}; `}

  ${p => p.blue100 && css` background-color: ${theme.BLUE_100}; `}
  ${p => p.blue200 && css` background-color: ${theme.BLUE_200}; `}
  ${p => p.blue300 && css` background-color: ${theme.BLUE_300}; `}
  ${p => p.blue400 && css` background-color: ${theme.BLUE_400}; `}
  ${p => p.blue500 && css` background-color: ${theme.BLUE_500}; `}
  ${p => p.blue600 && css` background-color: ${theme.BLUE_600}; `}
  ${p => p.blue700 && css` background-color: ${theme.BLUE_700}; `}
  ${p => p.blue800 && css` background-color: ${theme.BLUE_800}; `}
  ${p => p.blue900 && css` background-color: ${theme.BLUE_900}; `}
`;

Section.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3'
  ])
}

export default Section;
