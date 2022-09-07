import { instance } from '@/utils/api';
import { TeamType } from '@/modules/simulataions/type';

interface SimulationProps {
  id: number;
  password_multi?: string;
  password_spectate?: string;
  team?: TeamType;
}

const fetchSimulation = async ({ id, ...props }: SimulationProps) => {
  const params = new URLSearchParams();

  Object.entries(props).forEach(([key, value]) => {
    params.set(key, value);
  });

  const { data } = await instance.get(
    `/simulations/${id}?${params.toString()}`
  );
  return data;
};

const fetchSimulations = async ({
  value,
  query,
  pageNumber,
}: {
  value: string;
  query: string;
  pageNumber: number;
}) => {
  const { data } = await instance.get(`/simulations`, {
    params: {
      page: pageNumber,
      [value]: query
    },
  });
  return data;
};

interface SimulationCreate {
  name: string;
  blue: string;
  red: string;
  mode: number;
  password_multi: string;
  is_spectate: number;
  password_spectate: string;
}

const fetchSimulationCreate = async (params: SimulationCreate) => {
  const { data } = await instance.post('/simulations', params);
  return data;
};


interface SimulationResult {
  id: number;
  password: string;
}

const fetchSimulationResult = async ({ id, password }: SimulationResult) => {
  const params = new URLSearchParams();
  params.set('password', password);
  const { data } = await instance.get(
    `/simulations/${id}/result?${params.toString()}`
  );
  return data;
};

export {
  fetchSimulation,
  fetchSimulations,
  fetchSimulationCreate,
  fetchSimulationResult,
};

export type {
  SimulationProps,
  SimulationCreate,
  SimulationResult,
};
