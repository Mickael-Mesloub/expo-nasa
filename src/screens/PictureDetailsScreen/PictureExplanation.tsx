import { Text } from 'react-native-paper';

interface PictureExplanationProps {
  explanation: string;
}

export default function PictureExplanation({
  explanation,
}: PictureExplanationProps) {
  return <Text>{explanation}</Text>;
}
