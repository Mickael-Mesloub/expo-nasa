import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import 'react-native-reanimated';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';
import Colors from '@/constants/Colors';
import merge from 'deepmerge';

const customDarkTheme = {
  ...NavigationDarkTheme,
  ...MD3DarkTheme,
  colors: { ...NavigationDarkTheme.colors, ...Colors.dark },
};

const customLightTheme = {
  ...NavigationDefaultTheme,
  ...MD3LightTheme,
  colors: { ...NavigationDefaultTheme.colors, ...Colors.light },
};

// The adaptNavigationTheme function takes an existing React Navigation
// theme and returns a React Navigation theme using the colors from
// Material Design 3
const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

// Merge React Native Paper Theme and Expo Router Theme
// using deepmerge
const CombinedLightTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export { CombinedLightTheme, CombinedDarkTheme };
