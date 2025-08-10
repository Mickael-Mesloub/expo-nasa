import Colors from '@/src/constants/Colors';
import Spacings from '@/src/constants/Spacings';
import { useTranslation } from 'react-i18next';
import { StyleSheet, useWindowDimensions, View, ViewStyle } from 'react-native';
import TodaysPictureSectionHeader from '@/src/components/HomeScreen/TodaysPictureSection/TodaysPictureSectionHeader';
import TodaysPictureData from '@/src/components/HomeScreen/TodaysPictureSection/TodaysPictureData';
import imageUrl from '@/src/assets/images/cosmos.jpg';
import { useGetTheme } from '@/src/hooks/useGetTheme';

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

export default function () {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'Screens.HomeScreen.todaysPictureSection',
  });
  const { height: windowH } = useWindowDimensions();
  const { theme } = useGetTheme();
  const todaysPictureSectionBgColor: string = theme.surfaceVariant;
  const todaysPictureSectionMaxHeight: number = windowH / 1.5;
  const todaysPictureSectionContainerStyle: ViewStyle = {
    backgroundColor: todaysPictureSectionBgColor,
    maxHeight: todaysPictureSectionMaxHeight,
  };

  return (
    <View style={[styles.container, todaysPictureSectionContainerStyle]}>
      <TodaysPictureSectionHeader title={t('title')} />
      <TodaysPictureData
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
