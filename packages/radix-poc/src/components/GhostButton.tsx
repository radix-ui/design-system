import styled from 'styled-components';
import { space, SpaceProps, themeGet, variant, Theme } from 'styled-system';
import merge from 'lodash.merge';

export function makeGhostButtons(theme: Theme) {
  return {
    ghostButtons: merge({
      active: {
        backgroundColor: themeGet('colors.grays.2')({ theme }),
        boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        '&:hover': {
          backgroundColor: themeGet('colors.grays.2')({ theme }),
        },
        '&:focus': {
          boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        },
        '&:active': {
          boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        },
      },
    }),
  };
}

export function makeGhostButtonSizes(theme: Theme) {
  return {
    ghostButtonSizes: merge({
      active: {
        backgroundColor: themeGet('colors.grays.2')({ theme }),
        boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        '&:hover': {
          backgroundColor: themeGet('colors.grays.2')({ theme }),
        },
        '&:focus': {
          boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        },
        '&:active': {
          boxShadow: `inset 0 1px 0 0 ${themeGet('colors.grays.4')({ theme })}`,
        },
      },
    }),
  };
}

type Variants = 'active';
type Sizes = 'medium';

const ghostButtonStyle = variant({ key: 'ghostButtons', prop: 'variant' });
const ghostButtonSizeStyle = variant({ key: 'ghostButtonSizes', prop: 'size' });

type GhostButtonProps = SpaceProps & {
  variant?: Variants;
  size?: Sizes;
};

export const GhostButton = styled.button<GhostButtonProps>`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 9999px;
  color: ${themeGet('colors.grays.5')};
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${themeGet('fonts.normal')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: 500;
  min-height: ${themeGet('space.5')};
  justify-content: center;
  line-height: 1;
  min-width: calc(${themeGet('space.5')});
  outline: none;
  padding: 0 ${themeGet('space.1')};
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  & svg {
    width: ${themeGet('space.3')};
    height: ${themeGet('space.3')};
  }

  &:hover {
    background-color: ${themeGet('colors.grays.1')};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px ${themeGet('colors.blues.4')};
  }

  &:active {
    background-color: ${themeGet('colors.grays.2')};
    box-shadow: none;
  }

  &:disabled {
    color: ${themeGet('colors.grays.4')};
    cursor: not-allowed;
    pointer-events: none;
  }

  ${space}
  ${ghostButtonStyle}
  ${ghostButtonSizeStyle}
`;
