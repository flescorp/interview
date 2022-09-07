import { instance } from '@/utils/api';

const fetchChampions = async () => {
  const { data } = await instance.get('/champions');
  return data;
};

export { fetchChampions };
