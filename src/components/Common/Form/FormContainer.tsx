import styled from 'styled-components';

interface FormContainerProp {
  children: React.ReactNode;
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

function FormContainer({ children }: FormContainerProp) {
  return <FormWrapper>{children}</FormWrapper>;
}
export default FormContainer;
