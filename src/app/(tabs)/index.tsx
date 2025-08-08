import {
  ColorSchemeName,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoDark from '@/src/assets/icons/splash-icon-dark.png';
import logoLight from '@/src/assets/icons/splash-icon-light.png';
import { isDarkMode } from '@/src/utils/theme';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Polaroid from '@/src/components/Polaroid';
import imageUrl from '@/src/assets/images/cosmos.jpg';
import Spacings from '@/src/constants/Spacings';

// TODO: replace mock type and data with real data from Nasa APOD API data
type MockPictureDataType = {
  title: string;
  date: string;
  imageUrl: string;
};

const mockPictureData: MockPictureDataType = {
  title:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus',
  date: new Date(Date.now()).toLocaleDateString(),
  imageUrl,
};

export default function Index() {
  const insets = useSafeAreaInsets();
  const colorScheme: ColorSchemeName = useColorScheme();
  const logoSource: string = isDarkMode(colorScheme)
    ? (logoLight as string)
    : (logoDark as string);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logoSource} />
      </View>
      <View style={styles.polaroidContainer}>
        <Polaroid {...mockPictureData} />
      </View>
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

  polaroidContainer: {
    flex: 1,
    padding: Spacings.md,
  },
});
