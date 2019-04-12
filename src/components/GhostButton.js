import styled from "styled-components";
import { space, themeGet, variant } from "styled-system";
import { theme, themeColor } from "../theme";

theme.ghostButtons = {
  active: {
    backgroundColor: themeColor("grays.2"),
    boxShadow: `inset 0 1px 0 0 ${themeColor("grays.4")}`,
    "&:hover": {
      backgroundColor: themeColor("grays.2"),
    },
    "&:focus": {
      boxShadow: `inset 0 1px 0 0 ${themeColor("grays.4")}`,
    },
    "&:active": {
      boxShadow: `inset 0 1px 0 0 ${themeColor("grays.4")}`,
    },
  },
};

theme.ghostButtonSizes = {
  medium: {
    minHeight: themeGet("space.6")({ theme }),
    minWidth: themeGet("space.6")({ theme }),
    fontSize: themeGet("fontSizes.3")({ theme }),
    "& svg": {
      width: themeGet("space.5")({ theme }),
      height: themeGet("space.5")({ theme }),
    },
  },
};

const ghostButtonStyle = variant({ key: "ghostButtons", prop: "variant" });
const ghostButtonSizeStyle = variant({ key: "ghostButtonSizes", prop: "size" });

export const GhostButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  border-radius: 9999px;
  color: ${themeColor("grays.5")};
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${themeGet("fonts.normal")};
  font-size: ${themeGet("fontSizes.1")};
  font-weight: 500;
  min-height: ${themeGet("space.5")};
  justify-content: center;
  line-height: 1;
  min-width: calc(${themeGet("space.5")});
  outline: none;
  padding: 0 ${themeGet("space.1")};
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  & svg {
    width: ${themeGet("space.3")};
    height: ${themeGet("space.3")};
  }

  &:hover {
    background-color: ${themeColor("grays.1")};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px ${themeColor("blues.4")};
  }

  &:active {
    background-color: ${themeColor("grays.2")};
    box-shadow: none;
  }

  &:disabled {
    color: ${themeColor("grays.4")};
    cursor: not-allowed;
    pointer-events: none;
  }

  ${space}
  ${ghostButtonStyle}
  ${ghostButtonSizeStyle}
`;

GhostButton.defaultProps = { theme };
