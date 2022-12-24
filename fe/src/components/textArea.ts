import styled from 'styled-components';

export default styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-radius: 4px;
  background: #ffffff;
  padding: 8px 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border: none;
  outline: none;
  font-size: 16px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease-in;

  &:placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
