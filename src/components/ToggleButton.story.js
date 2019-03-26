import React from "react";
import { storiesOf } from "@storybook/react";
import { Flex } from "./Flex";
import { ToggleButton } from "./ToggleButton";

storiesOf("Components|ToggleButton", module).add("default", () => (
  <>
    <Flex mb="4">
      <ToggleButton left group="direction" defaultChecked="true">
        Row
      </ToggleButton>
      <ToggleButton right group="direction">
        Column
      </ToggleButton>
    </Flex>
  </>
));
