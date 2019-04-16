import React from "react";
import { storiesOf } from "@storybook/react";
import { Box } from "./Box";
import { Text } from "./Text";
import { Container } from "./Container";

storiesOf("Components|Container", module).add("default", () => (
  <>
    <Box marginBottom={4}>
      <Container>
        <Box backgroundColor="blue" p={3}>
          <Text as="p" textAlign="center">
            Default
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size="small">
        <Box backgroundColor="blue" p={3}>
          <Text as="p" textAlign="center">
            Small
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size="medium">
        <Box backgroundColor="blue" p={3}>
          <Text as="p" textAlign="center">
            Medium
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size="large">
        <Box backgroundColor="blue" p={3}>
          <Text as="p" textAlign="center">
            Large
          </Text>
        </Box>
      </Container>
    </Box>

    <Box mb={4}>
      <Container size="fluid">
        <Box backgroundColor="blue" p={3}>
          <Text as="p" textAlign="center">
            Fluid
          </Text>
        </Box>
      </Container>
    </Box>
  </>
));
