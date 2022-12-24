import RouterDOM from 'react-dom';
import Button from '../button';
import { Overlay, Container, Footer } from './styles';

interface IModal {
  title: string;
  description: string;
  buttonLabel: string;
  danger?: boolean;
}

export function Modal({ title, description, buttonLabel, danger }: IModal) {
  return RouterDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{description}</p>

        <Footer>
          {danger && (
            <button type="button" className="cancel-button">
              Cancelar
            </button>
          )}

          <Button type="button" danger={danger}>
            {buttonLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root') as HTMLElement,
  );
}

Modal.defaultProps = {
  danger: false,
};
