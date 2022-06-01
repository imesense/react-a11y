import { A11yControlAction, A11yControlActions, A11yControlState } from './model';

export const reducer = (
  state: A11yControlState,
  action: A11yControlAction<A11yControlActions>
): A11yControlState => {
  switch (action.type) {
    case A11yControlActions.TOGGLE_PANEL: {
      return {
        ...state,
        isPanelVisible: (action as A11yControlAction<A11yControlActions.TOGGLE_PANEL>).payload,
      };
    }

    case A11yControlActions.SET_CACHED_STATE: {
      return {
        ...state,
        ...(action as A11yControlAction<A11yControlActions.SET_CACHED_STATE>).payload,
      };
    }

    case A11yControlActions.TOGGLE_MODE: {
      return {
        ...state,
        isEnabled: (action as A11yControlAction<A11yControlActions.TOGGLE_MODE>).payload,
      };
    }

    case A11yControlActions.SET_ACTIVE_COLOR: {
      return {
        ...state,
        activeColor: (action as A11yControlAction<A11yControlActions.SET_ACTIVE_COLOR>).payload,
      };
    }

    case A11yControlActions.SET_FONT_SIZE: {
      return {
        ...state,
        fontSize: (action as A11yControlAction<A11yControlActions.SET_FONT_SIZE>).payload,
      };
    }

    case A11yControlActions.TOGGLE_IS_SERIF: {
      return {
        ...state,
        isSerif: (action as A11yControlAction<A11yControlActions.TOGGLE_IS_SERIF>).payload,
      };
    }

    case A11yControlActions.SET_LINE_HEIGHT: {
      return {
        ...state,
        lineHeight: (action as A11yControlAction<A11yControlActions.SET_LINE_HEIGHT>).payload,
      };
    }

    case A11yControlActions.SET_LETTER_SPACING: {
      return {
        ...state,
        letterSpacing: (action as A11yControlAction<A11yControlActions.SET_LETTER_SPACING>).payload,
      };
    }

    case A11yControlActions.SET_IMAGE_MODE: {
      return {
        ...state,
        imageMode: (action as A11yControlAction<A11yControlActions.SET_IMAGE_MODE>).payload,
      };
    }

    default: return state;
  }
};
