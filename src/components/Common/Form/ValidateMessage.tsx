import { NecessaryEle } from '@/components/Common/TextField';

interface ValidateMessageProps {
  message: string | JSX.Element;
}

function ValidateMessage({ message }: ValidateMessageProps) {
  return (
    <NecessaryEle>
      <p>{message}</p>
    </NecessaryEle>
  );
}

export default ValidateMessage;
