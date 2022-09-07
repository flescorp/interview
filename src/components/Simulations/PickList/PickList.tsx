import React, { memo, useMemo } from 'react';
import { useMutation } from 'react-query';
import PickItem from '@/components/Simulations/PickItem';
import DnD from '@/components/Simulations/PickItem/DnD';
import { Mode, Status, TeamType } from '@/modules/simulataions/type';
import { BanPickUpdate, fetchBanPickUpdate } from '@/api/simulations/banPick';

interface PickListProps {
  picks: Array<any>;
  status: Status;
  teamType: TeamType;
  data: any;
  participant: any;
}

function PickList({
  picks,
  status,
  teamType,
  data,
  participant,
}: PickListProps) {
  const swapMutate = useMutation((params: BanPickUpdate) =>
    fetchBanPickUpdate(params)
  );

  const handleSwap = ({ before, after }: { before: number; after: number }) => {
    if (swapMutate.isLoading) return;

    swapMutate.mutate(
      {
        id: data.id,
        team: teamType,
        order: [before, after],
      },
      {
        onSuccess: () => {
          alert('스왑이 완료되었습니다.');
        },
        onError: () => {
          alert('오류');
        },
      }
    );
  };

  const RenderItem = useMemo(
    () => (data.mode === Mode.Multi5 ? PickItem : DnD),
    [data.mode]
  );

  return (
    <div>
      {picks.map(
        ({
          name = '',
          champion_id,
          order,
          team,
          socket_id = '',
          img_default,
        }: any) => (
          <RenderItem
            key={order}
            name={name}
            champion_id={champion_id}
            order={order}
            team={team}
            mode={data.mode}
            img_default={img_default}
            socket_id={socket_id}
            participant={participant}
            status={status}
            handleSwap={handleSwap}
          />
        )
      )}
    </div>
  );
}

export default memo(PickList);
