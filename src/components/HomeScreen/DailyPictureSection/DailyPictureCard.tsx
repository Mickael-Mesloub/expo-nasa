import Spacings from '@/src/constants/Spacings';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'expo-image';

interface DailyPictureCardProps {
  title: string;
  date: string;
  imageUrl: string;
}

export default function DailyPictureCard({
  title,
  date,
  imageUrl,
}: DailyPictureCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <View style={styles.information}>
        <Text variant="bodyMedium" style={styles.date}>
          {date}
        </Text>
        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
    objectFit: 'cover',
    maxHeight: 300,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  information: {
    marginTop: Spacings.xxs,
  },

  date: {
    fontStyle: 'italic',
  },

  title: {
    paddingTop: Spacings.md,
  },
});
