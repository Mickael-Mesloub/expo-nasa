import { Text } from 'react-native-paper';

interface PictureTitleProps {
  title: string;
}

export default function PictureTitle({ title }: PictureTitleProps) {
  return <Text variant="headlineLarge">{title}</Text>;
}
