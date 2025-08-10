import { CommonColors, ThemeColors } from '@/src/@types/theme.type';
import { getTheme } from '@/src/utils/theme.utils';
import { ColorSchemeName, useColorScheme } from 'react-native';

type UseGetThemeType = {
  colorScheme: ColorSchemeName;
  theme: ThemeColors & CommonColors;
};

type UseGetThemeFnType = () => UseGetThemeType;

/**
 * Custom hook to get the current color scheme and corresponding theme colors.
 *
 * This hook uses the system color scheme (light or dark) via React Native's
 * `useColorScheme` and returns the appropriate theme colors by calling
 * `getTheme` utility function.
 *
 * @returns {UseGetThemeType} An object containing:
 *  - `colorScheme` {ColorSchemeName} The current color scheme ('light' | 'dark' | null).
 *  - `theme` {ThemeColors & CommonColors} The theme colors corresponding to the current color scheme.
 */
export const useGetTheme: UseGetThemeFnType = (): UseGetThemeType => {
  const colorScheme: ColorSchemeName = useColorScheme();
  const theme: ThemeColors & CommonColors = getTheme(colorScheme);

  return { colorScheme, theme };
};
