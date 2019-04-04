import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Text } from "./Text";
import { RadioGroup, Radio } from "./RadioGroup";

storiesOf("Components|RadioGroup", module).add("default", () => (
  <>
    <Box mb="4">
      <Text as="p">Uncontrolled</Text>
      <RadioGroup name="flexDirection">
        <Radio value="row" defaultChecked>
          Row
        </Radio>
        <Radio value="column">Column</Radio>
      </RadioGroup>
    </Box>

    <Box mb="4">
      <Text as="p">Controlled</Text>
      <Component initialState={{ value: "wrap" }}>
        {({ state, setState }) => (
          <RadioGroup
            name="flexWrap"
            value={state.value}
            onChange={event => setState({ value: event.target.value })}
          >
            <Radio value="wrap">Wrap</Radio>
            <Radio value="nowrap">Nowrap</Radio>
          </RadioGroup>
        )}
      </Component>
    </Box>
  </>
));
