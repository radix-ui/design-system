import React from 'react';
import { Link } from 'gatsby';
import { MenuItem, Text } from '@modulz/radix';

function NavItem({ label, active, ...props }) {
  return (
    <MenuItem {...props} as={Link} variant={active ? 'active' : undefined} px={5} minHeight={6}>
      <Text size={2} textColor={active ? 'white' : undefined}>
        {label}
      </Text>
    </MenuItem>
  );
}

export default NavItem;
