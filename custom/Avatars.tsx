import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Avatar, AvatarGroup, AvatarNestedItem } from '../components/Avatar';
import { Status } from '../components/Status';
import { Heading } from '../components/Heading';
import { Link2Icon } from '@radix-ui/react-icons';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';

export function Avatars() {
  return (
    <Section size="3">
      <Container size="2">
        <Heading id="avatar" css={{ mb: '$6', scrollMarginTop: '$7' }}>
          Avatar
        </Heading>
        <Heading css={{ mb: '$6' }}>Default</Heading>
        <Avatar alt="John Smith" src="" fallback="J" css={{ mb: '$6' }} />

        {/* <Avatar
          alt="John Smith"
          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
          fallback="J"
        /> */}

        <Heading>Avatar sizes</Heading>
        <Flex css={{ fd: 'column', gap: '$6' }}>
          <Flex css={{ ai: 'center', gap: '$6' }}>
            <Avatar size="1" alt="John Smith" src="" fallback="J" />

            <Avatar
              size="2"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />

            <Avatar
              size="3"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />

            <Avatar
              size="4"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />

            <Avatar
              size="5"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />

            <Avatar
              size="6"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />
          </Flex>

          <Heading>Avatar fallback</Heading>
          <Flex css={{ ai: 'center', gap: '$6' }}>
            <Avatar size="1" alt="John Smith" fallback="F" />
            <Avatar size="2" alt="John Smith" fallback="F" />
            <Avatar size="3" alt="John Smith" fallback="F" />
            <Avatar size="4" alt="John Smith" fallback="F" />
            <Avatar size="5" alt="John Smith" fallback="F" />
            <Avatar size="6" alt="John Smith" fallback="F" />
          </Flex>

          <Heading>Avatar colors</Heading>
          <Flex css={{ ai: 'center', gap: '$3' }}>
            <Avatar alt="John Smith" fallback="F" />
            <Avatar alt="John Smith" fallback="F" variant="red" />
            <Avatar alt="John Smith" fallback="F" variant="crimson" />
            <Avatar alt="John Smith" fallback="F" variant="pink" />
            <Avatar alt="John Smith" fallback="F" variant="purple" />
            <Avatar alt="John Smith" fallback="F" variant="violet" />
            <Avatar alt="John Smith" fallback="F" variant="indigo" />
            <Avatar alt="John Smith" fallback="F" variant="blue" />
            <Avatar alt="John Smith" fallback="F" variant="cyan" />
            <Avatar alt="John Smith" fallback="F" variant="teal" />
            <Avatar alt="John Smith" fallback="F" variant="green" />
            <Avatar alt="John Smith" fallback="F" variant="lime" />
            <Avatar alt="John Smith" fallback="F" variant="yellow" />
            <Avatar alt="John Smith" fallback="F" variant="orange" />
            <Avatar alt="John Smith" fallback="F" variant="gold" />
            <Avatar alt="John Smith" fallback="F" variant="brown" />
            <Avatar alt="John Smith" fallback="F" variant="bronze" />
            <Avatar alt="John Smith" fallback="F" variant="hiContrast" />
          </Flex>

          <Heading>Interactive avatar</Heading>
          <Flex css={{ gap: '$6' }}>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar interactive fallback="J" />
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we'll probably use a lot. With
                  horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Avatar
                  interactive
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we'll probably use a lot. With
                  horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Avatar interactive fallback="J" variant="violet" />
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we'll probably use a lot. With
                  horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Avatar interactive fallback={<Link2Icon />} />
              </PopoverTrigger>
              <PopoverContent css={{ padding: '$3' }}>
                <Text size="2" css={{ lineHeight: '18px' }}>
                  The other main improvement is with tables, which we'll probably use a lot. With
                  horizontal overflow on small devices and when zoomed in.
                </Text>
              </PopoverContent>
            </Popover>
          </Flex>

          <Heading>Inactive avatar</Heading>
          <Flex css={{ gap: '$2' }}>
            <Avatar
              size="2"
              inactive
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="D"
            />
            <Avatar
              size="2"
              inactive
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="R"
            />
            <Avatar
              size="2"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="A"
            />
            <Avatar
              size="2"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
            />
            <Avatar
              size="2"
              inactive
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="F"
            />
          </Flex>
          <Flex css={{ ai: 'center', gap: '$2' }}>
            <Avatar alt="John Smith" fallback="F" inactive />
            <Avatar alt="John Smith" fallback="F" variant="red" />
            <Avatar alt="John Smith" fallback="F" variant="crimson" />
            <Avatar alt="John Smith" fallback="F" variant="pink" />
            <Avatar alt="John Smith" fallback="F" inactive variant="purple" />
            <Avatar alt="John Smith" fallback="F" variant="violet" />
            <Avatar alt="John Smith" fallback="F" variant="indigo" />
            <Avatar alt="John Smith" fallback="F" variant="blue" />
            <Avatar alt="John Smith" fallback="F" inactive variant="cyan" />
            <Avatar alt="John Smith" fallback="F" inactive variant="teal" />
            <Avatar alt="John Smith" fallback="F" inactive variant="green" />
            <Avatar alt="John Smith" fallback="F" variant="lime" />
            <Avatar alt="John Smith" fallback="F" inactive variant="yellow" />
            <Avatar alt="John Smith" fallback="F" inactive variant="orange" />
            <Avatar alt="John Smith" fallback="F" variant="gold" />
            <Avatar alt="John Smith" fallback="F" variant="brown" />
            <Avatar alt="John Smith" fallback="F" inactive variant="bronze" />
          </Flex>

          <Heading>Grouped avatars</Heading>
          <Flex>
            <AvatarGroup>
              <AvatarNestedItem>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </AvatarNestedItem>
            </AvatarGroup>
            <AvatarGroup>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" variant="blue" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" variant="violet" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" variant="green" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" variant="yellow" />
              </AvatarNestedItem>
            </AvatarGroup>
          </Flex>

          <Heading>Nested avatars</Heading>
          <Flex>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Avatar
                  size="1"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                />
              </Box>
            </Box>
          </Flex>

          <Heading>Avatar with status</Heading>
          <Flex css={{ gap: '$6' }}>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />

              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" variant="gray"></Status>
              </Box>
            </Box>

            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" variant="blue"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" variant="green"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" variant="yellow"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="3"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" variant="red"></Status>
              </Box>
            </Box>
          </Flex>

          <Flex css={{ gap: '$6' }}>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="2"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" variant="gray"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="2"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" variant="blue"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="2"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" variant="green"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="2"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" variant="yellow"></Status>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
              }}
            >
              <Avatar
                size="2"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" variant="red"></Status>
              </Box>
            </Box>
          </Flex>

          <Heading>Avatar with icon</Heading>
          <Flex>
            <Avatar
              size="4"
              fallback={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></circle>
                  <path d="M12.8184 31.3218L31.8709 20.3218" stroke="currentColor"></path>
                  <path d="M3.31836 14.8674L22.3709 3.86743" stroke="currentColor"></path>
                  <path
                    d="M8.65332 29.1077L25.9738 19.1077"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.21582 16.0815L26.5363 6.08154"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M13.2334 14.2297L22.5099 21.1077"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.6973 12.2302L25.9736 19.1078"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9.21582 16.0815L19.0459 23.1078"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              }
            />
          </Flex>

          <Heading>Story avatars</Heading>
          <Flex css={{ gap: '$3' }}>
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Avatar
                size="5"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Text size="1" css={{ display: 'block', mt: '$1' }}>
                colmtuite
              </Text>
            </button>
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Avatar
                size="5"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Text size="1" css={{ display: 'block', mt: '$1' }}>
                colmtuite
              </Text>
            </button>
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Avatar
                size="5"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Text size="1" css={{ display: 'block', mt: '$1' }}>
                colmtuite
              </Text>
            </button>
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Avatar
                size="5"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Text size="1" css={{ display: 'block', mt: '$1' }}>
                colmtuite
              </Text>
            </button>
            <button style={{ border: 'none', backgroundColor: 'transparent' }}>
              <Avatar
                size="5"
                alt="John Smith"
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
              />
              <Text size="1" css={{ display: 'block', mt: '$1' }}>
                colmtuite
              </Text>
            </button>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
