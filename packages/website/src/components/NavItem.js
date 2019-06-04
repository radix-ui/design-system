import React from 'react';
import { Link } from 'gatsby';
import { MenuItem, Text } from '@modulz/radix';

function NavItem({ label, active, ...props }) {
  return (
    <MenuItem as={Link} variant={active ? 'active' : undefined} {...props}>
      <Text size={2} color={active && 'white'}>
        {label}
      </Text>
    </MenuItem>
  );
}

export default NavItem;
