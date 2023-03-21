import React, { FC, ReactNode } from 'react';
import Header from 'src/layout/header/header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className="relative min-h-screen bg">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
