import React from 'react';
import _ from 'lodash';
import { useDrag, useDrop } from 'react-dnd';
import { BiUser } from 'react-icons/bi';
import { ControlBox, Item, TextBox } from '@/components/Simulations/PickItem/PickItem.styled';
import { Mode, Status, TeamType } from '@/modules/simulataions/type';

interface Props {
  name: string;
  champion_id: number;
  order: number;
  mode: Mode;
  img_default: string;
  team: TeamType;
  socket_id: string;
  participant: any;
  status: Status;
  handleSwap: (orders: { before: number; after: number }) => void;
}

function DnD({
  name,
  champion_id,
  order,
  mode,
  img_default,
  team,
  socket_id,
  participant,
  status,
  handleSwap,
}: Props) {
  const ITEM_TYPE = getItemType(team);
  const [{ isDragging, canDrag }, drag] = useDrag({
    type: ITEM_TYPE,
    item: { before: order, after: null },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag(),
    }),
    canDrag: () => {
      const isSwap = status === Status.Swap;

      if (mode === Mode.Multi1) {
        return isSwap && team === participant.team;
      }

      return isSwap;
    },
  });

  const [, drop] = useDrop({
    accept: ITEM_TYPE,
    hover: (item: any) => throttleHoverItem(item, order),
    collect: monitor => ({
      canDrop: monitor.canDrop(),
    }),
    canDrop: item => item.after !== null && item.before !== item.after,
    drop: item => {
      handleSwap({ before: item.before, after: item.after });
    },
  });

  return (
    <Item
      ref={node => drag(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: canDrag ? 'move' : 'pointer',
      }}
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
      </ControlBox>
      <TextBox>{name || ''}</TextBox>
    </Item>
  );
}

export default DnD;

const getItemType = (team: TeamType) => `PICK_ITEM_${team}`;

const throttleHoverItem = _.throttle((item, order) => {
  // eslint-disable-next-line no-param-reassign
  item.after = order;
}, 100);
