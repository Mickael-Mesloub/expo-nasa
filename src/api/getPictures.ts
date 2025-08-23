import { QueryParams } from '@/src/@types/query.types';
import { fetchData } from '@/src/api/fetchData';
import { ExtractFnReturnType } from '@/src/api/tanstackQuery';
import { PictureDTO } from '@/src/models/picture/PictureDTO';
import { convertPictureDTOToEntity } from '@/src/models/picture/PictureEntity';
import { useQuery } from '@tanstack/react-query';

type GetPicturesFnType = (params?: QueryParams) => Promise<PictureDTO[]>;

export const getPictures: GetPicturesFnType = async (params) => {
  const pictures: PictureDTO[] = await fetchData(params);

  return pictures.map((p) => convertPictureDTOToEntity(p)) ?? [];
};

type QueryFnType = typeof getPictures;

type UseGetPicturesOptions = {
  params?: QueryParams;
};

export const useGetPictures = ({ params }: UseGetPicturesOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['pictures'],
    queryFn: () => getPictures(params),
  });
};
