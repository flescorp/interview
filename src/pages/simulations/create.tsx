import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import TextField from '@/components/Common/TextField/TextField';
import Button, { ButtonSize, ButtonVariant } from '@/components/Common/Button';
import RadioGroup from '@/components/Simulations/RadioGroup/RadioGroup';
import Title from '@/components/Common/Title/Title';
import Alert from '@/components/Common/Modal/Alert';
import CopyLink from '@/components/Simulations/CopyLink';
import Mask from '@/styles/Mask.styled';
import { Mode } from '@/modules/simulataions/type';
import { fetchSimulationCreate, SimulationCreate } from '@/api/simulations';

const Form = styled.form`
  margin: 0 auto;
  max-width: 608px;
  width: 100%;

  .inputContainer {
    margin: 34px 0;
  }
`;
const BtnPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 8px;

    &:first-child {
      border: 1px solid ${({ theme }) => theme.palette.primary};
      background-color: ${({ theme }) => theme.palette.white};
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

function Create() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    blue: '',
    red: '',
    mode: Mode.Multi1,
    password_multi: '',
    is_spectate: 1,
    password_spectate: '',
  });
  const [data, setData] = useState<any>(null);
  const {
    mutate: createMutate,
    isLoading,
    isSuccess,
  } = useMutation((params: SimulationCreate) => fetchSimulationCreate(params));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const newFormData = { ...formData };
    newFormData.mode = Number(newFormData.mode);
    newFormData.is_spectate = Number(newFormData.is_spectate);

    createMutate(newFormData, {
      onSuccess: data => {
        const { message, simulation, links } = data;
        alert(message);

        if (simulation.mode === Mode.Single) {
          router.push(links.blue);
        } else {
          setData({
            id: simulation.id,
            blue: simulation.blue,
            red: simulation.red,
            links,
          });
        }
      },
      onError: () => {
        alert('???????????? ????????? ?????????.');
      },
    });
  };

  return (
    <div id="simulationCreate">
      <Title title="??????????????? ??????" />
      <Mask>
        <Form onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="??????"
            name="name"
            type="text"
            placeholder="?????? ?????? ??????????????????"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            id="blue"
            label="?????????"
            name="blue"
            type="text"
            placeholder="??? ?????? ??????????????????"
            value={formData.blue}
            onChange={handleChange}
          />

          <TextField
            id="red"
            label="?????????"
            name="red"
            type="text"
            placeholder="??? ?????? ??????????????????"
            value={formData.red}
            onChange={handleChange}
          />

          <RadioGroup
            name="mode"
            label="????????????"
            options={MODE_OPTIONS}
            checkedValue={formData.mode}
            onChange={handleChange}
          />

          {Number(formData.mode) !== Mode.Single && (
            <TextField
              id="password_multi"
              label="??? ????????????"
              type="password"
              name="password_multi"
              placeholder="??????????????? ??????????????????"
              value={formData.password_multi}
              onChange={handleChange}
            />
          )}

          <RadioGroup
            label="????????? ????????????"
            options={IS_SPECTATE_OPTIONS}
            name="is_spectate"
            checkedValue={formData.is_spectate}
            onChange={handleChange}
          />

          {Number(formData.is_spectate) === 0 && (
            <TextField
              id="password_spectate"
              label="????????? ????????????"
              type="password"
              name="password_spectate"
              placeholder="??????????????? ??????????????????"
              value={formData.password_spectate}
              onChange={handleChange}
            />
          )}

          <BtnPosition>
            <Button
              type="button"
              label="??????"
              size={ButtonSize.Big}
              variant={ButtonVariant.White}
            />
            <Button
              type="submit"
              label="??????"
              size={ButtonSize.Big}
              variant={ButtonVariant.Default}
            />
          </BtnPosition>
        </Form>
      </Mask>

      {data && isSuccess && (
        <Alert
          visible={!!data}
          title="??????????????? ??????"
          width={550}
          onClick={() => {
            router.push('/');
          }}
        >
          <CopyLink blue={data?.blue} red={data?.red} links={data?.links} />
        </Alert>
      )}
    </div>
  );
}

export default Create;

const MODE_OPTIONS = [
  { text: '?????? 1vs1', value: Mode.Multi1 },
  { text: '?????? 5vs5', value: Mode.Multi5 },
];

const IS_SPECTATE_OPTIONS = [
  { text: '??????', value: 1 },
  { text: '?????????', value: 0 },
];
