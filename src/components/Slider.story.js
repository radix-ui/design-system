import React from "react";
import Component from "react-component-component";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Slider } from "./Slider";
import { Button } from "./Button";
import { Text } from "./Text";

storiesOf("Components|Slider", module).add("default", () => (
  <>
    <Box mb="4">
      <Text as="p">Uncontrolled</Text>
      <Slider />
    </Box>

    <Box mt="4" mb="4">
      <Text as="p">Controlled</Text>
      <Component initialState={{ value: 50 }}>
        {({ state, setState }) => (
          <>
            <Slider
              value={state.value}
              onChange={event => setState({ value: event.target.value })}
            />
            <div>
              <Text as="p" fontSize="3" my="3">
                Current value is {state.value}
              </Text>
              <Button mx="1" onClick={() => setState({ value: 0 })}>
                change to 0
              </Button>
              <Button mx="1" onClick={() => setState({ value: 50 })}>
                change to 50
              </Button>
              <Button mx="1" onClick={() => setState({ value: 100 })}>
                change to 100
              </Button>
            </div>
          </>
        )}
      </Component>
    </Box>
  </>
));
