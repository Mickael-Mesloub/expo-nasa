import { useGetTheme } from '@/src/hooks/useGetTheme';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';

interface FullScreenLoaderProps {
  isLoading: boolean;
}

export default function FullScreenLoader({ isLoading }: FullScreenLoaderProps) {
  const { theme } = useGetTheme();

  if (!isLoading) return;

  return (
    <Portal>
      <Modal visible={isLoading}>
        <ActivityIndicator size="large" color={theme.primaryContainer} />
      </Modal>
    </Portal>
  );
}
