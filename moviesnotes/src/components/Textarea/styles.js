import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  padding: 19px 16px;
  resize: none;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;
