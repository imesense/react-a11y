import React, { FC, PropsWithChildren, useContext, useEffect } from 'react';
import {
  a11yA11ColorSchemas,
  A11yColorSchema,
  A11yControl,
  a11yFontSizes,
  A11yImageMode,
  a11yImageModes,
  A11yLetterSpacing,
  a11yLetterSpacings,
  A11yLineHeight,
  a11yLineHeights
} from '../../A11yControl';

const a11yModeBodyClass = 'a11y-mode';
const a11ySerifFontClass = 'a11y-serif';

const getSchemaClass = (schema: A11yColorSchema) => `a11y-schema-${schema}`;
const getFontSizeClass = (size: number) => `font-size-${size}`;
const getLineHeightClass = (height: A11yLineHeight) => `a11y-line-height_${height}`;
const getLetterSpacingClass = (spacing: A11yLetterSpacing) => `a11y-letter-spacing_${spacing}`;
const getImageModeClass = (mode: A11yImageMode) => `a11y-image-mode_${mode}`;

export const A11yStyleWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { a11yState } = useContext(A11yControl);

  useEffect(() => {
    if (document) {
      const htmlClassList = document.documentElement.classList;

      htmlClassList.remove(
        ...a11yFontSizes.map(getFontSizeClass),
        a11ySerifFontClass,
        a11yModeBodyClass,
        ...a11yA11ColorSchemas.map(getSchemaClass),
        ...a11yLineHeights.map(getLineHeightClass),
        ...a11yLetterSpacings.map(getLetterSpacingClass),
        getImageModeClass(a11yImageModes[1]),
        getImageModeClass(a11yImageModes[2]),
      );

      if (a11yState.isEnabled) {
        htmlClassList.add(
          a11yModeBodyClass,
          getSchemaClass(a11yState.activeColor),
          getFontSizeClass(a11yState.fontSize),
          getLineHeightClass(a11yState.lineHeight),
          getLetterSpacingClass(a11yState.letterSpacing),
        );

        if (a11yState.isSerif) {
          htmlClassList.add(a11ySerifFontClass);
        }

        if (a11yState.imageMode !== 'enabled') {
          htmlClassList.add(getImageModeClass(a11yState.imageMode));
        }
      }
    }
  }, [a11yState]);

  return <>{children}</>;
};
