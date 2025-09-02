import ShareIconButton from '@/src/components/HomeScreen/DailyPictureSection/IconButton/ShareIconButton';
import Spacings from '@/src/constants/Spacings';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface DailyPictureSectionHeaderProps {
  title: string;
  imageUrl: string;
}

export default function DailyPictureSectionHeader({
  title,
  imageUrl,
}: DailyPictureSectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">{title}</Text>
      <ShareIconButton url={imageUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: Spacings.sm,
  },
});
