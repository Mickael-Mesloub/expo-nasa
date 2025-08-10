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
import Spacings from '@/src/constants/Spacings';
import TodaysPictureSection from '@/src/components/HomeScreen/TodaysPictureSection/TodaysPictureSection';

export default function Index() {
  const { top }: EdgeInsets = useSafeAreaInsets();
  const colorScheme: ColorSchemeName = useColorScheme();
  const logoSource: string = isDarkMode(colorScheme)
    ? (logoLight as string)
    : (logoDark as string);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: top }]}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoSource} />
      </View>
      <TodaysPictureSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
