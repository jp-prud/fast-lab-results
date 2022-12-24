import { Link } from 'react-router-dom';
import { Container } from './styles';

import ArrowIcon from '../../assets/images/icons/arrow.svg';

interface IPageHeader {
  title: string;
}

export function PageHeader({ title }: IPageHeader) {
  return (
    <Container>
      <Link to="/">
        <img src={ArrowIcon} alt="Back" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}
