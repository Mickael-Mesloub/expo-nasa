import Spacings from '@/src/constants/Spacings';
import { Alert, StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { Image } from 'expo-image';
import { useGetTheme } from '@/src/hooks/useGetTheme';

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
  const { theme } = useGetTheme();
  const iconColor: string = theme.primary;
  const iconContainerColor: string = theme.primaryContainer;
  const iconBoxShadow: string = theme.boxShadowSm;

  // TODO: open picture details screen when eye icon button is pressed
  const seePictureDetails = () =>
    Alert.alert("See today's picture details", 'New screen incoming', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <View>
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
      <View style={styles.eyeIconContainer}>
        <IconButton
          icon="eye"
          size={20}
          iconColor={iconColor}
          containerColor={iconContainerColor}
          style={{ boxShadow: iconBoxShadow }}
          onPress={seePictureDetails}
        />
      </View>
    </View>
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
