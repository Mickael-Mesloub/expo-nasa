import { Text } from 'react-native-paper';

interface PictureCopyrightProps {
  copyright: string;
}

export default function PictureCopyright({ copyright }: PictureCopyrightProps) {
  return <Text variant="labelMedium">{copyright}</Text>;
}
