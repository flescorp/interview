import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import InputSearch, {
  InputSearchVariant,
} from '@/components/Common/InputSearch';
import Button, {
  ButtonRadius,
  ButtonVariant,
} from '@/components/Common/Button';
import TeamHeader from '@/components/Simulations/TeamHeader';
import BanPickTimer from '@/components/Simulations/BanPickTimer';
import PositionMenu from '@/components/Simulations/PositionMenu';
import PickList from '@/components/Simulations/PickList';
import ChampionList from '@/components/Simulations/ChampionList';
import {
  ChampionSearch,
  MainBody,
  MainHeader,
  MatchName,
  ChampionPick,
  ButtonBox,
} from '@/components/Simulations/Main/Main.styled';
import CopyLink from '@/components/Simulations/CopyLink';
import useChampions, {
  ChampionPosition,
  ChampionsDataFilter,
} from '@/hooks/useChampions';
import useBanPickData from '@/hooks/simulations/useBanPickData';
import { BanPick, Mode, Status, TeamType } from '@/modules/simulataions/type';
import { BAN_PICK_TURN, MAX_TURN } from '@/modules/simulataions/constant';
import { BanPickCreate, fetchBanPickCreate } from '@/api/simulations/banPick';

function Main({
  data,
  participant,
  participants,
  status,
  isReady,
  turn,
  banPickData,
  swapData,
  setStatus,
  setTurn,
  onReady,
}: any) {
  const [blueBans, setBlueBans] = useBanPickData({
    type: BanPick.Ban,
    team: TeamType.Blue,
  });
  const [redBans, setRedBans] = useBanPickData({
    type: BanPick.Ban,
    team: TeamType.Red,
  });
  const [bluePicks, setBluePicks] = useBanPickData({
    type: BanPick.Pick,
    team: TeamType.Blue,
  });
  const [redPicks, setRedPicks] = useBanPickData({
    type: BanPick.Pick,
    team: TeamType.Red,
  });

  const [searchFilters, setSearchFilters] = useState<ChampionsDataFilter>({
    search: '',
    position: ChampionPosition.All,
  });
  const [champions, setFilters] = useChampions(searchFilters);
  const [selectedChampions, setSelectedChampion] = useState<Array<any>>([]);
  const [tempChampion, setTempChampion] = useState<any>(null);

  const [isInProgressTimer, setIsInProgressTimer] = useState(false);
  const banPickCreateMutate = useMutation((params: BanPickCreate) =>
    fetchBanPickCreate(params)
  );

  useEffect(() => {
    const { mode } = data;
    if (!participants) return;

    if (mode === Mode.Single) {
      const participant = participants[0];
      const newRedPicks = redPicks.map((obj: any, i: number) => ({
        ...obj,
        ...participant,
        team: TeamType.Red,
        order: i,
      }));
      setRedPicks(newRedPicks);

      const newBluePicks = bluePicks.map((obj: any, i: number) => ({
        ...obj,
        ...participant,
        team: TeamType.Blue,
        order: i,
      }));
      setBluePicks(newBluePicks);
    } else if (mode === Mode.Multi1) {
      const initialParticipant = {
        id: null,
        name: null,
        socket_id: null,
      };
      const redParticipant =
        participants.find(
          (participant: any) => participant.team === TeamType.Red
        ) || initialParticipant;
      const newRedPicks = redPicks.map((obj: any, i: number) => ({
        ...obj,
        ...redParticipant,
        order: i,
      }));
      setRedPicks(newRedPicks);

      const blueParticipant =
        participants.find(
          (participant: any) => participant.team === TeamType.Blue
        ) || initialParticipant;
      const newBluePicks = bluePicks.map((obj: any, i: number) => ({
        ...obj,
        ...blueParticipant,
        order: i,
      }));
      setBluePicks(newBluePicks);
    } else if (data.mode === Mode.Multi5) {
      const redTeam = participants.filter(
        (participant: any) => participant.team === TeamType.Red
      );
      setRedPicks(redTeam);
      const blueTeam = participants.filter(
        (participant: any) => participant.team === TeamType.Blue
      );
      setBluePicks(blueTeam);
    }
  }, [participants]);

  // ????????? ?????? ???????????? ?????? ?????? ??????
  useEffect(() => {
    setFilters(searchFilters);
  }, [searchFilters]);

  // ??? ?????? ??? ?????????
  useEffect(() => {
    if (status === Status.Ready || status === Status.Complete) return;

    if (turn >= MAX_TURN) {
      setStatus(Status.Swap);
    } else {
      setSelectedChampion(getSelectedChampions());
      setTempChampion(null);
      setIsInProgressTimer(true);
    }
  }, [turn]);

  useEffect(() => {
    if (status === Status.InProgress || status === Status.Swap) {
      setIsInProgressTimer(true);
    }
  }, [status]);

  useEffect(() => {
    if (!banPickData) return;
    setIsInProgressTimer(false);
    updateBanPickState({
      champion_id: banPickData.champion_id,
      img_default: banPickData.img_default,
    });

    setTurn((turn: number) => turn + 1);
    setIsInProgressTimer(true);
  }, [banPickData]);

  useEffect(() => {
    if (!swapData) return;

    if (swapData.team === TeamType.Blue) {
      setBluePicks(swapChampion(bluePicks));
    } else {
      setRedPicks(swapChampion(redPicks));
    }
  }, [swapData]);

  // ?????? ???/??? ?????? ??????
  const getBanPickAuth = () => {
    if (
      status !== Status.InProgress ||
      banPickCreateMutate.isLoading ||
      turn >= MAX_TURN
    )
      return false;
    if (data.mode === Mode.Single) return true;

    const { order, type, team } = BAN_PICK_TURN[turn];
    const teamCheck = participant.team === team;

    if (data.mode === Mode.Multi5) {
      if (type === BanPick.Ban) {
        return teamCheck && participant.order === 0;
      }

      return teamCheck && participant.order === order;
    }

    return teamCheck;
  };

  // ?????? ????????? ?????? ??? ???????????? ??? return
  const getSelectedChampions = (): Array<any> => {
    return [blueBans, redBans, bluePicks, redPicks]
      .flat()
      .filter(({ champion_id }: any) => champion_id)
      .map(({ champion_id }: any) => champion_id);
  };

  // ????????? ??????
  const handleChampionSearch = (query: string) => {
    setSearchFilters({
      ...searchFilters,
      search: query,
    });
  };

  // ?????? ?????? ???/??? ????????? ??????
  const updateBanPickState = ({ champion_id, img_default = '' }: any) => {
    const { team, order, type } = BAN_PICK_TURN[turn];
    const updateBanPick = (data: any) => {
      const newData = [...data];
      newData[order].champion_id = champion_id;
      newData[order].img_default = img_default;
      return newData;
    };

    if (type === BanPick.Ban && team === TeamType.Blue) {
      setBlueBans(updateBanPick(blueBans));
    } else if (type === BanPick.Ban && team === TeamType.Red) {
      setRedBans(updateBanPick(redBans));
    } else if (type === BanPick.Pick && team === TeamType.Blue) {
      setBluePicks(updateBanPick(bluePicks));
    } else if (type === BanPick.Pick && team === TeamType.Red) {
      setRedPicks(updateBanPick(redPicks));
    }
  };

  const handleBanPickCreate = () => {
    const { team, order, type } = BAN_PICK_TURN[turn];
    let params = {};

    if (type === BanPick.Ban && team === TeamType.Blue) {
      params = blueBans[order];
    } else if (type === BanPick.Ban && team === TeamType.Red) {
      params = redBans[order];
    } else if (type === BanPick.Pick && team === TeamType.Blue) {
      params = bluePicks[order];
    } else if (type === BanPick.Pick && team === TeamType.Red) {
      params = redPicks[order];
    }

    banPickCreateMutate.mutate({
      ...params,
      id: data.id,
      turn,
    });
  };

  /*
   * ????????? ????????? ?????????
   * ?????? ???/??? ???????????? ???????????? ???
   * */
  const handleChampionClick = ({ champion_id, img_default }: any) => {
    updateBanPickState({
      champion_id,
      img_default,
    });
    setTempChampion({
      champion_id,
      img_default,
    });
  };

  /*
   * ????????? ?????? ?????????
   * ?????? ???/??? ???????????? ??????
   * */
  const handleChampionSelect = () => {
    if (banPickCreateMutate.isLoading) return;
    if (!tempChampion) {
      alert('???????????? ????????? ?????????.');
      return;
    }
    handleBanPickCreate();
  };

  /*
   * ???/??? ????????? ?????? ?????? ????????? ????????? ??? ?????????
   * ??? => ?????? or tempChampion
   * ??? => ?????? ??? or tempChampion
   * */
  const handleTimerEnd = () => {
    setIsInProgressTimer(false);
    if (status === Status.Swap) {
      setStatus(Status.Complete);
      return;
    }
    if (!isBanPickAuth) return;

    // ?????? ??? ???????????? ?????????
    let champion_id;
    if (tempChampion) {
      champion_id = tempChampion.champion_id;
    } else {
      champion_id = null;
    }

    updateBanPickState({
      champion_id,
    });
    handleBanPickCreate();
  };

  // ?????? ?????? ?????? ?????? ??????
  const checkStatus = (value: Status): boolean => {
    return status === value;
  };

  const swapChampion = (picks: any) => {
    const newPicks = [...picks];
    const temp = { ...newPicks[swapData.after.order] };

    newPicks[swapData.after.order].champion_id =
      newPicks[swapData.before.order].champion_id;
    newPicks[swapData.after.order].img_default =
      newPicks[swapData.before.order].img_default;
    newPicks[swapData.before.order].img_default = temp.img_default;
    newPicks[swapData.before.order].champion_id = temp.champion_id;

    return newPicks;
  };

  const isBanPickAuth = getBanPickAuth();

  return (
    <>
      <MatchName>{data.name}</MatchName>
      <MainHeader>
        <TeamHeader
          teamName={data.blue}
          teamType={TeamType.Blue}
          bans={blueBans}
          turn={turn}
        />
        <BanPickTimer
          inProgress={isInProgressTimer}
          turn={turn}
          status={status}
          handleTimerEnd={handleTimerEnd}
        />
        <TeamHeader
          teamName={data.red}
          teamType={TeamType.Red}
          bans={redBans}
          turn={turn}
        />
      </MainHeader>

      <MainBody>
        <ChampionSearch>
          <InputSearch
            id="SimulationSearchBar"
            name="SimulationSearchBar"
            placeholder="????????? ??????"
            variant={InputSearchVariant.White}
            onSubmit={handleChampionSearch}
          />
        </ChampionSearch>

        <ChampionPick>
          <PickList
            picks={bluePicks}
            teamType={TeamType.Blue}
            data={data}
            participant={participant}
            status={status}
          />

          {status === Status.Ready && (
            <CopyLink blue={data.blue} red={data.red} links={data.links} />
          )}

          {status !== Status.Ready && (
            <ChampionList
              champions={champions}
              isMyTurn={isBanPickAuth}
              isInProgress={checkStatus(Status.InProgress)}
              selectedChampions={selectedChampions}
              onChampionClick={handleChampionClick}
            />
          )}
          <PickList
            picks={redPicks}
            teamType={TeamType.Red}
            data={data}
            participant={participant}
            status={status}
          />
        </ChampionPick>

        <ButtonBox>
          {checkStatus(Status.Ready) && participant.team !== null && (
            <Button
              type="button"
              width={194}
              radius={ButtonRadius.Square}
              variant={ButtonVariant.Default}
              label={isReady ? '?????? ??????' : '??????'}
              onClick={onReady}
            />
          )}

          {checkStatus(Status.InProgress) && participant.team !== null && (
            <Button
              type="button"
              width={194}
              radius={ButtonRadius.Square}
              variant={ButtonVariant.Default}
              label="????????? ??????"
              onClick={handleChampionSelect}
            />
          )}
        </ButtonBox>
      </MainBody>
    </>
  );
}

export default Main;
