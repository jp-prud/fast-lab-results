import styled from 'styled-components';

interface IContainer {
  danger?: boolean;
}

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  background-filter: blur(7px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div<IContainer>`
  width: calc(100% - 32px);
  max-width: 460px;
  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  .cancel-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;
  }
`;
