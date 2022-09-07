import { useRouter } from 'next/router';
import { ButtonBox } from '@/components/Simulations/Result/Result.styled';
import BanPickResult from '@/components/Common/BanPickResult/BanPickResult';
import Button, {
  ButtonRadius,
  ButtonVariant,
} from '@/components/Common/Button';

function Result({ data }: any) {
  const router = useRouter();

  return (
    <section>
      <BanPickResult data={data} />

      <ButtonBox>
        <Button
          type="button"
          label="목록"
          width={132}
          radius={ButtonRadius.Square}
          variant={ButtonVariant.Black}
          onClick={() => {
            router.push('/');
          }}
        />
      </ButtonBox>
    </section>
  );
}

export default Result;
