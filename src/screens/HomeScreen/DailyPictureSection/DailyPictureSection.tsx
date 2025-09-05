import Spacings from '@/src/constants/Spacings';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useGetTheme } from '@/src/hooks/useGetTheme';
import DailyPictureSectionHeader from '@/src/screens/HomeScreen/DailyPictureSection/DailyPictureSectionHeader';
import DailyPictureCard from '@/src/screens/HomeScreen/DailyPictureSection/DailyPictureCard';
import FullScreenLoader from '@/src/components/FullScreenLoader';
import { useGetTodaysPicture } from '@/src/api/getTodaysPicture';

export default function DailyPictureSection() {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'Screens.HomeScreen.dailyPictureSection',
  });
  const { theme } = useGetTheme();
  const { data: todaysPictureData, isFetching } = useGetTodaysPicture();

  const dailyPictureSectionContainerStyle: ViewStyle = {
    boxShadow: theme.boxShadowSm,
    backgroundColor: theme.surfaceVariant,
  };

  if (!todaysPictureData) return null;

  return (
    <>
      <View style={[styles.container, dailyPictureSectionContainerStyle]}>
        <DailyPictureSectionHeader
          title={t('title')}
          imageUrl={todaysPictureData?.hdurl ?? todaysPictureData?.url}
        />
        <DailyPictureCard
          title={todaysPictureData?.title}
          date={todaysPictureData?.date}
          imageUrl={todaysPictureData?.hdurl ?? todaysPictureData?.url}
        />
      </View>
      <FullScreenLoader isLoading={isFetching} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacings.md,
    paddingHorizontal: Spacings.xlg,
    borderWidth: 1,
    borderColor: 'transparent',
  },
});
