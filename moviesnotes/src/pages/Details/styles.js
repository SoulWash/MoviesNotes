import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow: hidden;
    padding: 64px 123px;
  }

a {
    color: ${({ theme }) => theme.COLORS.VIOLET};

display: flex;
gap: 8px;
align-items: center;
margin-bottom: 30px;

> svg {
  width: 16px;
  height: 16px;
}
  }
`;

export const Content = styled.div`
  height: 100vh;
  overflow-y: auto;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
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

  > p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;



export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h1 {
    margin-right: 19px;
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.VIOLET};
    width: 20px;
    height: 20px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img,
  svg {
    width: 16px;
    height: 16px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.VIOLET};
  }
`;
