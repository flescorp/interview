import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Main from '@/components/Simulations/Main';
import Result from '@/components/Simulations/Result';
import {
  SimulationContainer,
  SimulationLayout,
} from '@/components/Simulations/Simulation.styled';
import { Status } from '@/modules/simulataions/type';
import {
  fetchParticipantUpdate,
  ParticipantUpdateProps,
} from '@/api/simulations/participants';
import { fetchSimulationResult, SimulationResult } from '@/api/simulations';

interface SimulationProps {
  data: any;
  initialParticipants: Array<object>;
  socketId: string;
  pusher: any;
}

function Simulation({
  data,
  initialParticipants,
  socketId,
  pusher,
}: SimulationProps) {
  const router = useRouter();
  const [participant, setParticipant] = useState({});
  const [participants, setParticipants] = useState(
    initialParticipants.filter((u: any) => u.team !== null)
  );

  const [status, setStatus] = useState<Status>(Status.Ready);
  const [isReady, setIsReady] = useState(false); // 준비
  const [turn, setTurn] = useState(0); // 현재 밴/픽 순서
  const [banPickData, setBanPickData] = useState(null);
  const [swapData, setSwapData] = useState(null);
  const [result, setResult] = useState<object>({
    name: '',
    blue: '',
    red: '',
    ban_picks: [],
  });
  const [spectateParticipants, setSpectateParticipants] = useState(
    initialParticipants.filter((u: any) => u.team === null)
  );

  const participantUpdateMutate = useMutation(
    (params: ParticipantUpdateProps) => fetchParticipantUpdate(params)
  );

  const resultMutate = useMutation(({ ...params }: SimulationResult) =>
    fetchSimulationResult(params)
  );

  /*
   * 초기 소켓 연결 작업
   * */
  useEffect(() => {
    const participant = [participants, spectateParticipants]
      .flat()
      .find((u: any) => u.socket_id === socketId);
    setParticipant(participant || '');

    const channel = pusher.subscribe(`presence-simulations.${router.query.id}`);

    channel.bind('pusher:subscription_error', () => {
      alert('오류');
      router.push('/');
    });

    channel.bind('simulation.processed', (res: any) => {
      if (res.is_shutdown) {
        setStatus(Status.ShutDown);
        alert('방 삭제 됨');
        router.push('/');
      }
    });

    channel.bind('simulation.participant.processed', (data: any) => {
      const participants = data.participants.filter(
        (u: any) => u.team !== null
      );
      setParticipants(participants);

      const spectates = data.participants.filter((u: any) => u.team === null);
      setSpectateParticipants(spectates);

      if (data.is_start && status === Status.Ready) {
        setStatus(Status.InProgress);
      }
    });

    channel.bind('simulation.ended', (res: any) => {
      if (res.is_shutdown) {
        setStatus(Status.ShutDown);
        alert('종료 됨');
        router.push('/');
      }

      setStatus(Status.Swap);
    });

    channel.bind('ban-pick.processed', (res: any) => {
      setBanPickData({
        ...res['ban-pick'],
        turn: res.turn,
        img_default: res.champion?.img_default || '',
      });
    });

    channel.bind('ban-pick.updated', (data: any) => {
      setSwapData({
        ...data,
        team: data.before.team,
      });
    });

    return () => {
      channel.disconnect();
    };
  }, []);

  useEffect(() => {
    if (status === Status.Complete) {
      handleBanPickResult();
    }
  }, [status]);

  /*
   * 사용자가 준비 버튼 클릭시 이벤트
   * single => ?
   * multi(1vs1 or 5vs5) => ?
   * */
  const handleReady = () => {
    if (participantUpdateMutate.isLoading) return;
    setIsReady((ready: boolean) => !ready);

    participantUpdateMutate.mutate(
      {
        id: data.id,
        socket_id: socketId,
        is_ready: !isReady,
      },
      {
        onError: () => {
          alert('오류');
          setIsReady((ready: boolean) => !ready);
        },
      }
    );
  };

  const handleBanPickResult = () => {
    resultMutate.mutate(
      {
        id: data.id,
        password: router.query.password || '',
      },
      {
        onSuccess: ({ simulation }) => {
          setResult(simulation);
        },
      }
    );
  };

  return (
    <SimulationContainer>
      <SimulationLayout>
        <section>
          {status !== Status.Complete && (
            <Main
              data={data}
              participant={participant}
              participants={participants}
              status={status}
              isReady={isReady}
              turn={turn}
              banPickData={banPickData}
              swapData={swapData}
              setStatus={setStatus}
              setIsReady={setIsReady}
              setTurn={setTurn}
              onReady={handleReady}
            />
          )}

          {status === Status.Complete && <Result data={result} />}
        </section>
      </SimulationLayout>
    </SimulationContainer>
  );
}

export default Simulation;
