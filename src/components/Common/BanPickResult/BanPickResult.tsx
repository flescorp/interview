import React from 'react';
import {
  ResultLayout,
  ResultHeader,
  MatchName,
  TeamBox,
} from '@/components/Common/BanPickResult/BanPickResult.styled';
import ResultList from '@/components/Common/BanPickResult/ResultList';
import { TeamType } from '@/modules/simulataions/type';
import { SimulationT } from '@/types/simulations';

interface BanPickResultProps {
  data: SimulationT;
}

function BanPickResult({ data }: BanPickResultProps) {
  const { name, blue, red, ban_picks } = data;
  const blueBanPicks = ban_picks.filter(({ team }) => team === TeamType.Blue);
  const redBanPicks = ban_picks.filter(({ team }) => team === TeamType.Red);

  return (
    <ResultLayout>
      <ResultHeader>
        <h1>시뮬레이션 결과</h1>
      </ResultHeader>
      <MatchName>
        <h2>{name}</h2>
      </MatchName>
      <TeamBox>
        <ResultList team={TeamType.Blue} name={blue} banPicks={blueBanPicks} />
        <ResultList team={TeamType.Red} name={red} banPicks={redBanPicks} />
      </TeamBox>
    </ResultLayout>
  );
}

export default BanPickResult;
