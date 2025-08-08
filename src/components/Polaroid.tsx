import Colors from '@/src/constants/Colors';
import Spacings from '@/src/constants/Spacings';
import { Image } from 'expo-image';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';

interface PolaroidProps {
  title: string;
  date: string;
  imageUrl: string;
}

export default function Polaroid({ title, date, imageUrl }: PolaroidProps) {
  const { height } = useWindowDimensions();

  return (
    <View style={[styles.container, { maxHeight: height / 1.8 }]}>
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
    padding: Spacings.xlg,
    borderWidth: 1,
    borderColor: 'transparent',
    shadowColor: Colors.common.black,
    shadowOffset: {
      height: Spacings.xs,
      width: Spacings.xs,
    },
    shadowOpacity: 0.6,
    shadowRadius: Spacings.xxs,
    elevation: Spacings.xxs,
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
