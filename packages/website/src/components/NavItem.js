import React from 'react';
import { Link } from 'gatsby';
import { ListItem, Text } from '@modulz/radix';
import { ExternalLinkIcon } from '@modulz/radix-icons';

function NavItem({ children, isExternal, active, ...props }) {
  return (
    <ListItem as={Link} {...props} variant={active ? 'active' : undefined} px={5} minHeight={6}>
      <Text size={2} textColor={active ? 'white' : undefined} mr={isExternal ? 1 : 0}>
        {children}
      </Text>
      {isExternal && <ExternalLinkIcon />}
    </ListItem>
  );
}

export default NavItem;
