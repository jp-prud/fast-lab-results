import Logo from '../../assets/images/logo.png';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" width="201" />
    </Container>
  );
}
