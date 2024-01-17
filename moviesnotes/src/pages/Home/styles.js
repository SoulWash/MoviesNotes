import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 123px 10px;

    > a {
      background-color: ${({ theme }) => theme.COLORS.VIOLET};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-weight: 400;
      font-size: 16px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.5px;

      height: 48px;
      border: 0;
      padding: 32px;
      margin-top: 16px;
      border-radius: 10px;

      &:disabled {
        opacity: 0.5;
      }

      > svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const Content = styled.div`
  padding: 0 123px;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar:hover {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.COLORS.VIOLET};
    border: 3px solid ${({ theme }) => theme.COLORS.VIOLET};
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.VIOLET};
    border: 3px solid ${({ theme }) => theme.COLORS.VIOLET};
  }
`;
