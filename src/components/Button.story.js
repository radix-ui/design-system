import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonV2 } from "./Button-v2";

storiesOf("Components|Button", module).add("V2", () => (
  <>
    <div>
      <ButtonV2 mr={4}>Hello Button</ButtonV2>
      <ButtonV2 size="medium">Button</ButtonV2>
    </div>

    <div>
      <ButtonV2 variant="blue" mt="4" mr="4">
        Blue
      </ButtonV2>
      <ButtonV2 variant="blue" size="medium" mt="4" mr="4">
        Blue
      </ButtonV2>
      <ButtonV2 variant="red" size="medium" mt="4">
        Red
      </ButtonV2>
    </div>
  </>
));
