import React from 'react';

import style from './style.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <main className={style.layout}>{children}</main>;
}

export default Layout;
