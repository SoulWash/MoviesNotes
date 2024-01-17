import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme, $isactive})=> $isactive ? theme.COLORS.VIOLET : theme.COLORS.GRAY_100};
    border: none;
    font-size: 16px;
    font-weight: 400;
`;