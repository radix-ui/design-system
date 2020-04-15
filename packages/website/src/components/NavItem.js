import React from 'react';
import { Link } from 'gatsby';
import { ListItem, Text } from '@modulz/radix';
import { ExternalLinkIcon } from '@modulz/radix-icons';

function NavItem({ children, isExternal, active, ...props }) {
  return (
    <ListItem
      as={Link}
      {...props}
      target={isExternal ? '_blank' : undefined}
      variant={active ? 'active' : undefined}
      px={5}
      sx={{ minHeight: 6 }}
    >
      <Text size={2} mr={isExternal ? 1 : 0} sx={{ color: active ? 'white' : undefined }}>
        {children}
      </Text>
      {isExternal && <ExternalLinkIcon />}
    </ListItem>
  );
}

export default NavItem;
