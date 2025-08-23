import { fetchData } from '@/src/api/fetchData';
import { ExtractFnReturnType } from '@/src/api/tanstackQuery';
import { PictureDTO } from '@/src/models/picture/PictureDTO';
import { convertPictureDTOToEntity } from '@/src/models/picture/PictureEntity';
import { useQuery } from '@tanstack/react-query';

type GetTodaysPictureFnType = () => Promise<PictureDTO>;

export const getTodaysPicture: GetTodaysPictureFnType = async () => {
  const picture: PictureDTO = await fetchData();

  return convertPictureDTOToEntity(picture);
};

type QueryFnType = typeof getTodaysPicture;

export const useGetTodaysPicture = () => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['todaysPicture'],
    queryFn: () => getTodaysPicture(),
  });
};
