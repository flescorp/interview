import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Pusher from 'pusher-js';
import { useMutation } from 'react-query';
import dynamic from 'next/dynamic';
import TextField from '@/components/Common/TextField';
import {
  fetchParticipantCreate,
  ParticipantCreateProps,
} from '@/api/simulations/participants';
import { fetchSimulation, SimulationProps } from '@/api/simulations';

const EntranceModal = dynamic(() => import('@/components/Common/Modal/Alert'));
const Simulation = dynamic(() => import('@/components/Simulations'));

Pusher.logToConsole = process.env.NODE_ENV === 'local';

const { PUSHER_APP_KEY } = process.env;

function SimulationView() {
  const router = useRouter();
  const pusher = useRef<any>();

  const [name, setName] = useState('');
  const [simulation, setSimulation] = useState<any>(null);
  const [participants, setParticipants] = useState(null);

  const simulationMutate = useMutation((params: SimulationProps) =>
    fetchSimulation(params)
  );
  const participantCreateMutate = useMutation(
    (params: ParticipantCreateProps) => fetchParticipantCreate(params)
  );

  useEffect(() => {
    pusher.current = new Pusher(PUSHER_APP_KEY, {
      cluster: 'ap3',
      authEndpoint: `${process.env.APP_API_URL}/auth/pusher`,
    });

    return () => {
      pusher.current.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    const { id, ...props } = router.query;
    simulationMutate.mutate(
      {
        id: Number(id),
        ...props,
      },
      {
        onSuccess: data => {
          setSimulation({
            ...data.simulation,
            links: data.links,
          });
        },
        onError: () => {
          alert('비빌번호 오류');
          router.push('/');
        },
      }
    );
  }, [router.isReady]);

  const handleJoin = () => {
    if (
      !name ||
      !simulationMutate.isSuccess ||
      participantCreateMutate.isLoading
    )
      return;

    participantCreateMutate.mutate(
      {
        id: Number(router.query.id),
        socket_id: pusher.current.connection.socket_id,
        name,
        team: !router.query.team ? null : Number(router.query.team),
      },
      {
        onSuccess: ({ participants, success, message }) => {
          if (!success) {
            alert(message);
            router.push('/');
          }

          setParticipants(participants);
        },
        onError: () => {
          alert('오류');
        },
      }
    );
  };

  if (!pusher.current) return '';

  return (
    <>
      {!participants && (
        <EntranceModal
          title="시뮬레이션 입장"
          visible
          onClick={handleJoin}
          onClose={() => {
            router.push('/');
          }}
        >
          <TextField
            id="name"
            label="이름"
            type="name"
            name="name"
            placeholder="이름을 입력해 주세요"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </EntranceModal>
      )}

      {participants && (
        <Simulation
          data={simulation}
          initialParticipants={participants}
          socketId={pusher.current.connection.socket_id}
          pusher={pusher.current}
        />
      )}
    </>
  );
}

export default SimulationView;
