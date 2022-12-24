import { ReactNode } from 'react';
import { Container } from './styles';

interface IFormGroup {
  children: ReactNode;
  error?: string;
}

export function FormGroup({ children, error }: IFormGroup) {
  return (
    <Container>
      {children}

      <small>{error}</small>
    </Container>
  );
}

FormGroup.defaultProps = {
  error: 'Error',
};
