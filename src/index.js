import React, {Component} from 'react'

// Note that it's not necessary to import before exporting
// We only need to import if we want to use these in the little demo generated below
import AspectRatio from './components/AspectRatio';
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Container from './components/Container';
import Divider from './components/Divider';
import Flexbox from './components/Flexbox';
import Heading from './components/Heading';
import Image from './components/Image';
import Input from './components/Input';
import LinesButton from './components/LinesButton';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import Section from './components/Section';
import Slider from './components/Switch';
import Select from './components/Select';
import Switch from './components/Switch';
import Text from './components/Text';

// It's necessary to export any components that we want to use elsewhere
// with the "export x from 'radix'" syntax
export AspectRatio from './components/AspectRatio';
export Badge from './components/Badge';
export Box from './components/Box';
export Button from './components/Button';
export Container from './components/Container';
export Divider from './components/Divider';
export Flexbox from './components/Flexbox';
export Heading from './components/Heading';
export Image from './components/Image';
export Input from './components/Input';
export LinesButton from './components/LinesButton';
export Link from './components/Link';
export List from './components/List';
export ListItem from './components/ListItem';
export Section from './components/Section';
export Slider from './components/Slider';
export Select from './components/Select';
export Switch from './components/Switch';
export Text from './components/Text';

import * as Theme from './theme';
export { Theme };

export default class extends Component {
  render() {
    return <div>
      <Section
        size3
      >
        <Container
          size2
        >
          <Flexbox
            wrap
            >
            <Box
              w50
              pb8
              pr4
            >
              <Button>
                Button
              </Button>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Button>
                Button
              </Button>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
            <Text size8>
              Text
            </Text>
            <Text size7>
              Text
            </Text>
            <Text size6>
              Text
            </Text>
            <Text size5>
              Text
            </Text>
            <Text size4>
              Text
            </Text>
            <Text size3>
              Text
            </Text>
            <Text size2>
              Text
            </Text>
            <Text size1>
              Text
            </Text>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Heading size6>
                Heading
              </Heading>
              <Heading size5>
                Heading
              </Heading>
              <Heading size4>
                Heading
              </Heading>
              <Heading size3>
                Heading
              </Heading>
              <Heading size2>
                Heading
              </Heading>
              <Heading size1>
                Heading
              </Heading>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Badge
                gray
              >
                Badge
              </Badge>
              <Badge
                blue
              >
                Badge
              </Badge>
              <Badge
                green
              >
                Badge
              </Badge>
              <Badge
                yellow
              >
                Badge
              </Badge>
              <Badge
                red
              >
                Badge
              </Badge>
              <Badge
                size2
                gray
              >
                Badge
              </Badge>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Image
                src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
              />
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Input />
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <LinesButton>
                LinesButton
              </LinesButton>
            </Box>
          </Flexbox>
        </Container>
      </Section>

    </div>
  }
}
