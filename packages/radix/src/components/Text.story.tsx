import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Text } from './Text';

storiesOf('Components|Text', module).add('default', () => (
  <>
    <Box mb={6}>
      <Text as="p">Default text</Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={0}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={1}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={2}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={3}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={4}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={5}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={6}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={7}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={8}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={9}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>

    <Box mb={6}>
      <Text as="p" size={10}>
        Voix ambiguë d’un cœur qui, au zéphyr, préfère les jattes de kiwis
      </Text>
    </Box>
  </>
));
