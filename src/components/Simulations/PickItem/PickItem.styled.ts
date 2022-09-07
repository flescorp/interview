import styled, { css } from 'styled-components';
import { TeamType } from '@/modules/simulataions/type';

const Item = styled.div<{
  team: TeamType;
  champion_id: number;
  img_default: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 96px;
  height: 96px;
  margin: 0 0 15px;
  border-radius: 12px;
  background-color: #212529;
  background-size: cover;
  font-size: 32px;
  font-weight: bold;

  ${props =>
    props.team === TeamType.Blue &&
    css`
      background-image: linear-gradient(132deg, #46aef7 0%, #1dd5e6 96%);
    `};

  ${props =>
    props.team === TeamType.Red &&
    css`
      background-image: linear-gradient(132deg, #f94735 0%, #b6325f 96%);
    `};

  ${props =>
    props.champion_id &&
    css`
      background-image: url('${process.env.RIOT_CDN_URL}/${props.img_default}');
    `}
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 5px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 24px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  text-overflow: ellipsis;
  line-height: 24px;
  white-space: nowrap;
`;

export { Item, ControlBox, TextBox };
