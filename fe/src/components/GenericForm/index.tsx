import { FormGroup } from '../FormGroup';
import Button from '../button';
import Input from '../input';
import TextArea from '../textArea';
import { Form, ButtonContainer } from './styles';

interface IGenericForm {
  buttonLabel: string;
}

export function GenericForm({ buttonLabel }: IGenericForm) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup>
        <TextArea placeholder="Descrição breve" />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
