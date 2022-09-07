import React from 'react';
import {
  TeamBlue,
  TeamRed,
  ResultListItem,
} from '@/components/Common/BanPickResult/ResultList/ResultList.styled';
import { BanPick, TeamType } from '@/modules/simulataions/type';
import { BanPickT } from '@/types/simulations';

interface ResultListProps {
  team: TeamType;
  name: string;
  banPicks: Array<BanPickT>;
}

const { RIOT_CDN_URL } = process.env;

function ResultList({ team, name, banPicks }: ResultListProps) {
  const Layout = team === TeamType.Blue ? TeamBlue : TeamRed;

  banPicks.sort((a, b) => {
    if (a.type === b.type) {
      return a.order - b.order;
    }

    return a.type - b.type;
  });

  return (
    <Layout>
      <span>■ {name}</span>
      <ul>
        {banPicks.map(({ id, champion, type }) => (
          <ResultListItem
            key={id}
            isBan={type === BanPick.Ban}
            championImg={
              champion ? `${RIOT_CDN_URL}/${champion.img_loading}` : ''
            }
          >
            <span>{champion?.name_kr}</span>
          </ResultListItem>
        ))}
      </ul>
    </Layout>
  );
}

export default ResultList;
