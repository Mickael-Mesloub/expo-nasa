import Colors from '@/src/constants/Colors';

type ColorsType = typeof Colors;
type ThemeColors = ColorsType['light'];
type CommonColors = ColorsType['common'];

export { ColorsType, ThemeColors, CommonColors };
