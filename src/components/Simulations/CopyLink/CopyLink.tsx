import CopyLinkItem from '@/components/Simulations/CopyLink/CopyLinkItem';

interface Props {
  blue: string;
  red: string;
  links: any;
}

const { APP_URL } = process.env;

function CopyLink({ blue, red, links }: Props) {
  return (
    <div>
      {links.blue && (
        <CopyLinkItem
          title={`${blue} 참가 링크`}
          link={APP_URL + links.blue}
          color="#4A8ED4"
        />
      )}
      {links.red && (
        <CopyLinkItem
          title={`${red} 참가 링크`}
          link={APP_URL + links.red}
          color="#E74C3C"
        />
      )}
      <CopyLinkItem title="관전자 참가 링크" link={APP_URL + links.spectate} />
    </div>
  );
}

export default CopyLink;
