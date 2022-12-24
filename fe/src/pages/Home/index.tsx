import { GenericList } from '../../components/GenericList';

import { InputSearchContainer, SearchInput } from './styles';

export function HomePage() {
  return (
    <>
      <InputSearchContainer>
        <SearchInput type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <GenericList />
    </>
  );
}
