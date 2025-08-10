import Colors from '@/src/constants/Colors';
import Spacings from '@/src/constants/Spacings';
import { useGetTheme } from '@/src/hooks/useGetTheme';
import { Alert, StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

interface TodaysPictureSectionHeaderProps {
  title: string;
}

export default function ({ title }: TodaysPictureSectionHeaderProps) {
  const { theme } = useGetTheme();
  const iconColor: string = theme.primary;
  const iconContainerColor: string = theme.primaryContainer;

  // TODO: add sharing feature when Share icon button is pressed
  const share = () =>
    Alert.alert("Share today's picture", 'Check this out!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">{title}</Text>
      <IconButton
        icon="share-variant-outline"
        size={20}
        iconColor={iconColor}
        containerColor={iconContainerColor}
        onPress={share}
        style={styles.iconButton}
      />
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

  iconButton: {
    boxShadow: Colors.common.boxShadowSm,
  },
});
