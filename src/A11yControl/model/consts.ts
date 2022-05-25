import { A11yColorSchema, A11yImageMode, A11yLetterSpacing, A11yLineHeight } from './types';

export const a11yA11ColorSchemas: A11yColorSchema[] = ['white', 'black', 'blue', 'beige', 'brown'];
export const a11yFontSizes = [14, 15, 16, 17, 18, 19, 20];
export const a11yLineHeights: A11yLineHeight[] = ['small', 'medium', 'big'];
export const a11yLetterSpacings: A11yLetterSpacing[] = [...a11yLineHeights];
export const a11yImageModes: A11yImageMode[] = ['enabled', 'disabled', 'black_white'];
