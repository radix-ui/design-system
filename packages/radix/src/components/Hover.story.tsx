import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Heading } from './Heading';
import { Text } from './Text';
import { Card } from './Card';
import { Hover } from './Hover';

storiesOf('Components|Hover', module).add('default', () => (
  <>
    <Box mb="4">
      <Hover sx={{ width: 280, height: 280 }}>
        {isHovered => <Box sx={{ width: 280, height: 280, bg: isHovered ? 'blue' : 'green' }} />}
      </Hover>
    </Box>

    <Box mb="4" sx={{ maxWidth: 280 }}>
      <Hover>
        {isHovered => {
          return (
            <Card>
              <Heading size={1}>Help us Kickstart Modulz</Heading>
              <Text as="p" size={3} mt={3} sx={{ lineHeight: 1.2, color: 'gray700' }}>
                Who we are, what we're building and how you can support us.
              </Text>
              <Flex mt={5} sx={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                {!isHovered && (
                  <Text as="p" size={2} sx={{ lineHeight: 0, color: 'gray700' }}>
                    Oct '18
                  </Text>
                )}
                {isHovered && (
                  <Text as="p" sx={{ lineHeight: 0 }}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="hsl(208, 12%, 50%)"
                    >
                      <path d="M9.5 2.5H12.5V5.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round" />
                      <path
                        d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Text>
                )}
              </Flex>
            </Card>
          );
        }}
      </Hover>
    </Box>
  </>
));
