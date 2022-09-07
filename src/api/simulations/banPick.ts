import { instance } from '@/utils/api';

interface BanPickCreate {
  id: number;
}

const fetchBanPickCreate = async ({ id, ...params }: BanPickCreate) => {
  const { data } = await instance.post(`/simulations/${id}/ban-picks`, params);
  return data;
};

interface BanPickUpdate {
  id: number;
  team: number;
  order: Array<number>;
}

const fetchBanPickUpdate = async ({ id, ...params }: BanPickUpdate) => {
  const { data } = await instance.post(`/simulations/${id}/ban-picks/update`, params);
  return data;
};

export { fetchBanPickCreate, fetchBanPickUpdate };

export type { BanPickCreate, BanPickUpdate };
