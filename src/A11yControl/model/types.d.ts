import { Dispatch } from 'react';
import { A11yControlActionPayload } from './A11yControlActionPayload';
import { A11yControlActions } from './A11yControlActions';

export type A11yColorSchema = 'white' | 'black' | 'blue' | 'beige' | 'brown';
export type A11yLineHeight = 'small' | 'medium' | 'big';
export type A11yLetterSpacing = A11yLineHeight;
export type A11yImageMode = 'enabled' | 'disabled' | 'black_white';

export interface A11yControlState {
  isPanelVisible: boolean;
  isEnabled: boolean;
  activeColor: A11yColorSchema;
  fontSize: number;
  isSerif: boolean;
  lineHeight: A11yLineHeight;
  letterSpacing: A11yLetterSpacing;
  imageMode: A11yImageMode;
}

export interface A11yControlAction<A extends A11yControlActions> {
  type: A;
  payload: A11yControlActionPayload[A];
}

export type A11yControlActionDispatch<A extends A11yControlActions> = Dispatch<A11yControlAction<A>>;
