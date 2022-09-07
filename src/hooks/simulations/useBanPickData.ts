import { useState } from 'react';
import {BanPick, TeamType} from '@/modules/simulataions/type';

interface BanPickData {
  type: BanPick;
  team: TeamType;
}

function useBanPickData({ type, team }: BanPickData) {
  const [data, setData] = useState(getBanPickState(type, team));

  const handleChangeData = (participants: Array<any> | null) => {
    const newData = [...data];

    if (participants) {
      participants.forEach(participant => {
        newData[participant.order] = {
          ...newData[participant.order],
          ...participant
        };
      });
    }

    setData(newData);
  };

  return [data, handleChangeData];
}

export default useBanPickData;

const getBanPickState = (type: BanPick, team: TeamType) =>
  Array.from({ length: 5 }, (_, i) => ({
    order: i,
    champion_id: 0,
    img_default: null,
    type,
    team,
  }));
