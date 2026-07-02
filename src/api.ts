import { fetchData } from './data';

export async function getData() {
  const data = await fetchData();
  return data;
}
