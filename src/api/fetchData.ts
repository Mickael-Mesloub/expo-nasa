import { QueryParams } from '@/src/@types/query.types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

// TODO: add JSDOC + handle errors better
export async function fetchData<T>(params?: QueryParams): Promise<T> {
  const searchParams = params
    ? new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)]),
      ).toString()
    : '';
  const url = `${API_BASE_URL}?api_key=${API_KEY}&${searchParams}`;

  const response = await fetch(url);

  if (!response.ok) throw new Error('Could not fetch resource');

  const data = (await response.json()) as T;

  return data;
}
