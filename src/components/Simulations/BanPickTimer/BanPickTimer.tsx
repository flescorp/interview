import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BAN_PICK_TURN, MAX_TURN } from '@/modules/simulataions/constant';
import useTimer from '@/hooks/simulations/useTimer';
import { BanPick, Status } from '@/modules/simulataions/type';

interface BanPickTimerProps {
  inProgress: boolean;
  turn: number;
  status: Status;
  handleTimerEnd: () => void;
}

const TimerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 186px;
  height: 150px;
  border-radius: 12px;
  background-image: linear-gradient(126deg, #9929ea 0%, #5808fb 97%);
  text-align: center;

  h2 {
    margin-bottom: 14px;
    font-size: 30px;
  }

  p {
    font-size: 38px;
    font-weight: bold;
  }
`;

function BanPickTimer({
  inProgress,
  turn,
  status,
  handleTimerEnd,
}: BanPickTimerProps) {
  const { time, startTimer, stopTimer, resetTimer } = useTimer(MAX_TIME);

  useEffect(() => {
    if (time <= 0) {
      handleTimerEnd();
      resetTimer();
    }
  }, [time]);

  useEffect(() => {
    if (inProgress) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [inProgress]);

  useEffect(() => {
    if (turn >= MAX_TURN) {
      resetTimer(MAX_SWAP_TIME);
    } else {
      resetTimer();
    }
  }, [turn]);

  const renderText = () => {
    if (status === Status.Ready) return '준비';
    if (status === Status.Swap) return '스왑';
    if (status === Status.Complete) return '완료';
    if (!BAN_PICK_TURN[turn]) return '';

    const isBan = BAN_PICK_TURN[turn].type === BanPick.Ban;
    if (isBan) {
      return '금지';
    }
    return '선택';
  };

  return (
    <TimerLayout>
      <h2>{renderText()}</h2>
      <p>: {time}</p>
    </TimerLayout>
  );
}

export default BanPickTimer;

const MAX_TIME = 30;
const MAX_SWAP_TIME = 60;
