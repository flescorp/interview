import {ErrorEle} from "@/components/Common/TextField";
import Image from "next/image";
import Invalid from "@/assets/icons/invalid-name.svg";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({message}: ErrorMessageProps) {
  return (
    <ErrorEle>
      <Image src={Invalid} width={16} height={16} alt="불일치 항목"/>
      <p className="errorStyle">{message}</p>
    </ErrorEle>
  );
}

export default ErrorMessage;