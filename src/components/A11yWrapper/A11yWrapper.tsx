import React from 'react';
import { FC, PropsWithChildren } from 'react';
import { A11yControlProvider } from '../A11yControl';
import { A11yStyleWrapper } from './A11yStyleWrapper/A11yStyleWrapper';

export const A11yWrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <A11yControlProvider>
    <A11yStyleWrapper>{children}</A11yStyleWrapper>
  </A11yControlProvider>
);
