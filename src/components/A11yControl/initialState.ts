import { A11yControlState, a11yFontSizes } from './model';

export const initialState: A11yControlState = {
  isPanelVisible: false,
  isEnabled: false,
  activeColor: 'white',
  fontSize: a11yFontSizes[0],
  isSerif: false,
  lineHeight: 'small',
  letterSpacing: 'small',
  imageMode: 'enabled',
};
