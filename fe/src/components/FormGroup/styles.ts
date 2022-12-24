import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  small {
    color: ${({ theme }) => theme.colors.danger.main};
  }

  & + & {
    margin-top: 16px;
  }
`;
