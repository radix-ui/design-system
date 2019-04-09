import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Heading } from "./Heading";

storiesOf("Components|Heading", module).add("default", () => (
  <>
    <Box mb="4">
      <Heading fontSize="10" mb="3">
        Heading
      </Heading>
      <Heading fontSize="9" mb="3">
        Heading
      </Heading>
      <Heading fontSize="8" mb="3">
        Heading
      </Heading>
      <Heading fontSize="7" mb="3">
        Heading
      </Heading>
      <Heading fontSize="6" mb="3">
        Heading
      </Heading>
      <Heading fontSize="5" mb="3">
        Heading
      </Heading>
      <Heading fontSize="4" mb="3">
        Heading
      </Heading>
      <Heading fontSize="3" mb="3">
        Heading
      </Heading>
      <Heading fontSize="2" mb="3">
        Heading
      </Heading>
      <Heading fontSize="1" mb="3">
        Heading
      </Heading>
    </Box>
  </>
));
