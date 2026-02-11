import { useGetPictures } from '@/src/api/getPictures';
import FullScreenLoader from '@/src/components/FullScreenLoader';
import { getDateNDaysBefore } from '@/src/utils/date.utils';
import { Text } from 'react-native-paper';
import { ScrollView } from 'react-native';

const today: Date = new Date();
const tenDaysBeforeToday: Date = getDateNDaysBefore(today, 10);
const todayFormatted: string = today.toISOString().split('T')[0];
const formattedDate: string = tenDaysBeforeToday.toISOString().split('T')[0];

export default function PictureGalleryScreen() {
  /**
   * TODO: fetch pictures between today and today - 10 days and define a threshold and fetch + display 10 next pictures...
   */

  const { data: pictures, isPending } = useGetPictures({
    params: { start_date: formattedDate, end_date: todayFormatted },
  });

  return (
    <ScrollView>
      <Text>PictureGalleryScreen</Text>
      {pictures?.map((p) => (
        <Text key={p.date}>{p?.title ?? ''}</Text>
      ))}
      <FullScreenLoader isLoading={isPending} />
    </ScrollView>
  );
}

