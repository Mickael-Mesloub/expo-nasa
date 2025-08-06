import { ColorSchemeName } from 'react-native';

/**
 *
 * @param currentColorScheme Current theme ("light" or "dark")
 * @returns true if the current theme is "dark"
 */
export const isDarkMode = (currentColorScheme: ColorSchemeName) => {
  return currentColorScheme === 'dark';
};
