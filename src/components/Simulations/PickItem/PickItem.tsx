import React from 'react';
import { BiUser } from 'react-icons/bi';
import { IoIosSwap } from 'react-icons/io';
import {
  Item,
  ControlBox,
  TextBox,
} from '@/components/Simulations/PickItem/PickItem.styled';
import { Status, TeamType } from '@/modules/simulataions/type';

interface Props {
  name: string;
  champion_id: number;
  order: number;
  team: TeamType;
  img_default: string;
  socket_id: string;
  participant: any;
  status: Status;
  handleSwap: (orders: { before: number; after: number }) => void;
}

function PickList({
  name,
  champion_id,
  order,
  team,
  img_default,
  socket_id,
  participant,
  status,
  handleSwap,
}: Props) {
  return (
    <Item
      champion_id={champion_id}
      img_default={img_default}
      team={team}
    >
      <ControlBox>
        {socket_id === participant.socket_id && (
          <span>
            <BiUser color="#fff" size="20" style={{ marginTop: '2px' }} />
          </span>
        )}

        {socket_id !== participant.socket_id &&
          team === participant.team &&
          status === Status.Swap && (
            <button
              type="button"
              onClick={() => handleSwap({ before: participant.order, after: order })}
            >
              <IoIosSwap color="#fff" size="28" />
            </button>
          )}
      </ControlBox>
      <TextBox>{name || ''}</TextBox>
    </Item>
  );
}

export default PickList;
