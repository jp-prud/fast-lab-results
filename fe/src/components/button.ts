import styled, { css } from 'styled-components';

interface IButton {
  danger?: boolean;
  outline?: boolean;
}

export default styled.button<IButton>`
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 16px;
  padding 0 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
    pointer-events: none;
  }

  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.colors.primary.main};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      background: transparent;

      &:hover,
      &:active {
        color: #fff;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.primary.main};
      }

      &:active {
        background: ${({ theme }) => theme.colors.primary.dark};
      }
    `}

  ${({ danger }) =>
    danger &&
    css`
      background: ${({ theme }) => theme.colors.danger.main};

      &:hover {
        background: ${({ theme }) => theme.colors.danger.light};
      }

      &:active {
        background: ${({ theme }) => theme.colors.danger.dark};
      }
    `}
`;
