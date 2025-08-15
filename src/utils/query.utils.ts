import {
  PicturesQueryKeyEnum,
  QueryParams,
  QueryParamsKey,
  QueryParamsKeysArray,
} from '@/src/@types/query.types';

// TODO: add JSDoc + tests
export const paramsToArray = (
  params: QueryParams | undefined,
): QueryParamsKeysArray | undefined => {
  let paramsArray: QueryParamsKeysArray = [];

  if (!params) return undefined;

  Object.keys(params).forEach((k) => paramsArray.push(k as QueryParamsKey));

  return paramsArray;
};

// TODO: add JSDoc + tests
export const getQueryKey = (
  paramsArray: QueryParamsKeysArray | undefined,
  count?: string,
): PicturesQueryKeyEnum => {
  let queryKey: PicturesQueryKeyEnum;
  const isSingleRandomPictures =
    paramsArray?.includes('count') && count && count === '1';

  if (!paramsArray) {
    queryKey = PicturesQueryKeyEnum.TODAYS_PICTURE;
  } else if (paramsArray.includes('date') || isSingleRandomPictures) {
    queryKey = PicturesQueryKeyEnum.SINGLE_PICTURE;
  } else {
    queryKey = PicturesQueryKeyEnum.PICTURES;
  }

  return queryKey;
};
