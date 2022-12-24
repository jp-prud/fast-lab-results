import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';

import { Header } from '../Header';
import Routes from '../../Routes';

export function Layout() {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Routes />
      </Container>
    </BrowserRouter>
  );
}
