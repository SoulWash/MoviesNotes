import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom: 1px solid ${({theme})=> theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 64px;

  padding: 0 123px;
`;

export const Profile = styled.div`
display: flex;
align-items: center;

> a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

> div {
    width: 134px;
    display: flex;
    flex-direction: column;
    text-align: right;

    margin-right: 9px;
    line-height: 24px;

    a strong {
        font-size: 14px;
        font-weight: 700;
        color: ${({theme})=> theme.COLORS.WHITE};;
    }

    a {
        font-size: 14px;
        font-weight: 400;
        color: ${({theme})=> theme.COLORS.GRAY_300};;
    }
}
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme})=> theme.COLORS.VIOLET};
    }
`;