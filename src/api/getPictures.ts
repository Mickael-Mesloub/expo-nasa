import {
  PicturesQueryKeyEnum,
  QueryParams,
  QueryParamsKeysArray,
} from '@/src/@types/query.types';
import { fetchData } from '@/src/api/fetchData';
import { ExtractFnReturnType } from '@/src/api/tanstackQuery';
import { PictureDTO } from '@/src/models/PictureDTO';
import { getQueryKey, paramsToArray } from '@/src/utils/query.utils';
import { useQuery } from '@tanstack/react-query';

type GetPicturesFnType = (
  params?: QueryParams,
) => Promise<PictureDTO[] | undefined>;

export const getPictures: GetPicturesFnType = async (params) => {
  const pictures: PictureDTO | PictureDTO[] | undefined = await fetchData(
    params,
  );

  if (!pictures || (Array.isArray(pictures) && pictures.length < 1)) {
    throw new Error('Error with fetching picture data');
  }

  return !Array.isArray(pictures) ? [pictures] : pictures;
};

type QueryFnType = typeof getPictures;

type UseGetPicturesOptions = {
  params?: QueryParams;
};

export const useGetPictures = ({ params }: UseGetPicturesOptions) => {
  const paramsArray: QueryParamsKeysArray | undefined = paramsToArray(params);
  const queryKey: PicturesQueryKeyEnum = getQueryKey(
    paramsArray,
    params?.count,
  );

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [queryKey],
    queryFn: () => getPictures(params),
  });
};
