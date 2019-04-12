import styled from "styled-components";
import { Input } from "./Input";
import { theme } from "../theme";

export const Textarea = styled(Input)`
  min-height: 80px;
`;
Textarea.defaultProps = { as: "textarea", theme };
