import styled, { css } from 'styled-components';
import IconBan from '@/assets/icons/ico-ban.svg';

const Team = styled.div`
  padding: 20px 18px;
  width: calc(100% / 2 - 40px);
  min-height: 200px;
  opacity: 0.8;
  border-radius: 12px;
  background-image: linear-gradient(
    133deg,
    ${({ theme }) => theme.colors.blue00} 1%,
    ${({ theme }) => theme.colors.blue0e} 99%
  );
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.palette.white};
  text-align: center;

  > span {
    display: block;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      margin: 6px 0;
      display: flex;
      align-items: baseline;
      flex-direction: column;
      justify-content: end;
      width: calc(100% / 5 - 5px);
      height: 165px;
      border: solid 1px #32ade6;
      box-sizing: border-box;
      overflow: hidden;

      span {
        display: block;
        width: 100%;
        padding: 12px 0;
        font-size: 10px;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

const TeamBlue = styled(Team)`
  background-color: #007aff;

  > span {
    color: #32ade6;
  }

  ul li {
    border: solid 1px #32ade6;
  }
`;

const TeamRed = styled(Team)`
  > span {
    color: #f94735;
  }

  ul li {
    border: solid 1px #f94735;
  }
`;

const ResultListItem = styled.li<{ championImg: string; isBan: boolean }>`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  ${props =>
    props.championImg &&
    css`
      background-image: url(${props.championImg});
    `};

  ${props =>
    props.isBan &&
    props.championImg &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: 66px;
        left: 50%;
        width: 30px;
        height: 30px;
        margin-left: -15px;
        background: url(${IconBan.src}) center center no-repeat;
        background-size: 30px 30px;
      }
    `}

  ${props =>
    props.isBan &&
    !props.championImg &&
    css`
      background-color: gray !important;
    `}
`;

export { TeamBlue, TeamRed, ResultListItem };
