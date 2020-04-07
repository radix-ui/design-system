import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './Text';
import { Box } from './Box';
import { Link } from './Link';

storiesOf('Components|Link', module).add('default', () => (
  <>
    <Box mb={4}>
      <Link href="https://modulz.app" variant="highlight">
        Highlight link style (default)
      </Link>
    </Box>
    <Box mb={4}>
      <Link href="https://modulz.app" variant="ghost">
        Ghost link style
      </Link>
    </Box>
    <Box mb={4}>
      <Link href="https://modulz.app" sx={{ color: 'red' }}>
        With sx prop override
      </Link>
    </Box>

    <Box mb={4}>
      <Link href="https://modulz.app" variant="fade">
        Fade link style
      </Link>
    </Box>
    <Box mb={4}>
      <Link href="https://modulz.app" variant="underline">
        Copy link style
      </Link>
    </Box>
    <Box mb={4}>
      <Text size={3} mb={3} sx={{ lineHeight: 2, letterSpacing: 0 }} as="p">
        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in
        his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a{' '}
        <Link href="#" variant="underline">
          little he
        </Link>{' '}
        could see his brown belly, slightly domed and divided by arches into stiff sections. The
        bedding was hardly able to cover strong it and seemed ready to slide off any moment. His
        many legs, pitifully thin compared with the size of the rest of him, link waved{' '}
        <Link href="#" variant="underline" to="/">
          abouthelplessly
        </Link>{' '}
        as he looked. “What's happened to me?” he thought. It wasn't a dream. His room, a proper
        human room although a little too small, lay peacefully between its four familiar walls.
      </Text>
    </Box>
  </>
));
