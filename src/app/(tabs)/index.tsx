import { ColorSchemeName, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoDark from '@/src/assets/icons/splash-icon-dark.png';
import logoLight from '@/src/assets/icons/splash-icon-light.png';
import { isDarkMode } from '@/src/utils/theme';
import { Image } from 'expo-image';

export default function Index() {
  const colorScheme: ColorSchemeName = useColorScheme();
  const logoSource: string = isDarkMode(colorScheme)
    ? (logoLight as string)
    : (logoDark as string);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoSource} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },

  logo: {
    width: 100,
    height: 100,
  },
});
