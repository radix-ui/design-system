import styled from 'styled-components';
import {
  alignSelf,
  AlignSelfProps,
  flex,
  FlexProps,
  justifySelf,
  JustifySelfProps,
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  themeGet,
  variant,
  Theme,
} from 'styled-system';
import merge from 'lodash.merge';

export function makeContainerSizes(theme: Theme) {
  return {
    containerSizes: merge({
      small: {
        paddingLeft: themeGet('space.5')({ theme }),
        paddingRight: themeGet('space.5')({ theme }),
        maxWidth: '25rem',
      },
      medium: {
        paddingLeft: themeGet('space.5')({ theme }),
        paddingRight: themeGet('space.5')({ theme }),
        maxWidth: '45rem',
      },
      large: {
        paddingLeft: themeGet('space.5')({ theme }),
        paddingRight: themeGet('space.5')({ theme }),
        maxWidth: '65rem',
      },
      fluid: {
        paddingLeft: themeGet('space.5')({ theme }),
        paddingRight: themeGet('space.5')({ theme }),
        maxWidth: '100%',
      },
    }),
  };
}

const containerStyle = variant({ key: 'containerSizes', prop: 'size' });

type SizeProps = 'small' | 'medium' | 'large' | 'fluid';

type ContainerProps = AlignSelfProps &
  FlexProps &
  JustifySelfProps &
  MaxWidthProps &
  SpaceProps & { size?: SizeProps };

export const Container = styled.div<ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  flex: 1;

  ${alignSelf}
  ${flex}
  ${justifySelf}
  ${maxWidth}
  ${space}
  ${containerStyle}
`;
