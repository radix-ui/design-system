import { Box } from '../components/Box';
import { TreeItem } from '../components/TreeItem';
import { Text } from '../components/Text';
import { ScrollArea } from '../components/Scrollbar';

export function Layers() {
  return (
    <Box
      css={{
        position: 'fixed',
        // top: '36px',
        top: '0',
        left: '0',
        bottom: '0',
        width: '250px',
        borderRight: '1px solid $canvas',
        py: '$1',
        backgroundColor: '$loContrast',
      }}
    >
      <ScrollArea>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$gray400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="gray" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>

        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$red400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="red" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$crimson400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="crimson" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$pink400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="pink" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$purple400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="purple" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$violet400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="violet" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$indigo400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="indigo" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$blue400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="blue" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$turquoise400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="turquoise" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="turquoise" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="turquoise" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$teal400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="teal" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$green400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="green" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>

        <TreeItem css={{ backgroundColor: '$lime400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="lime" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$yellow400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="yellow" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$orange400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="orange" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$gold400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="gold" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$brown400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="brown" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem css={{ backgroundColor: '$bronze400' }}>
          <Box css={{ mr: '$2' }}>
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
                d="M7.49988 1.12704C3.98026 1.12704 1.12704 3.98026 1.12704 7.49988C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49988C13.8727 3.98026 11.0195 1.12704 7.49988 1.12704ZM2.07704 7.49988C2.07704 4.50493 4.50493 2.07704 7.49988 2.07704C10.4948 2.07704 12.9227 4.50493 12.9227 7.49988C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49988ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Radio</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M9.94969 7.49989C9.94969 8.85288 8.85288 9.94969 7.49989 9.94969C6.14691 9.94969 5.0501 8.85288 5.0501 7.49989C5.0501 6.14691 6.14691 5.0501 7.49989 5.0501C8.85288 5.0501 9.94969 6.14691 9.94969 7.49989ZM10.8632 8C10.6213 9.64055 9.20764 10.8997 7.49989 10.8997C5.79214 10.8997 4.37847 9.64055 4.13662 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H4.13659C4.37835 5.35935 5.79206 4.1001 7.49989 4.1001C9.20772 4.1001 10.6214 5.35935 10.8632 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H10.8632Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Slider</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M10.5 4C8.567 4 7 5.567 7 7.5C7 9.433 8.567 11 10.5 11C12.433 11 14 9.433 14 7.5C14 5.567 12.433 4 10.5 4ZM7.67133 11C6.65183 10.175 6 8.91363 6 7.5C6 6.08637 6.65183 4.82498 7.67133 4H4.5C2.567 4 1 5.567 1 7.5C1 9.433 2.567 11 4.5 11H7.67133ZM0 7.5C0 5.01472 2.01472 3 4.5 3H10.5C12.9853 3 15 5.01472 15 7.5C15 9.98528 12.9853 12 10.5 12H4.5C2.01472 12 0 9.98528 0 7.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Switch</Text>
        </TreeItem>
        <TreeItem variant="bronze" css={{ pl: 45 }}>
          <Box css={{ mr: '$2' }}>
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
                d="M3.5 2C3.22386 2 3 2.22386 3 2.5V4C3 4.27614 3.22386 4.5 3.5 4.5C3.77614 4.5 4 4.27614 4 4V3H7V11H6C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12H7.5H9C9.27614 12 9.5 11.7761 9.5 11.5C9.5 11.2239 9.27614 11 9 11H8V3H11V4C11 4.27614 11.2239 4.5 11.5 4.5C11.7761 4.5 12 4.27614 12 4V2.5C12 2.22386 11.7761 2 11.5 2H7.5H3.5Z"
                fill="#282B2E"
              />
            </svg>
          </Box>
          <Text size="1">Text</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
        <TreeItem>
          <Box css={{ mr: '$2' }}>
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
                d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5522 2 13 2.44769 13 3V12C13 12.5522 12.5522 13 12 13H3C2.44769 13 2 12.5522 2 12V3ZM12 3H3V12H12V3Z"
                fill="currentColor"
              />
            </svg>
          </Box>
          <Text size="1">TreeItem</Text>
        </TreeItem>
      </ScrollArea>
    </Box>
  );
}
