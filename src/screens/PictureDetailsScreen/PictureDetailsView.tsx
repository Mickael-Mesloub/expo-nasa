import { Picture } from '@/src/models/picture/PictureEntity';
import PictureCopyright from '@/src/screens/PictureDetailsScreen/PictureCopyright';
import PictureExplanation from '@/src/screens/PictureDetailsScreen/PictureExplanation';
import PictureImage from '@/src/screens/PictureDetailsScreen/PictureImage';
import PictureTitle from '@/src/screens/PictureDetailsScreen/PictureTitle';
import { ScrollView } from 'react-native';

interface PictureDetailsViewProps {
  pictureDetails: Picture | undefined;
}

export default function PictureDetailsView({
  pictureDetails,
}: PictureDetailsViewProps) {
  return (
    <ScrollView>
      <PictureTitle title={pictureDetails?.title ?? ''} />
      <PictureImage url={pictureDetails?.hdurl ?? pictureDetails?.url ?? ''} />
      <PictureExplanation explanation={pictureDetails?.explanation ?? ''} />
      <PictureCopyright copyright={pictureDetails?.copyright ?? ''} />
    </ScrollView>
  );
}
