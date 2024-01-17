import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme})=>theme.COLORS.VIOLET_100};

    border: none;
    border-radius:16px;

    padding: 32px;
    margin-bottom: 24px;
    
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 8px;

    > h1 {
        flex: 1;
        font-size: 24px;
        font-weight: 700;
        color: ${({theme})=>theme.COLORS.WHITE};
    }

    >  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: stretch;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    height: 45px;
  }
`;

export const Stars = styled.div`
display: flex;
gap: 8px;

> svg {
color: ${({theme})=>theme.COLORS.VIOLET}
}
`;

