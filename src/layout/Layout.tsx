import React, { FC, ReactNode, Fragment, useContext } from 'react';
import { Header } from './Header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
