import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Text } from "./Text";
import { Box } from "./Box";
import { Button } from "./Button";
import { Select } from "./Select";

storiesOf("Components|Select", module).add("default", () => (
  <Box>
    <Box mb="4">
      <Text as="p">Uncontrolled</Text>
      <Select mt="4" width="100px">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
    <Box mb="4">
      <Text as="p">Controlled</Text>
      <Component initialState={{ value: "option2" }}>
        {({ state, setState }) => (
          <>
            <Select
              my="4"
              width="100px"
              value={state.value}
              onChange={event => setState({ value: event.target.value })}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Button mr="2" onClick={() => setState({ value: "option1" })}>
              Select option 1
            </Button>
            <Button mr="2" onClick={() => setState({ value: "option2" })}>
              Select option 2
            </Button>
            <Button onClick={() => setState({ value: "option3" })}>Select option 3</Button>
          </>
        )}
      </Component>
    </Box>
  </Box>
));
