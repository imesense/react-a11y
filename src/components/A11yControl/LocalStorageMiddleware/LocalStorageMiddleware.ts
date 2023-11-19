import { A11yControlState } from '../model';
import { SavedA11yControlState } from './types';

const STORE_KEY = 'a11y_mode';

const initialData: SavedA11yControlState['data'] = {
  isPanelVisible: false,
};

export const load = (): Partial<SavedA11yControlState['data']> =>
  (JSON.parse(localStorage.getItem(STORE_KEY) ?? 'null') as SavedA11yControlState | null)?.data
  ?? initialData;

export const save = (data: A11yControlState) =>
  localStorage.setItem(STORE_KEY, JSON.stringify({ data }));
