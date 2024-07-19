import { useThemeColors } from './use_theme_colors';
import { useMemo } from 'react';

export const useCssColors = () => {
  const colors = useThemeColors();
  const newColors = useMemo(() => {
    return new Proxy(colors, {
      get: function (_, prop) {
        return `var(--${String(prop)})`;
      },
    });
  }, [colors]);

  return newColors;
};
