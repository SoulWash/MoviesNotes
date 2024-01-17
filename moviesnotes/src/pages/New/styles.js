import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    margin: 30px 118px;
    padding-right: 5px;
    grid-area: content;
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
  }

  > main a {
    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.VIOLET};

    font-size: 16px;
  }
`;

export const Form = styled.form`
  margin: 24px auto 0;

  > h1 {
  }

  > .inputs {
    margin: 30px auto;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .tags {
    background: ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    border-radius: 8px;
    padding: 16px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.VIOLET};
    }
  }
`;
