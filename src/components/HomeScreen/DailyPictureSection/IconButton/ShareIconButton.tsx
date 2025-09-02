import { useGetTheme } from '@/src/hooks/useGetTheme';
import { IconButton } from 'react-native-paper';
import Share from 'react-native-share';

interface ShareIconButtonProps {
  url: string;
}

export default function ShareIconButton({ url }: ShareIconButtonProps) {
  const { theme } = useGetTheme();
  const iconColor: string = theme.primary;
  const iconContainerColor: string = theme.primaryContainer;

  const share = async () => {
    const options = {
      url,
    };

    try {
      await Share.open(options);
    } catch (error) {
      // INFO - Catch block is triggered even if user shared successfully
      // => when go-back buttons are pressed to come back in the app after sharing, it is considered as cancellation.
      console.error('Error =>', error);
    }
  };

  return (
    <IconButton
      icon="share-variant-outline"
      size={20}
      iconColor={iconColor}
      containerColor={iconContainerColor}
      onPress={share}
    />
  );
}
