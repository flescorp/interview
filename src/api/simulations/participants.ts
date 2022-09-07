import { instance } from '@/utils/api';

interface ParticipantCreateProps {
  id: number;
  socket_id: string;
  name: string;
  team: number | null;
}

const fetchParticipantCreate = async ({
  id,
  ...params
}: ParticipantCreateProps) => {
  const { data } = await instance.post(`/simulations/${id}/participants`, params);
  return data;
};

interface ParticipantUpdateProps {
  id: number;
  socket_id: string;
  is_ready: boolean;
}

const fetchParticipantUpdate = async ({ id, ...params }: ParticipantUpdateProps) => {
  const { data } = await instance.post(
    `/simulations/${id}/participants/update`,
    params
  );
  return data;
};

export {
  fetchParticipantCreate,
  fetchParticipantUpdate,
};
export type {
  ParticipantCreateProps,
  ParticipantUpdateProps,
};
