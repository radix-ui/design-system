import React from 'react';
import { Button } from '../components/Button';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../components/Badge';
import { Switch } from '../components/Switch';
import { ControlGroup } from '../components/ControlGroup';
import { Text } from '../components/Text';
import { Link } from '../components/Link';
import { Kbd } from '../components/Kbd';
import { Separator } from '../components/Separator';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Card } from '../components/Card';
import { Textarea } from '../components/Textarea';
import { Image } from '../components/Image';
import { Code } from '../components/Code';
import { Input } from '../components/Input';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog } from '../components/Dialog';
import { Popover } from '../components/Popover';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup } from '../components/Radio';
import { ProgressBar } from '../components/ProgressBar';
import { AlertDialog } from '../components/AlertDialog';
import { Tabs } from '../components/Tabs';
import { Label } from '../components/Label';
import { Skeleton } from '../components/Skeleton';
import { RadioCard } from '../components/RadioCard';
import { Accordion } from '../components/Accordion';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { Heading } from '../components/Heading';
import { Subheading } from '../components/Subheading';
import { Paragraph } from '../components/Paragraph';

import { Layers } from '../custom/Layers';
import { Properties } from '../custom/Properties';
// import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Menus } from '../custom/Menus';
import { Status } from '../components/Status';

function Home() {
  return (
    <Box>
      <Box css={{ bc: '$loContrast', height: '100%' }}>
        <Section size="3">
          <Container size="2">
            <Title css={{ ta: 'center', mb: '$3' }}>Radix UI test suite</Title>
            <Subtitle css={{ ta: 'center' }}>
              An environment for testing tokens, theming, and components on Radix UI design system.
            </Subtitle>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Section size="1" css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 1
            </Text>
          </Section>
          <Section size="2" css={{ bc: '$gray200', my: '$1' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 2
            </Text>
          </Section>
          <Section size="3" css={{ bc: '$gray200' }}>
            <Text as="p" size="4" css={{ ta: 'center' }}>
              Section 3
            </Text>
          </Section>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="1">
            <Box
              css={{
                p: '$5',
                border: '1px solid $gray500',
                borderRadius: '$3',
              }}
            >
              <form>
                <Input
                  type="email"
                  size="2"
                  placeholder="Email"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <Input
                  type="password"
                  size="2"
                  placeholder="Password"
                  autoComplete="off"
                  css={{ mb: '$3' }}
                />
                <Flex css={{ ai: 'center', jc: 'space-between' }}>
                  <Text size="2" css={{ color: '$gray900' }}>
                    Forgot password
                  </Text>
                  <Button size="2" variant="blue">
                    Log in
                  </Button>
                </Flex>
              </form>
            </Box>
          </Container>
          <Container size="2" css={{ my: '$9' }}>
            <Paragraph>
              This is a really long paragraph of text, to demonstrate prose text, like for example,
              the kind you might read in a blog post. The reason we're using prose here is because
              the most common use case for this container size is longform text. So we're previewing
              some longform text here so we can make sure the container width provides an optimal
              line length for this font size.
            </Paragraph>
          </Container>
          <Container size="3" css={{ my: '$9' }}>
            <Grid
              css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7',
              }}
            >
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
              <Box>
                <Text as="p" size="4" css={{ lineHeight: '27px' }}>
                  This is a much shorter paragraph of text, to demonstrate narrow text container.
                  The reason we're using text here is because one common use case for this container
                  size is a 3-up grid.
                </Text>
              </Box>
            </Grid>
          </Container>
          <Container size="4">
            <Text as="p" size="3" css={{ ta: 'center', bc: '$gray200', py: '$2' }}>
              No max width
            </Text>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading as={'h4' as any} css={{ mb: '$6' }}>
              Text
            </Subheading>
            <Flex css={{ fd: 'column', gap: '$4' }}>
              <Flex css={{ ai: 'center' }}>
                <Text size="9" as="h1" css={{ fontWeight: 500, lineHeight: '55px' }}>
                  The quick brown fox
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="8" as="h2" css={{ fontWeight: 500, lineHeight: '37px' }}>
                  The quick brown fox jumped
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="7" as="h3" css={{ fontWeight: 500, lineHeight: '30px' }}>
                  The quick brown fox jumped
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="5" as="p" css={{ lineHeight: '29px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="4" as="p" css={{ lineHeight: '29px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="2" as="p" css={{ lineHeight: '20px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="1" as="p" css={{ lineHeight: '20px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
            </Flex>
            <Flex css={{ fd: 'column', gap: '$4', mt: '$6' }}>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h1" color="red" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h2" color="crimson" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="h3" color="pink" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="purple" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="violet" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="indigo" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="blue" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="turquoise" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="teal" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="green" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="lime" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="yellow" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="orange" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="gold" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
              <Flex css={{ ai: 'center' }}>
                <Text size="6" as="p" color="bronze" css={{ lineHeight: '30px' }}>
                  The quick brown fox jumped over the lazy dog.
                </Text>
              </Flex>
            </Flex>
          </Container>

          <Container size="2">
            <Text
              size="6"
              as="h4"
              css={{
                fontWeight: 500,
                lineHeight: '27px',
                mt: '$8',
                mb: '$1',
              }}
            >
              Text components
            </Text>
            <Paragraph css={{ mb: '$7' }}>
              A set of pre-formatted components for setting text.
            </Paragraph>

            <Flex css={{ fd: 'column', gap: '$6' }}>
              <Title>This is a title</Title>
              <Subtitle>
                This is a subtitle, used to support a title or heading. It defaults to h2 but can be
                rendered as any h level.
              </Subtitle>
              <Heading>This is a large heading</Heading>
              <Subheading>This is a small heading</Subheading>
              <Paragraph>
                This is a really long paragraph of text, to demonstrate prose text, like for
                example, the kind you might read in a blog post. The reason we're using prose here
                is because the most common use case for this container size is longform text. So
                we're previewing some longform text here so we can make sure the container width
                provides an optimal line length for this font size.
              </Paragraph>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex
              css={{
                ai: 'center',
                gap: '$5',
                fw: 'wrap',
                mb: '$7',
              }}
            >
              <Skeleton variant="avatar1" />
              <Skeleton variant="avatar2" />
              <Skeleton variant="avatar3" />
              <Skeleton variant="avatar4" />
              <Skeleton variant="avatar5" />
              <Skeleton variant="avatar6" />
            </Flex>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="title" css={{ width: '50%' }} />
              <Skeleton variant="heading" css={{ width: '25%' }} />
            </Flex>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="text" />
              <Skeleton variant="text" css={{ width: '75%' }} />
              <Skeleton variant="text" />
              <Skeleton variant="text" css={{ width: '50%' }} />
            </Flex>
            <Flex
              css={{
                fd: 'column',
                gap: '$4',
                mb: '$7',
              }}
            >
              <Skeleton variant="button" />
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex css={{ ai: 'center' }}>
              <Box>
                <Tooltip content="Insert (Cmd+P)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.5 3V2H6.5V3V6.5H3H2V8.5H3H6.5V12V13H8.5V12V8.5H12H13V6.5H12H8.5V3Z"
                          fill="#0488FC"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V7H3C2.72386 7 2.5 7.22386 2.5 7.5C2.5 7.77614 2.72386 8 3 8H7V12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12V8H12C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7H8V3Z"
                        fill="#0488FC"
                      />
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
              <Box css={{ mr: '$3' }}>
                <Tooltip content="Frame (F)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.28975 14.2949L10.293 13.4531L8.36328 9.23438L12.2695 8.96484L3.5 1.14999V12.7L6.36719 10.0859L8.28975 14.2949Z"
                        stroke="#0488FC"
                        fill="#CDE7FE"
                      ></path>
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip content="Box (B)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.81126 1.64706C6.62184 2.87918 6.68264 3.88523 6.76844 5.30499C6.78411 5.56426 6.80061 5.83732 6.81658 6.12808C6.83107 6.39208 6.63754 6.62172 6.37491 6.65217C6.11228 6.68262 5.87134 6.50334 5.82505 6.24304L5.74891 5.81488L5.74751 5.80698L5.74757 5.80697C5.64404 5.16528 5.48351 4.25481 5.17803 3.44741C4.86239 2.61315 4.4486 2.04126 3.93439 1.86046C3.64993 1.76102 3.41899 1.84278 3.25864 2.01052C3.08743 2.18962 2.99757 2.47065 3.06266 2.75399C3.21456 3.34424 3.44624 3.9167 3.69832 4.51802C3.72078 4.57158 3.74342 4.62543 3.76618 4.67954C3.99536 5.22457 4.23615 5.7972 4.4164 6.39081L4.41688 6.39238C4.56196 6.87586 4.65642 7.2595 4.73082 7.56165C4.7603 7.68138 4.78663 7.78831 4.81172 7.88359C4.86764 8.09606 4.77832 8.32014 4.59158 8.43588C4.40483 8.55161 4.16441 8.53188 3.99903 8.38725C3.73745 8.15848 3.51497 7.92784 3.31813 7.71802C3.27623 7.67335 3.23599 7.63018 3.19701 7.58838C3.04774 7.42826 2.91709 7.28812 2.78331 7.16029C2.45985 6.85122 2.18394 6.68004 1.80581 6.64369L1.8032 6.64343C1.56114 6.61888 1.41399 6.66441 1.31752 6.72627C1.21894 6.78947 1.11982 6.90416 1.03779 7.11235C0.974298 7.29079 1.0096 7.63817 1.183 7.96911L1.18738 7.97747L1.1873 7.97751C1.39076 8.3843 1.73514 8.81549 2.17271 9.29261C2.38911 9.52857 2.62096 9.76808 2.86215 10.017L2.87419 10.0294C3.11001 10.2728 3.35418 10.5248 3.59172 10.7822C4.4254 11.6857 5.27638 12.7533 5.46257 14H11.5086C11.5636 12.4353 11.8755 11.268 12.2875 10.1346C12.4453 9.70042 12.612 9.28414 12.7825 8.85831C13.1097 8.0414 13.4509 7.18938 13.7705 6.10824C14.0989 4.99737 14.0097 4.37034 13.8613 4.03985C13.717 3.71858 13.4914 3.61787 13.3815 3.59606C13.1381 3.54774 13.0384 3.60947 12.9698 3.67901C12.867 3.78316 12.7698 3.98273 12.6921 4.30269C12.6166 4.61345 12.5752 4.96517 12.533 5.32501L12.5298 5.35285C12.4924 5.67242 12.4505 6.03016 12.3664 6.30098C12.3591 6.32872 12.3403 6.39048 12.3039 6.45073C12.2896 6.47431 12.2563 6.52576 12.1979 6.57539C12.1381 6.6261 12.0104 6.70818 11.8309 6.69312C11.6519 6.6781 11.5401 6.57649 11.4902 6.51769C11.441 6.45982 11.4166 6.40431 11.4064 6.37905C11.374 6.29889 11.3688 6.22183 11.3684 6.21495C11.3684 6.21471 11.3684 6.21455 11.3683 6.21449C11.3662 6.18952 11.3653 6.16555 11.3649 6.14783C11.3638 6.09607 11.366 5.97483 11.366 5.99375V5.98124L11.3661 5.98125C11.3748 5.63581 11.3912 5.29816 11.4073 4.96608C11.4428 4.23646 11.477 3.5337 11.4245 2.8342L11.4241 2.82934L11.4242 2.82934C11.3916 2.32997 11.0493 2.00228 10.7007 1.9228C10.5305 1.88401 10.369 1.90601 10.2346 1.9835C10.1029 2.05946 9.95532 2.21318 9.85737 2.51394L9.85627 2.51726C9.81522 2.6404 9.77294 2.87753 9.73602 3.2124C9.70041 3.53542 9.67334 3.91279 9.65152 4.29418C9.63286 4.62033 9.61781 4.9584 9.6043 5.26194C9.58724 5.64529 9.57263 5.97357 9.5563 6.1532C9.55566 6.16016 9.55488 6.1671 9.55396 6.17402C9.55394 6.17418 9.55391 6.17442 9.55387 6.17475C9.553 6.1816 9.54743 6.22574 9.53102 6.27505C9.52585 6.29055 9.5148 6.32156 9.49497 6.35785C9.48133 6.38282 9.43143 6.47226 9.32411 6.54051C9.26274 6.57954 9.17656 6.61517 9.07102 6.61843C8.96437 6.62172 8.87306 6.59085 8.80465 6.55119C8.68583 6.48232 8.63139 6.38545 8.61694 6.35919C8.58236 6.29634 8.56958 6.23952 8.56712 6.22859L8.56688 6.22752C8.56231 6.20761 8.55978 6.19114 8.55851 6.18225C8.55587 6.16376 8.55442 6.14728 8.55364 6.13737C8.55059 6.09904 8.54881 6.04539 8.5475 5.99283C8.5447 5.88064 8.5429 5.71798 8.54171 5.54767C8.53932 5.20582 8.53932 4.81919 8.53932 4.70952V4.70925C8.53932 3.66544 8.53835 2.65372 8.4471 1.64372C8.39179 1.24127 8.06274 1.00455 7.64357 1.00005C7.22395 0.995552 6.87914 1.22704 6.81126 1.64706ZM9.41216 1.3617C9.21466 0.448484 8.3991 0.00810324 7.6543 0.00011154C6.86448 -0.00836308 5.98758 0.465881 5.82361 1.49037L5.8236 1.49037L5.82315 1.49334C5.78236 1.7584 5.75225 2.01481 5.73086 2.26652C5.39419 1.67364 4.92618 1.14894 4.26547 0.916859L4.2649 0.916661C3.586 0.679114 2.94916 0.887087 2.53579 1.31952C2.13411 1.73971 1.94435 2.36742 2.09028 2.98746L2.09018 2.98748L2.09266 2.99713C2.26474 3.66808 2.52393 4.30316 2.77609 4.90465C2.79811 4.95717 2.82006 5.00941 2.84191 5.06139C3.02135 5.48842 3.19375 5.89866 3.33867 6.31256C2.964 5.98142 2.51922 5.70796 1.90273 5.6484C1.48861 5.60663 1.10387 5.67536 0.777769 5.88444C0.454203 6.0919 0.240634 6.40405 0.10415 6.75406L0.104069 6.75403L0.100831 6.76281C-0.0997077 7.30698 0.0521502 7.96325 0.294996 8.42896C0.563936 8.96499 0.987161 9.47942 1.43572 9.96851C1.66295 10.2163 1.90441 10.4656 2.14397 10.7129L2.15227 10.7214C2.39068 10.9675 2.6276 11.212 2.85681 11.4604C3.80755 12.4907 4.49999 13.4637 4.49999 14.5C4.49999 14.7761 4.72384 15 4.99999 15H12C12.2761 15 12.5 14.7761 12.5 14.5C12.5 12.8212 12.8021 11.6462 13.2273 10.4763C13.3653 10.0968 13.5215 9.70582 13.6867 9.29251C14.0238 8.44925 14.398 7.513 14.7295 6.39175C15.0956 5.15324 15.0559 4.25903 14.7735 3.63017C14.4869 2.99207 13.9797 2.6953 13.5762 2.6152C13.1276 2.52614 12.7367 2.60475 12.4268 2.83081C12.4252 2.80773 12.4236 2.78468 12.4219 2.76167C12.3587 1.8105 11.6907 1.12285 10.923 0.947821C10.5346 0.859287 10.1111 0.900393 9.73505 1.11724C9.61849 1.18446 9.51051 1.26623 9.41216 1.3617ZM8.90706 2.20261C8.90725 2.20206 8.90743 2.20151 8.90761 2.20096L9.38194 2.35911L8.90652 2.20428C8.9067 2.20372 8.90688 2.20317 8.90706 2.20261Z"
                        fill="#0488FC"
                      ></path>
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
              <Box css={{ mr: '$3' }}>
                <Tooltip content="Frame (F)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 3.5C1 3.22386 1.22386 3 1.5 3H13.5C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H1.5C1.22386 4 1 3.77614 1 3.5Z"
                        fill="#0488FC"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                        fill="#0488FC"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.5 1C3.77614 1 4 1.22386 4 1.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V1.5C3 1.22386 3.22386 1 3.5 1Z"
                        fill="#0488FC"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1Z"
                        fill="#0488FC"
                      />
                      <rect x="4" y="4" width="7" height="7" fill="#CDE7FE" />
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box css={{ mr: '$3' }}>
                <Tooltip
                  content="Like how in Gmail, the search input is left aligned with the content you're searching. I don't think it works well to have a tiny search button hidden over in the corner, disjointed from the content you're searching."
                  side="bottom"
                  align="center"
                  multiline
                >
                  <IconButton variant="ghost">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.2">
                        <path
                          d="M12 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V12C2.5 12.2761 2.72386 12.5 3 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V3C12.5 2.72386 12.2761 2.5 12 2.5Z"
                          fill="#0488FC"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                        fill="#0488FC"
                      />
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip content="Text (T)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.5 2.05C3.22386 2.05 3 2.27386 3 2.55V4.2C3 4.47615 3.22386 4.7 3.5 4.7C3.77614 4.7 4 4.47615 4 4.2V3.05H7V11.95H6C5.72386 11.95 5.5 12.1739 5.5 12.45C5.5 12.7261 5.72386 12.95 6 12.95H7.5H9C9.27614 12.95 9.5 12.7261 9.5 12.45C9.5 12.1739 9.27614 11.95 9 11.95H8V3.05H11V4.2C11 4.47615 11.2239 4.7 11.5 4.7C11.7761 4.7 12 4.47615 12 4.2V2.55C12 2.27386 11.7761 2.05 11.5 2.05H7.5H3.5Z"
                        fill="#0488FC"
                      />
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
              <Separator orientation="vertical" size="1" css={{ mx: '$3' }} />
              <Box css={{ mr: '$3' }}>
                <Tooltip content="Frame (F)" side="bottom" align="center">
                  <IconButton variant="ghost">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 3L2.49999 3.00002C1.67157 3.00002 0.999999 3.67159 0.999999 4.50002V9.50002C0.999999 10.3284 1.67157 11 2.5 11H7.50002C7.63263 11 7.75981 11.0527 7.85358 11.1465L9.99999 13.2929V11.5C9.99999 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3284 14 9.50002V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11928 15 4.5V9.50002C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8535L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50002V4.50002C0 3.11931 1.11928 2.00002 2.49999 2.00002Z"
                        fill="#0488FC"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </IconButton>
                </Tooltip>
              </Box>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Badge</Subheading>
            <Flex
              css={{
                ai: 'center',
                gap: '$5',
                fw: 'wrap',
                mb: '$7',
              }}
            >
              <Badge size="1">Coming soon</Badge>
              <Badge size="2">Coming soon</Badge>
            </Flex>
            <Flex css={{ gap: '$5', fw: 'wrap' }}>
              <Badge size="2" variant="red">
                <Box css={{ mr: 5 }}>
                  <Status size="1" color="red" />
                </Box>
                Live
              </Badge>
              <Badge size="2" variant="crimson">
                Approved
              </Badge>
              <Badge size="2" variant="pink">
                Pending
              </Badge>
              <Badge size="2" variant="purple">
                Failed
              </Badge>
              <Badge size="2" variant="violet">
                New
              </Badge>
              <Badge size="2" variant="indigo">
                Approved
              </Badge>
              <Badge size="2" variant="blue">
                Pending
              </Badge>
              <Badge size="2" variant="turquoise">
                Failed
              </Badge>
              <Badge size="2" variant="teal">
                New
              </Badge>
              <Badge size="2" variant="green">
                Approved
              </Badge>
              <Badge size="2" variant="lime">
                Pending
              </Badge>
              <Badge size="2" variant="yellow">
                Failed
              </Badge>
              <Badge size="2" variant="orange">
                Failed
              </Badge>
              <Badge size="2" variant="gold">
                Winner
              </Badge>
              <Badge size="2" variant="bronze">
                Runner-up
              </Badge>
            </Flex>
            <Flex css={{ gap: '$5', fw: 'wrap', mt: '$6' }}>
              <Badge as="a" href="#" size="2" variant="red" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="crimson" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="pink" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="purple" interactive>
                Failed
                <Box css={{ ml: 5 }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
              </Badge>
              <Badge as="button" size="2" variant="violet" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="indigo" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="blue" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="turquoise" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="teal" interactive>
                New
              </Badge>
              <Badge as="button" size="2" variant="green" interactive>
                Approved
              </Badge>
              <Badge as="button" size="2" variant="lime" interactive>
                Pending
              </Badge>
              <Badge as="button" size="2" variant="yellow" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="orange" interactive>
                Failed
              </Badge>
              <Badge as="button" size="2" variant="gold" interactive>
                Winner
              </Badge>
              <Badge as="button" size="2" variant="bronze" interactive>
                Runner-up
              </Badge>
              <Badge as="button" size="2" variant="bronze" interactive disabled>
                Disabled
              </Badge>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Button</Subheading>
            <Flex css={{ gap: '$6' }}>
              <Button>Button</Button>
              <Button size="2">Button</Button>
            </Flex>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button>Button</Button>
              <Button variant="blue">Important</Button>
              <Button variant="green">Secure</Button>
              <Button variant="red">Warning</Button>
              <Button variant="ghost">Ghost</Button>
            </Flex>
            <Box
              css={{
                position: 'relative',
                mt: '$6',
              }}
            >
              <img src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
              <Box
                css={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: '$4',
                }}
              >
                <Button variant="transparentWhite">Transparent</Button>
              </Box>
            </Box>
            <Box
              css={{
                position: 'relative',
                mt: '$6',
              }}
            >
              <img src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
              <Box
                css={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  m: '$4',
                }}
              >
                <Button variant="transparentBlack">Transparent</Button>
              </Box>
            </Box>
            <Flex css={{ mt: '$6', gap: '$6' }}>
              <Button variant="red" disabled>
                Disabled
              </Button>
              <Button variant="red" state="active">
                Active
              </Button>
              <Button variant="red" state="waiting" disabled>
                Waiting
              </Button>
            </Flex>
            <Flex css={{ gap: '$6', mt: '$6' }}>
              <Button>
                <Box
                  css={{
                    mr: '$1',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Button
              </Button>
              <Button variant="blue">
                Button
                <Box
                  css={{
                    ml: '$1',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
              </Button>
              <Button variant="green">
                <Box
                  css={{
                    mr: '$1',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Button
                <Box
                  css={{
                    ml: '$1',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
              </Button>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Input</Subheading>
            <Flex css={{ ai: 'flex-start', gap: '$6' }}>
              <Input size="1" placeholder="Size 1" />
              <Input size="2" placeholder="Size 2" />
              <Input size="3" placeholder="Size 3" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="1" placeholder="Ghost" variant="ghost" />
              <Input size="2" placeholder="Ghost" variant="ghost" />
              <Input size="3" placeholder="Ghost" variant="ghost" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Invalid" state="invalid" />
              <Input size="2" placeholder="Valid" state="valid" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Cursor default" cursor="default" />
              <Input size="2" placeholder="Cursor text" cursor="text" />
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Input size="2" placeholder="Read only placeholder" readOnly />
              <Input size="2" placeholder="Read only value" defaultValue="100" readOnly />
              <Input size="2" placeholder="Disabled placeholder" disabled />
              <Input size="2" placeholder="Disabled value" defaultValue="100" disabled />
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>ControlGroup</Subheading>
            <ControlGroup>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Button>Button</Button>
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Button>Button</Button>
              <Input size="2" placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Button>Button</Button>
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Input size="2" placeholder="Hello world" />
              <Input size="2" placeholder="Hello world" />
            </ControlGroup>
            <ControlGroup css={{ mt: '$6' }}>
              <Input size="3" placeholder="Hello world" />
              <Button size="2">Button</Button>
            </ControlGroup>

            <Flex
              css={{
                position: 'relative',
                width: '225px',
                mt: '$6',
                overflow: 'hidden',
                borderRadius: '$2',
              }}
            >
              <Flex
                css={{
                  backgroundColor: '$gray200',
                  userSelect: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '$5',
                  boxShadow: 'inset 0 0 0 1px $gray600',
                  fontSize: '$2',
                  color: '$gray900',
                  flexShrink: 0,
                  px: '$1',
                }}
              >
                www.
              </Flex>
              <Input size="2" placeholder="Hello world" />
            </Flex>

            <Flex
              css={{
                position: 'relative',
                width: '225px',
                mt: '$6',
                overflow: 'hidden',
                borderRadius: '$2',
              }}
            >
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  backgroundColor: '$gray200',
                  userSelect: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '$5',
                  boxShadow: 'inset 0 0 0 1px $gray600',
                  fontSize: '$2',
                  color: '$gray900',
                  flexShrink: 0,
                  px: '$1',
                }}
              >
                .com
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>InputWrapper</Subheading>
            <Box css={{ position: 'relative', width: '225px' }}>
              <Input size="2" placeholder="Hello world" css={{ pl: 22 }} />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'space-between',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center', cursor: 'default', p: '$1' }}>
                  <Flex
                    css={{ ai: 'center', jc: 'center', color: '$gray900', width: 15, height: 15 }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Flex>
                </Flex>
                <Flex css={{ ai: 'center', cursor: 'default', p: '$1', pointerEvents: 'auto' }}>
                  <IconButton variant="ghost" css={{ width: 15, height: 15, borderRadius: '$1' }}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </IconButton>
                  <Separator size="1" orientation="vertical" css={{ mx: '$1' }} />
                  <IconButton variant="ghost" css={{ width: 15, height: 15, borderRadius: '$1' }}>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </IconButton>
                </Flex>
              </Flex>
            </Box>

            <Box css={{ position: 'relative', width: '225px', mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'flex-end',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center', p: '$1' }}>
                  <Button
                    variant="blue"
                    css={{ pointerEvents: 'auto', height: 19, px: '$1', borderRadius: '$1' }}
                  >
                    Invite
                  </Button>
                </Flex>
              </Flex>
            </Box>

            <Box css={{ position: 'relative', width: '225px', mt: '$6' }}>
              <Input size="2" placeholder="Hello world" />
              <Flex
                css={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  pointerEvents: 'none',
                  zIndex: '1',
                  justifyContent: 'flex-end',
                  px: '$1',
                  ai: 'center',
                }}
              >
                <Flex css={{ ai: 'center' }}>
                  <Button variant="blue" css={{ pointerEvents: 'auto' }}>
                    Invite
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Subheading css={{ mb: '$6' }}>Textarea</Subheading>
            <Flex css={{ ai: 'flex-start', gap: '$6' }}>
              <Textarea size="1" placeholder="Size 1"></Textarea>
              <Textarea size="2" placeholder="Size 1"></Textarea>
              <Textarea size="3" placeholder="Size 1"></Textarea>
            </Flex>
            <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
              <Textarea size="2" placeholder="Size 1" disabled></Textarea>
              <Textarea
                size="2"
                placeholder="Size 1"
                readOnly
                defaultValue="eihuweofjew"
              ></Textarea>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex css={{ ai: 'center', jc: 'space-between' }}>
              <Text>Resize selected object</Text>
              <Flex css={{ ai: 'center', gap: '$1' }}>
                <Kbd>Cmd</Kbd>
                <Box css={{ color: '$gray800' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                <Kbd>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 1C7.66148 1 7.81301 1.07798 7.90687 1.20938L12.9069 8.20938C13.0157 8.36179 13.0303 8.56226 12.9446 8.72879C12.8589 8.89533 12.6873 9 12.5 9H10V11.5C10 11.7761 9.77614 12 9.5 12H5.5C5.22386 12 5 11.7761 5 11.5V9H2.5C2.31271 9 2.14112 8.89533 2.05542 8.72879C1.96972 8.56226 1.98427 8.36179 2.09314 8.20938L7.09314 1.20938C7.18699 1.07798 7.33853 1 7.5 1ZM3.4716 8H5.5C5.77614 8 6 8.22386 6 8.5V11H9V8.5C9 8.22386 9.22386 8 9.5 8H11.5284L7.5 2.36023L3.4716 8Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Kbd>
                <Box css={{ color: '$gray800' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                <Kbd>Up</Kbd>
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex css={{ ai: 'baseline' }}>
              <Text size="3" css={{ fontWeight: '500' }}>
                Colm Tuite
              </Text>
              <VerifiedBadge css={{ as: 'center', mx: '$1' }} />
              <Text size="3" css={{ color: '$gray900' }}>
                @colmtuite
              </Text>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Flex css={{ gap: '$6', mb: '$6' }}>
              <Link variant="blue" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
              <Link variant="subtle" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
              <Link variant="contrast" href="#">
                <Text size="4">Link with jy descenders</Text>
              </Link>
            </Flex>

            <Paragraph>
              There are 5 variants to choose from. Use is for positive states.{' '}
              <Link variant="contrast" href="#">
                This is a link
              </Link>{' '}
              Traditional business literature won’t help you solve it- most of that stuff is focused
              on life after product/market fit, after the Trough of Sorrow. A lot of startup stuff
              is focused on the initial phases, when you don’t have a team, idea, or investors.
            </Paragraph>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Paragraph>
              There are 5 variants to choose from. Use <Code>console.log('Radix').console</Code> is
              for positive states. Traditional business literature won’t help you solve it- most of
              that stuff is focused on life after product/market fit, after the Trough of Sorrow. A
              lot of startup stuff is focused on the initial phases, when you don’t have a team,
              idea, or investors.
            </Paragraph>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="3">
            <Flex css={{ gap: '$3' }}>
              <Box css={{ width: 250 }}>
                <Card css={{ p: '$3' }}>
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" css={{ p: '$3' }} variant="interactive">
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                  <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                    <Flex css={{ ai: 'center' }}>
                      <Avatar
                        size="2"
                        alt="John Smith"
                        src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        fallback="J"
                        css={{
                          mr: '$1',
                        }}
                      />
                      <Text size="2" css={{ color: '$gray900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$gray900' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" variant="interactive">
                  <Image
                    src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
                    css={{ btlr: '$3', btrr: '$3' }}
                  />
                  <Box css={{ p: '$3' }}>
                    <Subheading css={{ mb: '$2' }}>
                      Modulz raises $4.2M to close the gap between design and code
                    </Subheading>
                    <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
                      Modulz is a visual code editor that empowers teams to design, develop,
                      document and deploy a design system, without writing code.
                    </Text>
                    <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                      <Flex css={{ ai: 'center' }}>
                        <Avatar
                          size="2"
                          alt="John Smith"
                          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          fallback="J"
                          css={{
                            mr: '$1',
                          }}
                        />
                        <Text size="2" css={{ color: '$gray900' }}>
                          Colm Tuite
                        </Text>
                      </Flex>
                      <Box>
                        <Text size="2" css={{ color: '$gray900' }}>
                          May 2020
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Card>
              </Box>
              <Box css={{ width: 250 }}>
                <Card as="a" href="#" variant="ghost" css={{ p: '$3' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
                    css={{ br: '$1', mb: '$3' }}
                  />
                  <Subheading css={{ mb: '$2' }}>
                    Modulz raises $4.2M to close the gap between design and code
                  </Subheading>
                  <Text size="3" css={{ color: '$gray900', lineHeight: '23px' }}>
                    Modulz is a visual code editor that empowers teams to design, develop, document
                    and deploy a design system, without writing code.
                  </Text>
                  <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                    <Flex css={{ ai: 'center' }}>
                      <Avatar
                        size="2"
                        alt="John Smith"
                        src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        fallback="J"
                        css={{
                          mr: '$1',
                        }}
                      />
                      <Text size="2" css={{ color: '$gray900' }}>
                        Colm Tuite
                      </Text>
                    </Flex>
                    <Box>
                      <Text size="2" css={{ color: '$gray900' }}>
                        May 2020
                      </Text>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <AlertDialog>
              <AlertDialog.Trigger as={Button}>Alert Dialog</AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Title as={Subheading}>Are you sure?</AlertDialog.Title>
                <AlertDialog.Description as={Text} css={{ mt: '$2' }}>
                  This will do a very dangerous thing. Thar be dragons!
                </AlertDialog.Description>
                <Flex css={{ jc: 'flex-end', gap: '$3', mt: '$5' }}>
                  <AlertDialog.Cancel as={Button} variant="ghost">
                    Cancel
                  </AlertDialog.Cancel>
                  <AlertDialog.Action as={Button} variant="red">
                    Delete
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Dialog>
              <Dialog.Trigger as={Button}>Open dialog</Dialog.Trigger>
              <Dialog.Content>
                <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                  Dialog Heading
                </Text>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  There are 5 variants to choose from. Use is for positive states. This is a link
                  Traditional business literature won’t help you solve it- most of that stuff is
                  focused on life after product/market fit, after the Trough of Sorrow.
                </Text>
              </Dialog.Content>
            </Dialog>

            <Dialog>
              <Dialog.Trigger as={Button}>Dialog</Dialog.Trigger>

              <Dialog.Content>
                <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
                  Dialog Heading
                </Text>
                <Text size="3" as="p" css={{ lineHeight: '25px' }}>
                  There are 5 variants to choose from. Use is for positive states. This is a link
                  Traditional business literature won’t help you solve it- most of that stuff is
                  focused on life after product/market fit, after the Trough of Sorrow.
                </Text>

                <Popover>
                  <Popover.Trigger as={Button}>Open</Popover.Trigger>
                  <Popover.Content>
                    <Popover.Close as={Button} variant="ghost">
                      Close
                    </Popover.Close>
                  </Popover.Content>
                </Popover>
              </Dialog.Content>
            </Dialog>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Box css={{ mb: '$6' }}>
              <Text size="2">Indeterminate</Text>
              <ProgressBar css={{ my: '$2' }} />
            </Box>
            <Box css={{ mb: '$6' }}>
              <Text size="2">Download 50% complete</Text>
              <ProgressBar max={100} value={80} css={{ my: '$2' }} />
              <Text size="1" css={{ color: '$gray900' }}>
                46 hours remaining
              </Text>
            </Box>
            <Box css={{ mb: '$6' }}>
              <ProgressBar max={100} color="gradient" value={100} />
            </Box>
            <Box css={{ mb: '$6' }}>
              <ProgressBar color="blue" max={100} value={50} />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Popover>
              <Popover.Trigger as={Button}>Popover</Popover.Trigger>
              <Popover.Content css={{ padding: '$4' }} hideArrow>
                <Text>Hello, from Popover.</Text>
              </Popover.Content>
            </Popover>

            <Popover>
              <Popover.Trigger as={Button}>Popover</Popover.Trigger>
              <Popover.Content css={{ padding: '$4' }}>
                <Text>Hello, from Popover.</Text>
              </Popover.Content>
            </Popover>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Accordion>
              <Accordion.Item value="accordion-one">
                <Accordion.Button>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="accordion-two">
                <Accordion.Button>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="accordion-three">
                <Accordion.Button>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion one
                  </Text>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="accordion-four">
                <Accordion.Button>
                  <Text size="3" css={{ fontWeight: 500 }}>
                    Accordion two
                  </Text>
                </Accordion.Button>
                <Accordion.Panel>
                  <Text size="3" css={{ lineHeight: '23px' }}>
                    The other main improvement is with tables, which we'll probably use a lot. With
                    horizontal overflow on small devices and when zoomed in, tables are a pain to
                    navigate. I added a focus wrapper that will announce the table context to the
                    user when focused, which also allows keyboard users to navigate the overflow
                    more easily.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Avatars />
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <Tabs defaultSelectedId="tab-one">
              <Tabs.List>
                <Tabs.Tab id="tab-one">General</Tabs.Tab>
                <Tabs.Tab id="tab-two">Hosting</Tabs.Tab>
                <Tabs.Tab id="tab-three">Editor</Tabs.Tab>
                <Tabs.Tab id="tab-four">Billing</Tabs.Tab>
                <Tabs.Tab id="tab-five">SEO</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel id="tab-one">
                <Text>Panel 1</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-two">
                <Text>Panel 2</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-three">
                <Text>Panel 3</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-four">
                <Text>Panel 4</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-five">
                <Text>Panel 5</Text>
              </Tabs.Panel>
            </Tabs>

            <Tabs defaultSelectedId="tab-one" orientation="vertical" css={{ mt: '$9' }}>
              <Tabs.List>
                <Tabs.Tab id="tab-one">General</Tabs.Tab>
                <Tabs.Tab id="tab-two">Hosting</Tabs.Tab>
                <Tabs.Tab id="tab-three">Editor</Tabs.Tab>
                <Tabs.Tab id="tab-four">Billing</Tabs.Tab>
                <Tabs.Tab id="tab-five">SEO</Tabs.Tab>
                <Tabs.Tab id="tab-six">Forms</Tabs.Tab>
                <Tabs.Tab id="tab-seven">Fonts</Tabs.Tab>
                <Tabs.Tab id="tab-eight">Backups</Tabs.Tab>
                <Tabs.Tab id="tab-nine">Integrations</Tabs.Tab>
                <Tabs.Tab id="tab-ten">Custom code</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel id="tab-one">
                <Text>Panel 1</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-two">
                <Text>Panel 2</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-three">
                <Text>Panel 3</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-four">
                <Text>Panel 4</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-five">
                <Text>Panel 5</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-six">
                <Text>Panel 6</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-seven">
                <Text>Panel 7</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-eight">
                <Text>Panel 8</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-nine">
                <Text>Panel 9</Text>
              </Tabs.Panel>
              <Tabs.Panel id="tab-ten">
                <Text>Panel 10</Text>
              </Tabs.Panel>
            </Tabs>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="3" css={{ py: '$7' }}>
            <Flex css={{ borderBottom: '1px solid $gray500' }}>
              <TabLink href="#" active>
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Code
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Issues
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Pull requests
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.76447 3.12199C5.63151 3.04859 6.56082 3 7.5 3C8.43918 3 9.36849 3.04859 10.2355 3.12199C11.2796 3.21037 11.9553 3.27008 12.472 3.39203C12.9425 3.50304 13.2048 3.64976 13.4306 3.88086C13.4553 3.90618 13.4902 3.94414 13.5133 3.97092C13.7126 4.20149 13.8435 4.4887 13.918 5.03283C13.9978 5.6156 14 6.37644 14 7.52493C14 8.66026 13.9978 9.41019 13.9181 9.98538C13.8439 10.5206 13.7137 10.8061 13.5125 11.0387C13.4896 11.0651 13.4541 11.1038 13.4296 11.1287C13.2009 11.3625 12.9406 11.5076 12.4818 11.6164C11.9752 11.7365 11.3143 11.7942 10.2878 11.8797C9.41948 11.9521 8.47566 12 7.5 12C6.52434 12 5.58052 11.9521 4.7122 11.8797C3.68572 11.7942 3.02477 11.7365 2.51816 11.6164C2.05936 11.5076 1.7991 11.3625 1.57037 11.1287C1.54593 11.1038 1.51035 11.0651 1.48748 11.0387C1.28628 10.8061 1.15612 10.5206 1.08193 9.98538C1.00221 9.41019 1 8.66026 1 7.52493C1 6.37644 1.00216 5.6156 1.082 5.03283C1.15654 4.4887 1.28744 4.20149 1.48666 3.97092C1.5098 3.94414 1.54468 3.90618 1.56942 3.88086C1.7952 3.64976 2.05752 3.50304 2.52796 3.39203C3.04473 3.27008 3.7204 3.21037 4.76447 3.12199ZM0 7.52493C0 5.28296 0 4.16198 0.729985 3.31713C0.766457 3.27491 0.815139 3.22194 0.854123 3.18204C1.63439 2.38339 2.64963 2.29744 4.68012 2.12555C5.56923 2.05028 6.52724 2 7.5 2C8.47276 2 9.43077 2.05028 10.3199 2.12555C12.3504 2.29744 13.3656 2.38339 14.1459 3.18204C14.1849 3.22194 14.2335 3.27491 14.27 3.31713C15 4.16198 15 5.28296 15 7.52493C15 9.74012 15 10.8477 14.2688 11.6929C14.2326 11.7348 14.1832 11.7885 14.1444 11.8281C13.3629 12.6269 12.3655 12.71 10.3709 12.8763C9.47971 12.9505 8.50782 13 7.5 13C6.49218 13 5.52028 12.9505 4.62915 12.8763C2.63446 12.71 1.63712 12.6269 0.855558 11.8281C0.816844 11.7885 0.767442 11.7348 0.731221 11.6929C0 10.8477 0 9.74012 0 7.52493ZM5.25 5.38264C5.25 5.20225 5.43522 5.08124 5.60041 5.15369L10.428 7.27105C10.6274 7.35853 10.6274 7.64147 10.428 7.72895L5.60041 9.84631C5.43522 9.91876 5.25 9.79775 5.25 9.61736V5.38264Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Actions
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.5C0 1.22386 0.223858 1 0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5ZM4 1.5C4 1.22386 4.22386 1 4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM0 7.5C0 7.22386 0.223858 7 0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5ZM0 13.5C0 13.2239 0.223858 13 0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5ZM4 13.5C4 13.2239 4.22386 13 4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Projects
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Wiki
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Security
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Insights
              </TabLink>
              <TabLink href="#">
                <Box css={{ mr: '$1' }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Box>
                Settings
              </TabLink>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Box css={{ width: '100px' }}>
              <Slider defaultValue={50} />
            </Box>
            <Flex css={{ gap: '$4' }}>
              <Slider defaultValue={25} />
              {/* <Slider defaultValue={[25, 75]} /> */}
            </Flex>
            <Box css={{ mt: '$6' }}>
              <Slider defaultValue={50} orientation="vertical" />
            </Box>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Grid
              css={{
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '$7',
              }}
            >
              <Box>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.49988 1.12704C8.80781 1.12704 10.0237 1.52106 11.0354 2.19687L10.3479 2.88428C9.52024 2.37245 8.54455 2.07704 7.49988 2.07704C4.50494 2.07704 2.07705 4.50493 2.07705 7.49988C2.07705 8.54455 2.37246 9.52023 2.88429 10.3479L2.19688 11.0354C1.52107 10.0237 1.12705 8.8078 1.12705 7.49988C1.12705 3.98026 3.98027 1.12704 7.49988 1.12704ZM12.1157 4.65211L12.8031 3.96468C13.4788 4.97628 13.8727 6.19207 13.8727 7.49988C13.8727 11.0195 11.0195 13.8727 7.49988 13.8727C6.19208 13.8727 4.97629 13.4788 3.96469 12.8031L4.65211 12.1157C5.47976 12.6274 6.45533 12.9227 7.49988 12.9227C10.4948 12.9227 12.9227 10.4948 12.9227 7.49988C12.9227 6.45533 12.6274 5.47976 12.1157 4.65211ZM7.5 9.9C7.32905 9.9 7.18314 9.79276 7.12589 9.64188L7.66777 9.1H10.65C10.8709 9.1 11.05 9.27909 11.05 9.5C11.05 9.72091 10.8709 9.9 10.65 9.9H7.5ZM11.7 7.9H8.86777L9.66777 7.1H11.7C11.9209 7.1 12.1 7.27909 12.1 7.5C12.1 7.72091 11.9209 7.9 11.7 7.9ZM7.5 5.1H8.13223L7.35812 5.87411C7.20724 5.81686 7.1 5.67095 7.1 5.5C7.1 5.27909 7.27908 5.1 7.5 5.1ZM7.5 3.1C7.27908 3.1 7.1 3.27909 7.1 3.5C7.1 3.72091 7.27908 3.9 7.5 3.9H8.8975C9.11841 3.9 9.2975 3.72091 9.2975 3.5C9.2975 3.27909 9.11841 3.1 8.8975 3.1H7.5ZM7.5 11.1C7.27908 11.1 7.1 11.2791 7.1 11.5C7.1 11.7209 7.27908 11.9 7.5 11.9H8.8975C9.11841 11.9 9.2975 11.7209 9.2975 11.5C9.2975 11.2791 9.11841 11.1 8.8975 11.1H7.5ZM13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Box>
              <Flex css={{ gap: 2 }}>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.425 3.00011C5.425 2.75158 5.62647 2.55011 5.875 2.55011H5.88477H5.89453H5.9043H5.91406H5.92383H5.93359H5.94336H5.95312H5.96289H5.97266H5.98242H5.99219H6.00195H6.01172H6.02148H6.03125H6.04102H6.05078H6.06055H6.07031H6.08008H6.08984H6.09961H6.10938H6.11914H6.12891H6.13867H6.14844H6.1582H6.16797H6.17773H6.1875H6.19727H6.20703H6.2168H6.22656H6.23633H6.24609H6.25586H6.26562H6.27539H6.28516H6.29492H6.30469H6.31445H6.32422H6.33398H6.34375H6.35352H6.36328H6.37305H6.38281H6.39258H6.40234H6.41211H6.42188H6.43164H6.44141H6.45117H6.46094H6.4707H6.48047H6.49023H6.5H6.50977H6.51953H6.5293H6.53906H6.54883H6.55859H6.56836H6.57812H6.58789H6.59766H6.60742H6.61719H6.62695H6.63672H6.64648H6.65625H6.66602H6.67578H6.68555H6.69531H6.70508H6.71484H6.72461H6.73438H6.74414H6.75391H6.76367H6.77344H6.7832H6.79297H6.80273H6.8125H6.82227H6.83203H6.8418H6.85156H6.86133H6.87109H6.88086H6.89062H6.90039H6.91016H6.91992H6.92969H6.93945H6.94922H6.95898H6.96875H6.97852H6.98828H6.99805H7.00781H7.01758H7.02734H7.03711H7.04688H7.05664H7.06641H7.07617H7.08594H7.0957H7.10547H7.11523H7.125H7.13477H7.14453H7.1543H7.16406H7.17383H7.18359H7.19336H7.20312H7.21289H7.22266H7.23242H7.24219H7.25195H7.26172H7.27148H7.28125H7.29102H7.30078H7.31055H7.32031H7.33008H7.33984H7.34961H7.35938H7.36914H7.37891H7.38867H7.39844H7.4082H7.41797H7.42773H7.4375H7.44727H7.45703H7.4668H7.47656H7.48633H7.49609H7.50586H7.51562H7.52539H7.53516H7.54492H7.55469H7.56445H7.57422H7.58398H7.59375H7.60352H7.61328H7.62305H7.63281H7.64258H7.65234H7.66211H7.67188H7.68164H7.69141H7.70117H7.71094H7.7207H7.73047H7.74023H7.75H7.75977H7.76953H7.7793H7.78906H7.79883H7.80859H7.81836H7.82812H7.83789H7.84766H7.85742H7.86719H7.87695H7.88672H7.89648H7.90625H7.91602H7.92578H7.93555H7.94531H7.95508H7.96484H7.97461H7.98438H7.99414H8.00391H8.01367H8.02344H8.0332H8.04297H8.05273H8.0625H8.07227H8.08203H8.0918H8.10156H8.11133H8.12109H8.13086H8.14062H8.15039H8.16016H8.16992H8.17969H8.18945H8.19922H8.20898H8.21875H8.22852H8.23828H8.24805H8.25781H8.26758H8.27734H8.28711H8.29688H8.30664H8.31641H8.32617H8.33594H8.3457H8.35547H8.36523H8.375H8.38477H8.39453H8.4043H8.41406H8.42383H8.43359H8.44336H8.45312H8.46289H8.47266H8.48242H8.49219H8.50195H8.51172H8.52148H8.53125H8.54102H8.55078H8.56055H8.57031H8.58008H8.58984H8.59961H8.60938H8.61914H8.62891H8.63867H8.64844H8.6582H8.66797H8.67773H8.6875H8.69727H8.70703H8.7168H8.72656H8.73633H8.74609H8.75586H8.76562H8.77539H8.78516H8.79492H8.80469H8.81445H8.82422H8.83398H8.84375H8.85352H8.86328H8.87305H8.88281H8.89258H8.90234H8.91211H8.92188H8.93164H8.94141H8.95117H8.96094H8.9707H8.98047H8.99023H9H9.00977H9.01953H9.0293H9.03906H9.04883H9.05859H9.06836H9.07812H9.08789H9.09766H9.10742H9.11719H9.12695H9.13672H9.14648H9.15625H9.16602H9.17578H9.18555H9.19531H9.20508H9.21484H9.22461H9.23438H9.24414H9.25391H9.26367H9.27344H9.2832H9.29297H9.30273H9.3125H9.32227H9.33203H9.3418H9.35156H9.36133H9.37109H9.38086H9.39062H9.40039H9.41016H9.41992H9.42969H9.43945H9.44922H9.45898H9.46875H9.47852H9.48828H9.49805H9.50781H9.51758H9.52734H9.53711H9.54688H9.55664H9.56641H9.57617H9.58594H9.5957H9.60547H9.61523H9.625H9.63477H9.64453H9.6543H9.66406H9.67383H9.68359H9.69336H9.70312H9.71289H9.72266H9.73242H9.74219H9.75195H9.76172H9.77148H9.78125H9.79102H9.80078H9.81055H9.82031H9.83008H9.83984H9.84961H9.85938H9.86914H9.87891H9.88867H9.89844H9.9082H9.91797H9.92773H9.9375H9.94727H9.95703H9.9668H9.97656H9.98633H9.99609H10.0059H10.0156H10.0254H10.0352H10.0449H10.0547H10.0645H10.0742H10.084H10.0938H10.1035H10.1133H10.123H10.1328H10.1426H10.1523H10.1621H10.1719H10.1816H10.1914H10.2012H10.2109H10.2207H10.2305H10.2402H10.25H10.2598H10.2695H10.2793H10.2891H10.2988H10.3086H10.3184H10.3281H10.3379H10.3477H10.3574H10.3672H10.377H10.3867H10.3965H10.4062H10.416H10.4258H10.4355H10.4453H10.4551H10.4648H10.4746H10.4844H10.4941H10.5039H10.5137H10.5234H10.5332H10.543H10.5527H10.5625H10.5723H10.582H10.5918H10.6016H10.6113H10.6211H10.6309H10.6406H10.6504H10.6602H10.6699H10.6797H10.6895H10.6992H10.709H10.7188H10.7285H10.7383H10.748H10.7578H10.7676H10.7773H10.7871H10.7969H10.8066H10.8164H10.8262H10.8359H10.8457H10.8555H10.8652H10.875C11.1235 2.55011 11.325 2.75158 11.325 3.00011C11.325 3.24864 11.1235 3.45011 10.875 3.45011H10.8652H10.8555H10.8457H10.8359H10.8262H10.8164H10.8066H10.7969H10.7871H10.7773H10.7676H10.7578H10.748H10.7383H10.7285H10.7188H10.709H10.6992H10.6895H10.6797H10.6699H10.6602H10.6504H10.6406H10.6309H10.6211H10.6113H10.6016H10.5918H10.582H10.5723H10.5625H10.5527H10.543H10.5332H10.5234H10.5137H10.5039H10.4941H10.4844H10.4746H10.4648H10.4551H10.4453H10.4355H10.4258H10.416H10.4062H10.3965H10.3867H10.377H10.3672H10.3574H10.3477H10.3379H10.3281H10.3184H10.3086H10.2988H10.2891H10.2793H10.2695H10.2598H10.25H10.2402H10.2305H10.2207H10.2109H10.2012H10.1914H10.1816H10.1719H10.1621H10.1523H10.1426H10.1328H10.123H10.1133H10.1035H10.0938H10.084H10.0742H10.0645H10.0547H10.0449H10.0352H10.0254H10.0156H10.0059H9.99609H9.98633H9.97656H9.9668H9.95703H9.94727H9.9375H9.92773H9.91797H9.9082H9.89844H9.88867H9.87891H9.86914H9.85938H9.84961H9.83984H9.83008H9.82031H9.81055H9.80078H9.79102H9.78125H9.77148H9.76172H9.75195H9.74219H9.73242H9.72266H9.71289H9.70312H9.69336H9.68359H9.67383H9.66406H9.6543H9.64453H9.63477H9.625H9.61523H9.60547H9.5957H9.58594H9.57617H9.56641H9.55664H9.54688H9.53711H9.52734H9.51758H9.50781H9.49805H9.48828H9.47852H9.46875H9.45898H9.44922H9.43945H9.42969H9.41992H9.41016H9.40039H9.39062H9.38086H9.37109H9.36133H9.35156H9.3418H9.33203H9.32227H9.3125H9.30273H9.29297H9.2832H9.27344H9.26367H9.25391H9.24414H9.23438H9.22461H9.21484H9.20508H9.19531H9.18555H9.17578H9.16602H9.15625H9.14648H9.13672H9.12695H9.11719H9.10742H9.09766H9.08789H9.07812H9.06836H9.05859H9.04883H9.03906H9.0293H9.01953H9.00977H9H8.99023H8.98047H8.9707H8.96094H8.95117H8.94141H8.93164H8.92188H8.92045L7.35576 11.05H9.125C9.37353 11.05 9.575 11.2515 9.575 11.5C9.575 11.7486 9.37353 11.95 9.125 11.95H4.125C3.87647 11.95 3.675 11.7486 3.675 11.5C3.675 11.2515 3.87647 11.05 4.125 11.05H6.07954L7.64423 3.45011H7.64258H7.63281H7.62305H7.61328H7.60352H7.59375H7.58398H7.57422H7.56445H7.55469H7.54492H7.53516H7.52539H7.51562H7.50586H7.49609H7.48633H7.47656H7.4668H7.45703H7.44727H7.4375H7.42773H7.41797H7.4082H7.39844H7.38867H7.37891H7.36914H7.35938H7.34961H7.33984H7.33008H7.32031H7.31055H7.30078H7.29102H7.28125H7.27148H7.26172H7.25195H7.24219H7.23242H7.22266H7.21289H7.20312H7.19336H7.18359H7.17383H7.16406H7.1543H7.14453H7.13477H7.125H7.11523H7.10547H7.0957H7.08594H7.07617H7.06641H7.05664H7.04688H7.03711H7.02734H7.01758H7.00781H6.99805H6.98828H6.97852H6.96875H6.95898H6.94922H6.93945H6.92969H6.91992H6.91016H6.90039H6.89062H6.88086H6.87109H6.86133H6.85156H6.8418H6.83203H6.82227H6.8125H6.80273H6.79297H6.7832H6.77344H6.76367H6.75391H6.74414H6.73438H6.72461H6.71484H6.70508H6.69531H6.68555H6.67578H6.66602H6.65625H6.64648H6.63672H6.62695H6.61719H6.60742H6.59766H6.58789H6.57812H6.56836H6.55859H6.54883H6.53906H6.5293H6.51953H6.50977H6.5H6.49023H6.48047H6.4707H6.46094H6.45117H6.44141H6.43164H6.42188H6.41211H6.40234H6.39258H6.38281H6.37305H6.36328H6.35352H6.34375H6.33398H6.32422H6.31445H6.30469H6.29492H6.28516H6.27539H6.26562H6.25586H6.24609H6.23633H6.22656H6.2168H6.20703H6.19727H6.1875H6.17773H6.16797H6.1582H6.14844H6.13867H6.12891H6.11914H6.10938H6.09961H6.08984H6.08008H6.07031H6.06055H6.05078H6.04102H6.03125H6.02148H6.01172H6.00195H5.99219H5.98242H5.97266H5.96289H5.95312H5.94336H5.93359H5.92383H5.91406H5.9043H5.89453H5.88477H5.875C5.62647 3.45011 5.425 3.24864 5.425 3.00011Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.69009 9.13721C1.20272 9.13721 0.795097 9.54889 0.952901 10.01C1.40464 11.3301 2.81542 12.0903 4.61772 12.0903C6.95121 12.0903 8.28935 10.7126 8.28935 9.03833C8.28935 7.77271 7.51152 7.01465 5.88993 6.52026L5.12528 6.28296C4.09696 5.96655 3.66191 5.58423 3.66191 4.97119C3.66191 4.29883 4.28153 3.68579 5.44828 3.68579C6.22116 3.68579 6.79579 3.94618 7.10277 4.3718C7.36153 4.73055 7.70128 5.10962 8.1436 5.10962C8.60221 5.10962 8.98932 4.72854 8.85783 4.28919C8.47516 3.01054 7.18476 2.26196 5.4351 2.26196C3.37846 2.26196 1.92826 3.42212 1.92826 5.15576C1.92826 6.44775 2.71928 7.23877 4.30131 7.73315L5.04618 7.96387C6.13383 8.30005 6.53593 8.65601 6.53593 9.33496C6.53593 10.1787 5.73173 10.6665 4.64408 10.6665C3.76538 10.6665 3.08883 10.3483 2.72959 9.84363C2.476 9.48734 2.12742 9.13721 1.69009 9.13721Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.97685 6.92896C9.97685 7.81226 10.4778 8.35278 11.6775 8.7417L12.2708 8.93945C13.2398 9.25586 13.5298 9.50635 13.5298 10.0403C13.5298 10.7654 12.8311 11.3191 11.8621 11.3191C10.9747 11.3191 10.3362 10.9274 10.0814 10.3212C9.99357 10.1122 9.80867 9.94141 9.58196 9.94141C9.3202 9.94141 9.10697 10.1644 9.18157 10.4153C9.46814 11.3791 10.4606 12.0442 11.8225 12.0442C13.3255 12.0442 14.4065 11.1873 14.4065 9.99414C14.4065 9.10425 13.9121 8.59009 12.6729 8.18799L12.0796 7.99683C11.17 7.7002 10.8338 7.39697 10.8338 6.85645C10.8338 6.18408 11.4732 5.6897 12.4356 5.6897C13.1952 5.6897 13.7827 6.07027 14.0064 6.64362C14.0868 6.84963 14.265 7.02124 14.4861 7.02124C14.7306 7.02124 14.931 6.81564 14.8708 6.57867C14.6255 5.61213 13.7028 4.9646 12.4488 4.9646C10.9854 4.9646 9.97685 5.79517 9.97685 6.92896Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.12422 2.5002C2.12422 2.29309 2.29211 2.1252 2.49922 2.1252H6.49922C6.70633 2.1252 6.87422 2.29309 6.87422 2.5002C6.87422 2.70731 6.70633 2.8752 6.49922 2.8752H5V7.05H10V2.8752H8.49922C8.29211 2.8752 8.12422 2.70731 8.12422 2.5002C8.12422 2.29309 8.29211 2.1252 8.49922 2.1252H12.4992C12.7063 2.1252 12.8742 2.29309 12.8742 2.5002C12.8742 2.70731 12.7063 2.8752 12.4992 2.8752H11V12.1252H12.4992C12.7063 12.1252 12.8742 12.2931 12.8742 12.5002C12.8742 12.7073 12.7063 12.8752 12.4992 12.8752H8.49922C8.29211 12.8752 8.12422 12.7073 8.12422 12.5002C8.12422 12.2931 8.29211 12.1252 8.49922 12.1252H10V7.95H5V12.0752H6.49922C6.73394 12.0752 6.92422 12.2655 6.92422 12.5002C6.92422 12.7349 6.73394 12.9252 6.49922 12.9252H2.49922C2.2645 12.9252 2.07422 12.7349 2.07422 12.5002C2.07422 12.2655 2.2645 12.0752 2.49922 12.0752H4V2.8752H2.49922C2.29211 2.8752 2.12422 2.70731 2.12422 2.5002Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Flex>
              <Flex>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Flex>
            </Grid>
            <Flex css={{ alignItems: 'center', gap: '$1' }}>
              <Flex css={{ gap: 2 }}>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.425 3.00011C5.425 2.75158 5.62647 2.55011 5.875 2.55011H5.88477H5.89453H5.9043H5.91406H5.92383H5.93359H5.94336H5.95312H5.96289H5.97266H5.98242H5.99219H6.00195H6.01172H6.02148H6.03125H6.04102H6.05078H6.06055H6.07031H6.08008H6.08984H6.09961H6.10938H6.11914H6.12891H6.13867H6.14844H6.1582H6.16797H6.17773H6.1875H6.19727H6.20703H6.2168H6.22656H6.23633H6.24609H6.25586H6.26562H6.27539H6.28516H6.29492H6.30469H6.31445H6.32422H6.33398H6.34375H6.35352H6.36328H6.37305H6.38281H6.39258H6.40234H6.41211H6.42188H6.43164H6.44141H6.45117H6.46094H6.4707H6.48047H6.49023H6.5H6.50977H6.51953H6.5293H6.53906H6.54883H6.55859H6.56836H6.57812H6.58789H6.59766H6.60742H6.61719H6.62695H6.63672H6.64648H6.65625H6.66602H6.67578H6.68555H6.69531H6.70508H6.71484H6.72461H6.73438H6.74414H6.75391H6.76367H6.77344H6.7832H6.79297H6.80273H6.8125H6.82227H6.83203H6.8418H6.85156H6.86133H6.87109H6.88086H6.89062H6.90039H6.91016H6.91992H6.92969H6.93945H6.94922H6.95898H6.96875H6.97852H6.98828H6.99805H7.00781H7.01758H7.02734H7.03711H7.04688H7.05664H7.06641H7.07617H7.08594H7.0957H7.10547H7.11523H7.125H7.13477H7.14453H7.1543H7.16406H7.17383H7.18359H7.19336H7.20312H7.21289H7.22266H7.23242H7.24219H7.25195H7.26172H7.27148H7.28125H7.29102H7.30078H7.31055H7.32031H7.33008H7.33984H7.34961H7.35938H7.36914H7.37891H7.38867H7.39844H7.4082H7.41797H7.42773H7.4375H7.44727H7.45703H7.4668H7.47656H7.48633H7.49609H7.50586H7.51562H7.52539H7.53516H7.54492H7.55469H7.56445H7.57422H7.58398H7.59375H7.60352H7.61328H7.62305H7.63281H7.64258H7.65234H7.66211H7.67188H7.68164H7.69141H7.70117H7.71094H7.7207H7.73047H7.74023H7.75H7.75977H7.76953H7.7793H7.78906H7.79883H7.80859H7.81836H7.82812H7.83789H7.84766H7.85742H7.86719H7.87695H7.88672H7.89648H7.90625H7.91602H7.92578H7.93555H7.94531H7.95508H7.96484H7.97461H7.98438H7.99414H8.00391H8.01367H8.02344H8.0332H8.04297H8.05273H8.0625H8.07227H8.08203H8.0918H8.10156H8.11133H8.12109H8.13086H8.14062H8.15039H8.16016H8.16992H8.17969H8.18945H8.19922H8.20898H8.21875H8.22852H8.23828H8.24805H8.25781H8.26758H8.27734H8.28711H8.29688H8.30664H8.31641H8.32617H8.33594H8.3457H8.35547H8.36523H8.375H8.38477H8.39453H8.4043H8.41406H8.42383H8.43359H8.44336H8.45312H8.46289H8.47266H8.48242H8.49219H8.50195H8.51172H8.52148H8.53125H8.54102H8.55078H8.56055H8.57031H8.58008H8.58984H8.59961H8.60938H8.61914H8.62891H8.63867H8.64844H8.6582H8.66797H8.67773H8.6875H8.69727H8.70703H8.7168H8.72656H8.73633H8.74609H8.75586H8.76562H8.77539H8.78516H8.79492H8.80469H8.81445H8.82422H8.83398H8.84375H8.85352H8.86328H8.87305H8.88281H8.89258H8.90234H8.91211H8.92188H8.93164H8.94141H8.95117H8.96094H8.9707H8.98047H8.99023H9H9.00977H9.01953H9.0293H9.03906H9.04883H9.05859H9.06836H9.07812H9.08789H9.09766H9.10742H9.11719H9.12695H9.13672H9.14648H9.15625H9.16602H9.17578H9.18555H9.19531H9.20508H9.21484H9.22461H9.23438H9.24414H9.25391H9.26367H9.27344H9.2832H9.29297H9.30273H9.3125H9.32227H9.33203H9.3418H9.35156H9.36133H9.37109H9.38086H9.39062H9.40039H9.41016H9.41992H9.42969H9.43945H9.44922H9.45898H9.46875H9.47852H9.48828H9.49805H9.50781H9.51758H9.52734H9.53711H9.54688H9.55664H9.56641H9.57617H9.58594H9.5957H9.60547H9.61523H9.625H9.63477H9.64453H9.6543H9.66406H9.67383H9.68359H9.69336H9.70312H9.71289H9.72266H9.73242H9.74219H9.75195H9.76172H9.77148H9.78125H9.79102H9.80078H9.81055H9.82031H9.83008H9.83984H9.84961H9.85938H9.86914H9.87891H9.88867H9.89844H9.9082H9.91797H9.92773H9.9375H9.94727H9.95703H9.9668H9.97656H9.98633H9.99609H10.0059H10.0156H10.0254H10.0352H10.0449H10.0547H10.0645H10.0742H10.084H10.0938H10.1035H10.1133H10.123H10.1328H10.1426H10.1523H10.1621H10.1719H10.1816H10.1914H10.2012H10.2109H10.2207H10.2305H10.2402H10.25H10.2598H10.2695H10.2793H10.2891H10.2988H10.3086H10.3184H10.3281H10.3379H10.3477H10.3574H10.3672H10.377H10.3867H10.3965H10.4062H10.416H10.4258H10.4355H10.4453H10.4551H10.4648H10.4746H10.4844H10.4941H10.5039H10.5137H10.5234H10.5332H10.543H10.5527H10.5625H10.5723H10.582H10.5918H10.6016H10.6113H10.6211H10.6309H10.6406H10.6504H10.6602H10.6699H10.6797H10.6895H10.6992H10.709H10.7188H10.7285H10.7383H10.748H10.7578H10.7676H10.7773H10.7871H10.7969H10.8066H10.8164H10.8262H10.8359H10.8457H10.8555H10.8652H10.875C11.1235 2.55011 11.325 2.75158 11.325 3.00011C11.325 3.24864 11.1235 3.45011 10.875 3.45011H10.8652H10.8555H10.8457H10.8359H10.8262H10.8164H10.8066H10.7969H10.7871H10.7773H10.7676H10.7578H10.748H10.7383H10.7285H10.7188H10.709H10.6992H10.6895H10.6797H10.6699H10.6602H10.6504H10.6406H10.6309H10.6211H10.6113H10.6016H10.5918H10.582H10.5723H10.5625H10.5527H10.543H10.5332H10.5234H10.5137H10.5039H10.4941H10.4844H10.4746H10.4648H10.4551H10.4453H10.4355H10.4258H10.416H10.4062H10.3965H10.3867H10.377H10.3672H10.3574H10.3477H10.3379H10.3281H10.3184H10.3086H10.2988H10.2891H10.2793H10.2695H10.2598H10.25H10.2402H10.2305H10.2207H10.2109H10.2012H10.1914H10.1816H10.1719H10.1621H10.1523H10.1426H10.1328H10.123H10.1133H10.1035H10.0938H10.084H10.0742H10.0645H10.0547H10.0449H10.0352H10.0254H10.0156H10.0059H9.99609H9.98633H9.97656H9.9668H9.95703H9.94727H9.9375H9.92773H9.91797H9.9082H9.89844H9.88867H9.87891H9.86914H9.85938H9.84961H9.83984H9.83008H9.82031H9.81055H9.80078H9.79102H9.78125H9.77148H9.76172H9.75195H9.74219H9.73242H9.72266H9.71289H9.70312H9.69336H9.68359H9.67383H9.66406H9.6543H9.64453H9.63477H9.625H9.61523H9.60547H9.5957H9.58594H9.57617H9.56641H9.55664H9.54688H9.53711H9.52734H9.51758H9.50781H9.49805H9.48828H9.47852H9.46875H9.45898H9.44922H9.43945H9.42969H9.41992H9.41016H9.40039H9.39062H9.38086H9.37109H9.36133H9.35156H9.3418H9.33203H9.32227H9.3125H9.30273H9.29297H9.2832H9.27344H9.26367H9.25391H9.24414H9.23438H9.22461H9.21484H9.20508H9.19531H9.18555H9.17578H9.16602H9.15625H9.14648H9.13672H9.12695H9.11719H9.10742H9.09766H9.08789H9.07812H9.06836H9.05859H9.04883H9.03906H9.0293H9.01953H9.00977H9H8.99023H8.98047H8.9707H8.96094H8.95117H8.94141H8.93164H8.92188H8.92045L7.35576 11.05H9.125C9.37353 11.05 9.575 11.2515 9.575 11.5C9.575 11.7486 9.37353 11.95 9.125 11.95H4.125C3.87647 11.95 3.675 11.7486 3.675 11.5C3.675 11.2515 3.87647 11.05 4.125 11.05H6.07954L7.64423 3.45011H7.64258H7.63281H7.62305H7.61328H7.60352H7.59375H7.58398H7.57422H7.56445H7.55469H7.54492H7.53516H7.52539H7.51562H7.50586H7.49609H7.48633H7.47656H7.4668H7.45703H7.44727H7.4375H7.42773H7.41797H7.4082H7.39844H7.38867H7.37891H7.36914H7.35938H7.34961H7.33984H7.33008H7.32031H7.31055H7.30078H7.29102H7.28125H7.27148H7.26172H7.25195H7.24219H7.23242H7.22266H7.21289H7.20312H7.19336H7.18359H7.17383H7.16406H7.1543H7.14453H7.13477H7.125H7.11523H7.10547H7.0957H7.08594H7.07617H7.06641H7.05664H7.04688H7.03711H7.02734H7.01758H7.00781H6.99805H6.98828H6.97852H6.96875H6.95898H6.94922H6.93945H6.92969H6.91992H6.91016H6.90039H6.89062H6.88086H6.87109H6.86133H6.85156H6.8418H6.83203H6.82227H6.8125H6.80273H6.79297H6.7832H6.77344H6.76367H6.75391H6.74414H6.73438H6.72461H6.71484H6.70508H6.69531H6.68555H6.67578H6.66602H6.65625H6.64648H6.63672H6.62695H6.61719H6.60742H6.59766H6.58789H6.57812H6.56836H6.55859H6.54883H6.53906H6.5293H6.51953H6.50977H6.5H6.49023H6.48047H6.4707H6.46094H6.45117H6.44141H6.43164H6.42188H6.41211H6.40234H6.39258H6.38281H6.37305H6.36328H6.35352H6.34375H6.33398H6.32422H6.31445H6.30469H6.29492H6.28516H6.27539H6.26562H6.25586H6.24609H6.23633H6.22656H6.2168H6.20703H6.19727H6.1875H6.17773H6.16797H6.1582H6.14844H6.13867H6.12891H6.11914H6.10938H6.09961H6.08984H6.08008H6.07031H6.06055H6.05078H6.04102H6.03125H6.02148H6.01172H6.00195H5.99219H5.98242H5.97266H5.96289H5.95312H5.94336H5.93359H5.92383H5.91406H5.9043H5.89453H5.88477H5.875C5.62647 3.45011 5.425 3.24864 5.425 3.00011Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.69009 9.13721C1.20272 9.13721 0.795097 9.54889 0.952901 10.01C1.40464 11.3301 2.81542 12.0903 4.61772 12.0903C6.95121 12.0903 8.28935 10.7126 8.28935 9.03833C8.28935 7.77271 7.51152 7.01465 5.88993 6.52026L5.12528 6.28296C4.09696 5.96655 3.66191 5.58423 3.66191 4.97119C3.66191 4.29883 4.28153 3.68579 5.44828 3.68579C6.22116 3.68579 6.79579 3.94618 7.10277 4.3718C7.36153 4.73055 7.70128 5.10962 8.1436 5.10962C8.60221 5.10962 8.98932 4.72854 8.85783 4.28919C8.47516 3.01054 7.18476 2.26196 5.4351 2.26196C3.37846 2.26196 1.92826 3.42212 1.92826 5.15576C1.92826 6.44775 2.71928 7.23877 4.30131 7.73315L5.04618 7.96387C6.13383 8.30005 6.53593 8.65601 6.53593 9.33496C6.53593 10.1787 5.73173 10.6665 4.64408 10.6665C3.76538 10.6665 3.08883 10.3483 2.72959 9.84363C2.476 9.48734 2.12742 9.13721 1.69009 9.13721Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.97685 6.92896C9.97685 7.81226 10.4778 8.35278 11.6775 8.7417L12.2708 8.93945C13.2398 9.25586 13.5298 9.50635 13.5298 10.0403C13.5298 10.7654 12.8311 11.3191 11.8621 11.3191C10.9747 11.3191 10.3362 10.9274 10.0814 10.3212C9.99357 10.1122 9.80867 9.94141 9.58196 9.94141C9.3202 9.94141 9.10697 10.1644 9.18157 10.4153C9.46814 11.3791 10.4606 12.0442 11.8225 12.0442C13.3255 12.0442 14.4065 11.1873 14.4065 9.99414C14.4065 9.10425 13.9121 8.59009 12.6729 8.18799L12.0796 7.99683C11.17 7.7002 10.8338 7.39697 10.8338 6.85645C10.8338 6.18408 11.4732 5.6897 12.4356 5.6897C13.1952 5.6897 13.7827 6.07027 14.0064 6.64362C14.0868 6.84963 14.265 7.02124 14.4861 7.02124C14.7306 7.02124 14.931 6.81564 14.8708 6.57867C14.6255 5.61213 13.7028 4.9646 12.4488 4.9646C10.9854 4.9646 9.97685 5.79517 9.97685 6.92896Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="circle">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.12422 2.5002C2.12422 2.29309 2.29211 2.1252 2.49922 2.1252H6.49922C6.70633 2.1252 6.87422 2.29309 6.87422 2.5002C6.87422 2.70731 6.70633 2.8752 6.49922 2.8752H5V7.05H10V2.8752H8.49922C8.29211 2.8752 8.12422 2.70731 8.12422 2.5002C8.12422 2.29309 8.29211 2.1252 8.49922 2.1252H12.4992C12.7063 2.1252 12.8742 2.29309 12.8742 2.5002C12.8742 2.70731 12.7063 2.8752 12.4992 2.8752H11V12.1252H12.4992C12.7063 12.1252 12.8742 12.2931 12.8742 12.5002C12.8742 12.7073 12.7063 12.8752 12.4992 12.8752H8.49922C8.29211 12.8752 8.12422 12.7073 8.12422 12.5002C8.12422 12.2931 8.29211 12.1252 8.49922 12.1252H10V7.95H5V12.0752H6.49922C6.73394 12.0752 6.92422 12.2655 6.92422 12.5002C6.92422 12.7349 6.73394 12.9252 6.49922 12.9252H2.49922C2.2645 12.9252 2.07422 12.7349 2.07422 12.5002C2.07422 12.2655 2.2645 12.0752 2.49922 12.0752H4V2.8752H2.49922C2.29211 2.8752 2.12422 2.70731 2.12422 2.5002Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Flex>
              <Separator orientation="vertical" />
              <Flex>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00916 6.68569 8.00916 8.60972C8.00916 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1344V11.1416V11.1488V11.1559V11.1629V11.1698V11.1767V11.1836V11.1904V11.1971V11.2037V11.2103V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4141V11.4182V11.4222V11.4261V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4874V11.4899V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5091V11.5109V11.5126V11.5142V11.5157V11.5172V11.5185V11.5198V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5274V11.528V11.5286V11.529V11.5294V11.5296V11.5298V11.53L13.6043 11.53H13.1543C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53H13.6043L14.0543 11.53V11.5298V11.5296V11.5294V11.529V11.5286V11.528V11.5274V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5198V11.5185V11.5172V11.5157V11.5142V11.5126V11.5109V11.5091V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.4899V11.4874V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4261V11.4222V11.4182V11.4141V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2103V11.2037V11.1971V11.1904V11.1836V11.1767V11.1698V11.1629V11.1559V11.1488V11.1416V11.1344V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9951V10.9869V10.9785V10.9702V10.9617V10.9532V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8834V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8196V10.8103V10.801V10.7915V10.7821V10.7725V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6946V10.6847V10.6747V10.6646V10.6545V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3536V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.07V10.0578V10.0454V10.0331V10.0207V10.0083V9.99581V9.98331V9.97079V9.95822V9.94563V9.933V9.92033V9.90763V9.89491V9.88214V9.86935V9.85652V9.84366V9.83077V9.81784V9.80489V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534V7.29011V7.27489V7.25967V7.24445V7.22925V7.21405V7.19885V7.18366V7.16848V7.15331V7.13814V7.12298V7.10783V7.09268V7.07754V7.06241V7.04729V7.03218V7.01708V7.00198V6.9869V6.97182V6.95675V6.94169V6.92665V6.91161V6.89658V6.88157V6.86656V6.85157V6.83658V6.82161V6.80665V6.79171V6.77677V6.76185V6.74693V6.73204V6.71715V6.70228V6.68742V6.67258V6.65774V6.64293V6.62812V6.61333V6.59856V6.5838V6.56906V6.55433V6.53962V6.52492V6.51024V6.49557V6.48092V6.46629V6.45167V6.43707V6.42249V6.40793V6.39338V6.37885V6.36434V6.34985V6.33537V6.32092V6.30648V6.29206V6.27767V6.26329V6.24893V6.23459V6.22027V6.20597V6.19169V6.17744V6.1632V6.14899V6.13479V6.12062V6.10647V6.09234V6.07824V6.06415V6.05009V6.03606V6.02204V6.00805V5.99408V5.98014V5.96622V5.95232V5.93845V5.9246V5.91078V5.89699V5.88321V5.86947V5.85575V5.84205V5.82838V5.81474V5.80113V5.78754V5.77398V5.76044V5.74693V5.73345V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V5.73345V5.74693V5.76044V5.77398V5.78754V5.80113V5.81474V5.82838V5.84205V5.85575V5.86947V5.88321V5.89699V5.91078V5.9246V5.93845V5.95232V5.96622V5.98014V5.99408V6.00805V6.02204V6.03606V6.05009V6.06415V6.07824V6.09234V6.10647V6.12062V6.13479V6.14899V6.1632V6.17744V6.19169V6.20597V6.22027V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 7.30534V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.772 10.4952 13.1543 9.79823V9.7919V9.77888V9.76583V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91983V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54951V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.60118 2.75C3.80997 2.75 3.99677 2.87973 4.0697 3.07537L7.17075 11.3949C7.26719 11.6537 7.13562 11.9416 6.87687 12.0381C6.61812 12.1345 6.33017 12.003 6.23372 11.7442L5.21682 9.01603H1.98555L0.968643 11.7442C0.872196 12.003 0.58425 12.1345 0.325498 12.0381C0.0667463 11.9416 -0.0648272 11.6537 0.0316203 11.3949L3.13267 3.07537C3.20559 2.87973 3.3924 2.75 3.60118 2.75ZM3.60118 4.68157L4.89999 8.16603H2.30238L3.60118 4.68157ZM11.4012 2.75C11.61 2.75 11.7968 2.87973 11.8697 3.07537L14.9707 11.3949C15.0672 11.6537 14.9356 11.9416 14.6769 12.0381C14.4181 12.1345 14.1302 12.003 14.0337 11.7442L13.0168 9.01603H9.78555L8.76864 11.7442C8.67219 12.003 8.38425 12.1345 8.1255 12.0381C7.86674 11.9416 7.73517 11.6537 7.83162 11.3949L10.9327 3.07537C11.0056 2.87973 11.1924 2.75 11.4012 2.75ZM11.4012 4.68157L12.7 8.16603H10.1024L11.4012 4.68157Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
                <SimpleToggle shape="square">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.69894 5.20703C2.05818 5.20703 0.809151 6.68569 0.809151 8.60972C0.809151 10.6337 2.15818 12.0124 3.69894 12.0124C4.52121 12.0124 5.37396 11.6693 5.95384 11.0223V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1345V11.1417V11.1488V11.1559V11.1629V11.1699V11.1768V11.1836V11.1904V11.1971V11.2038V11.2104V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4142V11.4182V11.4222V11.4262V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4875V11.49V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5092V11.5109V11.5126V11.5142V11.5157V11.5172V11.5186V11.5199V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5275V11.5281V11.5286V11.529V11.5294V11.5297V11.5299V11.53L6.40384 11.53H5.95384C5.95384 11.7785 6.15532 11.98 6.40384 11.98C6.65237 11.98 6.85384 11.7785 6.85384 11.53H6.40384L6.85384 11.53V11.5299V11.5297V11.5294V11.529V11.5286V11.5281V11.5275V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5199V11.5186V11.5172V11.5157V11.5142V11.5126V11.5109V11.5092V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.49V11.4875V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4262V11.4222V11.4182V11.4142V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2104V11.2038V11.1971V11.1904V11.1836V11.1768V11.1699V11.1629V11.1559V11.1488V11.1417V11.1345V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9952V10.9869V10.9786V10.9702V10.9617V10.9533V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8835V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8197V10.8103V10.801V10.7915V10.7821V10.7726V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6947V10.6847V10.6747V10.6647V10.6546V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3537V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.0701V10.0578V10.0455V10.0331V10.0207V10.0083V9.99582V9.98333V9.9708V9.95824V9.94564V9.93301V9.92034V9.90765V9.89492V9.88215V9.86936V9.85653V9.84367V9.83078V9.81786V9.8049V9.79191V9.7789V9.76585V9.75277V9.73966V9.72652V9.71335V9.70015V9.68692V9.67366V9.66037V9.64705V9.63371V9.62033V9.60693V9.5935V9.58004V9.56655V9.55304V9.5395V9.52593V9.51233V9.49871V9.48506V9.47139V9.45769V9.44396V9.43021V9.41643V9.40263V9.3888V9.37494V9.36107V9.34717V9.33324V9.31929V9.30532V9.29132V9.2773V9.26326V9.24919V9.2351V9.22099V9.20686V9.1927V9.17852V9.16432V9.1501V9.13586V9.1216V9.10732V9.09301V9.07869V9.06435V9.04998V9.0356V9.0212V9.00677V8.99233V8.97787V8.96339V8.9489V8.93438V8.91985V8.9053V8.89073V8.87614V8.86154V8.84692V8.83228V8.81763V8.80296V8.78827V8.77357V8.75885V8.74412V8.72937V8.71461V8.69983V8.68504V8.67023V8.65541V8.64058V8.62573V8.61087V8.59599V8.5811V8.5662V8.55129V8.53636V8.52142V8.50647V8.49151V8.47653V8.46155V8.44655V8.43154V8.41653V8.4015V8.38646V8.37141V8.35635V8.34128V8.3262V8.31111V8.29601V8.28091V8.26579V8.25067V8.23554V8.2204V8.20525V8.1901V8.17493V8.15976V8.14459V8.1294V8.11421V8.09902V8.08382V8.06861V8.05339V8.03817V8.02295V8.00772V7.99248V7.97725V7.962V7.94675V7.9315V7.91625V7.90099V7.88573V7.87046V7.85519V7.83992V7.82465V7.80937V7.79409V7.77881V7.76353V7.74825V7.73296V7.71768V7.70239V7.6871V7.67182V7.65653V7.64124V7.62595V7.61067V7.59538V7.58009V7.56481V7.54953V7.53425V7.51897V7.50369V7.48841V7.47314V7.45787V7.4426V7.42734V7.41207V7.39682V7.38156V7.36631V7.35106V7.33582V7.32058V7.30535V7.29012V7.2749V7.25968V7.24447V7.22926V7.21406V7.19887V7.18368V7.1685V7.15332V7.13815V7.12299V7.10784V7.09269V7.07756V7.06243V7.04731V7.03219V7.01709V7.00199V6.98691V6.97183V6.95676V6.94171V6.92666V6.91162V6.8966V6.88158V6.86657V6.85158V6.8366V6.82163V6.80667V6.79172V6.77678V6.76186V6.74695V6.73205V6.71716V6.70229V6.68743V6.67259V6.65776V6.64294V6.62814V6.61335V6.59857V6.58381V6.56907V6.55434V6.53963V6.52493V6.51025V6.49558V6.48093V6.4663V6.45168V6.43709V6.4225V6.40794V6.39339V6.37886V6.36435V6.34986V6.33539V6.32093V6.30649V6.29208V6.27768V6.2633V6.24894V6.2346V6.22028V6.20598V6.19171V6.17745V6.16321V6.149V6.1348V6.12063V6.10648V6.09235V6.07825V6.06417V6.05011V6.03607V6.02205V6.00806V5.99409V5.98015V5.96623V5.95234V5.93846V5.92462V5.9108V5.897V5.88323V5.86948V5.85576V5.84207V5.8284V5.81475V5.80114V5.78755V5.77399V5.76045V5.74695V5.73347V5.72001C6.85384 5.47149 6.65237 5.27001 6.40384 5.27001C6.15532 5.27001 5.95384 5.47149 5.95384 5.72001V5.73347V5.74695V5.76045V5.77399V5.78755V5.80114V5.81475V5.8284V5.84207V5.85576V5.86948V5.88323V5.897V5.9108V5.92462V5.93846V5.95234V5.96623V5.98015V5.99409V6.00806V6.02205V6.03607V6.05011V6.06417V6.07825V6.09235V6.10648V6.12063V6.1348V6.149V6.16321V6.17745V6.19171V6.20598V6.22028V6.22269C5.40501 5.60075 4.59213 5.20703 3.69894 5.20703ZM5.95384 7.30535V7.30117C5.56333 6.58064 4.74113 6.05757 3.88675 6.05757C2.90884 6.05757 1.83503 6.96581 1.83503 8.60955C1.83503 10.1533 2.80884 11.1615 3.88675 11.1615C4.76978 11.1615 5.57136 10.4957 5.95384 9.799V9.79191V9.7789V9.76585V9.75277V9.73966V9.72652V9.71335V9.70015V9.68692V9.67366V9.66037V9.64705V9.63371V9.62033V9.60693V9.5935V9.58004V9.56655V9.55304V9.5395V9.52593V9.51233V9.49871V9.48506V9.47139V9.45769V9.44396V9.43021V9.41643V9.40263V9.3888V9.37494V9.36107V9.34717V9.33324V9.31929V9.30532V9.29132V9.2773V9.26326V9.24919V9.2351V9.22099V9.20686V9.1927V9.17852V9.16432V9.1501V9.13586V9.1216V9.10732V9.09301V9.07869V9.06435V9.04998V9.0356V9.0212V9.00677V8.99233V8.97787V8.96339V8.9489V8.93438V8.91985V8.9053V8.89073V8.87614V8.86154V8.84692V8.83228V8.81763V8.80296V8.78827V8.77357V8.75885V8.74412V8.72937V8.71461V8.69983V8.68504V8.67023V8.65541V8.64058V8.62573V8.61087V8.59599V8.5811V8.5662V8.55129V8.53636V8.52142V8.50647V8.49151V8.47653V8.46155V8.44655V8.43154V8.41653V8.4015V8.38646V8.37141V8.35635V8.34128V8.3262V8.31111V8.29601V8.28091V8.26579V8.25067V8.23554V8.2204V8.20525V8.1901V8.17493V8.15976V8.14459V8.1294V8.11421V8.09902V8.08382V8.06861V8.05339V8.03817V8.02295V8.00772V7.99248V7.97725V7.962V7.94675V7.9315V7.91625V7.90099V7.88573V7.87046V7.85519V7.83992V7.82465V7.80937V7.79409V7.77881V7.76353V7.74825V7.73296V7.71768V7.70239V7.6871V7.67182V7.65653V7.64124V7.62595V7.61067V7.59538V7.58009V7.56481V7.54953V7.53425V7.51897V7.50369V7.48841V7.47314V7.45787V7.4426V7.42734V7.41207V7.39682V7.38156V7.36631V7.35106V7.33582V7.32058V7.30535ZM10.7989 5.20703C9.15818 5.20703 7.90915 6.68569 7.90915 8.60972C7.90915 10.6337 9.25818 12.0124 10.7989 12.0124C11.6214 12.0124 12.4744 11.6692 13.0543 11.0218V11.0277V11.0357V11.0436V11.0515V11.0593V11.0671V11.0748V11.0825V11.0901V11.0976V11.1051V11.1125V11.1199V11.1272V11.1344V11.1416V11.1488V11.1559V11.1629V11.1698V11.1767V11.1836V11.1904V11.1971V11.2037V11.2103V11.2169V11.2234V11.2298V11.2361V11.2424V11.2487V11.2548V11.2609V11.267V11.273V11.2789V11.2847V11.2905V11.2963V11.3019V11.3075V11.3131V11.3185V11.3239V11.3293V11.3346V11.3398V11.3449V11.35V11.355V11.36V11.3649V11.3697V11.3744V11.3791V11.3837V11.3883V11.3928V11.3972V11.4015V11.4058V11.41V11.4141V11.4182V11.4222V11.4261V11.43V11.4338V11.4375V11.4412V11.4448V11.4483V11.4517V11.4551V11.4584V11.4616V11.4648V11.4679V11.4709V11.4738V11.4767V11.4795V11.4822V11.4849V11.4874V11.4899V11.4924V11.4947V11.497V11.4992V11.5014V11.5034V11.5054V11.5073V11.5091V11.5109V11.5126V11.5142V11.5157V11.5172V11.5185V11.5198V11.5211V11.5222V11.5233V11.5243V11.5252V11.526V11.5268V11.5274V11.528V11.5286V11.529V11.5294V11.5296V11.5298V11.53L13.5043 11.53H13.0543C13.0543 11.7785 13.2557 11.98 13.5043 11.98C13.7528 11.98 13.9543 11.7785 13.9543 11.53H13.5043L13.9543 11.53V11.5298V11.5296V11.5294V11.529V11.5286V11.528V11.5274V11.5268V11.526V11.5252V11.5243V11.5233V11.5222V11.5211V11.5198V11.5185V11.5172V11.5157V11.5142V11.5126V11.5109V11.5091V11.5073V11.5054V11.5034V11.5014V11.4992V11.497V11.4947V11.4924V11.4899V11.4874V11.4849V11.4822V11.4795V11.4767V11.4738V11.4709V11.4679V11.4648V11.4616V11.4584V11.4551V11.4517V11.4483V11.4448V11.4412V11.4375V11.4338V11.43V11.4261V11.4222V11.4182V11.4141V11.41V11.4058V11.4015V11.3972V11.3928V11.3883V11.3837V11.3791V11.3744V11.3697V11.3649V11.36V11.355V11.35V11.3449V11.3398V11.3346V11.3293V11.3239V11.3185V11.3131V11.3075V11.3019V11.2963V11.2905V11.2847V11.2789V11.273V11.267V11.2609V11.2548V11.2487V11.2424V11.2361V11.2298V11.2234V11.2169V11.2103V11.2037V11.1971V11.1904V11.1836V11.1767V11.1698V11.1629V11.1559V11.1488V11.1416V11.1344V11.1272V11.1199V11.1125V11.1051V11.0976V11.0901V11.0825V11.0748V11.0671V11.0593V11.0515V11.0436V11.0357V11.0277V11.0196V11.0115V11.0034V10.9951V10.9869V10.9785V10.9702V10.9617V10.9532V10.9447V10.9361V10.9275V10.9188V10.91V10.9012V10.8924V10.8834V10.8745V10.8655V10.8564V10.8473V10.8381V10.8289V10.8196V10.8103V10.801V10.7915V10.7821V10.7726V10.763V10.7534V10.7437V10.734V10.7242V10.7144V10.7046V10.6947V10.6847V10.6747V10.6646V10.6545V10.6444V10.6342V10.624V10.6137V10.6034V10.593V10.5826V10.5721V10.5616V10.5511V10.5405V10.5298V10.5191V10.5084V10.4976V10.4868V10.4759V10.465V10.4541V10.4431V10.4321V10.421V10.4099V10.3987V10.3875V10.3763V10.365V10.3536V10.3423V10.3309V10.3194V10.3079V10.2964V10.2848V10.2732V10.2616V10.2499V10.2382V10.2264V10.2146V10.2028V10.1909V10.179V10.167V10.155V10.143V10.1309V10.1188V10.1067V10.0945V10.0823V10.07V10.0578V10.0454V10.0331V10.0207V10.0083V9.99581V9.98331V9.97079V9.95822V9.94563V9.933V9.92033V9.90764V9.89491V9.88214V9.86935V9.85652V9.84366V9.83077V9.81784V9.80489V9.7919V9.77888V9.76584V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91984V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54952V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534V7.29011V7.27489V7.25967V7.24446V7.22925V7.21405V7.19885V7.18366V7.16848V7.15331V7.13814V7.12298V7.10783V7.09268V7.07754V7.06241V7.04729V7.03218V7.01708V7.00198V6.9869V6.97182V6.95675V6.94169V6.92665V6.91161V6.89658V6.88157V6.86656V6.85157V6.83658V6.82161V6.80665V6.79171V6.77677V6.76185V6.74694V6.73204V6.71715V6.70228V6.68742V6.67258V6.65774V6.64293V6.62812V6.61334V6.59856V6.5838V6.56906V6.55433V6.53962V6.52492V6.51024V6.49557V6.48092V6.46629V6.45167V6.43707V6.42249V6.40793V6.39338V6.37885V6.36434V6.34985V6.33537V6.32092V6.30648V6.29206V6.27767V6.26329V6.24893V6.23459V6.22027V6.20597V6.19169V6.17744V6.1632V6.14899V6.13479V6.12062V6.10647V6.09234V6.07824V6.06415V6.05009V6.03606V6.02204V6.00805V5.99408V5.98014V5.96622V5.95232V5.93845V5.92461V5.91078V5.89699V5.88321V5.86947V5.85575V5.84205V5.82838V5.81474V5.80113V5.78754V5.77398V5.76044V5.74693V5.73345V5.72C13.9543 5.47147 13.7528 5.27 13.5043 5.27C13.2557 5.27 13.0543 5.47147 13.0543 5.72V5.73345V5.74693V5.76044V5.77398V5.78754V5.80113V5.81474V5.82838V5.84205V5.85575V5.86947V5.88321V5.89699V5.91078V5.92461V5.93845V5.95232V5.96622V5.98014V5.99408V6.00805V6.02204V6.03606V6.05009V6.06415V6.07824V6.09234V6.10647V6.12062V6.13479V6.14899V6.1632V6.17744V6.19169V6.20597V6.22027V6.22318C12.5054 5.60095 11.6924 5.20703 10.7989 5.20703ZM13.0543 7.30534V7.30196C12.6639 6.58102 11.8414 6.05757 10.9867 6.05757C10.0088 6.05757 8.93503 6.96581 8.93503 8.60955C8.93503 10.1533 9.90884 11.1615 10.9867 11.1615C11.8701 11.1615 12.672 10.4952 13.0543 9.79822V9.7919V9.77888V9.76584V9.75276V9.73965V9.72651V9.71334V9.70014V9.68691V9.67365V9.66036V9.64704V9.6337V9.62032V9.60692V9.59349V9.58003V9.56654V9.55303V9.53948V9.52592V9.51232V9.4987V9.48505V9.47137V9.45767V9.44395V9.43019V9.41642V9.40261V9.38878V9.37493V9.36105V9.34715V9.33323V9.31928V9.3053V9.29131V9.27729V9.26324V9.24918V9.23509V9.22098V9.20684V9.19269V9.17851V9.16431V9.15009V9.13585V9.12159V9.10731V9.093V9.07868V9.06433V9.04997V9.03559V9.02118V9.00676V8.99232V8.97786V8.96338V8.94888V8.93437V8.91984V8.90528V8.89072V8.87613V8.86153V8.84691V8.83227V8.81762V8.80295V8.78826V8.77356V8.75884V8.74411V8.72936V8.7146V8.69982V8.68503V8.67022V8.6554V8.64057V8.62572V8.61086V8.59598V8.58109V8.56619V8.55128V8.53635V8.52141V8.50646V8.4915V8.47652V8.46154V8.44654V8.43153V8.41651V8.40148V8.38644V8.37139V8.35633V8.34127V8.32619V8.3111V8.296V8.28089V8.26578V8.25066V8.23552V8.22039V8.20524V8.19008V8.17492V8.15975V8.14457V8.12939V8.1142V8.09901V8.0838V8.06859V8.05338V8.03816V8.02294V8.00771V7.99247V7.97723V7.96199V7.94674V7.93149V7.91623V7.90098V7.88571V7.87045V7.85518V7.83991V7.82463V7.80936V7.79408V7.7788V7.76352V7.74823V7.73295V7.71766V7.70238V7.68709V7.6718V7.65652V7.64123V7.62594V7.61065V7.59537V7.58008V7.5648V7.54952V7.53423V7.51895V7.50368V7.4884V7.47313V7.45786V7.44259V7.42732V7.41206V7.3968V7.38155V7.3663V7.35105V7.33581V7.32057V7.30534Z"
                      fill="currentColor"
                    />
                  </svg>
                </SimpleToggle>
              </Flex>
            </Flex>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <Checkbox css={{ mr: '$5' }} />
            <Checkbox size="2" css={{ mr: '$5' }} />
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <RadioGroup defaultValue="1">
              <RadioGroup.Radio value="1" css={{ mr: '$5' }} />
              <RadioGroup.Radio value="2" size="2" css={{ mr: '$5' }} />
            </RadioGroup>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2" css={{ py: '$7' }}>
            <RadioGroup defaultValue="1">
              <RadioCard.Radio value="1" css={{ mb: '$2' }}>
                <Flex css={{ alignItems: 'center' }}>
                  <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
                    2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
                  </Text>
                  <Text size="4" color="gray">
                    -$1600
                  </Text>
                </Flex>
              </RadioCard.Radio>
              <RadioCard.Radio value="2" css={{ mb: '$2' }}>
                <Flex css={{ alignItems: 'center' }}>
                  <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
                    2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
                  </Text>
                  <Text size="4" color="gray">
                    -$800
                  </Text>
                </Flex>
              </RadioCard.Radio>
              <RadioCard.Radio value="3" css={{ mb: '$2' }}>
                <Flex css={{ alignItems: 'center' }}>
                  <Text size="5" css={{ fontWeight: '500', lineHeight: '25px', mr: '$6' }}>
                    2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
                  </Text>
                  <Text size="4" color="gray"></Text>
                </Flex>
              </RadioCard.Radio>
            </RadioGroup>
          </Container>
        </Section>
        <Flex css={{ jc: 'center' }}>
          <Separator size="2" />
        </Flex>
        <Section size="3">
          <Container size="2">
            <Switch />
            <Switch size="2" css={{ ml: '$6' }} />
          </Container>
        </Section>
        <Menus />
      </Box>
    </Box>
  );
}

export default Home;
