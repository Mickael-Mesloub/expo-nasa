export type QueryParams = {
  date?: string;
  start_date?: string;
  end_date?: string;
  count?: number;
};

export type QueryParamsKey = Extract<
  keyof QueryParams,
  'date' | 'start_date' | 'end_date' | 'count'
>;

export type QueryParamsKeysArray = QueryParamsKey[];

export enum PicturesQueryKeyEnum {
  TODAYS_PICTURE = 'todaysPicture',
  SINGLE_PICTURE = 'singlePicture',
  PICTURES = 'pictures',
}
