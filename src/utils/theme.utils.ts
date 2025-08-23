import { CommonColors, ThemeColors } from '@/src/@types/theme.types';
import Colors from '@/src/constants/Colors';
import { ColorSchemeName } from 'react-native';

type IsDarkModeFnType = (currentColorScheme: ColorSchemeName) => boolean;

/**
 * Returns true if the current color scheme is "dark", otherwise false.
 *
 * @param {ColorSchemeName} currentColorScheme Current theme ("light" or "dark").
 * @returns {boolean} True if the current theme is "dark".
 */
export const isDarkMode: IsDarkModeFnType = (
  currentColorScheme: ColorSchemeName,
): boolean => currentColorScheme === 'dark';

type GetThemeFnType = (
  currentColorScheme: ColorSchemeName,
) => ThemeColors & CommonColors;

/**
 * Returns the complete theme colors object for the given color scheme,
 * including both the palette colors (light or dark) and the common colors.
 *
 * @param {ColorSchemeName} currentColorScheme - The current color scheme, typically 'light' or 'dark'.
 * @returns {ThemeColors & CommonColors} An object containing all theme colors for the specified scheme,
 * merged with the common colors shared across themes.
 */
export const getTheme: GetThemeFnType = (
  currentColorScheme: ColorSchemeName,
): ThemeColors & CommonColors => {
  const themeColors = isDarkMode(currentColorScheme)
    ? Colors.dark
    : Colors.light;
  return {
    ...themeColors,
    ...Colors.common,
  };
};
