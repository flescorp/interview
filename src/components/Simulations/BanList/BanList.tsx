import React from 'react';
import styled, { css } from 'styled-components';

interface BanListProps {
  bans: Array<any>;
}

const BanListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 14px;
`;

const BanListItem = styled.div<{ champion_id: number | null; img_default: string; }>`
  overflow: hidden;
  width: 54px;
  height: 54px;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.2);
  text-indent: -9999px;

  ${props =>
    !!props.champion_id &&
    css`
      background-image: url('${process.env.RIOT_CDN_URL}/${props.img_default}');
    `}

  ${props =>
    props.champion_id === null &&
    css`
      background-color: gray !important;
    `}
`;

function BanList({ bans }: BanListProps) {
  return (
    <BanListLayout>
      {bans.map(({ champion_id, img_default, order }: any) => (
        <BanListItem
          key={order}
          champion_id={champion_id}
          img_default={img_default}
        >
          {order}
        </BanListItem>
      ))}
    </BanListLayout>
  );
}

export default BanList;
