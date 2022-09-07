import { NecessaryEle } from '@/components/Common/TextField';

interface HintMessageProps {
  message: string | JSX.Element;
}

function HintMessage({ message }: HintMessageProps) {
  return <NecessaryEle>{message}</NecessaryEle>;
}

export default HintMessage;
