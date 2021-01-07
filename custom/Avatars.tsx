import { Popover } from '@interop-ui/react-popover';
import { Tooltip } from '@interop-ui/react-tooltip';

import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Avatar, AvatarGroup, AvatarNestedItem } from '../components/Avatar';
import { Status } from '../components/Status';
import { Subheading } from '../components/Subheading';
import { Link2Icon } from '@modulz/radix-icons';

export function Avatars() {
  return (
    <Section size="3">
      <Container size="2">
        <Subheading>Avatar sizes</Subheading>
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

          <Subheading>Avatar fallback</Subheading>
          <Flex css={{ ai: 'center', gap: '$6' }}>
            <Avatar size="1" alt="John Smith" fallback="F" />
            <Avatar size="2" alt="John Smith" fallback="F" />
            <Avatar size="3" alt="John Smith" fallback="F" />
            <Avatar size="4" alt="John Smith" fallback="F" />
            <Avatar size="5" alt="John Smith" fallback="F" />
            <Avatar size="6" alt="John Smith" fallback="F" />
          </Flex>

          <Subheading>Avatar colors</Subheading>
          <Flex css={{ ai: 'center', gap: '$3' }}>
            <Avatar alt="John Smith" fallback="F" />
            <Avatar alt="John Smith" fallback="F" color="red" />
            <Avatar alt="John Smith" fallback="F" color="crimson" />
            <Avatar alt="John Smith" fallback="F" color="pink" />
            <Avatar alt="John Smith" fallback="F" color="purple" />
            <Avatar alt="John Smith" fallback="F" color="violet" />
            <Avatar alt="John Smith" fallback="F" color="indigo" />
            <Avatar alt="John Smith" fallback="F" color="blue" />
            <Avatar alt="John Smith" fallback="F" color="turquoise" />
            <Avatar alt="John Smith" fallback="F" color="teal" />
            <Avatar alt="John Smith" fallback="F" color="green" />
            <Avatar alt="John Smith" fallback="F" color="lime" />
            <Avatar alt="John Smith" fallback="F" color="yellow" />
            <Avatar alt="John Smith" fallback="F" color="orange" />
            <Avatar alt="John Smith" fallback="F" color="gold" />
            <Avatar alt="John Smith" fallback="F" color="brown" />
            <Avatar alt="John Smith" fallback="F" color="bronze" />
            <Avatar alt="John Smith" fallback="F" color="hiContrast" />
          </Flex>

          <Subheading>Interactive avatar</Subheading>
          <Flex css={{ gap: '$6' }}>
            <Avatar
              size="3"
              interactive
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
              // as="button"
            />

            <Avatar
              size="3"
              interactive
              alt="John Smith"
              src=""
              fallback="J"
              // as="button"
            />

            <Avatar
              size="3"
              interactive
              alt="John Smith"
              src=""
              fallback="J"
              color="violet"
              // as="button"
            />

            <Avatar
              size="3"
              interactive
              alt="John Smith"
              // as="button"
              fallback={<Link2Icon />}
            />
          </Flex>

          <Subheading>Interactive avatar with tooltip and popover</Subheading>
          <Flex css={{ gap: '$6' }}>
            <Popover>Popover content</Popover>
          </Flex>

          <Subheading>Inactive avatar</Subheading>
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
            <Avatar alt="John Smith" fallback="F" color="red" />
            <Avatar alt="John Smith" fallback="F" color="crimson" />
            <Avatar alt="John Smith" fallback="F" color="pink" />
            <Avatar alt="John Smith" fallback="F" inactive color="purple" />
            <Avatar alt="John Smith" fallback="F" color="violet" />
            <Avatar alt="John Smith" fallback="F" color="indigo" />
            <Avatar alt="John Smith" fallback="F" color="blue" />
            <Avatar alt="John Smith" fallback="F" inactive color="turquoise" />
            <Avatar alt="John Smith" fallback="F" inactive color="teal" />
            <Avatar alt="John Smith" fallback="F" inactive color="green" />
            <Avatar alt="John Smith" fallback="F" color="lime" />
            <Avatar alt="John Smith" fallback="F" inactive color="yellow" />
            <Avatar alt="John Smith" fallback="F" inactive color="orange" />
            <Avatar alt="John Smith" fallback="F" color="gold" />
            <Avatar alt="John Smith" fallback="F" color="brown" />
            <Avatar alt="John Smith" fallback="F" inactive color="bronze" />
          </Flex>

          <Subheading>Grouped avatars</Subheading>
          <Flex>
            <AvatarGroup>
              <AvatarNestedItem>
                <Tooltip>
                  {/* <Tooltip.Trigger as={props => <MyAvatar {...props} />} size="2" inactive>
                    <Avatar.Image
                      alt="John Smith"
                      src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                    />
                    <Avatar.Fallback>C</Avatar.Fallback>
                  </Tooltip.Trigger>
                  <Tooltip.Position side="top">
                    <Tooltip.Content
                      ariaLabel="Close"
                      as={Box}
                      css={{
                        backgroundColor: '$hiContrast',
                        borderRadius: '$2',
                        padding: '$1 $2',
                        maxWidth: 300,
                      }}>
                      <Text size="1" css={{ lineHeight: '17px', color: '$loContrast' }}>Close</Text>
                    </Tooltip.Content>
                    <Tooltip.Arrow
                      offset={0}
                      width={13}
                      height={7}
                      style={{ ...tooltipStyles.arrow, fill: 'black' }}
                    />
                  </Tooltip.Position> */}
                </Tooltip>
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
                <Avatar size="2" alt="John Smith" src="" fallback="J" color="blue" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" color="violet" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" color="green" />
              </AvatarNestedItem>
              <AvatarNestedItem>
                <Avatar size="2" alt="John Smith" src="" fallback="J" color="yellow" />
              </AvatarNestedItem>
            </AvatarGroup>
          </Flex>

          <Subheading>Nested avatars</Subheading>
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
                  boxShadow: '0 0 0 3px $loContrast',
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

          <Subheading>Avatar with status</Subheading>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" color="gray"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" color="blue"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" color="green"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" color="yellow"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="2" color="red"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" color="gray"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" color="blue"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" color="green"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" color="yellow"></Status>
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
                  boxShadow: '0 0 0 3px $loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}
              >
                <Status size="1" color="red"></Status>
              </Box>
            </Box>
          </Flex>

          <Subheading>Avatar with icon</Subheading>
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

          <Subheading>Story avatars</Subheading>
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
