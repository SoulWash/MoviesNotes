import styled from "styled-components";
import backgroundImg from "../../assets/bg.png"

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Form = styled.form`
padding: 0 136px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: left;

text-align: left;

> h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({theme})=> theme.COLORS.VIOLET};
}

> h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;

}

> p {
    font-size: 14px;
    font-weight: 400;
    color: ${({theme})=> theme.COLORS.GRAY_100};
}

> a {
    margin-top: 42px;
    font-size: 16px;
    font-weight: 400;
    color: ${({theme})=> theme.COLORS.VIOLET};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5px;

    svg {
        width: 16px;
        height: 16px;
    }
}
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center/cover;
`;