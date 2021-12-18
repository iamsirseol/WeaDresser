import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 56px;
    position: relative;
    bottom: 0;
    background: #d6d6dd;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const FooterMiddle = styled.div`
    width: 100%;
    >ul{
        display: flex;
        width: 50%;
        margin: 10px auto;
        justify-content: space-between;
        text-align: center;
        >li{
            width: 33.33%;
            >a{
                letter-spacing: 1.8px;
                font-size: 1.3em;
                color: #000;
            }
        }
    }
`
export const FooterBottom = styled.div`
    width: 100%;
    text-align: center;
    >a{
        letter-spacing: 1.5px;
        font-size: 1.3em;
        color: #000;
        &:hover{
            color: #000;
        }
    }
`