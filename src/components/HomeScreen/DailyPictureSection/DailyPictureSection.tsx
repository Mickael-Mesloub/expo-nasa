import Colors from '@/src/constants/Colors';
import Spacings from '@/src/constants/Spacings';
import { useTranslation } from 'react-i18next';
import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import imageUrl from '@/src/assets/images/cosmos.jpg';
import { useGetTheme } from '@/src/hooks/useGetTheme';
import DailyPictureSectionHeader from '@/src/components/HomeScreen/DailyPictureSection/DailyPictureSectionHeader';
import DailyPictureCard from '@/src/components/HomeScreen/DailyPictureSection/DailyPictureCard';

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

export default function DailyPictureSection() {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'Screens.HomeScreen.dailyPictureSection',
  });
  const { height: windowH } = useWindowDimensions();
  const { theme } = useGetTheme();
  const dailyPictureSectionBgColor: string = theme.surfaceVariant;
  const dailyPictureSectionMaxHeight: number = windowH / 1.5;
  const dailyPictureSectionContainerStyle: ViewStyle = {
    backgroundColor: dailyPictureSectionBgColor,
    maxHeight: dailyPictureSectionMaxHeight,
  };

  return (
    <View style={[styles.container, dailyPictureSectionContainerStyle]}>
      <DailyPictureSectionHeader title={t('title')} />
      <DailyPictureCard
        title={mockPictureData.title}
        date={mockPictureData.date}
        imageUrl={mockPictureData.imageUrl}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Spacings.md,
    paddingHorizontal: Spacings.xlg,
    borderWidth: 1,
    borderColor: 'transparent',
    boxShadow: Colors.common.boxShadowSm,
  },
});
