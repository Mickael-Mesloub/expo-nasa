import Spacings from '@/src/constants/Spacings';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

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
  // TODO: add types for navigation
  const router = useRouter();

  const seePictureDetails = () => {
    router.push({
      pathname: '/pictures/[date]',
      params: {
        date,
      },
    });
  };

  return (
    <Pressable onPress={seePictureDetails}>
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
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

  eyeIconContainer: {
    alignItems: 'center',
    paddingTop: Spacings.md,
  },
});
