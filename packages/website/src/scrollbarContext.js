import React from 'react';

export const SidebarScrollContext = React.createContext();

export const SidebarScrollProvider = props => {
  const [pos, setPos] = React.useState(0);
  return (
    <SidebarScrollContext.Provider value={{ current: pos, setPrevious: setPos }}>
      {props.children}
    </SidebarScrollContext.Provider>
  );
};
