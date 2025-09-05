import { StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { PictureDetailsScreenParams } from '@/src/@types/navigation.types';
import { SafeAreaView } from 'react-native-safe-area-context';
import PictureDetailsView from '@/src/screens/PictureDetailsScreen/PictureDetailsView';
import { useGetDailyPicture } from '@/src/api/getDailyPicture';

export default function PictureDetailsScreen() {
  const { date } = useLocalSearchParams<PictureDetailsScreenParams>();
  const { data: pictureDetails } = useGetDailyPicture({
    date,
  });
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const options = {
      headerTitle: new Date(date).toLocaleDateString(),
    };

    navigation.setOptions(options);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PictureDetailsView pictureDetails={pictureDetails} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
