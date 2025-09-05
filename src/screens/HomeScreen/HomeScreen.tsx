import {
  ColorSchemeName,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { EdgeInsets, SafeAreaView } from 'react-native-safe-area-context';
import logoDark from '@/src/assets/icons/splash-icon-dark.png';
import logoLight from '@/src/assets/icons/splash-icon-light.png';
import { isDarkMode } from '@/src/utils/theme.utils';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DailyPictureSection from '@/src/screens/HomeScreen/DailyPictureSection/DailyPictureSection';

export default function HomeScreen() {
  const { top }: EdgeInsets = useSafeAreaInsets();
  const colorScheme: ColorSchemeName = useColorScheme();
  const logoSource: string = isDarkMode(colorScheme)
    ? (logoLight as string)
    : (logoDark as string);

  const styles = makeStyles({ top });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoSource} />
      </View>
      <DailyPictureSection />
    </SafeAreaView>
  );
}

const makeStyles = (args: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: args.top,
    },

    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      width: 100,
      height: 100,
    },
  });
