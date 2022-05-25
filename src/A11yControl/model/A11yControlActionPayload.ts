import { A11yControlActions } from './A11yControlActions';
import {
  A11yColorSchema,
  A11yControlState,
  A11yImageMode,
  A11yLetterSpacing,
  A11yLineHeight
} from './types';

export class A11yControlActionPayload implements Record<A11yControlActions, unknown> {
  [A11yControlActions.TOGGLE_PANEL]: boolean;
  [A11yControlActions.SET_CACHED_STATE]: Partial<A11yControlState>;
  [A11yControlActions.TOGGLE_MODE]: boolean;
  [A11yControlActions.SET_ACTIVE_COLOR]: A11yColorSchema;
  [A11yControlActions.SET_FONT_SIZE]: number;
  [A11yControlActions.TOGGLE_IS_SERIF]: boolean;
  [A11yControlActions.SET_LINE_HEIGHT]: A11yLineHeight;
  [A11yControlActions.SET_LETTER_SPACING]: A11yLetterSpacing;
  [A11yControlActions.SET_IMAGE_MODE]: A11yImageMode;
}
