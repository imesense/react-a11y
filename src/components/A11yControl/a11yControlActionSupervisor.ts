import {
  A11yControlActionDispatch,
  A11yControlActionPayload,
  A11yControlActions,
  A11yControlState,
  a11yFontSizes
} from './model';

export const togglePanel = (
  dispatch: A11yControlActionDispatch<A11yControlActions.TOGGLE_PANEL>,
  payload: A11yControlActionPayload[A11yControlActions.TOGGLE_PANEL]
) => dispatch({
  type: A11yControlActions.TOGGLE_PANEL,
  payload,
});

export const toggleMode = (
  dispatch: A11yControlActionDispatch<A11yControlActions.TOGGLE_MODE>,
  payload: A11yControlActionPayload[A11yControlActions.TOGGLE_MODE]
) => dispatch({
  type: A11yControlActions.TOGGLE_MODE,
  payload,
});

export const setActiveColor = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_ACTIVE_COLOR>,
  payload: A11yControlActionPayload[A11yControlActions.SET_ACTIVE_COLOR]
) => dispatch({
  type: A11yControlActions.SET_ACTIVE_COLOR,
  payload,
});

export const increaseFont = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_FONT_SIZE>,
  state: A11yControlState,
) => {
  const currentSizeIndex = a11yFontSizes.indexOf(state.fontSize);

  return currentSizeIndex === (a11yFontSizes.length - 1) ? null : dispatch({
    type: A11yControlActions.SET_FONT_SIZE,
    payload: a11yFontSizes[currentSizeIndex + 1],
  });
};

export const decreaseFont = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_FONT_SIZE>,
  state: A11yControlState,
) => {
  const currentSizeIndex = a11yFontSizes.indexOf(state.fontSize);

  return currentSizeIndex === 0 ? null : dispatch({
    type: A11yControlActions.SET_FONT_SIZE,
    payload: a11yFontSizes[currentSizeIndex - 1],
  });
};

export const toggleIsSerif = (
  dispatch: A11yControlActionDispatch<A11yControlActions.TOGGLE_IS_SERIF>,
  payload: A11yControlActionPayload[A11yControlActions.TOGGLE_IS_SERIF],
) => dispatch({
  type: A11yControlActions.TOGGLE_IS_SERIF,
  payload,
});

export const setLineHeight = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_LINE_HEIGHT>,
  payload: A11yControlActionPayload[A11yControlActions.SET_LINE_HEIGHT],
) => dispatch({
  type: A11yControlActions.SET_LINE_HEIGHT,
  payload,
});

export const setLetterSpacing = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_LETTER_SPACING>,
  payload: A11yControlActionPayload[A11yControlActions.SET_LETTER_SPACING],
) => dispatch({
  type: A11yControlActions.SET_LETTER_SPACING,
  payload,
});

export const setImageMode = (
  dispatch: A11yControlActionDispatch<A11yControlActions.SET_IMAGE_MODE>,
  payload: A11yControlActionPayload[A11yControlActions.SET_IMAGE_MODE],
) => dispatch({
  type: A11yControlActions.SET_IMAGE_MODE,
  payload,
});
