import React, { ReactNode } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, Theme } from '@material-ui/core/styles';

interface BaseLayoutProps {
  theme: Theme;
  children: ReactNode;
}

export default function BaseLayout({ theme, children }: BaseLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
