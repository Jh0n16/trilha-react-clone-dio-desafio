import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    flex: 1;

    & form, & p {
        max-width: 300px;
    }
`

export const TitleCadastro = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
`

export const SubtitleCadastro = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
    
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 25px 0;
`

export const LoginText = styled.p`
    font-size: 12px;
    font-weight: 400;
    margin-top: 25px;
`
export const LinkLogin = styled.a`
    text-decoration: none;
    color: #00FF00;

    &:hover {
        cursor: pointer;
        color: #009900;
    }
`