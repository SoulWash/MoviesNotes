import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus{
      outline: none;
      border-radius: 10px;
    }

  }

  > svg {
      margin-left: 16px;
    }
`;

