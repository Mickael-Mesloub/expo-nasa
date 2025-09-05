import { QueryParams } from '@/src/@types/query.types';
import { fetchData } from '@/src/api/fetchData';
import { ExtractFnReturnType } from '@/src/api/tanstackQuery';
import { PictureDTO } from '@/src/models/picture/PictureDTO';
import { convertPictureDTOToEntity } from '@/src/models/picture/PictureEntity';
import { useQuery } from '@tanstack/react-query';

type GetDailyPictureFnParams = Required<Pick<QueryParams, 'date'>>;

type GetDailyPictureFnType = (
  date: GetDailyPictureFnParams,
) => Promise<PictureDTO>;

export const getDailyPicture: GetDailyPictureFnType = async (date) => {
  const picture: PictureDTO = await fetchData(date);

  return convertPictureDTOToEntity(picture);
};

type QueryFnType = typeof getDailyPicture;

export const useGetDailyPicture = (date: GetDailyPictureFnParams) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['dailyPicture'],
    queryFn: () => getDailyPicture(date),
  });
};
