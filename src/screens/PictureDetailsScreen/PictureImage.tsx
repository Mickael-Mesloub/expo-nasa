import { useAvailableHeight } from '@/src/screens/PictureDetailsScreen/hooks/useAvailableHeight';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface PictureImageProps {
  url: string;
}

export default function PictureImage({ url }: PictureImageProps) {
  const { onLayout, availableHeight } = useAvailableHeight();
  const styles = createStyles({ availableHeight });

  return (
    <View onLayout={onLayout} style={styles.imageContainer}>
      <Image source={url} style={styles.image} />
    </View>
  );
}

const createStyles = (args: any) =>
  StyleSheet.create({
    imageContainer: {
      flex: 1,
      height: args.availableHeight,
    },

    image: {
      width: '100%',
      height: '100%',
    },
  });
