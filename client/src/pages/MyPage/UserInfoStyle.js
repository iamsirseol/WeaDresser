import styled from "styled-components";

export const UserInfoBackground = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`
export const UserInfoContainer = styled.div`
    position: absolute;
    top: 20em;
    left: 50%;
    transform: translateX(-50%);
    width: 70em;
`
export const UserInfoHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
export const UserInfoUpdate = styled.div`
    
`
export const UserInfoForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`
export const UserInfoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    >input{
        width: 70%;
        border: none;
        border-bottom: 2px solid #666;
        padding: 10px 5px;
        box-sizing: border-box;
        margin-top: 3px;
    }
`
export const UserInfoLabel = styled.label`
    padding-top: .6em;
    box-sizing: border-box;
    width: 25%;
    height: auto;
    text-align: right;
    font-size: 1.5em;
`

export const UserInfoNickname = styled.input.attrs(props => ({
    type: "text",
    id:"nickName"
}))`
`
export const UserInfoPwd = styled.input.attrs(props => ({
    type: "password",
    id:"curPassword"
}))`
`
export const UserInfoEditPwd = styled.input.attrs(props => ({
    type: "password",
    id:"changePassword"
}))`
`
export const UserInfoChkPassword = styled.input.attrs(props => ({
    type: "password",
    id:"checkPassword"
}))`
`
export const UserInfoSubmitBtn = styled.button.attrs(props => ({
    type: "submit",
}))`
    width: 200px;
    border: none; 
    padding: 10px 5px;
    box-sizing: border-box;
    margin-top: 20px;
    background: #e94b4b;
    color: #fff;
    font-size: 15px;
    &:hover{
        background: #be0000
    }
    &:disabled{
        background: #e94b4b;
        opacity: .8;
        cursor: auto;
    }
`
export const UserInfoSnsLogined = styled.p`
    
`