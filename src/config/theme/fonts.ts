import { configureFonts } from 'react-native-paper';

const fontConfig = {
  displayLarge: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: 0,
  },
  headlineLarge: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  titleLarge: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  titleSmall: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  bodyLarge: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  bodyMedium: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  bodySmall: {
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  labelLarge: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  labelSmall: {
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.5,
  },

  default: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    letterSpacing: 0,
    fontSize: 16,
  },
} as const;

export const fonts = configureFonts({ config: fontConfig });
