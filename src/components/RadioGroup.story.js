import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Text } from "./Text";
import { Button } from "./Button";
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
      <Text as="p">Uncontrolled and without children</Text>
      <RadioGroup name="flexDirection">
        <Radio value="row" defaultChecked />
        <Radio value="column" />
      </RadioGroup>
    </Box>

    <Box mb="4">
      <Text as="p">Controlled</Text>
      <Component initialState={{ value: "wrap" }}>
        {({ state, setState }) => (
          <>
            <RadioGroup
              name="flexWrap"
              value={state.value}
              onChange={event => setState({ value: event.target.value })}
            >
              <Radio ml={0} value="wrap">
                Wrap
              </Radio>
              <Radio ml={0} value="nowrap">
                Nowrap
              </Radio>
            </RadioGroup>
            <Button my="3" onClick={() => setState({ value: "nowrap" })}>
              select nowrap
            </Button>
          </>
        )}
      </Component>
    </Box>
  </>
));
