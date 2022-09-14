import React, { createContext, FC, useReducer, useState, useEffect } from 'react';
import { reducer } from './a11yControlReducer';
import { initialState } from './initialState';
import { LocalStorageMiddleware } from './LocalStorageMiddleware';
import { A11yControlState, A11yControlActionDispatch, A11yControlActions } from './model';

export const A11yControl = createContext<{
  a11yState: A11yControlState;
  dispatch: A11yControlActionDispatch<A11yControlActions>
}>({
  a11yState: initialState,
  dispatch: () => {},
});

export const A11yControlProvider: FC = ({ children }) => {
  const [a11yState, dispatch] = useReducer(reducer, initialState);
  const [isInited, setInit] = useState(false);
  const value = { a11yState, dispatch };

  useEffect(() => {
    if (!isInited) {
      dispatch({
        type: A11yControlActions.SET_CACHED_STATE,
        payload: LocalStorageMiddleware.load(),
      });
      setInit(true);
    }
  }, [isInited]);

  useEffect(() => {
    LocalStorageMiddleware.save(a11yState);
  }, [a11yState]);

  return <A11yControl.Provider value={value}>{children}</A11yControl.Provider>;
};
