import React from 'react'
import styled from "styled-components";

const CheckSingMsgBox = styled.div`
    margin-top: .5em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    >div{
        width: 25%;
    }
`
const CheckSingMsgText = styled.p`
    color: rgb(192, 72, 72); font-size: 1.2em;
    width: 70%;
`
function CheckSignMsg({message}) {

    return (
        <CheckSingMsgBox>
            <div></div>
            <CheckSingMsgText>{message}</CheckSingMsgText>
        </CheckSingMsgBox>
    )
}

export default CheckSignMsg