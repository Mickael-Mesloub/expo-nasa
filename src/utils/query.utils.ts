import {
  PicturesQueryKeyEnum,
  QueryParams,
  QueryParamsKey,
  QueryParamsKeysArray,
} from '@/src/@types/query.types';

/**
 * Converts a `QueryParams` object into an array of its keys.
 *
 * @param {QueryParams | undefined} params - Optional query parameters object.
 * @returns {QueryParamsKeysArray | undefined} An array of query parameter keys, or `undefined` if no params are provided.
 */
export const paramsToArray = (
  params: QueryParams | undefined,
): QueryParamsKeysArray | undefined => {
  let paramsArray: QueryParamsKeysArray = [];

  if (!params) return undefined;

  Object.keys(params).forEach((k) => paramsArray.push(k as QueryParamsKey));

  return paramsArray;
};

/**
 * Determines the appropriate query key for fetching pictures
 * based on the provided query parameters.
 *
 * @param {QueryParamsKeysArray | undefined} paramsArray - Array of query parameter keys, or `undefined` if no params were provided.
 * @param {number} count - Optional number representing the "count" parameter.
 * @returns {PicturesQueryKeyEnum} A `PicturesQueryKeyEnum` value indicating which type of picture query should be used.
 */
export const getQueryKey = (
  paramsArray: QueryParamsKeysArray | undefined,
  count?: number,
): PicturesQueryKeyEnum => {
  if (!paramsArray) {
    return PicturesQueryKeyEnum.TODAYS_PICTURE;
  } else if (
    paramsArray.includes('date') ||
    isRandomSinglePictureQuery(paramsArray, count)
  ) {
    return PicturesQueryKeyEnum.SINGLE_PICTURE;
  } else {
    return PicturesQueryKeyEnum.PICTURES;
  }
};

/**
 * Checks whether the query parameters represent a "random single picture" request.
 *
 * @param {QueryParamsKeysArray} paramsArray - Array of query parameter keys (must not be `undefined`).
 * @param {number | undefined} count - Optional number representing the "count" parameter.
 * @returns {boolean} `true` if the query requests exactly one random picture, otherwise `false`.
 */
const isRandomSinglePictureQuery = (
  paramsArray: QueryParamsKeysArray,
  count: number | undefined,
): boolean => {
  return paramsArray.includes('count') && count === 1;
};
